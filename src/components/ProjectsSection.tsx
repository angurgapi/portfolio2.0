import { useInView } from "react-intersection-observer";
import ProjectBlock from "./ProjectBlock";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Kodala",
      demoLink: "https://k0dala.netlify.app/",
      sourceLink: "https://github.com/angurgapi/tsota-front",
      imageUrl: "img/kodala.png",
      stack: ["Nuxt2", "nest.js", "TypeScript", "mongoDB", "i18n"],
      description: "An app for learning the basics of Georgian language",
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
      title: "Smartass",
      demoLink: "https://smartass3.netlify.app/",
      sourceLink: "https://github.com/angurgapi/smartassv3",
      imageUrl: "img/smartass.png",
      stack: ["Nuxt3", "TypeScript", "i18n"],
      description: "A web app for brain training",
    },
  ];

  const { ref, inView, entry } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      id="projects"
      className={`mt-20 pt-5 flex flex-col transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-3xl md:text-5xl text-center text-cyan-100">
        Some of my projects
      </p>
      <div className="w-[80vw] m-auto mt-20 flex flex-wrap justify-center gap-5 ">
        {projects.map((project, idx) => (
          <ProjectBlock key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
