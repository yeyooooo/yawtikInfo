import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang, MEDIA } from "./i18n";

function Row({ reverse, title, body, cta, img, videoSrc, label, onCtaClick, index }) {
    const [videoFailed, setVideoFailed] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const hasVideo = Boolean(videoSrc) && !videoFailed;

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
                <h3 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-heading italic text-white leading-[0.95] tracking-tight">
                    {title}
                </h3>
                <p className="max-w-md mt-6 text-sm md:text-base font-body font-light leading-relaxed text-white/62">
                    {body}
                </p>
                <button
                    onClick={onCtaClick}
                    className="mt-8 liquid-glass-strong rounded-none px-6 py-3 inline-flex items-center gap-2 text-black font-body font-bold uppercase tracking-widest text-xs"
                    data-testid={`chess-cta-${index}`}
                >
                    {cta}
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <div className="liquid-glass rounded-none overflow-hidden relative h-[340px] md:h-[460px] border border-white/8">
                <img
                    src={img}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady && hasVideo ? "opacity-0" : "opacity-100"}`}
                    loading="lazy"
                />

                {hasVideo ? (
                    <video
                        src={videoSrc}
                        poster={img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
                        onLoadedData={() => setVideoReady(true)}
                        onCanPlay={() => setVideoReady(true)}
                        onError={() => setVideoFailed(true)}
                    />
                ) : null}

                <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(138,164,77,0.22),transparent_42%,rgba(230,202,142,0.08)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#070907] via-[#070907]/55 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between gap-4 text-[10px] font-body font-bold uppercase tracking-[0.28em] text-white/75">
                    <span>{label}</span>
                    <span className="flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 bg-primary animate-pulse" />
                        {hasVideo ? "REEL" : "ENFOQUE"}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturesChess({ onCtaClick }) {
    const { t } = useLang();

    return (
        <section id="expertise" className="relative px-6 py-24 md:py-32 lg:px-10" data-testid="features-chess">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 md:mb-24 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.chess.badge}
                        </span>
                    </div>
                    <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
                        {t.chess.title}
                    </h2>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">
                    <Row
                        index={0}
                        title={t.chess.r1t}
                        body={t.chess.r1b}
                        cta={t.chess.r1c}
                        img={MEDIA.chessImg1}
                        videoSrc={MEDIA.chessVideo1}
                        label={t.chess.r1label}
                        onCtaClick={onCtaClick}
                    />
                    <Row
                        index={1}
                        reverse
                        title={t.chess.r2t}
                        body={t.chess.r2b}
                        cta={t.chess.r2c}
                        img={MEDIA.chessImg2}
                        videoSrc={MEDIA.chessVideo2}
                        label={t.chess.r2label}
                        onCtaClick={onCtaClick}
                    />
                </div>
            </div>
        </section>
    );
}
