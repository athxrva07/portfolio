import { FaJava } from "react-icons/fa6";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral- 800">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <FaJava className="text-orange-400 text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <TbBrandPython className="text-blue-900 text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <TbBrandMongodb className="text-green-500 text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <SiExpress className="text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <RiNodejsLine className="text-green-600 text-7xl"/>
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
            <TbBrandMysql className="text-7xl text-sky-700"/>
        </div>
      </div>
    </div>

  );
};

export default Technologies