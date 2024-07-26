import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center">PROJECTS</h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-16 lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded"/>
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <div className="mb-4 text-neutral-400">
                {project.description.split('•').map((point, index) => (
                  <p key={index}>{`• ${point.trim()}`}</p>
                ))}
              </div>
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 mr-2 text-sm font-medium text-purple-400 rounded bg-neutral-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
