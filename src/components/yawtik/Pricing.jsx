import { motion } from "framer-motion";
import { ArrowUpRight, Check, SlidersHorizontal } from "lucide-react";
import { useLang } from "./i18n";

function ListCard({ title, items, icon: Icon, accent = false }) {
    return (
        <div
            className={`rounded-none p-7 md:p-8 h-full ${
                accent
                    ? "liquid-glass-strong text-black"
                    : "liquid-glass text-white border border-white/8"
            }`}
        >
            <div className="flex items-center gap-3 mb-6">
                <div
                    className={`flex h-10 w-10 items-center justify-center ${
                        accent ? "bg-black/10 text-black" : "bg-primary text-black"
                    }`}
                >
                    <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-2xl font-heading italic ${accent ? "text-black" : "text-white"}`}>
                    {title}
                </h3>
            </div>

            <ul className="flex flex-col gap-4">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <span
                            className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center ${
                                accent ? "bg-black/12 text-black" : "bg-primary text-black"
                            }`}
                        >
                            <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className={`text-sm font-body leading-relaxed ${accent ? "text-black/78" : "text-white/76"}`}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Pricing({ onCtaClick }) {
    const { t } = useLang();

    return (
        <section id="pricing" className="relative px-6 py-24 md:py-32 lg:px-10" data-testid="pricing">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-left">
                    <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                        <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                            {t.pricing.badge}
                        </span>
                    </div>
                    <h2 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
                        {t.pricing.title}
                    </h2>
                    <p className="max-w-3xl mt-5 text-sm md:text-base text-white/62 font-body font-light">
                        {t.pricing.sub}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65 }}
                    className="liquid-glass rounded-none border border-white/8 p-7 md:p-10"
                >
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div className="lg:pr-8 lg:border-r lg:border-white/10">
                            <div className="text-[10px] font-body font-bold uppercase tracking-[0.3em] text-primary/90">
                                {t.pricing.badge}
                            </div>
                            <div className="mt-4 text-5xl md:text-6xl font-heading italic text-white leading-none">
                                {t.pricing.startingAt}
                            </div>
                            <p className="mt-4 text-sm font-body font-light leading-relaxed text-white/70">
                                {t.pricing.startingLabel}
                            </p>
                            <p className="mt-8 text-sm font-body font-light leading-relaxed text-white/58">
                                {t.pricing.note}
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                                <button
                                    onClick={onCtaClick}
                                    className="liquid-glass-strong rounded-none px-6 py-3 inline-flex items-center justify-center gap-2 text-black font-body font-bold uppercase tracking-widest text-xs"
                                    data-testid="pricing-cta-primary"
                                >
                                    {t.pricing.cta}
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => {
                                        const el = document.getElementById("contact");
                                        if (el) el.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="bg-white/6 border border-white/10 text-white rounded-none px-6 py-3 font-body font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition"
                                    data-testid="pricing-cta-secondary"
                                >
                                    {t.pricing.secondary}
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <ListCard
                                title={t.pricing.includesTitle}
                                items={t.pricing.includes}
                                icon={Check}
                            />
                            <ListCard
                                title={t.pricing.factorsTitle}
                                items={t.pricing.factors}
                                icon={SlidersHorizontal}
                                accent
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
