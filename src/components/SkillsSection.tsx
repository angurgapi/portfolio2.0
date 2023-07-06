import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const skillSet = [
    "JavaScript",
    "TypeScript",
    "Vue",
    "Nuxt",
    "Vuex",
    "React",
    "Next",
    "Redux",
    "TailwindCSS",
    "ElementUI",
    "Vuetify",
    "MaterialUI",
    "SCSS",
    "Formik",
    "Yup",
    "i18n",
    "three.js",
    "Firebase",
    "Strapi.io",
    "express",
    "Nest.js",
    "Git",
    "Docker",
    "mongoDB",
  ];

  const { ref, inView, entry } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      id="tools"
      className={`mt-3 h-[500px] pt-5 flex flex-col transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-3xl md:text-5xl text-center text-cyan-100">
        Tools i work with
      </p>
      <div className="w-[80vw] max-w-[600px] m-auto mt-5 flex flex-wrap justify-center gap-3">
        {skillSet.map((skill) => (
          <div key={skill} className="bg-blur inline-block p-3 rounded">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
