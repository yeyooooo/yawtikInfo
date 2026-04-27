import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, PhoneCall, X } from "lucide-react";
import { CONTACT } from "@/data/siteConfig";

export default function SiteContactModal({ content, open, onClose, ctaLabel = "Cotizar" }) {
    const waUrl = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(content.whatsappMsg)}`;
    const callUrl = `tel:+${CONTACT.phone}`;
    const mailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(content.emailSubject)}&body=${encodeURIComponent(content.emailBody)}`;

    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-testid="contact-modal"
                >
                    <div
                        className="absolute inset-0 bg-black/82 backdrop-blur-md"
                        onClick={onClose}
                        data-testid="contact-modal-overlay"
                    />

                    <motion.div
                        className="relative z-10 liquid-glass w-full max-w-4xl rounded-none p-8 md:p-10"
                        initial={{ y: 28, opacity: 0, scale: 0.98 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 text-white/55 transition hover:text-white"
                            aria-label="Cerrar"
                            data-testid="contact-modal-close"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="mb-8">
                            <div className="liquid-glass inline-block rounded-none px-3.5 py-1">
                                <span className="text-xs font-body font-bold uppercase tracking-widest text-white">
                                    {ctaLabel}
                                </span>
                            </div>
                            <h3 className="mt-5 max-w-2xl text-4xl font-heading italic leading-[0.92] tracking-tight text-white md:text-5xl">
                                {content.title}
                            </h3>
                            <p className="mt-4 max-w-xl text-sm font-body font-light leading-relaxed text-white/62 md:text-base">
                                {content.sub}
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="liquid-glass-strong rounded-none p-6 group"
                                data-testid="contact-whatsapp-link"
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground rounded-none">
                                        <MessageCircle className="h-5 w-5" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:text-white" />
                                </div>
                                <div className="text-sm font-body font-bold uppercase tracking-widest text-white">
                                    {content.whatsapp}
                                </div>
                                <div className="mt-2 text-xs font-body font-light leading-relaxed text-white/62">
                                    {content.whatsappDesc}
                                </div>
                                <div className="mt-4 text-xs font-body font-bold uppercase tracking-widest text-primary">
                                    {CONTACT.phoneDisplay}
                                </div>
                            </a>

                            <a
                                href={callUrl}
                                onClick={onClose}
                                className="liquid-glass rounded-none border border-white/10 p-6 group transition hover:border-primary/45"
                                data-testid="contact-call-link"
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center bg-white text-black rounded-none">
                                        <PhoneCall className="h-5 w-5" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:text-white" />
                                </div>
                                <div className="text-sm font-body font-bold uppercase tracking-widest text-white">
                                    {content.call}
                                </div>
                                <div className="mt-2 text-xs font-body font-light leading-relaxed text-white/62">
                                    {content.callDesc}
                                </div>
                                <div className="mt-4 text-xs font-body font-medium tracking-widest text-white/72">
                                    {CONTACT.phoneDisplay}
                                </div>
                            </a>

                            <a
                                href={mailUrl}
                                onClick={onClose}
                                className="liquid-glass rounded-none border border-white/10 p-6 group transition hover:border-primary/45"
                                data-testid="contact-email-link"
                            >
                                <div className="mb-4 flex items-start justify-between">
                                    <div className="flex h-10 w-10 items-center justify-center bg-white text-black rounded-none">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <ArrowUpRight className="h-5 w-5 text-white/70 transition group-hover:text-white" />
                                </div>
                                <div className="text-sm font-body font-bold uppercase tracking-widest text-white">
                                    {content.email}
                                </div>
                                <div className="mt-2 text-xs font-body font-light leading-relaxed text-white/62">
                                    {content.emailDesc}
                                </div>
                                <div className="mt-4 break-all text-xs font-body font-medium tracking-widest text-white/72">
                                    {CONTACT.email}
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}
