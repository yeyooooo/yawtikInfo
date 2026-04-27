import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const translations = {
    en: {
        nav: {
            links: [
                { id: "home", label: "Home" },
                { id: "methodology", label: "Model" },
                { id: "expertise", label: "Execution" },
                { id: "work", label: "Why It Works" },
                { id: "pricing", label: "Investment" },
            ],
            cta: "Book Agricultural Advisory",
        },
        hero: {
            badge: "Cinematic content and commercial strategy for agribusiness.",
            title: "High-performance agriculture. High-impact content.",
            sub: "Audiovisual strategy, profitable campaigns and intelligent plans to turn your field operation into closed contracts.",
            cta1: "Book Agricultural Advisory",
            trusted: "Built for producers, packers, exporters and agricultural suppliers.",
            panelTag: "Regional coverage",
            panelLocation: "Ciudad Guzman and surrounding areas",
            panelBase: "Starting investment",
            panelCoverage: "Focus",
            panelCoverageText: "Field, operation, corporate presence and campaigns aimed at sales.",
            partnerTags: ["FIELD", "EXPORT", "SALES", "ADS", "ROI"],
        },
        methodology: {
            badge: "Our Model",
            title: "Three directors. One goal: sell better.",
            sub: "Many agribusinesses have real quality, but lose leverage because their digital image does not match the level of their product. We solve that with creative direction, financial criteria and paid media execution in the same strategy.",
            cta: "Review My Case",
            pillars: [
                {
                    t: "Creative Direction",
                    d: "We turn your operation, process and product into serious visual material with cinematic quality.",
                },
                {
                    t: "Financial Direction",
                    d: "Every decision is measured as investment: value perception, commercial order and return potential.",
                },
                {
                    t: "Traffic And Ads",
                    d: "We take the message to the right market so visibility becomes meetings, quotes and contracts.",
                },
            ],
        },
        chess: {
            badge: "Execution",
            title: "Good product is not enough if the image is weak.",
            r1t: "Many agribusinesses produce well, but communicate poorly.",
            r1b: "That hurts trust, perceived value and the ability to negotiate better prices, move more volume or present themselves more strongly to buyers and commercial allies.",
            r1c: "Book Agricultural Advisory",
            r1label: "FIELD · OPERATION",
            r2t: "We do not create content to decorate feeds.",
            r2b: "We create pieces and campaigns that help explain your process, support your commercial value and move the conversation toward real business opportunities.",
            r2c: "Quote Starter Plan",
            r2label: "CONTENT · SALES",
        },
        grid: {
            badge: "Why Yawtik Agro",
            title: "This is built to support sales, not just visibility.",
            pillarLabel: "Pillar",
            items: [
                {
                    t: "Image That Matches Your Product",
                    d: "If your product competes at a high level, your digital presence should not look improvised.",
                },
                {
                    t: "Strategy With Commercial Direction",
                    d: "Each piece is designed to support value, improve perception and open stronger conversations.",
                },
                {
                    t: "Financial Criteria From The Start",
                    d: "We do not create by impulse. We prioritize what can generate the most commercial return.",
                },
                {
                    t: "Campaigns With Purpose",
                    d: "We use paid media to reach the right audience and move toward quotes, meetings and contracts.",
                },
            ],
        },
        stats: {
            items: [
                { v: "3", l: "Specialized directors" },
                { v: "From $12K", l: "Starting investment" },
                { v: "Field + office", l: "Operational coverage" },
                { v: "ROI", l: "Decision focus" },
            ],
        },
        pricing: {
            badge: "Investment",
            title: "Starting from $12,000 MXN / month.",
            sub: "This is not a social media expense. It is an entry-level investment to improve digital image, support commercial value and help your company sell with more authority.",
            startingAt: "$12,000 MXN",
            startingLabel: "Recommended base for companies in Ciudad Guzman and surrounding areas that want a stronger commercial presence.",
            includesTitle: "This investment gives you a base for:",
            includes: [
                "Commercial and image diagnosis.",
                "Content plan aligned to sales goals.",
                "Field, plant or office production day.",
                "Editing and campaign-ready pieces.",
            ],
            factorsTitle: "Final quote is adjusted by:",
            factors: [
                "Number of products, brands or markets involved.",
                "Coverage in field, office or multiple locations.",
                "Frequency of shoots, visits and follow-up.",
                "Paid media depth and technical coordination required.",
            ],
            note: "A stronger digital image improves trust, value perception and the ability to close under better conditions. That is why this is designed as investment, not expense.",
            cta: "Book Agricultural Advisory",
            secondary: "Quote Starter Plan",
        },
        cta: {
            title: "Your operation already performs. Now make your image sell.",
            sub: "Let's review what you produce, how you are presenting it today and what strategy makes sense to help you close better opportunities.",
            book: "Book Agricultural Advisory",
            services: "Quote Starter Plan",
        },
        contact: {
            title: "Let's review your operation.",
            sub: "Choose the fastest way to discuss your case and the most convenient next step.",
            whatsapp: "WhatsApp",
            call: "Call",
            email: "Email",
            whatsappDesc: "Best route to review your case and move into a quote.",
            callDesc: "Useful if you prefer to explain the operation quickly by phone.",
            emailDesc: "Ideal if you want to send product, process or market details first.",
            close: "Close",
            whatsappMsg: "Hello Yawtik CC, I want to review a content and ads strategy for my agricultural company. We are looking for a stronger digital image focused on sales and return.",
            emailSubject: "Agricultural advisory request - Yawtik CC",
            emailBody: "Hello Yawtik CC team,\n\nI want to review a content and ads strategy for our agricultural company.\n\nCompany name:\nWhat do you sell:\nMain city or territory:\nDo technical advisors participate in the sales process?:\nDo you need field content, corporate content or both?:\nApproximate ad budget:\nBest time to talk:\n\nThank you.",
        },
        footer: {
            copy: "© 2026 Yawtik CC. Content and strategy for agribusiness.",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { label: "Contact", href: "#contact" },
            ],
        },
    },
    es: {
        nav: {
            links: [
                { id: "home", label: "Inicio" },
                { id: "methodology", label: "Modelo" },
                { id: "expertise", label: "Ejecucion" },
                { id: "work", label: "Por que funciona" },
                { id: "pricing", label: "Inversion" },
            ],
            cta: "Agendar Asesoria Agricola",
        },
        hero: {
            badge: "Contenido cinematografico y estrategia comercial para agronegocios.",
            title: "Agricultura de alto rendimiento. Contenido de alto impacto.",
            sub: "Estrategia audiovisual, campanas rentables y planes inteligentes para convertir tus procesos de campo en contratos cerrados.",
            cta1: "Agendar Asesoria Agricola",
            trusted: "Pensado para productores, empacadoras, exportadores y proveedores del agro.",
            panelTag: "Cobertura regional",
            panelLocation: "Ciudad Guzman y alrededores",
            panelBase: "Inversion base",
            panelCoverage: "Enfoque",
            panelCoverageText: "Campo, operacion, presencia corporativa y campanas orientadas a ventas.",
            partnerTags: ["CAMPO", "EXPORTACION", "VENTAS", "ADS", "ROI"],
        },
        methodology: {
            badge: "Nuestro modelo",
            title: "Tres directores. Una meta: vender mejor.",
            sub: "Muchos agronegocios tienen producto de gran calidad, pero pierden fuerza comercial porque su imagen digital no esta al nivel de lo que producen. Nosotros resolvemos eso con direccion creativa, criterio financiero y ejecucion de pauta en una sola estrategia.",
            cta: "Revisar Mi Caso",
            pillars: [
                {
                    t: "Direccion Creativa",
                    d: "Convertimos tu operacion, tus procesos y tu producto en material serio y cinematografico.",
                },
                {
                    t: "Direccion Financiera",
                    d: "Cada decision se analiza como inversion: valor percibido, orden comercial y potencial de retorno.",
                },
                {
                    t: "Direccion de Trafico y Ads",
                    d: "Llevamos el mensaje al mercado correcto para convertir visibilidad en reuniones, cotizaciones y contratos.",
                },
            ],
        },
        chess: {
            badge: "Ejecucion",
            title: "No basta con producir bien si tu imagen no acompana.",
            r1t: "Muchos agronegocios producen bien, pero comunican mal.",
            r1b: "Eso reduce confianza, valor percibido y margen para negociar mejor, mover mas volumen o presentarse con mas fuerza frente a compradores y aliados comerciales.",
            r1c: "Agendar Asesoria Agricola",
            r1label: "CAMPO · OPERACION",
            r2t: "No hacemos contenido para rellenar redes.",
            r2b: "Creamos piezas y campanas que ayudan a explicar mejor tu proceso, respaldar tu valor comercial y mover la conversacion hacia oportunidades reales de venta.",
            r2c: "Cotizar Plan Semilla",
            r2label: "CONTENIDO · VENTAS",
        },
        grid: {
            badge: "Por que Yawtik Agro",
            title: "Esto esta pensado para respaldar ventas, no solo visibilidad.",
            pillarLabel: "Pilar",
            items: [
                {
                    t: "Imagen A La Altura Del Producto",
                    d: "Si tu producto compite arriba, tu presencia digital no puede verse improvisada.",
                },
                {
                    t: "Estrategia Con Direccion Comercial",
                    d: "Cada pieza se disena para respaldar valor, mejorar percepcion y abrir conversaciones mas fuertes.",
                },
                {
                    t: "Criterio Financiero Desde El Inicio",
                    d: "No creamos por ocurrencia. Priorizamos lo que puede aportar mas retorno comercial.",
                },
                {
                    t: "Campanas Con Proposito",
                    d: "La pauta se usa para llegar al mercado correcto y avanzar hacia cotizaciones, reuniones y contratos.",
                },
            ],
        },
        stats: {
            items: [
                { v: "3", l: "Direcciones especializadas" },
                { v: "Desde $12K", l: "Inversion inicial" },
                { v: "Campo + oficina", l: "Cobertura operativa" },
                { v: "ROI", l: "Enfoque de decision" },
            ],
        },
        pricing: {
            badge: "Inversion",
            title: "Desde $12,000 MXN / mes.",
            sub: "Esto no esta planteado como gasto de redes. Es una inversion inicial para mejorar imagen digital, respaldar valor comercial y ayudar a tu empresa a vender con mas autoridad.",
            startingAt: "$12,000 MXN",
            startingLabel: "Base recomendada para empresas de Ciudad Guzman y alrededores que quieren una presencia comercial mas solida.",
            includesTitle: "Esta inversion te da base para:",
            includes: [
                "Diagnostico comercial y de imagen.",
                "Plan de contenido alineado a ventas.",
                "Jornada de grabacion en campo, planta u oficina.",
                "Edicion y piezas listas para pauta.",
            ],
            factorsTitle: "La cotizacion final se ajusta por:",
            factors: [
                "Numero de productos, marcas o mercados involucrados.",
                "Cobertura en campo, oficina o varias ubicaciones.",
                "Frecuencia de grabaciones, visitas y seguimiento.",
                "Profundidad de pauta y coordinacion tecnica necesaria.",
            ],
            note: "Cuando la imagen digital mejora, tambien mejora la confianza, el valor percibido y la capacidad de cerrar en mejores condiciones. Por eso esto se disena como inversion, no como gasto.",
            cta: "Agendar Asesoria Agricola",
            secondary: "Cotizar Plan Semilla",
        },
        cta: {
            title: "Tu operacion ya rinde. Ahora haz que tu imagen venda.",
            sub: "Revisemos que produces, como lo estas presentando hoy y que estrategia tiene sentido para ayudarte a cerrar mejores oportunidades.",
            book: "Agendar Asesoria Agricola",
            services: "Cotizar Plan Semilla",
        },
        contact: {
            title: "Revisemos tu operacion.",
            sub: "Elige la via mas rapida para revisar tu caso y definir el siguiente paso.",
            whatsapp: "WhatsApp",
            call: "Llamada",
            email: "Correo",
            whatsappDesc: "La mejor via para revisar tu caso y avanzar a una cotizacion.",
            callDesc: "Util si prefieres explicar la operacion rapido por telefono.",
            emailDesc: "Ideal si quieres mandar primero datos de producto, proceso o mercado.",
            close: "Cerrar",
            whatsappMsg: "Hola Yawtik CC, quiero revisar una estrategia de contenido y ads para mi empresa agricola. Buscamos una imagen digital mas fuerte, enfocada en ventas y retorno.",
            emailSubject: "Solicitud de asesoria agricola - Yawtik CC",
            emailBody: "Hola equipo Yawtik CC,\n\nQuiero revisar una estrategia de contenido y ads para nuestra empresa agricola.\n\nNombre de la empresa:\nQue venden:\nCiudad o territorio principal:\nParticipan asesores tecnicos en el proceso de venta?:\nNecesitan contenido en campo, corporativo o ambos?:\nPresupuesto aproximado de pauta:\nMejor horario para hablar:\n\nGracias.",
        },
        footer: {
            copy: "© 2026 Yawtik CC. Contenido y estrategia para agronegocios.",
            links: [
                { label: "Instagram", href: "https://www.instagram.com/yawtik_cc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { label: "Contacto", href: "#contact" },
            ],
        },
    },
};

const DEFAULT_LANG = "es";
const LANG_STORAGE_KEY = "yawtik-lang-v2";

const LangCtx = createContext({
    lang: DEFAULT_LANG,
    t: translations[DEFAULT_LANG],
    setLang: () => {},
});

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        if (typeof window === "undefined") return DEFAULT_LANG;
        const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
        return storedLang && translations[storedLang] ? storedLang : DEFAULT_LANG;
    });

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        localStorage.removeItem("yawtik-lang");
    }, [lang]);

    const setLang = useCallback((l) => setLangState(l), []);
    const value = { lang, setLang, t: translations[lang] || translations[DEFAULT_LANG] };

    return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
    return useContext(LangCtx);
}

export const CONTACT = {
    phone: "523411173818",
    phoneDisplay: "+52 341-117-3818",
    email: "yawtikccworkteam@gmail.com",
};

export const MEDIA = {
    logoBlue: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/a59dq84a_icono%20azul_1%20-%20copia.png",
    logoWhite: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/mysple6e_icono%20blanco.png",
    logoName: "https://customer-assets.emergentagent.com/job_a7ed5fb0-f469-4b3c-a7a0-4f240488174a/artifacts/gs4caghr_Logo%20nombre%20blanco.png",
    heroVideoMp4: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4",
    hlsVideo: "https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8",
    chessImg1: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
    chessImg2: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
    chessVideo1: "",
    chessVideo2: "",
};
