import { useState } from "react";
import Header from "@/components/Header";
import FilmGrainOverlay from "@/components/FilmGrainOverlay";
import CinematicSection from "@/components/CinematicSection";
import HeroSection from "@/components/sections/HeroSection";
import CleanScreen1 from "@/components/sections/CleanScreen1";
import AntagonistSection from "@/components/sections/AntagonistSection";
import IdentitySection from "@/components/sections/IdentitySection";
import CleanScreen2 from "@/components/sections/CleanScreen2";
import LaboratorySection from "@/components/sections/LaboratorySection";
import CleanScreen3 from "@/components/sections/CleanScreen3";
import ManifestoSection from "@/components/sections/ManifestoSection";
import CleanScreen4 from "@/components/sections/CleanScreen4";
import ServicesGrid from "@/components/sections/ServicesGrid";
import MethodSection from "@/components/sections/MethodSection";
import CleanScreen5 from "@/components/sections/CleanScreen5";
import QuestionsSection from "@/components/sections/QuestionsSection";
import FinalFilter from "@/components/sections/FinalFilter";
import CleanScreen6 from "@/components/sections/CleanScreen6";
import FinalManifesto from "@/components/sections/FinalManifesto";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <div className="overflow-x-hidden">
      <Header onContact={openContact} />
      <FilmGrainOverlay />

      <CinematicSection topTransition="none" bottomTransition="none">
        <HeroSection onContact={openContact} />
      </CinematicSection>

      <CinematicSection topTransition="none" bottomTransition="heavy">
        <CleanScreen1 />
      </CinematicSection>

      <CinematicSection topTransition="heavy" bottomTransition="heavy">
        <AntagonistSection />
      </CinematicSection>

      <CinematicSection topTransition="diagonal" bottomTransition="fade">
        <IdentitySection />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="fade">
        <CleanScreen2 />
      </CinematicSection>

      <CinematicSection topTransition="curve" bottomTransition="heavy">
        <LaboratorySection onContact={openContact} />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="fade">
        <CleanScreen3 />
      </CinematicSection>

      <CinematicSection topTransition="heavy" bottomTransition="heavy">
        <ManifestoSection />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="fade">
        <CleanScreen4 />
      </CinematicSection>

      <CinematicSection topTransition="heavy" bottomTransition="curve">
        <ServicesGrid />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="fade">
        <MethodSection />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="fade">
        <CleanScreen5 />
      </CinematicSection>

      <CinematicSection topTransition="diagonal" bottomTransition="fade">
        <QuestionsSection />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="heavy">
        <FinalFilter />
      </CinematicSection>

      <CinematicSection topTransition="fade" bottomTransition="fade">
        <CleanScreen6 />
      </CinematicSection>

      <CinematicSection topTransition="curve" bottomTransition="none">
        <FinalManifesto onContact={openContact} />
      </CinematicSection>

      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
};

export default Index;
