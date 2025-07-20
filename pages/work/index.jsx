import { motion } from "framer-motion";
import WorkSlider from "../../components/WorkSlider";
import WorkBackground from "../../components/WorkBackground";
import TypeWriter from "../../components/TypeWriter";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <WorkBackground />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-center">
          {/* slider - moved to left */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>

          {/* text - moved to right */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 justify-center">
            <motion.h2 
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              <TypeWriter text="My " className="inline-block" />
              <span className="text-[#F97316]">&nbsp;Work</span>
              <span className="text-[#F97316]">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Explore my portfolio of innovative projects that showcase creativity, technical expertise, and attention to detail.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
