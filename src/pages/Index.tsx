import FilmGrainOverlay from "@/components/FilmGrainOverlay";
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

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <FilmGrainOverlay />
      <HeroSection />
      <CleanScreen1 />
      <AntagonistSection />
      <IdentitySection />
      <CleanScreen2 />
      <LaboratorySection />
      <CleanScreen3 />
      <ManifestoSection />
      <CleanScreen4 />
      <ServicesGrid />
      <MethodSection />
      <CleanScreen5 />
      <QuestionsSection />
      <FinalFilter />
      <CleanScreen6 />
      <FinalManifesto />
    </div>
  );
};

export default Index;
