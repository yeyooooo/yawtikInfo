import { motion } from "framer-motion";

/**
 * BlurText — animates each word from blurred/translated-below to clear
 * Props:
 *  - text: string
 *  - className: string (applied to outer <h1>)
 *  - delay: ms per word stagger (default 100)
 *  - tag: heading level ("h1" | "h2")
 */
export default function BlurText({ text, className = "", delay = 100, tag = "h1" }) {
    const words = text.split(" ");
    const Tag = motion[tag];
    return (
        <Tag className={className} data-testid="blur-text">
            {words.map((w, i) => (
                <motion.span
                    key={`${w}-${i}`}
                    initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.75,
                        delay: (i * delay) / 1000,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.22em]"
                >
                    {w}
                </motion.span>
            ))}
        </Tag>
    );
}
