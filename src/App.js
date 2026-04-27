import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import "@/App.css";
import SectorPage from "@/components/site/SectorPage";
import SiteContactModal from "@/components/site/SiteContactModal";
import SiteHomePage from "@/components/site/SiteHomePage";
import SiteNavbar from "@/components/site/SiteNavbar";
import { HOME_PAGE, SECTOR_MAP } from "@/data/siteConfig";
import { getThemeStyle } from "@/data/siteThemes";

function RoutedExperience() {
    const location = useLocation();
    const { sectorSlug } = useParams();
    const [contactOpen, setContactOpen] = useState(false);
    const pendingHomeScrollRef = useRef(null);
    const sector = sectorSlug ? SECTOR_MAP[sectorSlug] : null;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== "/" || !pendingHomeScrollRef.current) return;

        const targetId = pendingHomeScrollRef.current;
        pendingHomeScrollRef.current = null;

        requestAnimationFrame(() => {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }, [location.pathname]);

    if (sectorSlug && !sector) {
        return <Navigate to="/" replace />;
    }

    const themeKey = sector?.theme || HOME_PAGE.theme || "home";
    const openContact = () => setContactOpen(true);
    const closeContact = () => setContactOpen(false);
    const queueHomeScroll = (targetId) => {
        pendingHomeScrollRef.current = targetId || "sectors";
    };

    return (
        <div
            className="App min-h-screen bg-background text-foreground"
            style={getThemeStyle(themeKey)}
            data-testid="app-root"
            data-theme={themeKey}
        >
            <SiteNavbar sector={sector} onCtaClick={openContact} queueHomeScroll={queueHomeScroll} />
            <main>
                {sector ? (
                    <SectorPage sector={sector} onCtaClick={openContact} />
                ) : (
                    <SiteHomePage onOpenContact={openContact} />
                )}
            </main>
            <SiteContactModal
                open={contactOpen}
                onClose={closeContact}
                content={sector ? sector.contact : HOME_PAGE.contact}
                ctaLabel={sector ? sector.hero.cta : HOME_PAGE.hero.ctaSecondary}
            />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RoutedExperience />} />
                <Route path="/:sectorSlug" element={<RoutedExperience />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
