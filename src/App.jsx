import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorksSection from "./components/WorksSection";
import ChooseSection from "./components/ChooseSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <HeroSection />
      <WorksSection />
      <ChooseSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

