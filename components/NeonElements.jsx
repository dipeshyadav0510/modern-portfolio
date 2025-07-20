import { motion } from "framer-motion";

const NeonElements = () => {
  // Define monochromatic color palette
  const neonColors = {
    primary: {
      color: '#8B5CF6',  // Main purple
      rgb: '139,92,246'
    },
    secondary: {
      color: '#6366F1',  // Indigo
      rgb: '99,102,241'
    },
    accent: {
      color: '#A78BFA',  // Light purple
      rgb: '167,139,250'
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large half circle at left edge */}
      <motion.div
        animate={{
          scale: [0.5, 0.53, 0.5],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-r-full border-2 border-l-0"
        style={{
          left: '-30%',
          top: '50%',
          width: '50%',
          height: '600px',
          transform: 'translateY(-50%)',
          borderColor: neonColors.primary.color,
          boxShadow: `0 0 80px ${neonColors.primary.color}`,
          background: `radial-gradient(circle at left, rgba(${neonColors.primary.rgb},0.15) 0%, transparent 70%)`,
        }}
      />

      {/* Large glowing circles - positioned at edges */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          className="absolute rounded-full border-2"
          style={{
            left: `${[-10, 90, -15, 85, 95][i]}%`,
            top: `${[10, 85, 90, -10, 40][i]}%`,
            width: `${180 + i * 40}px`,
            height: `${180 + i * 40}px`,
            borderColor: i % 2 === 0 ? neonColors.primary.color : neonColors.secondary.color,
            boxShadow: `0 0 60px ${i % 2 === 0 ? neonColors.primary.color : neonColors.secondary.color}`,
            background: `radial-gradient(circle, rgba(${i % 2 === 0 ? neonColors.primary.rgb : neonColors.secondary.rgb},0.15) 0%, transparent 70%)`,
          }}
        />
      ))}

      {/* Glowing lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
          style={{
            position: 'absolute',
            left: `${[-10, 30, 10, 50, 70, 90, 20, 60][i]}%`,
            top: `${[20, 80, 60, 30, 50, 70, 40, 90][i]}%`,
            width: '40%',
            height: '2px',
            transform: `rotate(${i * 45}deg)`,
            background: `linear-gradient(90deg, transparent, ${neonColors.accent.color}, transparent)`,
            boxShadow: `0 0 30px ${neonColors.accent.color}`,
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${5 + (i * 6.5)}%`,
            top: `${Math.sin(i * 0.8) * 30 + 50}%`,
            background: neonColors.primary.color,
            boxShadow: `0 0 20px ${neonColors.primary.color},
                       0 0 40px ${neonColors.primary.color}`,
          }}
        />
      ))}

      {/* Additional gradient orbs spread across the page */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`gradient-${i}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className="absolute blur-2xl"
          style={{
            left: `${[-5, 95, -10, 90, -15, 100][i]}%`,
            top: `${[20, 60, 80, 40, 30, 70][i]}%`,
            width: '300px',
            height: '300px',
            background: i % 2 === 0 
              ? `radial-gradient(circle, rgba(${neonColors.primary.rgb},0.3) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(${neonColors.secondary.rgb},0.3) 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
};

export default NeonElements; 