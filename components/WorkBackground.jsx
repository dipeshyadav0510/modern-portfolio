import { motion } from "framer-motion";

const WorkBackground = () => {
  // Project-related tech symbols
  const projectSymbols = [
    '<DEV>', // Development
    '[SEC]', // Security
    '{SYS}', // Systems
    '</API>', // API
    '[DB]', // Database
    '<NET>' // Network
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Circular project nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          className="absolute rounded-full"
          style={{
            left: `${[20, 80, 40, 60, 30, 70, 50, 90][i]}%`,
            top: `${[30, 70, 20, 80, 60, 40, 50, 25][i]}%`,
            width: `${80 + Math.sin(i) * 40}px`,
            height: `${80 + Math.sin(i) * 40}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)',
            border: `2px solid ${i % 2 === 0 ? '#F97316' : '#EF4444'}`,
            boxShadow: `0 0 30px ${i % 2 === 0 ? '#F97316' : '#EF4444'}`,
          }}
        />
      ))}

      {/* Connecting lines between nodes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`connection-${i}`}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{
            position: 'absolute',
            left: '0',
            right: '0',
            top: `${10 + i * 8}%`,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#F97316' : '#EF4444'}, transparent)`,
            transform: `rotate(${i * 20}deg)`,
            transformOrigin: 'center',
          }}
        />
      ))}

      {/* Floating project icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`icon-${i}`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          className="absolute text-2xl font-mono"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + Math.sin(i) * 20}%`,
            color: i % 2 === 0 ? '#F97316' : '#EF4444',
            textShadow: `0 0 20px ${i % 2 === 0 ? '#F97316' : '#EF4444'}`,
          }}
        >
          {projectSymbols[i]}
        </motion.div>
      ))}
    </div>
  );
};

export default WorkBackground; 