import { motion } from "framer-motion";

const TestimonialsBackground = () => {
  // Leadership and personality traits
  const traits = [
    'PASSIONATE',
    'INNOVATIVE',
    'DIPLOMATIC',
    'DEDICATED',
    'STRATEGIC',
    'VISIONARY',
    'PROACTIVE',
    'COMMITTED',
    'ADAPTABLE',
    'RESOURCEFUL',
    'ANALYTICAL',
    'METHODICAL',
    'INSIGHTFUL',
    'RELIABLE',
    'FOCUSED'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating quote bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`quote-${i}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
          className="absolute"
          style={{
            left: `${[20, 70, 40, 80, 30, 60][i]}%`,
            top: `${[30, 60, 20, 70, 40, 50][i]}%`,
            width: '200px',
            height: '120px',
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
            borderRadius: '20px',
            border: `2px solid ${i % 2 === 0 ? '#0EA5E9' : '#A855F7'}`,
            boxShadow: `0 0 30px ${i % 2 === 0 ? '#0EA5E9' : '#A855F7'}`,
          }}
        />
      ))}

      {/* Floating traits */}
      {traits.map((trait, i) => (
        <motion.div
          key={`trait-${i}`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className="absolute text-sm font-mono tracking-wider"
          style={{
            left: `${5 + (i * 6)}%`,
            top: `${Math.sin(i) * 20 + 50}%`,
            color: i % 2 === 0 ? '#0EA5E9' : '#A855F7',
            textShadow: `0 0 15px ${i % 2 === 0 ? '#0EA5E9' : '#A855F7'}`,
          }}
        >
          {trait}
        </motion.div>
      ))}

      {/* Decorative circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          className="absolute rounded-full"
          style={{
            left: `${[0, 80, 20, 60][i]}%`,
            top: `${[20, 70, 80, 30][i]}%`,
            width: '300px',
            height: '300px',
            border: `3px solid ${i % 2 === 0 ? '#0EA5E9' : '#A855F7'}`,
            boxShadow: `0 0 40px ${i % 2 === 0 ? '#0EA5E9' : '#A855F7'}`,
            opacity: 0.1,
          }}
        />
      ))}

      {/* Floating avatars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`avatar-${i}`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 20}%`,
            bottom: '10%',
            width: '50px',
            height: '50px',
            background: i % 2 === 0 ? '#0EA5E9' : '#A855F7',
            boxShadow: `0 0 20px ${i % 2 === 0 ? '#0EA5E9' : '#A855F7'}`,
            opacity: 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default TestimonialsBackground; 