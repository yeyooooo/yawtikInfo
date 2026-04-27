import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail, ArrowUpRight, PhoneCall } from "lucide-react";
import { useLang, CONTACT } from "./i18n";

export default function ContactModal({ open, onClose }) {
    const { t } = useLang();
    const waUrl = `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(t.contact.whatsappMsg)}`;
    const callUrl = `tel:+${CONTACT.phone}`;
    const mailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${encodeURIComponent(t.contact.emailBody)}`;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-testid="contact-modal"
                >
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                        data-testid="contact-modal-overlay"
                    />
                    <motion.div
                        className="relative liquid-glass rounded-none w-full max-w-2xl p-8 md:p-12 z-10"
                        initial={{ y: 30, opacity: 0, scale: 0.98 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition"
                            data-testid="contact-modal-close"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-8">
                            <div className="liquid-glass rounded-none inline-block px-3.5 py-1 mb-5">
                                <span className="text-xs font-bold text-white font-body uppercase tracking-widest">
                                    {t.nav.cta}
                                </span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-heading italic text-white leading-[0.9] tracking-tight">
                                {t.contact.title}
                            </h3>
                            <p className="text-white/60 font-body font-light text-sm md:text-base mt-4 max-w-md">
                                {t.contact.sub}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="liquid-glass-strong rounded-none p-6 block group"
                                data-testid="contact-whatsapp-link"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-none">
                                        <MessageCircle className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition" />
                                </div>
                                <div className="text-white font-body font-bold uppercase tracking-widest text-sm">
                                    {t.contact.whatsapp}
                                </div>
                                <div className="text-white/60 font-body font-light text-xs mt-2">
                                    {t.contact.whatsappDesc}
                                </div>
                                <div className="text-primary font-body font-bold text-xs tracking-widest mt-4 uppercase">
                                    {CONTACT.phoneDisplay}
                                </div>
                            </a>

                            <a
                                href={callUrl}
                                onClick={onClose}
                                className="liquid-glass rounded-none p-6 block group border border-white/10 hover:border-primary/50 transition"
                                data-testid="contact-call-link"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-none">
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition" />
                                </div>
                                <div className="text-white font-body font-bold uppercase tracking-widest text-sm">
                                    {t.contact.call}
                                </div>
                                <div className="text-white/60 font-body font-light text-xs mt-2">
                                    {t.contact.callDesc}
                                </div>
                                <div className="text-white/70 font-body font-medium text-xs tracking-widest mt-4">
                                    {CONTACT.phoneDisplay}
                                </div>
                            </a>

                            <a
                                href={mailUrl}
                                onClick={onClose}
                                className="liquid-glass rounded-none p-6 block group border border-white/10 hover:border-primary/50 transition"
                                data-testid="contact-email-link"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-none">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition" />
                                </div>
                                <div className="text-white font-body font-bold uppercase tracking-widest text-sm">
                                    {t.contact.email}
                                </div>
                                <div className="text-white/60 font-body font-light text-xs mt-2">
                                    {t.contact.emailDesc}
                                </div>
                                <div className="text-white/70 font-body font-medium text-xs tracking-widest mt-4 break-all">
                                    {CONTACT.email}
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
