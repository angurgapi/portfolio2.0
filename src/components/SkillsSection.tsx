import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

  const { ref, inView, entry } = useInView({ threshold: 0.4 });

  return (
    <div
      ref={ref}
      id="tools"
      className={`mt-3 py-5 flex flex-col transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-3xl md:text-5xl text-center text-cyan-100">
        Tools i work with
      </p>

      <div className="w-[80vw] max-w-[600px] m-auto mt-5 flex flex-wrap justify-center gap-2 md:gap-3">
        {skillSet.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={inView ? { scale: 0, rotate: 180 } : { scale: 0 }}
            animate={inView ? { rotate: 0, scale: 1 } : { scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="bg-blur inline-block md:p-3 p-2 rounded"
          >
            {" "}
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
