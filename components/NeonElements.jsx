import { motion } from "framer-motion";

const NeonElements = () => {
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
          borderColor: '#06B6D4',
          boxShadow: '0 0 80px #06B6D4',
          background: 'radial-gradient(circle at left, rgba(6,182,212,0.15) 0%, transparent 70%)',
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
            borderColor: i % 2 === 0 ? '#06B6D4' : '#6366F1',
            boxShadow: `0 0 60px ${i % 2 === 0 ? '#06B6D4' : '#6366F1'}`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(6,182,212,0.15)' : 'rgba(99,102,241,0.15)'} 0%, transparent 70%)`,
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
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#06B6D4' : '#3B82F6'}, transparent)`,
            boxShadow: `0 0 30px ${i % 2 === 0 ? '#06B6D4' : '#3B82F6'}`,
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
            background: i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#3B82F6' : '#6366F1',
            boxShadow: `0 0 20px ${i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#3B82F6' : '#6366F1'},
                       0 0 40px ${i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#3B82F6' : '#6366F1'}`,
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
              ? 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
          }}
        />
      ))}

      {/* Glowing accent points spread across */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`accent-${i}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${[-5, 105, -10, 110, -15, 115, -5, 105][i]}%`,
            top: `${[15, 85, 45, 65, 25, 75, 35, 55][i]}%`,
            background: i % 2 === 0 ? '#06B6D4' : '#6366F1',
            boxShadow: `0 0 30px ${i % 2 === 0 ? '#06B6D4' : '#6366F1'},
                       0 0 50px ${i % 2 === 0 ? '#06B6D4' : '#6366F1'}`,
          }}
        />
      ))}
    </div>
  );
};

export default NeonElements; 