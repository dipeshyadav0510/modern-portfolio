import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Avatar = ({ isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon border */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 ${
          isMobile 
            ? 'inset-[-2px] blur-[2px]' 
            : 'inset-[-4px] xl:inset-[-5px] blur-[3px] xl:blur-[4px]'
        } z-0`}
      />

      {/* Avatar container */}
      <motion.div 
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative rounded-full overflow-hidden z-10 ${
          isMobile ? 'w-[120px] h-[120px]' : 'w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]'
        }`}
      >
        {/* Subtle gradient overlay for depth */}
        <motion.div 
          animate={{
            opacity: isHovered ? 0.1 : 0.15,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent z-0" 
        />
        
        <Image
          src="/avatar.png"
          alt="avatar"
          fill
          priority
          className={`object-cover transition-all duration-800 z-10 relative ${
            isHovered ? 'brightness-105 contrast-105' : 'brightness-100 contrast-100'
          }`}
        />
      </motion.div>

      {/* Additional outer glow */}
      <motion.div
        animate={{
          scale: [1.1, 1.15, 1.1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className={`absolute rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 ${
          isMobile 
            ? 'inset-[-8px] blur-[8px]' 
            : 'inset-[-16px] xl:inset-[-20px] blur-[12px] xl:blur-[16px]'
        } -z-10`}
      />
    </motion.div>
  );
};

export default Avatar;
