import { motion } from "framer-motion";
import HlsVideo from "./HlsVideo";
import { useLang, MEDIA } from "./i18n";

export default function Stats() {
    const { t } = useLang();
    return (
        <section className="relative py-28 md:py-36 px-6 lg:px-10 overflow-hidden" data-testid="stats">
            <HlsVideo
                src={MEDIA.hlsVideo}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: "saturate(0.3) contrast(1.08) brightness(0.62)" }}
                testId="stats-video"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,7,0.92)_0%,rgba(7,9,7,0.76)_35%,rgba(7,9,7,0.92)_100%)] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(138,164,77,0.14),transparent_28%)] z-0" />
            <div
                className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
                style={{ height: 160, background: "linear-gradient(to bottom, #070907, transparent)" }}
            />
            <div
                className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
                style={{ height: 160, background: "linear-gradient(to top, #070907, transparent)" }}
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="liquid-glass rounded-none p-10 md:p-16 border border-white/10"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
                        {t.stats.items.map((s, i) => (
                            <motion.div
                                key={s.l}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                className="text-left"
                                data-testid={`stat-${i}`}
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-primary leading-none">
                                    {s.v}
                                </div>
                                <div className="mt-3 text-white/60 font-body font-medium uppercase tracking-widest text-xs">
                                    {s.l}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
