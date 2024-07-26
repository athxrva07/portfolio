import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h2 className="my-20 text-4xl text-center">Projects</h2>
      <div className="">
        {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                <div className="w-full lg:w-1/4">
                  <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded"/>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p>{project.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects