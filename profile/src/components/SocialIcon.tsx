import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export function SocialIcon(){
    return (
        <div className="social-links-container">
                  <a
                    href="https://github.com/growtejas"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Check Out My Projects"
                    className="icon-button"
                  >
                    <IoLogoGithub color="#000000" size={30} />
                  </a>
        
                  <a
                    href="https://www.linkedin.com/in/tejas-patil-707850200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View My Linkdin Profile"
                    className="icon-button"
                  >
                    <FaLinkedin color="#0a66c2" size={30} />
                  </a>
        
                  <a
                    href="mailto:0208.tejaspatil@gmail.com"
                    title="Send me an email"
                    className="icon-button"
                  >
                    <BiLogoGmail color="#D44638" size={32} />
                  </a>
                </div>
    );
}
 
export default SocialIcon;