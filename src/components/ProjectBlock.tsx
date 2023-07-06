interface IProject {
  title: string;
  imageUrl: string;
  demoLink: string;
  sourceLink: string;
  stack: string[];
  description: string;
}
interface ProjectBlockProps {
  project: IProject;
}
const ProjectBlock: React.FC<ProjectBlockProps> = ({ project }) => {
  return (
    <div
      key={project.title}
      className="bg-blur inline-block p-3 flex flex-col rounded sm:w-[300px] w-full max-w-[380px]"
    >
      <div className="relative w-full h-[250px]">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={`${project.imageUrl}`}
          alt={project.title}
        />
      </div>
      <div className="mt-5 flex flex-col flex-grow">
        <h3 className="font-bold text-[24px] text-cyan-100">
          {" "}
          {project.title}
        </h3>
        <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        <div className="flex flex-wrap mt-2">
          {project.stack.map((tech) => (
            <span className="mr-2 text-[14px]">{tech}</span>
          ))}
        </div>
      </div>
      <div className="grid mt-5 grid-cols-2 gap-2">
        <a
          target="_blank"
          className="rounded-2xl border-solid border-2 border-cyan-50 hover:bg-cyan-50 hover:text-indigo-900 py-2 text-center"
          href={project.demoLink}
        >
          demo
        </a>
        <a
          target="_blank"
          className="py-2 border-solid border-2 border-cyan-50 rounded-2xl hover:bg-cyan-50 hover:text-indigo-900 text-center"
          href={project.sourceLink}
        >
          code
        </a>
      </div>
    </div>
  );
};

export default ProjectBlock;
