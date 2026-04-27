import { motion } from "framer-motion";
import { Clapperboard, Leaf, Megaphone, Users } from "lucide-react";
import { useLang } from "./i18n";

const ICONS = [Leaf, Clapperboard, Users, Megaphone];

export default function FeaturesGrid() {
    const { t } = useLang();

    return (
        <section id="work" className="relative px-6 py-24 md:py-32 lg:px-10" data-testid="features-grid">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.grid.badge}
                        </span>
                    </div>
                    <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
                        {t.grid.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {t.grid.items.map((it, i) => {
                        const Icon = ICONS[i];

                        return (
                            <motion.div
                                key={it.t}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.55, delay: i * 0.08 }}
                                className="liquid-glass rounded-none p-6 border border-white/8 hover:border-primary/35 transition group"
                                data-testid={`grid-card-${i}`}
                            >
                                <div className="bg-primary text-black rounded-none w-10 h-10 flex items-center justify-center mb-6">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-heading italic text-white leading-tight tracking-tight">
                                    {it.t}
                                </h3>
                                <p className="text-white/60 font-body font-light text-sm mt-3 leading-relaxed">
                                    {it.d}
                                </p>
                                <div className="mt-6 text-[10px] font-body font-bold uppercase tracking-[0.28em] text-primary/80">
                                    0{i + 1} - {t.grid.pillarLabel}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
