import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { TbBrandPython } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral- 800">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <FaJava className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <TbBrandPython className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <TbBrandMongodb className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <SiExpress className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiNodejsLine className="text-7xl text-cyan-400"/>
        </div>
      </div>
    </div>

  );
};

export default Technologies