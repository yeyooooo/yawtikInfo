import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

/**
 * HlsVideo — plays an .m3u8 (HLS) or falls back to a regular <video>
 * Props:
 *  - src: string (.m3u8 or .mp4)
 *  - className: string (applied to <video>)
 *  - style: inline style
 *  - testId: string
 *  - eager: boolean
 */
export default function HlsVideo({
    src,
    className = "",
    style,
    testId = "hls-video",
    eager = false,
}) {
    const videoRef = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(eager);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || shouldLoad) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "240px 0px" },
        );

        observer.observe(video);

        return () => observer.disconnect();
    }, [shouldLoad]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !src || !shouldLoad) return;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        const isHls = src.endsWith(".m3u8");
        let hls;

        if (isHls) {
            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = src;
            } else if (Hls.isSupported()) {
                hls = new Hls({ enableWorker: true });
                hls.loadSource(src);
                hls.attachMedia(video);
            }
        } else {
            video.src = src;
            video.load();
        }

        const tryPlay = () => {
            const p = video.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
        };
        video.addEventListener("loadedmetadata", tryPlay);
        video.addEventListener("canplay", tryPlay);
        tryPlay();

        return () => {
            video.removeEventListener("loadedmetadata", tryPlay);
            video.removeEventListener("canplay", tryPlay);
            if (hls) hls.destroy();
        };
    }, [src, shouldLoad]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload={eager ? "auto" : "metadata"}
            crossOrigin="anonymous"
            className={className}
            style={style}
            data-testid={testId}
        />
    );
}
