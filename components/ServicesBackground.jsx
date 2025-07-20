import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ServicesBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateGlow = (elementX, elementY) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - elementX, 2) + 
      Math.pow(mousePosition.y - elementY, 2)
    );
    const maxDistance = 400; // Maximum distance for glow effect
    const glowIntensity = Math.max(0, 1 - (distance / maxDistance));
    return glowIntensity;
  };

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Hexagonal grid pattern */}
      {[...Array(6)].map((_, row) => (
        [...Array(8)].map((_, col) => {
          const elementX = (col * 15 - (row % 2) * 7.5) * windowSize.width / 100;
          const elementY = (row * 15) * windowSize.height / 100;
          const glowIntensity = calculateGlow(elementX, elementY);

          return (
            <motion.div
              key={`hex-${row}-${col}`}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (row + col) * 0.2,
              }}
              className="absolute"
              style={{
                left: `${col * 15 - (row % 2) * 7.5}%`,
                top: `${row * 15}%`,
                width: '60px',
                height: '60px',
                background: (row + col) % 2 === 0 ? '#22C55E' : '#EAB308',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                opacity: 0.1 + (glowIntensity * 0.4),
                filter: `blur(8px) brightness(${1 + glowIntensity})`,
                transition: 'opacity 0.2s, filter 0.2s',
              }}
            />
          );
        })
      ))}

      {/* Floating tech symbols */}
      {[...Array(10)].map((_, i) => {
        const elementX = (10 + (i * 8)) * windowSize.width / 100;
        const elementY = (Math.sin(i) * 20 + 50) * windowSize.height / 100;
        const glowIntensity = calculateGlow(elementX, elementY);

        return (
          <motion.div
            key={`symbol-${i}`}
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            className="absolute text-2xl font-mono"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${Math.sin(i) * 20 + 50}%`,
              color: i % 2 === 0 ? '#22C55E' : '#EAB308',
              textShadow: `0 0 10px ${i % 2 === 0 ? '#22C55E' : '#EAB308'},
                          0 0 20px ${i % 2 === 0 ? '#22C55E' : '#EAB308'},
                          0 0 ${30 + (glowIntensity * 20)}px ${i % 2 === 0 ? '#22C55E' : '#EAB308'},
                          0 0 ${40 + (glowIntensity * 30)}px ${i % 2 === 0 ? 'rgba(34,197,94,0.5)' : 'rgba(234,179,8,0.5)'}`,
              filter: `brightness(${1.2 + (glowIntensity * 0.8)})`,
              transition: 'text-shadow 0.2s, filter 0.2s',
            }}
          >
            {['</', '{ }', '/>', '[]', '()', '&&', '||', '=>', '++', '**'][i]}
          </motion.div>
        );
      })}

      {/* Glowing connection lines */}
      {[...Array(5)].map((_, i) => {
        const elementX = (20 + i * 15) * windowSize.width / 100;
        const elementY = windowSize.height / 2;
        const glowIntensity = calculateGlow(elementX, elementY);

        return (
          <motion.div
            key={`line-${i}`}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              height: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
            style={{
              position: 'absolute',
              left: `${20 + i * 15}%`,
              top: '0',
              width: '2px',
              background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? '#22C55E' : '#EAB308'}, transparent)`,
              filter: `blur(${2 + (glowIntensity * 3)}px) brightness(${1 + (glowIntensity * 0.8)})`,
              opacity: 0.1 + (glowIntensity * 0.3),
              transition: 'filter 0.2s, opacity 0.2s',
            }}
          />
        );
      })}
    </div>
  );
};

export default ServicesBackground; 