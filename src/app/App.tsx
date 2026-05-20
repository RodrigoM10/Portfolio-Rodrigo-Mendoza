import "../styles/fonts.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#121212] text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsGrid />
      <ExperienceSection />
      <EducationSection />
      <FooterSection />
    </div>
  );
}