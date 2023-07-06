import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

import Crystal from "../components/three/Crystal";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIntroVisible(true);
    }, 2000);
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div className="fixed h-full w-full top-0">
        <Crystal />
      </div>
      <div className="absolute w-full">
        <div className="pt-2 h-[600px] relative px-3 mt-12 flex flex-col overflow-hidden text-3xl md:text-5xl">
          <div
            className={`flex flex-col h-full text-center items-center justify-center transition-opacity duration-1000 ${
              introVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p>
              <span className="text-cyan-100">Hello!</span> My name is{" "}
              <span className="text-cyan-200">Sofia Zarowska</span>.
            </p>
            <p className="mt-4">I'm a frontend developer</p>
          </div>
        </div>

        <SkillsSection />

        <ProjectsSection />

        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
