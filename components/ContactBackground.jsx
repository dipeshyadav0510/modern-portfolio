import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ContactBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateGlow = (x, y) => {
    const distance = Math.sqrt(Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2));
    const maxDistance = 200;
    return Math.max(0, 1 - distance / maxDistance);
  };

  // Elegant design elements
  const elements = [
    '•',      // Simple dot
    '○',      // Circle
    '◇',      // Diamond
    '△',      // Triangle
    '□',      // Square
    '⬡',      // Hexagon
    '✧',      // Star
    '❋',      // Flower
    '◈',      // Diamond with dot
    '◎',      // Target
  ];

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      {elements.map((element, i) => {
        const elementX = (10 + i * 8) * dimensions.width / 100;
        const elementY = (20 + Math.sin(i) * 10) * dimensions.height / 100;
        const glowIntensity = calculateGlow(elementX, elementY);

        return (
          <motion.div
            key={`element-${i}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute text-2xl"
            style={{
              left: `${elementX}px`,
              top: `${elementY}px`,
              color: '#8B5CF6',
              textShadow: `0 0 ${10 + (glowIntensity * 20)}px #8B5CF6`,
              filter: `brightness(${1 + (glowIntensity * 0.8)})`,
              transition: 'text-shadow 0.2s, filter 0.2s',
            }}
          >
            {element}
          </motion.div>
        );
      })}

      {/* Subtle gradient lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] w-[200px]"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)',
            transform: `rotate(${i * 15}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: '#8B5CF6',
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Subtle wave effect */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent)',
        }}
        animate={{
          x: [-100, 100, -100],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ContactBackground; 