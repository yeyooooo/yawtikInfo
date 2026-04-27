export default function SectionDivider() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none relative z-10 h-24 overflow-hidden -my-8"
        >
            <div className="absolute inset-x-[-12%] top-1/2 h-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent blur-2xl" />
            <div className="absolute inset-x-[8%] top-1/2 h-20 -translate-y-1/2 rounded-full bg-primary/18 blur-[86px]" />
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
    );
}
