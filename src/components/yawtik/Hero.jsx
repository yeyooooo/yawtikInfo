import { motion } from "framer-motion";
import { ArrowUpRight, Leaf, MapPinned } from "lucide-react";
import { useLang, MEDIA } from "./i18n";
import BlurText from "./BlurText";

export default function Hero({ onCtaClick }) {
    const { t } = useLang();

    return (
        <section
            id="home"
            className="relative overflow-hidden grain"
            style={{
                minHeight: "100svh",
                background:
                    "radial-gradient(circle at 18% 18%, rgba(138, 164, 77, 0.18) 0%, rgba(11, 16, 10, 0.28) 28%, rgba(7, 9, 7, 0.92) 66%, #070907 100%)",
            }}
            data-testid="hero"
        >
            <video
                src={MEDIA.heroVideoMp4}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-center z-0"
                data-testid="hero-video"
            />

            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(8,12,8,0.82) 0%, rgba(8,12,8,0.55) 34%, rgba(8,12,8,0.38) 58%, rgba(8,12,8,0.74) 100%)",
                }}
            />
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 24%, rgba(7,9,7,0.24) 66%, rgba(7,9,7,0.94) 100%)",
                }}
            />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(230,202,142,0.15),transparent_28%)]" />
            <div className="absolute left-[-10%] top-[18%] z-0 h-64 w-64 rounded-full bg-primary/18 blur-[110px]" />

            <div
                className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
                style={{
                    height: 180,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.82), transparent)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                style={{
                    height: 260,
                    background:
                        "linear-gradient(to top, rgba(7,9,7,0.98) 0%, rgba(7,9,7,0.82) 32%, rgba(7,9,7,0.22) 76%, transparent 100%)",
                }}
            />

            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-6 pb-36 pt-36 lg:px-10">
                <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                    <div className="max-w-4xl text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="liquid-glass rounded-none inline-flex items-center gap-2 px-2 py-1 mb-6"
                            data-testid="hero-badge"
                        >
                            <span className="bg-primary text-black px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                Yawtik Agro
                            </span>
                            <span className="text-white/80 text-xs md:text-sm font-body font-light pr-2">
                                {t.hero.badge}
                            </span>
                        </motion.div>

                        <BlurText
                            text={t.hero.title}
                            delay={100}
                            className="mx-auto max-w-4xl text-5xl font-heading italic leading-[0.88] tracking-[-1.5px] text-foreground md:text-7xl lg:mx-0 lg:text-[5.4rem]"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mx-auto mt-6 max-w-2xl text-sm font-body font-light leading-relaxed text-white/78 md:text-base lg:mx-0"
                            data-testid="hero-sub"
                        >
                            {t.hero.sub}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                        >
                            <button
                                onClick={onCtaClick}
                                className="liquid-glass-strong rounded-none px-6 py-3 inline-flex items-center gap-2 text-black font-body font-bold uppercase tracking-widest text-xs"
                                data-testid="hero-cta-primary"
                            >
                                {t.hero.cta1}
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
                        <div className="liquid-glass rounded-none p-6 md:p-8 max-w-md ml-auto border border-white/8">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center bg-primary text-black">
                                        <Leaf className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.28em] text-primary/90 font-bold">
                                            {t.hero.panelTag}
                                        </div>
                                        <div className="text-white text-sm font-body font-semibold uppercase tracking-wider">
                                            {t.hero.panelLocation}
                                        </div>
                                    </div>
                                </div>
                                <MapPinned className="h-5 w-5 text-white/55" />
                            </div>

                                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                                    <div>
                                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/45 font-bold">
                                        {t.hero.panelBase}
                                    </div>
                                    <div className="mt-2 text-3xl font-heading italic text-white">
                                        {t.pricing.startingAt}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/45 font-bold">
                                        {t.hero.panelCoverage}
                                    </div>
                                    <div className="mt-2 text-sm font-body leading-relaxed text-white/72">
                                        {t.hero.panelCoverageText}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-7 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.24em] text-white/48">
                                {t.pricing.startingLabel}
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
                data-testid="hero-partners"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="liquid-glass rounded-none px-6 py-4 md:py-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
                            <div className="text-[10px] md:text-xs font-body font-medium uppercase tracking-widest text-white/58 whitespace-nowrap">
                                {t.hero.trusted}
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
                                {t.hero.partnerTags.map((tag) => (
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
    );
}
