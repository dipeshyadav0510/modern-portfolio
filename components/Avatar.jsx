import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Avatar = () => {
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
      {/* Outer glow rings */}
      <motion.div
        animate={{
          scale: isHovered ? [1.05, 1.1, 1.05] : [1, 1.05, 1],
          opacity: isHovered ? [0.3, 0.4, 0.3] : [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full border-2"
        style={{
          borderColor: isHovered ? '#06B6D4' : 'rgba(6,182,212,0.4)',
          boxShadow: isHovered 
            ? '0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(6,182,212,0.2)' 
            : '0 0 30px rgba(6,182,212,0.2)',
        }}
      />
      <motion.div
        animate={{
          scale: isHovered ? [1.1, 1.05, 1.1] : [1.05, 1, 1.05],
          opacity: isHovered ? [0.2, 0.3, 0.2] : [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute inset-0 rounded-full border-2"
        style={{
          borderColor: isHovered ? '#3B82F6' : 'rgba(59,130,246,0.3)',
          boxShadow: isHovered 
            ? '0 0 50px rgba(59,130,246,0.3), 0 0 90px rgba(59,130,246,0.15)' 
            : '0 0 40px rgba(59,130,246,0.15)',
        }}
      />

      {/* Avatar container */}
      <motion.div 
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden"
      >
        {/* Dark overlay for better integration */}
        <motion.div 
          animate={{
            opacity: isHovered ? 0.25 : 0.2,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-primary z-10" 
        />
        
        <Image
          src="/avatar.png"
          alt="avatar"
          fill
          priority
          className={`object-cover transition-all duration-800 ${
            isHovered ? 'brightness-75 contrast-125 saturate-90' : 'brightness-70 contrast-125 saturate-85'
          }`}
        />

        {/* Multiple gradient overlays for depth */}
        <motion.div 
          animate={{
            opacity: isHovered ? 0.7 : 0.75,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-20" 
        />
        <motion.div 
          animate={{
            opacity: isHovered ? 0.15 : 0.1,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-accent via-transparent to-[#3B82F6] z-20" 
        />
        <motion.div 
          animate={{
            opacity: isHovered ? 0.4 : 0.4,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-transparent z-20" 
        />
        
        {/* Inner glow */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.7 : 0.6,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 rounded-full z-30"
          style={{
            boxShadow: isHovered
              ? 'inset 0 0 50px rgba(6,182,212,0.15), inset 0 0 30px rgba(59,130,246,0.15)'
              : 'inset 0 0 40px rgba(6,182,212,0.1), inset 0 0 20px rgba(59,130,246,0.1)',
          }}
        />
      </motion.div>

      {/* Decorative elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: isHovered ? [1.2, 1.4, 1.2] : [1, 1.2, 1],
            opacity: isHovered ? [0.3, 0.4, 0.3] : [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${50 + 35 * Math.cos(i * Math.PI / 4)}%`,
            top: `${50 + 35 * Math.sin(i * Math.PI / 4)}%`,
            transform: 'translate(-50%, -50%)',
            background: i % 2 === 0 ? '#06B6D4' : '#3B82F6',
            boxShadow: i % 2 === 0 
              ? `0 0 ${isHovered ? '20px' : '15px'} rgba(6,182,212,${isHovered ? '0.4' : '0.3'})` 
              : `0 0 ${isHovered ? '20px' : '15px'} rgba(59,130,246,${isHovered ? '0.4' : '0.3'})`,
          }}
        />
      ))}

      {/* Additional glow effect */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0.15,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(6,182,212,1) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export default Avatar;
