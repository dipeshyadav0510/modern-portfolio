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
  const [typedText, setTypedText] = useState("Dipesh Yadav");
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

  // Handle typed text updates
  const handleType = (text) => {
    setTypedText(text);
    setTypingProgress(text.length / "Dipesh Yadav".length);
  };

  // Split the typed text into first and last name
  const nameParts = typedText.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts[1] || "";

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
                {/* Mobile Avatar */}
                <div className="xl:hidden flex justify-center mb-8">
                  <motion.div
                    variants={fadeIn("down", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-[120px] h-[120px]"
                  >
                    <Avatar isMobile={true} />
                  </motion.div>
                </div>

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
                    {firstName && lastName && <span className="inline-block w-[0.3em]"></span>}
                    <span className="text-accent">{lastName}</span>
                    {shouldStartTyping && (
                      <TypeWriter 
                        text="Dipesh Yadav"
                        delay={200}
                        onType={handleType}
                        className="opacity-0 absolute"
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
                    Computer Science Devotee
                  </motion.h3>
                </div>

                {/* Description - Fixed height */}
                <div className="min-h-[100px] lg:h-[120px] mb-8 lg:mb-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: getOpacity(0.1) }}
                    transition={{ duration: 0.3 }}
                    className="max-w-xl mx-auto xl:mx-0 text-lg xl:text-xl text-white/70 text-center xl:text-left px-4 xl:px-0"
                  >
                    I view computer science as a medium to express my creativity and build things that can help communities. Learning this subject beyond the curriculum gives me a sense of satisfaction and happiness.
                  </motion.p>
                </div>

                {/* Button - Fixed height */}
                <div className="h-[50px] flex justify-center xl:justify-start mt-4 lg:mt-0">
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
