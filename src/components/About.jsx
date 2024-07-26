import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return <div className="pb-4 border-b border-neutral-900">
    <h2 className="my-20 text-4xl text-center"> ABOUT
        <span className="text-neutral-500"> ME</span>
    </h2>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center item-center">
                <img className="rounded-xl" src={aboutImg} alt="about"/>
            </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="max-w-xl py-6 my-2 font-light tracking-tighter">{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  </div>
  };

export default About