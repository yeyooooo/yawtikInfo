import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Check, Clapperboard, Factory, Leaf, Megaphone, Mic2, SlidersHorizontal, Sparkles, UtensilsCrossed, X } from "lucide-react";
import BlurText from "@/components/yawtik/BlurText";
import HlsVideo from "@/components/yawtik/HlsVideo";
import SectionDivider from "@/components/yawtik/SectionDivider";
import SiteFooterCta from "@/components/site/SiteFooterCta";
import { HOME_PAGE } from "@/data/siteConfig";

const HERO_ICONS = {
    agro: Leaf,
    gastro: UtensilsCrossed,
    premium: Building2,
    figure: Mic2,
};

const GRID_ICONS = [Clapperboard, Factory, Sparkles, Megaphone];

function MediaRow({ row, reverse, index, onCtaClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
        >
            <div>
                <div className="mb-4 text-[10px] font-body font-bold uppercase tracking-[0.3em] text-primary/90">
                    0{index + 1}
                </div>
                <h3 className="max-w-lg text-3xl font-heading italic leading-[0.95] tracking-tight text-white md:text-4xl lg:text-5xl">
                    {row.title}
                </h3>
                <p className="mt-6 max-w-md text-sm font-body font-light leading-relaxed text-white/64 md:text-base">
                    {row.body}
                </p>
                <button
                    onClick={onCtaClick}
                    className="liquid-glass-strong mt-8 inline-flex items-center gap-2 rounded-none px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-primary-foreground"
                >
                    {row.cta}
                    <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>

            <div className="liquid-glass relative h-[340px] overflow-hidden rounded-none border border-white/8 md:h-[460px]">
                <img src={row.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(135deg, rgba(var(--theme-primary-rgb), 0.18), transparent 42%, rgba(var(--theme-accent-rgb), 0.08) 100%)",
                    }}
                />
                <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[rgb(var(--page-base-rgb))] via-[rgb(var(--page-base-rgb))]/55 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-4 text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/75">
                    <span>{row.label}</span>
                    <span className="flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse bg-primary" />
                        ENFOQUE
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

function PlanCard({ plan, choose, monthly, mostChosen, onCtaClick, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="relative"
        >
            {plan.highlight ? (
                <div className="absolute -top-3 left-6 z-20 flex items-center gap-1.5 bg-primary px-3 py-1 text-[10px] font-body font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_18px_rgba(var(--theme-primary-rgb),0.35)]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                    {mostChosen}
                </div>
            ) : null}

            <div
                className={`relative h-full rounded-none p-8 ${plan.highlight ? "liquid-glass-strong border-primary" : "liquid-glass border-l-2 border-primary/40"}`}
            >
                <div className="mb-6">
                    <h3 className="text-2xl font-heading italic leading-none tracking-tight text-white md:text-3xl">
                        {plan.name}
                    </h3>
                    <p className="mt-2 text-sm font-body font-light text-white/60">{plan.tagline}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-2 border-b border-white/10 pb-6">
                    <span className={`text-5xl font-heading italic md:text-6xl ${plan.highlight ? "text-white" : "text-primary"}`}>
                        {plan.price}
                    </span>
                    <span className="text-sm font-body font-medium uppercase tracking-widest text-white/60">{monthly}</span>
                </div>

                <ul className="mb-8 flex flex-col gap-3">
                    {plan.includes.map((item) => (
                        <li key={item.t} className="flex items-start gap-3">
                            {item.ok ? (
                                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-primary text-primary-foreground">
                                    <Check className="h-3 w-3" strokeWidth={3} />
                                </span>
                            ) : (
                                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center bg-white/5 text-white/30">
                                    <X className="h-3 w-3" strokeWidth={2} />
                                </span>
                            )}
                            <span className={`text-sm font-body ${item.ok ? "text-white/88" : "text-white/28 line-through"}`}>
                                {item.t}
                            </span>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={onCtaClick}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-none px-6 py-3 text-xs font-body font-bold uppercase tracking-widest transition ${
                        plan.highlight
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-white text-black hover:bg-white/90"
                    }`}
                >
                    {choose}
                    <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    );
}

function ListCard({ title, items, icon: Icon, accent = false }) {
    return (
        <div
            className={`h-full rounded-none p-7 md:p-8 ${
                accent ? "liquid-glass-strong text-primary-foreground" : "liquid-glass border border-white/8 text-white"
            }`}
        >
            <div className="mb-6 flex items-center gap-3">
                <div
                    className={`flex h-10 w-10 items-center justify-center ${
                        accent ? "bg-primary-foreground/12 text-primary-foreground" : "bg-primary text-primary-foreground"
                    }`}
                >
                    <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-2xl font-heading italic ${accent ? "text-primary-foreground" : "text-white"}`}>
                    {title}
                </h3>
            </div>

            <ul className="flex flex-col gap-4">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <span
                            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center ${
                                accent ? "bg-primary-foreground/12 text-primary-foreground" : "bg-primary text-primary-foreground"
                            }`}
                        >
                            <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={`text-sm font-body leading-relaxed ${accent ? "text-primary-foreground/86" : "text-white/76"}`}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function PricingBlock({ sector, onCtaClick }) {
    const pricing = sector.pricing;

    if (pricing.type === "plans") {
        return (
            <section id="pricing" className="relative px-6 py-24 md:py-32 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-14 text-left">
                        <div className="liquid-glass inline-block rounded-none px-3.5 py-1">
                            <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                                {pricing.badge}
                            </span>
                        </div>
                        <h2 className="mt-5 max-w-4xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
                            {pricing.title}
                        </h2>
                        <p className="mt-5 max-w-2xl text-sm font-body font-light text-white/60 md:text-base">
                            {pricing.sub}
                        </p>
                    </div>

                    <div className="grid gap-5 pt-4 md:grid-cols-3 md:gap-4">
                        {pricing.plans.map((plan, index) => (
                            <PlanCard
                                key={plan.name}
                                plan={plan}
                                choose={pricing.choose}
                                monthly={pricing.monthly}
                                mostChosen={pricing.mostChosen}
                                onCtaClick={onCtaClick}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="pricing" className="relative px-6 py-24 md:py-32 lg:px-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-left">
                    <div className="liquid-glass inline-block rounded-none px-3.5 py-1">
                        <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                            {pricing.badge}
                        </span>
                    </div>
                    <h2 className="mt-5 max-w-4xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
                        {pricing.title}
                    </h2>
                    <p className="mt-5 max-w-3xl text-sm font-body font-light text-white/62 md:text-base">
                        {pricing.sub}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65 }}
                    className="liquid-glass rounded-none border border-white/8 p-7 md:p-10"
                >
                    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                        <div className="lg:border-r lg:border-white/10 lg:pr-8">
                            <div className="text-[10px] font-body font-bold uppercase tracking-[0.3em] text-primary/90">
                                {pricing.badge}
                            </div>
                            <div className="mt-4 text-5xl font-heading italic leading-none text-white md:text-6xl">
                                {pricing.startingAt}
                            </div>
                            <p className="mt-4 text-sm font-body font-light leading-relaxed text-white/70">
                                {pricing.startingLabel}
                            </p>
                            <p className="mt-8 text-sm font-body font-light leading-relaxed text-white/58">
                                {pricing.note}
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                                <button
                                    onClick={onCtaClick}
                                    className="liquid-glass-strong inline-flex items-center justify-center gap-2 rounded-none px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-primary-foreground"
                                >
                                    {pricing.cta}
                                    <ArrowUpRight className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={onCtaClick}
                                    className="rounded-none border border-white/10 bg-white/6 px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
                                >
                                    {pricing.secondary}
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <ListCard title={pricing.includesTitle} items={pricing.includes} icon={Check} />
                            <ListCard title={pricing.factorsTitle} items={pricing.factors} icon={SlidersHorizontal} accent />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function SectorPage({ sector, onCtaClick }) {
    const HeroIcon = HERO_ICONS[sector.theme] || Sparkles;

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
                <img
                    src={sector.card.image}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                    loading="eager"
                />
                <HlsVideo
                    src={sector.media.hero.src}
                    className="absolute inset-0 h-full w-full object-cover object-center z-0"
                    style={{ filter: "saturate(0.92) contrast(1.02) brightness(0.78)" }}
                    testId={`${sector.slug}-hero-video`}
                    eager
                />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(var(--page-shadow-rgb), 0.82) 0%, rgba(var(--page-shadow-rgb), 0.55) 34%, rgba(var(--page-shadow-rgb), 0.38) 58%, rgba(var(--page-shadow-rgb), 0.74) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 24%, rgba(var(--page-base-rgb), 0.24) 66%, rgba(var(--page-base-rgb), 0.94) 100%)",
                    }}
                />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(circle at top right, rgba(var(--theme-accent-rgb), 0.15) 0%, transparent 28%)",
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
                    <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                        <div className="max-w-4xl text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-none px-2 py-1"
                            >
                                <span className="bg-primary px-3 py-1 text-[10px] font-body font-bold uppercase tracking-widest text-primary-foreground md:text-xs">
                                    {sector.shortName}
                                </span>
                                <span className="pr-2 text-xs font-body font-light text-white/80 md:text-sm">
                                    {sector.hero.badge}
                                </span>
                            </motion.div>

                            <BlurText
                                text={sector.hero.title}
                                delay={100}
                                className="mx-auto max-w-4xl text-5xl font-heading italic leading-[0.88] tracking-[-1.5px] text-foreground md:text-7xl lg:mx-0 lg:text-[5.4rem]"
                            />

                            <motion.p
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mx-auto mt-6 max-w-2xl text-sm font-body font-light leading-relaxed text-white/78 md:text-base lg:mx-0"
                            >
                                {sector.hero.sub}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
                                className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                            >
                                <button
                                    onClick={onCtaClick}
                                    className="liquid-glass-strong inline-flex items-center gap-2 rounded-none px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-primary-foreground"
                                >
                                    {sector.hero.cta}
                                    <ArrowUpRight className="h-4 w-4" />
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
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground">
                                            <HeroIcon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-primary/90">
                                                {sector.hero.panelTag}
                                            </div>
                                            <div className="text-sm font-body font-semibold uppercase tracking-wider text-white">
                                                {sector.hero.panelLocation}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/45">
                                            {sector.hero.panelBaseLabel}
                                        </div>
                                        <div className="mt-2 text-3xl font-heading italic text-white">
                                            {sector.hero.panelBaseValue}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/45">
                                            {sector.hero.panelFocusLabel}
                                        </div>
                                        <div className="mt-2 text-sm font-body leading-relaxed text-white/72">
                                            {sector.hero.panelFocusText}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-7 border-t border-white/10 pt-5 text-[11px] font-body uppercase tracking-[0.24em] text-white/48">
                                    {sector.pricing.startingLabel}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="absolute bottom-10 left-0 right-0 z-10 px-6 lg:px-10"
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="liquid-glass rounded-none px-6 py-4 md:py-5">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                                <div className="whitespace-nowrap text-[10px] font-body font-medium uppercase tracking-widest text-white/58 md:text-xs">
                                    {sector.hero.cta}
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
                                    {sector.hero.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-body font-bold uppercase tracking-[0.24em] text-white/72"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            <SectionDivider />

            <section id="methodology" className="relative overflow-hidden py-24 md:py-32">
                <img
                    src={sector.card.image}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    loading="lazy"
                />
                <HlsVideo
                    src={sector.media.ambient.src}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    style={{ filter: "saturate(0.8) contrast(1.06) brightness(0.7)" }}
                    testId={`${sector.slug}-ambient-video`}
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
                                {sector.methodology.badge}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.75 }}
                            className="mt-6 max-w-3xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl"
                        >
                            {sector.methodology.title}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 max-w-2xl text-sm font-body font-light text-white/70 md:text-base"
                        >
                            {sector.methodology.sub}
                        </motion.p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {sector.methodology.pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.t}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="liquid-glass rounded-none border border-white/8 p-6 md:p-7"
                            >
                                <div className="text-[10px] font-body font-bold uppercase tracking-[0.3em] text-primary/90">
                                    0{index + 1}
                                </div>
                                <h3 className="mt-4 text-2xl font-heading italic leading-tight text-white">
                                    {pillar.t}
                                </h3>
                                <p className="mt-3 text-sm font-body font-light leading-relaxed text-white/65">
                                    {pillar.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={onCtaClick}
                        className="liquid-glass-strong mt-10 inline-flex items-center gap-2 rounded-none px-6 py-3 text-xs font-body font-bold uppercase tracking-widest text-primary-foreground"
                    >
                        {sector.methodology.cta}
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </section>

            <SectionDivider />

            <section id="expertise" className="relative px-6 py-24 md:py-32 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-left md:mb-24">
                        <div className="liquid-glass inline-block rounded-none px-3.5 py-1">
                            <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                                {sector.showcase.badge}
                            </span>
                        </div>
                        <h2 className="mt-5 max-w-3xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
                            {sector.showcase.title}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-24 md:gap-32">
                        {sector.showcase.rows.map((row, index) => (
                            <MediaRow
                                key={row.title}
                                row={row}
                                reverse={index % 2 === 1}
                                index={index}
                                onCtaClick={onCtaClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section id="work" className="relative px-6 py-24 md:py-32 lg:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-left">
                        <div className="liquid-glass inline-block rounded-none px-3.5 py-1">
                            <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                                {sector.grid.badge}
                            </span>
                        </div>
                        <h2 className="mt-5 max-w-3xl text-4xl font-heading italic leading-[0.9] tracking-tight text-white md:text-5xl lg:text-6xl">
                            {sector.grid.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {sector.grid.items.map((item, index) => {
                            const Icon = GRID_ICONS[index] || Sparkles;
                            return (
                                <motion.div
                                    key={item.t}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.55, delay: index * 0.08 }}
                                    className="liquid-glass rounded-none border border-white/8 p-6 transition group hover:border-primary/35"
                                >
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-none bg-primary text-primary-foreground">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-xl font-heading italic leading-tight tracking-tight text-white">
                                        {item.t}
                                    </h3>
                                    <p className="mt-3 text-sm font-body font-light leading-relaxed text-white/60">
                                        {item.d}
                                    </p>
                                    <div className="mt-6 text-[10px] font-body font-bold uppercase tracking-[0.28em] text-primary/80">
                                        0{index + 1} - Pilar
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="relative overflow-hidden px-6 py-28 md:py-36 lg:px-10">
                <img
                    src={sector.card.image}
                    alt=""
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    loading="lazy"
                />
                <HlsVideo
                    src={sector.media.ambient.src}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    style={{ filter: "saturate(0.34) contrast(1.08) brightness(0.62)" }}
                    testId={`${sector.slug}-stats-video`}
                />
                <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.76)_35%,rgba(0,0,0,0.92)_100%)]" />
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(circle at 20% 50%, rgba(var(--theme-primary-rgb), 0.14), transparent 28%)",
                    }}
                />
                <div className="relative z-10 mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="liquid-glass rounded-none border border-white/10 p-10 md:p-16"
                    >
                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
                            {sector.stats.items.map((item) => (
                                <motion.div
                                    key={item.l}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-left"
                                >
                                    <div className="text-4xl font-heading italic leading-none text-primary md:text-5xl lg:text-6xl">
                                        {item.v}
                                    </div>
                                    <div className="mt-3 text-xs font-body font-medium uppercase tracking-widest text-white/60">
                                        {item.l}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            <PricingBlock sector={sector} onCtaClick={onCtaClick} />

            <SectionDivider />

            <SiteFooterCta
                content={{ ...sector.cta, footerCopy: HOME_PAGE.footer.copy }}
                media={sector.media}
                fallbackImage={sector.card.image}
                onPrimaryClick={onCtaClick}
                onSecondaryClick={onCtaClick}
            />
        </>
    );
}
