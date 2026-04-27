import { useState } from "react";
import "@/App.css";
import { LanguageProvider } from "./components/yawtik/i18n";
import Navbar from "./components/yawtik/Navbar";
import Hero from "./components/yawtik/Hero";
import Methodology from "./components/yawtik/Methodology";
import FeaturesChess from "./components/yawtik/FeaturesChess";
import FeaturesGrid from "./components/yawtik/FeaturesGrid";
import Stats from "./components/yawtik/Stats";
import Pricing from "./components/yawtik/Pricing";
import CTAFooter from "./components/yawtik/CTAFooter";
import ContactModal from "./components/yawtik/ContactModal";
import SectionDivider from "./components/yawtik/SectionDivider";

function App() {
    const [contactOpen, setContactOpen] = useState(false);
    const open = () => setContactOpen(true);

    return (
        <LanguageProvider>
            <div className="App min-h-screen bg-background text-foreground" data-testid="app-root">
                <Navbar onCtaClick={open} />
                <main>
                    <Hero onCtaClick={open} />
                    <SectionDivider />
                    <Methodology onCtaClick={open} />
                    <SectionDivider />
                    <FeaturesChess onCtaClick={open} />
                    <SectionDivider />
                    <FeaturesGrid />
                    <SectionDivider />
                    <Stats />
                    <SectionDivider />
                    <Pricing onCtaClick={open} />
                    <SectionDivider />
                    <CTAFooter />
                </main>
                <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
            </div>
        </LanguageProvider>
    );
}

export default App;
