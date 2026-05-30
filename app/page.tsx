import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Productions from "@/components/Productions";
import MissionSection from "@/components/MissionSection";
import Values from "@/components/Values";
import BehindTheLens from "@/components/BehindTheLens";
import Awards from "@/components/Awards";
import ReelLife from "@/components/ReelLife";
import StayConnected from "@/components/StayConnected";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="noise-overlay" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--black)' }}>
      {/* Sticky Top Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <StatsBar />
        <Productions />
        <MissionSection />
        <Values />
        <BehindTheLens />
        <Awards />
        <ReelLife />
        <StayConnected />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
