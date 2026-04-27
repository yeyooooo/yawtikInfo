import { useEffect, useRef } from "react";
import Hls from "hls.js";

/**
 * HlsVideo — plays an .m3u8 (HLS) or falls back to a regular <video>
 * Props:
 *  - src: string (.m3u8 or .mp4)
 *  - className: string (applied to <video>)
 *  - style: inline style
 *  - testId: string
 */
export default function HlsVideo({ src, className = "", style, testId = "hls-video" }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !src) return;

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
        }

        const tryPlay = () => {
            const p = video.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
        };
        video.addEventListener("loadedmetadata", tryPlay);
        tryPlay();

        return () => {
            video.removeEventListener("loadedmetadata", tryPlay);
            if (hls) hls.destroy();
        };
    }, [src]);

    return (
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={className}
            style={style}
            data-testid={testId}
        />
    );
}
