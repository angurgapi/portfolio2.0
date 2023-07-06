import { useInView } from "react-intersection-observer";

const SkillsSection = () => {
  const projects = [
    {
      title: "Kodala",
      demoLink: "https://k0dala.netlify.app/",
      sourceLink: "https://github.com/angurgapi/tsota-front",
      imageUrl: "img/kodala.png",
      stack: ["Nuxt2", "nest.js", "TypeScript", "mongoDB", "i18n"],
      description: "An app for learning georgian language",
    },
    {
      title: "My Book Club",
      demoLink: "https://my-book-club.vercel.app",
      sourceLink: "https://github.com/angurgapi/my-book-club",
      imageUrl: "img/mybookclub.png",
      stack: [
        "React",
        "Next",
        "Redux-Toolkit",
        "Material UI",
        "Firebase",
        "TailwindCSS",
      ],
      description:
        "(work in progress) A platform to organize and attend book club meetings",
    },

    {
      title: "smartass",
      demoLink: "https://smartass3.netlify.app/",
      sourceLink: "https://github.com/angurgapi/smartassv3",
      imageUrl: "img/smartass.png",
      stack: ["Nuxt3", "TypeScript", "i18n"],
      description: "A web app for brain training",
    },
  ];

  const { ref, inView, entry } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      id="skills"
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
