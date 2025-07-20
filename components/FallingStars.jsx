import { motion } from "framer-motion";

const FallingStars = ({ color = '#06B6D4' }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Falling stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          initial={{ 
            x: `${Math.random() * 100}%`,
            y: -20,
            opacity: 0 
          }}
          animate={{
            y: ['0%', '120%'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
          className="absolute w-[2px] h-[2px]"
          style={{
            background: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default FallingStars; 