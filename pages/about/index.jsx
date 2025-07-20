import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import AboutBackground from "../../components/AboutBackground";
import TypeWriter from "../../components/TypeWriter";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaPhp,
          SiNextdotjs,
          SiTailwindcss,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [SiAdobephotoshop, SiCanva],
      },
      {
        title: "Database",
        icons: [FaDatabase],
      },
      {
        title: "Robotics",
        icons: [FaRobot],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Young Scientist Summit-7 Winner",
        stage: "2023",
        description: "Featured on national television explaining the project",
      },
      {
        title: "Best Leadership Award",
        stage: "2025",
      },
      {
        title: "Best Magazine Designer",
        stage: "2025",
      },
      {
        title: "Participant of 3lbs Robo War (Baliyo Ventures)",
        stage: "2025",
      },
      {
        title: "IT Competition Winner",
        stage: "2024",
      },
      {
        title: "Yantra 2.0 - Most Emerging Team Award (RAN)",
        stage: "2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Trinity Sci-Tech Guild (President) - Trinity College",
        stage: "2023 - 2025",
      },
      {
        title: "Magazine Editor (Head) - Trinity College",
        stage: "2024 - 2025",
      },
      {
        title: "Robo Assembler and Designer - Baliyo Ventures",
        stage: "Feb 24 - Mar 24",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Computer Science with PCM - Trinity College, Nepal",
        stage: "2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <AboutBackground />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -right-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-[calc(100vh-200px)] xl:h-full overflow-y-auto xl:overflow-visible flex flex-col items-center xl:flex-row gap-x-6">
        {/* info section */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] order-2 xl:order-1 pt-30"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI
                    ? "text-[#8B5CF6] after:w-[100%] after:bg-[#8B5CF6] after:transition-all after:duration-300"
                    : "hover:text-[#8B5CF6] transition-all duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60 hover:text-white/90 transition-all duration-300"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                {item.description && (
                  <div className="text-[#8B5CF6] italic">{item.description}</div>
                )}

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white hover:text-[#8B5CF6] transition-all duration-300">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* text section */}
        <div className="flex-1 flex flex-col justify-center order-1 xl:order-2">
          <motion.h2
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <TypeWriter text="Young" className="inline-block" />
            <span className="text-[#8B5CF6]"> Passionate</span>
            <TypeWriter text=" Developer" className="inline-block" />
          </motion.h2>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’ve dedicated the past few years to learning and building real-world skills in web development and electronics, and when I look back it gives me happiness for being successful in knowing something that is changing the world right now. I've documented my journey, including the projects I've built and the knowledge I've gained, to track my progress and growth over time.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#8B5CF6] mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of coding
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#8B5CF6] mb-2">
                  <CountUp start={0} end={7} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects completed
                </div>
              </div>

              {/* technologies */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#8B5CF6] mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologies learned
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-[#8B5CF6] mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Awards won
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
