import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/data/siteConfig";
import HlsVideo from "@/components/yawtik/HlsVideo";

export default function SiteFooterCta({ content, media, onPrimaryClick, onSecondaryClick }) {
    return (
        <section id="contact" className="relative overflow-hidden" data-testid="cta-footer">
            {media?.ambient?.src ? (
                <HlsVideo
                    src={media.ambient.src}
                    className="absolute inset-0 h-full w-full object-cover z-0"
                    style={{ filter: "saturate(0.82) contrast(1.04) brightness(0.72)" }}
                    testId="cta-video"
                />
            ) : null}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.64)_30%,rgba(0,0,0,0.82)_100%)]" />
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(circle at 82% 24%, rgba(var(--theme-accent-rgb), 0.18) 0%, transparent 26%)",
                }}
            />
            <div
                className="absolute left-0 right-0 top-0 z-0 pointer-events-none"
                style={{
                    height: 160,
                    background: "linear-gradient(to bottom, rgb(var(--page-base-rgb)), transparent)",
                }}
            />

            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-10 pt-32 text-center lg:px-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.85 }}
                    className="max-w-3xl text-5xl font-heading italic leading-[0.85] tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                    {content.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="mt-6 max-w-2xl text-sm font-body font-light text-white/70 md:text-base"
                >
                    {content.sub}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
                >
                    <button
                        onClick={onPrimaryClick}
                        className="liquid-glass-strong inline-flex items-center gap-2 rounded-none px-8 py-4 text-sm font-body font-bold uppercase tracking-widest text-primary-foreground"
                        data-testid="cta-book"
                    >
                        {content.book}
                        <ArrowUpRight className="h-5 w-5" />
                    </button>
                    <button
                        onClick={onSecondaryClick}
                        className="rounded-none border border-white/10 bg-white/8 px-8 py-4 text-sm font-body font-bold uppercase tracking-widest text-white transition hover:bg-white/12"
                        data-testid="cta-services"
                    >
                        {content.services}
                    </button>
                </motion.div>

                <div className="mt-32 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
                    <div className="flex items-center gap-3">
                        <img src={BRAND.logoBlue} alt="Yawtik" className="h-6 w-6 object-contain" />
                        <span className="text-[10px] font-body uppercase tracking-widest text-white/40 md:text-xs">
                            {content.footerCopy}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-body uppercase tracking-widest text-white/40 transition hover:text-primary md:text-xs"
                        >
                            Instagram
                        </a>
                        <button
                            onClick={onPrimaryClick}
                            className="text-[10px] font-body uppercase tracking-widest text-white/40 transition hover:text-primary md:text-xs"
                        >
                            Contacto
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
