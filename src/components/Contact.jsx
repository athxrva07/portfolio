import { CONTACT } from "../constants"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
        <h2 className="my-10 text-4xl text-center ">CONTACT</h2>
        <div className="tracking-tighter text-center">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.email}</p>
            <a href="https://www.linkedin.com/in/atharva-choudhary-1ba373277" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 my-4 text-2xl">
              <FaLinkedin />
            </a>
        
            <a href="https://github.com/athxrva07" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-2xl">
              <FaGithub />
            </a>
        </div>
    </div>
  )
}

export default Contact