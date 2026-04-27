import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLang, translations, MEDIA } from "./i18n";

export default function Navbar({ onCtaClick }) {
    const { t, lang, setLang } = useLang();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            className={`fixed top-4 left-0 right-0 z-50 px-6 lg:px-16 py-3 transition-all duration-300 ${scrolled ? "top-2" : ""}`}
            data-testid="navbar"
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => go("home")}
                    className="flex items-center gap-3"
                    data-testid="navbar-logo"
                >
                    <img
                        src={MEDIA.logoBlue}
                        alt="Yawtik CC"
                        className="h-12 w-12 object-contain"
                    />
                    <span className="hidden sm:block text-white font-heading italic text-xl tracking-tight">
                        Yawtik<span className="text-primary">.</span>
                    </span>
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex liquid-glass rounded-none px-2 py-1 items-center">
                    {t.nav.links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => go(l.id)}
                            className="px-3 py-2 text-xs font-medium text-foreground/90 font-body uppercase tracking-widest hover:text-primary transition relative"
                            data-testid={`navbar-link-${l.id}`}
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                {/* Right cluster: language + CTA */}
                <div className="flex items-center gap-2">
                    {/* Language toggle */}
                    <div className="liquid-glass rounded-none px-1 py-1 hidden sm:flex items-center gap-1" data-testid="lang-toggle">
                        {Object.keys(translations).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition ${
                                    lang === l ? "bg-primary text-black" : "text-white/60 hover:text-white"
                                }`}
                                data-testid={`lang-${l}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={onCtaClick}
                        className="hidden md:inline-flex items-center gap-2 bg-primary text-black rounded-none px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition"
                        data-testid="navbar-cta"
                    >
                        {t.nav.cta}
                        <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                        className="md:hidden p-2 liquid-glass rounded-none"
                        onClick={() => setOpen(!open)}
                        data-testid="navbar-mobile-toggle"
                        aria-label="Menu"
                    >
                        {open ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden mt-3 liquid-glass rounded-none p-4" data-testid="navbar-mobile-menu">
                    <div className="flex flex-col">
                        {t.nav.links.map((l) => (
                            <button
                                key={l.id}
                                onClick={() => go(l.id)}
                                className="text-left px-3 py-3 text-sm font-medium text-white font-body uppercase tracking-widest border-b border-white/5"
                                data-testid={`navbar-mobile-link-${l.id}`}
                            >
                                {l.label}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setOpen(false);
                                onCtaClick();
                            }}
                            className="mt-3 inline-flex items-center justify-between bg-primary text-black rounded-none px-4 py-3 text-sm font-bold uppercase tracking-widest"
                            data-testid="navbar-mobile-cta"
                        >
                            {t.nav.cta}
                            <ArrowUpRight className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-2 mt-3">
                            {Object.keys(translations).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-3 py-2 text-xs font-bold uppercase tracking-widest flex-1 ${
                                        lang === l ? "bg-primary text-black" : "bg-white/5 text-white/60"
                                    }`}
                                    data-testid={`mobile-lang-${l}`}
                                >
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
