import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";
import { useLang, MEDIA, CONTACT } from "./i18n";

export default function CTAFooter() {
    const { t } = useLang();
    const waUrl = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(t.contact.whatsappMsg)}`;
    return (
        <section id="contact" className="relative overflow-hidden" data-testid="cta-footer">
            <HlsVideo
                src={MEDIA.hlsVideo}
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: "saturate(0.8) contrast(1.05) brightness(0.72)" }}
                testId="cta-video"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,7,0.9)_0%,rgba(7,9,7,0.7)_30%,rgba(7,9,7,0.84)_100%)] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(230,202,142,0.18),transparent_26%)] z-0" />
            <div
                className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
                style={{ height: 160, background: "linear-gradient(to bottom, #070907, transparent)" }}
            />

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 pt-32 pb-10 text-center flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-tight max-w-3xl"
                    data-testid="cta-title"
                >
                    {t.cta.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="text-white/70 font-body font-light text-sm md:text-base max-w-2xl mt-6"
                >
                    {t.cta.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-12"
                >
                    <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass-strong rounded-none px-8 py-4 inline-flex items-center gap-2 text-black font-body font-bold uppercase tracking-widest text-sm"
                        data-testid="cta-book"
                    >
                        {t.cta.book}
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <button
                        onClick={() => {
                            const el = document.getElementById("pricing");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-white/8 text-white border border-white/10 rounded-none px-8 py-4 font-body font-bold uppercase tracking-widest text-sm hover:bg-white/12 transition"
                        data-testid="cta-services"
                    >
                        {t.cta.services}
                    </button>
                </motion.div>

                {/* Footer bar */}
                <div className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4" data-testid="footer">
                    <div className="flex items-center gap-3">
                        <img src={MEDIA.logoBlue} alt="Yawtik" className="h-6 w-6 object-contain" />
                        <span className="text-white/40 text-[10px] md:text-xs font-body tracking-widest uppercase">
                            {t.footer.copy}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        {t.footer.links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                target={l.href.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    if (l.href === "#contact") {
                                        e.preventDefault();
                                        onCtaClick();
                                    }
                                }}
                                className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest hover:text-primary transition font-body"
                                data-testid={`footer-link-${l.label.toLowerCase()}`}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
