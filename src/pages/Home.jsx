
import { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import {Navbar} from "../components/Navbar.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import {AboutSection } from "../components/AboutSection.jsx"
import { SkillsSection } from "../components/SkillsSection.jsx";
import {ProjectsSection} from "../components/ProjectsSection.jsx";
import {ContactSection} from "../components/ContactSection.jsx";
import {Footer} from "../components/Footer.jsx";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <StarBackground isDarkMode={isDarkMode} />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

      </main>
      <Footer />
    </>
  );
}
