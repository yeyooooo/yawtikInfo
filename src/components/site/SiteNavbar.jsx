import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BRAND, SECTORS } from "@/data/siteConfig";

function NavButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="px-3 py-2 text-xs font-body font-medium uppercase tracking-widest text-foreground/90 transition hover:text-primary"
        >
            {children}
        </button>
    );
}

export default function SiteNavbar({ sector, onCtaClick, queueHomeScroll }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const homePage = location.pathname === "/";

    const links = useMemo(() => {
        if (homePage) {
            return [
                { label: "Empresa", type: "scroll", id: "home" },
                { label: "Sectores", type: "scroll", id: "sectors" },
                { label: "Modelo", type: "scroll", id: "methodology" },
                { label: "Contacto", type: "contact" },
            ];
        }

        return [
            { label: "Sectores", type: "route", to: "/", targetId: "sectors" },
            { label: "Modelo", type: "scroll", id: "methodology" },
            { label: "Ejecucion", type: "scroll", id: "expertise" },
            { label: "Inversion", type: "scroll", id: "pricing" },
            { label: "Contacto", type: "contact" },
        ];
    }, [homePage]);

    const goScroll = (id) => {
        setOpen(false);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const goRoute = (to, targetId) => {
        setOpen(false);
        if (targetId) queueHomeScroll(targetId);
        navigate(to);
    };

    const handleLink = (link) => {
        if (link.type === "scroll") goScroll(link.id);
        if (link.type === "route") goRoute(link.to, link.targetId);
        if (link.type === "contact") {
            setOpen(false);
            onCtaClick();
        }
    };

    return (
        <header
            className={`fixed left-0 right-0 top-4 z-50 px-6 py-3 transition-all duration-300 lg:px-16 ${scrolled ? "top-2" : ""}`}
            data-testid="navbar"
        >
            <div className="flex items-center justify-between">
                <button
                    onClick={() => (homePage ? goScroll("home") : goRoute("/", "sectors"))}
                    className="flex items-center gap-3"
                    data-testid="navbar-logo"
                >
                    <img src={BRAND.logoBlue} alt="Yawtik CC" className="h-12 w-12 object-contain" />
                    <span className="hidden text-xl font-heading italic tracking-tight text-white sm:block">
                        Yawtik<span className="text-primary">.</span>
                    </span>
                </button>

                <div className="hidden items-center gap-3 md:flex">
                    <nav className="liquid-glass flex items-center rounded-none px-2 py-1">
                        {links.map((link) => (
                            <NavButton key={link.label} onClick={() => handleLink(link)}>
                                {link.label}
                            </NavButton>
                        ))}
                    </nav>

                    {sector ? (
                        <div className="liquid-glass hidden items-center gap-2 rounded-none px-3 py-2 xl:flex">
                            <span className="text-[10px] font-body font-bold uppercase tracking-[0.24em] text-white/48">
                                Industria
                            </span>
                            <span className="text-xs font-body font-semibold uppercase tracking-widest text-white">
                                {sector.shortName}
                            </span>
                        </div>
                    ) : null}

                    <button
                        onClick={onCtaClick}
                        className="inline-flex items-center gap-2 rounded-none bg-primary px-4 py-2 text-xs font-body font-bold uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90"
                        data-testid="navbar-cta"
                    >
                        {sector ? sector.hero.cta : "Agendar cotizacion"}
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                <button
                    className="liquid-glass rounded-none p-2 md:hidden"
                    onClick={() => setOpen((value) => !value)}
                    data-testid="navbar-mobile-toggle"
                    aria-label="Menu"
                >
                    {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
                </button>
            </div>

            {open ? (
                <div className="liquid-glass mt-3 rounded-none p-4 md:hidden" data-testid="navbar-mobile-menu">
                    <div className="flex flex-col">
                        {links.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleLink(link)}
                                className="border-b border-white/5 px-3 py-3 text-left text-sm font-body font-medium uppercase tracking-widest text-white"
                            >
                                {link.label}
                            </button>
                        ))}

                        <button
                            onClick={() => {
                                setOpen(false);
                                onCtaClick();
                            }}
                            className="mt-3 inline-flex items-center justify-between rounded-none bg-primary px-4 py-3 text-sm font-body font-bold uppercase tracking-widest text-primary-foreground"
                            data-testid="navbar-mobile-cta"
                        >
                            {sector ? sector.hero.cta : "Agendar cotizacion"}
                            <ArrowUpRight className="h-4 w-4" />
                        </button>

                        <div className="mt-4 border-t border-white/10 pt-4">
                            <div className="mb-3 text-[10px] font-body font-bold uppercase tracking-[0.24em] text-white/48">
                                Selecciona tu industria
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {SECTORS.map((item) => (
                                    <button
                                        key={item.slug}
                                        onClick={() => goRoute(`/${item.slug}`)}
                                        className={`rounded-none border px-3 py-3 text-left text-xs font-body font-bold uppercase tracking-widest transition ${
                                            sector?.slug === item.slug
                                                ? "border-primary bg-primary/18 text-white"
                                                : "border-white/10 bg-white/[0.03] text-white/72"
                                        }`}
                                    >
                                        {item.shortName}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </header>
    );
}
