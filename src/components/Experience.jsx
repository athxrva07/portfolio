import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className='pb-4 border-b border-neutral-900'>
      <h2 className="my-20 text-4xl text-center">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index} className="flex flex-wrap mb-8 lg:justify-center">
             <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
             </div>
             <div className="w-full max-w-xl lg:w-3/4">
               <h6 className="mb-2 font-semibold">
                 {experience.role} - {" "}
                 <span className="text-sm text-purple-100">
                   {experience.company}
                 </span>
               </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience