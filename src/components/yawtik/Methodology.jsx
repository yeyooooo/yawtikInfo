import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";
import { useLang, MEDIA } from "./i18n";

export default function Methodology({ onCtaClick }) {
    const { t } = useLang();

    return (
        <section
            id="methodology"
            className="relative overflow-hidden py-24 md:py-32"
            data-testid="methodology"
        >
            <HlsVideo
                src={MEDIA.hlsVideo}
                className="absolute inset-0 h-full w-full object-cover z-0"
                style={{ filter: "saturate(0.78) contrast(1.08) brightness(0.7)" }}
                testId="methodology-video"
            />
            <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(7,9,7,0.95)_0%,rgba(7,9,7,0.62)_26%,rgba(7,9,7,0.72)_72%,rgba(7,9,7,0.94)_100%)]" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,164,77,0.14),transparent_30%)]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="liquid-glass rounded-none px-3.5 py-1 mb-6 inline-block"
                    >
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.methodology.badge}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.75 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight leading-[0.9] text-white max-w-3xl"
                        data-testid="methodology-title"
                    >
                        {t.methodology.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/70 font-body font-light text-sm md:text-base max-w-2xl mt-6"
                    >
                        {t.methodology.sub}
                    </motion.p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {t.methodology.pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.t}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            className="liquid-glass rounded-none p-6 md:p-7 border border-white/8"
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

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    onClick={onCtaClick}
                    className="liquid-glass-strong rounded-none px-6 py-3 mt-10 inline-flex items-center gap-2 text-black font-body font-bold uppercase tracking-widest text-xs"
                    data-testid="methodology-cta"
                >
                    {t.methodology.cta}
                    <ArrowUpRight className="w-4 h-4" />
                </motion.button>
            </div>
        </section>
    );
}
