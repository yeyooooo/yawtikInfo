import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Clapperboard,
    Factory,
    Gem,
    Leaf,
    Megaphone,
    Mic2,
    UtensilsCrossed,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurText from "@/components/yawtik/BlurText";
import HlsVideo from "@/components/yawtik/HlsVideo";
import SectionDivider from "@/components/yawtik/SectionDivider";
import SiteFooterCta from "@/components/site/SiteFooterCta";
import { HOME_PAGE, SECTORS } from "@/data/siteConfig";
import { SITE_THEMES } from "@/data/siteThemes";

const SECTOR_ICONS = {
    agro: Leaf,
    gastro: UtensilsCrossed,
    premium: Gem,
    figure: Mic2,
};

const MODEL_ICONS = [Clapperboard, Factory, Megaphone];

export default function SiteHomePage({ onOpenContact }) {
    const navigate = useNavigate();

    const goToSector = (slug) => {
        navigate(`/${slug}`);
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    const goToSectors = () => {
        const element = document.getElementById("sectors");
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <section
                id="home"
                className="relative overflow-hidden grain"
                style={{
                    minHeight: "100svh",
                    background:
                        "radial-gradient(circle at 18% 18%, rgba(var(--theme-primary-rgb), 0.18) 0%, rgba(var(--page-shadow-rgb), 0.28) 28%, rgba(var(--page-base-rgb), 0.92) 66%, rgb(var(--page-base-rgb)) 100%)",
                }}
            >
                <HlsVideo
                    src={HOME_PAGE.media.hero.src}
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                    style={{ filter: "saturate(0.95) contrast(1.03) brightness(0.78)" }}
                    testId="home-hero-video"
                />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(var(--page-shadow-rgb), 0.84) 0%, rgba(var(--page-shadow-rgb), 0.58) 36%, rgba(var(--page-shadow-rgb), 0.34) 62%, rgba(var(--page-shadow-rgb), 0.76) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.10) 24%, rgba(var(--page-base-rgb), 0.22) 66%, rgba(var(--page-base-rgb), 0.94) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(circle at top right, rgba(var(--theme-accent-rgb), 0.14) 0%, transparent 28%)",
                    }}
                />
                <div className="absolute left-[-10%] top-[18%] z-0 h-64 w-64 rounded-full bg-primary/18 blur-[110px]" />
                <div
                    className="absolute left-0 right-0 top-0 z-0 pointer-events-none"
                    style={{ height: 180, background: "linear-gradient(to bottom, rgba(0,0,0,0.82), transparent)" }}
                />
                <div
                    className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                    style={{
                        height: 260,
                        background:
                            "linear-gradient(to top, rgba(var(--page-base-rgb), 0.98) 0%, rgba(var(--page-base-rgb), 0.82) 32%, rgba(var(--page-base-rgb), 0.22) 76%, transparent 100%)",
                    }}
                />

                <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 pb-36 pt-36 lg:px-10">
                    <div className="grid w-full gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                        <div className="max-w-4xl text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-none px-2 py-1"
                            >
                                <span className="bg-primary px-3 py-1 text-[10px] font-body font-bold uppercase tracking-widest text-primary-foreground md:text-xs">
                                    Yawtik
                                </span>
                                <span className="pr-2 text-xs font-body font-light text-white/80 md:text-sm">
                                    {HOME_PAGE.hero.badge}
                                </span>
                            </motion.div>

                            <BlurText
                                text={HOME_PAGE.hero.title}
                                delay={100}
                                className="mx-auto max-w-4xl text-5xl font-heading italic leading-[0.88] tracking-[-1.5px] text-foreground md:text-7xl lg:mx-0 lg:text-[5.15rem]"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mx-auto mt-6 max-w-2xl text-sm font-body font-light leading-relaxed text-white/78 md:text-base lg:mx-0"
                            >
                                {HOME_PAGE.hero.sub}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                                className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                            >
                                <button
                                    onClick={goToSectors}
                                    className="liquid-glass-strong inline-flex items-center gap-2 rounded-none px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-primary-foreground"
                                >
                                    {HOME_PAGE.hero.ctaPrimary}
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={onOpenContact}
                                    className="rounded-none border border-white/10 bg-white/8 px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-white transition hover:bg-white/12"
                                >
                                    {HOME_PAGE.hero.ctaSecondary}
                                </button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.05 }}
                            className="justify-self-stretch lg:justify-self-end"
                        >
                            <div className="liquid-glass ml-auto max-w-md rounded-none border border-white/8 p-6 md:p-8">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-primary/90">
                                            Estructura
                                        </div>
                                        <div className="mt-2 text-sm font-body font-semibold uppercase tracking-wider text-white">
                                            4 sectores · 3 direcciones
                                        </div>
                                    </div>
                                    <div className="flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground">
                                        <Factory className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/45">
                                            Seleccion
                                        </div>
                                        <div className="mt-2 text-3xl font-heading italic text-white">
                                            4
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/45">
                                            Objetivo
                                        </div>
                                        <div className="mt-2 text-sm font-body leading-relaxed text-white/72">
                                            Que tu contenido respalde valor, abra conversaciones fuertes y te ayude a vender mejor.
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-7 border-t border-white/10 pt-5 text-[11px] font-body uppercase tracking-[0.24em] text-white/48">
                                    Cada industria entra a una ruta distinta sin salir del mismo sitio.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section id="sectors" className="relative px-6 py-24 md:py-32 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-left">
                        <div className="liquid-glass inline-block rounded-none px-3.5 py-1">
                            <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                                {HOME_PAGE.sectors.badge}
                            </span>
                        </div>
                        <h2 className="mt-5 max-w-4xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
                            {HOME_PAGE.sectors.title}
                        </h2>
                        <p className="mt-5 max-w-3xl text-sm font-body font-light text-white/62 md:text-base">
                            {HOME_PAGE.sectors.sub}
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {SECTORS.map((sector, index) => {
                            const Icon = SECTOR_ICONS[sector.theme] || Gem;
                            const theme = SITE_THEMES[sector.theme] || SITE_THEMES.home;

                            return (
                                <motion.button
                                    key={sector.slug}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.55, delay: index * 0.06 }}
                                    onClick={() => goToSector(sector.slug)}
                                    className="group liquid-glass relative overflow-hidden rounded-none border border-white/8 p-0 text-left"
                                    data-testid={`sector-card-${sector.slug}`}
                                >
                                    <div className="relative h-[430px]">
                                        <img
                                            src={sector.card.image}
                                            alt={sector.card.title}
                                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40" />
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 24%, rgba(${theme.pageBaseRgb}, 0.82) 88%, rgba(${theme.pageBaseRgb}, 0.96) 100%)`,
                                            }}
                                        />
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `radial-gradient(circle at top right, rgba(${theme.themeAccentRgb}, 0.18) 0%, transparent 30%)`,
                                            }}
                                        />

                                        <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/48">
                                                    {sector.shortName}
                                                </div>
                                                <div
                                                    className="flex h-10 w-10 items-center justify-center"
                                                    style={{
                                                        background: `rgba(${theme.themePrimaryRgb}, 0.92)`,
                                                        color:
                                                            theme.primaryForeground === "0 0% 100%"
                                                                ? "#ffffff"
                                                                : "#11170e",
                                                    }}
                                                >
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-heading italic leading-none tracking-tight text-white">
                                                {sector.card.title}
                                            </h3>
                                            <p className="mt-3 text-sm font-body font-light leading-relaxed text-white/72">
                                                {sector.card.problem}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {sector.niches.slice(0, 3).map((niche) => (
                                                    <span
                                                        key={niche}
                                                        className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-body font-bold uppercase tracking-[0.22em] text-white/68"
                                                    >
                                                        {niche}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="mt-6 inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest text-primary">
                                                {sector.card.cta}
                                                <ArrowUpRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section id="methodology" className="relative overflow-hidden py-24 md:py-32">
                <HlsVideo
                    src={HOME_PAGE.media.ambient.src}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    style={{ filter: "saturate(0.82) contrast(1.05) brightness(0.7)" }}
                    testId="home-ambient-video"
                />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.62)_26%,rgba(0,0,0,0.72)_72%,rgba(0,0,0,0.92)_100%)]" />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(circle at 20% 20%, rgba(var(--theme-primary-rgb), 0.14), transparent 30%)",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            className="liquid-glass inline-block rounded-none px-3.5 py-1"
                        >
                            <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                                {HOME_PAGE.model.badge}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.75 }}
                            className="mt-6 max-w-3xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
                        >
                            {HOME_PAGE.model.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 max-w-2xl text-sm font-body font-light text-white/70 md:text-base"
                        >
                            {HOME_PAGE.model.sub}
                        </motion.p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {HOME_PAGE.model.items.map((item, index) => {
                            const Icon = MODEL_ICONS[index] || Factory;

                            return (
                                <motion.div
                                    key={item.k}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    className="liquid-glass rounded-none border border-white/8 p-6 md:p-7"
                                >
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <div className="text-[10px] font-body font-bold uppercase tracking-[0.3em] text-primary/90">
                                            {item.k}
                                        </div>
                                        <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-heading italic leading-tight text-white">
                                        {item.t}
                                    </h3>
                                    <p className="mt-3 text-sm font-body font-light leading-relaxed text-white/65">
                                        {item.d}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <SectionDivider />

            <SiteFooterCta
                content={{ ...HOME_PAGE.cta, footerCopy: HOME_PAGE.footer.copy }}
                media={HOME_PAGE.media}
                onPrimaryClick={onOpenContact}
                onSecondaryClick={goToSectors}
            />
        </>
    );
}
