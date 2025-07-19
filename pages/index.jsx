import { motion } from "framer-motion";
import ParticlesContainer from "../components/ParticlesContainer";
import CvBtn from "../components/CvBtn";
import Avatar from "../components/Avatar";
import NeonElements from "../components/NeonElements";
import FallingStars from "../components/FallingStars";
import TypeWriter from "../components/TypeWriter";
import { fadeIn } from "../variants";
import { useState, useEffect } from "react";

const Home = () => {
  const [typingProgress, setTypingProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [shouldStartTyping, setShouldStartTyping] = useState(false);

  // Start typing after component mounts
  useEffect(() => {
    setShouldStartTyping(true);
  }, []);

  // Calculate opacity based on typing progress
  const getOpacity = (delay = 0) => {
    // Start fading in when typing is 30% complete
    const fadeStart = 0.3;
    const progress = Math.max(0, (typingProgress - fadeStart) / (1 - fadeStart));
    return typingProgress > fadeStart ? progress : 0;
  };

  // Split the typed text into first and last name
  const firstName = typedText.slice(0, 6); // "Dipesh"
  const lastName = typedText.slice(7); // "Yadav" (skipping the space)

  return (
    <div className="bg-primary h-full overflow-hidden">
      {/* Background elements */}
      <NeonElements />
      <FallingStars />
      
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.05),transparent_20%)]" />
      </div>

      {/* Content */}
      <div className="w-full h-full relative">
        <div className="container mx-auto h-full">
          {/* Grid container */}
          <div className="h-full grid grid-cols-1 xl:grid-cols-2 gap-1">
            {/* Left column - Text content */}
            <div className="flex flex-col justify-center xl:justify-start h-full relative">
              <div className="absolute top-1/2 left-1/2 xl:left-0 transform -translate-y-1/2 -translate-x-1/2 xl:-translate-x-0 w-full max-w-[600px]">
                {/* Hello I'm - Fixed height */}
                <div className="h-[50px] lg:h-[60px] mb-2">
                  <h2 className="text-[36px] lg:text-[42px] font-medium leading-tight tracking-[-1px] whitespace-nowrap text-center xl:text-left">
                    Hello, I'm
                  </h2>
                </div>
                
                {/* Name container - Fixed height */}
                <div className="h-[90px] lg:h-[120px] mb-4">
                  <h1 className="text-[55px] lg:text-[90px] font-bold whitespace-nowrap text-center xl:text-left">
                    <span className="text-white">{firstName}</span>
                    <span className="inline-block w-[0.3em]"></span>
                    <span className="text-accent">{lastName}</span>
                    {shouldStartTyping && (
                      <TypeWriter 
                        text="Dipesh Yadav"
                        delay={200}
                        onProgress={setTypingProgress}
                        className="opacity-0 absolute"
                        onType={setTypedText}
                      />
                    )}
                  </h1>
                </div>

                {/* Role - Fixed height */}
                <div className="h-[50px] lg:h-[60px] mb-4">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: getOpacity() }}
                    transition={{ duration: 0.3 }}
                    className="text-[26px] lg:text-[36px] font-semibold text-white/80 text-center xl:text-left"
                  >
                    Full-Stack Developer
                  </motion.h3>
                </div>

                {/* Description - Fixed height */}
                <div className="h-[100px] lg:h-[120px] mb-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: getOpacity(0.1) }}
                    transition={{ duration: 0.3 }}
                    className="max-w-xl mx-auto xl:mx-0 text-lg xl:text-xl text-white/70 text-center xl:text-left"
                  >
                    Passionate about crafting innovative digital solutions and transforming ideas into seamless, user-centric experiences. Specializing in modern web technologies and creative development.
                  </motion.p>
                </div>

                {/* Button - Fixed height */}
                <div className="h-[50px] flex justify-center xl:justify-start">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: getOpacity(0.2) }}
                    transition={{ duration: 0.3 }}
                  >
                    <CvBtn />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right column - Avatar */}
            <div className="hidden xl:flex items-center justify-center relative h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="w-[600px] h-[600px] flex items-center justify-center"
                >
                  <Avatar />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Particles */}
      <ParticlesContainer />
    </div>
  );
};

export default Home;
