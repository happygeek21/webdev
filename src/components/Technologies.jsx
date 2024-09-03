import { RiReactjsLine } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl dark:text-white">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 hover:text-cyan-600 transition duration:300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPhp className="text-7xl text-violet-400 hover:text-violet-600 transition duration:300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500 hover:text-green-600 transition duration:300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPython className="text-7xl text-red-700 hover:text-red-600 transition duration:300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500 hover:text-green-600 transition duration:300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700 hover:text-sky-600 transition duration:300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-sky-700 hover:text-sky-600 transition duration:300" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
