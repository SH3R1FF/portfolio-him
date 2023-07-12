import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {/* On desktop, render BallCanvas components */}
      <div className="hidden md:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />   
          </div>
        ))}
      </div>
      {/* On mobile, render icons in div elements */}
      <div className="flex md:hidden flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300" key={technology.name}>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center transform hover:rotate-12 transition-all duration-300">
              <img className="w-16 h-16" src={technology.icon} alt={technology.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default SectionWrapper(Tech, "");