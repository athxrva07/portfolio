import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return <div className="pb-16 border-b border-neutral-900">
    <h2 className="my-20 text-4xl text-center"> ABOUT
        <span className="text-neutral-500"> ME</span>
    </h2>
    <div className="flex flex-wrap">
      
        <motion.div 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 0.5}}
         className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center item-center">
                <img className="rounded-xl" src={aboutImg} alt="about"/>
            </div>
        </motion.div>
        
        <motion.div 
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: 100}}
         transition={{duration: 0.5}}
         className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="max-w-xl py-6 my-8 font-light tracking-tighter">{ABOUT_TEXT}</p>
            </div>
        </motion.div>
        
    </div>
  </div>
  };

export default About