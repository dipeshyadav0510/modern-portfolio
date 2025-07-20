import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Fixed binary strings to avoid hydration mismatch
  const binaryStrings = [
    "101010110101",
    "110011001100",
    "111000111000",
    "100110011001",
    "101101101101",
    "110110110110",
    "111111000000",
    "100100100100",
    "101011010101",
    "110101010101"
  ];

  useEffect(() => {
    setIsClient(true);
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateGlow = (x, y) => {
    if (!isClient) return 0;
    const distance = Math.sqrt(Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2));
    const maxDistance = 200;
    return Math.max(0, 1 - distance / maxDistance);
  };

  // Mathematical symbols and equations
  const mathSymbols = [
    '∑(x²)',     // Sum of squares
    '∫f(x)dx',   // Integral
    '∇×F',       // Curl
    'λ=λ₀/n',    // Lambda equation
    'e^(iπ)+1=0',// Euler's identity
    '∂y/∂x',     // Partial derivative
    'x̄±σ',       // Mean and standard deviation
    'P(A∩B)',    // Probability intersection
    'lim x→∞',   // Limit
    'Δx→0',      // Delta approaching zero
    '√(a²+b²)',  // Pythagorean theorem
    'det|A|',    // Determinant
    '∞',         // Infinity
    'π',         // Pi
    'φ',         // Golden ratio
    'dy/dx',     // Derivative
    '∮',         // Line integral
    'ℝ',         // Real numbers
    'θ',         // Theta
    'μ'          // Mean (mu)
  ];

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Binary code rain effect */}
      {binaryStrings.map((binary, i) => (
        <motion.div
          key={`binary-${i}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
          className="absolute text-sm font-mono"
          style={{
            left: `${10 + i * 9}%`,
            color: '#800080',
            writingMode: 'vertical-rl',
            textShadow: `0 0 10px #800080`,
            filter: `brightness(${1 + (calculateGlow((10 + i * 9) * dimensions.width / 100, dimensions.height / 2) * 0.8)})`,
            transition: 'text-shadow 0.2s, filter 0.2s',
          }}
        >
          {binary}
        </motion.div>
      ))}

      {/* Snake animation with larger area for free movement */}
      <motion.div
        className="absolute left-[10%] top-[75%] w-[500px] h-[200px]" // Moved much lower (from 55% to 75%)
      >
        {/* Trophy with more complex path */}
        <motion.div
          className="absolute text-2xl"
          animate={{
            x: [0, 250, 500, 250, 0], // Wider horizontal movement
            y: [0, -80, 0, 80, 0], // Larger vertical movement
            rotate: [0, 180, 360, 180, 0],
            scale: [1, 1.2, 1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            color: '#FFD700',
            textShadow: '0 0 15px #FFD700',
            zIndex: 2
          }}
        >
          🏆
        </motion.div>

        {/* Snake dots with meandering motion */}
        {[...Array(15)].map((_, i) => ( // More dots for longer snake
          <motion.div
            key={`snake-${i}`}
            animate={{
              x: [0, 250, 500, 250, 0],
              y: [
                0,
                -80 * Math.sin((i * Math.PI) / 7), // Complex wave pattern
                0,
                80 * Math.sin((i * Math.PI) / 7),
                0
              ],
              scale: [1, 1.2, 1, 1.2, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2, // Adjusted delay for snake-like following
            }}
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: `${i * 25}px`,
              background: i % 2 === 0 ? '#8B5CF6' : '#EC4899',
              opacity: [0.3, 0.5, 0.3][i % 3],
              boxShadow: `0 0 25px ${i % 2 === 0 ? '#8B5CF6' : '#EC4899'}`,
              filter: 'blur(1px)',
              zIndex: 1
            }}
          />
        ))}

        {/* Enhanced snake trail */}
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(236,73,153,0.1) 50%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'translateY(-50%)',
            top: '50%',
            pointerEvents: 'none'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 250, 0], // Trail follows general movement
            y: [0, -30, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Multiple path indicators for complex movement */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`path-${i}`}
            className="absolute w-full h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'rgba(139,92,246,0.03)' : 'rgba(236,73,153,0.03)'}, transparent)`,
              top: `${30 + i * 20}%`,
              transform: 'translateY(-50%)'
            }}
            animate={{
              y: [-40, 0, 40, 0, -40],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </motion.div>

      {/* Floating tech elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`tech-${i}`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          className="absolute text-2xl font-mono"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + Math.sin(i) * 15}%`,
            color: '#8B5CF6',
            opacity: 0.2,
          }}
        >
          {/* Removed techSymbols as per new_code */}
        </motion.div>
      ))}

      {/* Neural network connections */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`neural-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: '60%',
            width: '2px',
            height: '150px',
            background: 'linear-gradient(to bottom, #8B5CF6, transparent)',
            opacity: 0.2,
          }}
        >
          {[...Array(3)].map((_, j) => (
            <motion.div
              key={`branch-${i}-${j}`}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: j * 0.3,
              }}
              className="absolute w-20 h-[1px]"
              style={{
                top: `${30 + j * 30}%`,
                left: 0,
                background: 'linear-gradient(to right, #8B5CF6, transparent)',
                transform: `rotate(${-30 + j * 30}deg)`,
                transformOrigin: 'left',
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Glowing circuits */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: `${[20, 70, 40, 80][i]}%`,
            top: `${[30, 60, 20, 50][i]}%`,
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, transparent 40%, rgba(139,92,246,0.1) 45%, rgba(139,92,246,0.1) 55%, transparent 60%)',
            border: '2px solid rgba(139,92,246,0.1)',
            transform: `rotate(${i * 45}deg)`,
          }}
        />
      ))}

      {/* Geometric shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
          className="absolute"
          style={{
            right: `${20 + i * 20}%`,
            top: `${30 + i * 20}%`,
            width: '100px',
            height: '100px',
            border: '2px solid rgba(139,92,246,0.1)',
            opacity: 0.2,
            clipPath: i === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : // diamond
                      i === 1 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' : // hexagon
                      'circle(50% at 50% 50%)', // circle
          }}
        />
      ))}

      {/* Young coder inspiration text */}
      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute text-6xl font-bold text-[#8B5CF6]"
        style={{
          right: '5%',
          bottom: '10%',
          opacity: 0.05,
          writingMode: 'vertical-rl',
        }}
      >
        YOUNG CODER
      </motion.div>

      {/* Mathematical formulas floating */}
      {mathSymbols.map((symbol, i) => {
        const elementX = (5 + i * 8) * dimensions.width / 100;
        const elementY = (15 + Math.sin(i * 0.5) * 10) * dimensions.height / 100;
        const glowIntensity = calculateGlow(elementX, elementY);

        return (
          <motion.div
            key={`math-${i}`}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute text-base font-mono tracking-wider"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + Math.sin(i * 0.5) * 10}%`,
              color: '#800080', // Passionate purple
              textShadow: `0 0 ${10 + (glowIntensity * 20)}px #800080`,
              filter: `brightness(${1 + (glowIntensity * 0.8)})`,
              transition: 'text-shadow 0.2s, filter 0.2s',
              opacity: 0.3 + (glowIntensity * 0.3),
            }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Mathematical equations */}
      {[...Array(5)].map((_, i) => {
        const equations = [
          'lim(n→∞) (1 + 1/n)ⁿ = e',
          '∫₀ᵖⁱ sin(x)dx = 2',
          'eiθ = cos(θ) + i·sin(θ)',
          'P(A|B) = P(A∩B)/P(B)',
          'f′(x) = lim(h→0) [f(x+h)-f(x)]/h'
        ];
        
        return (
          <motion.div
            key={`equation-${i}`}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-sm font-mono"
            style={{
              left: `${20 + i * 15}%`,
              top: `${60 + Math.sin(i) * 5}%`,
              color: '#800080',
              textShadow: `0 0 15px #800080`,
              opacity: 0.2,
            }}
          >
            {equations[i]}
          </motion.div>
        );
      })}

      {/* Mathematical matrices */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`matrix-${i}`}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
          }}
          className="absolute text-xs font-mono whitespace-pre"
          style={{
            left: `${15 + i * 30}%`,
            top: `${40}%`,
            color: '#800080',
            textShadow: `0 0 10px #800080`,
          }}
        >
          {`⎡ ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)} ⎤\n` +
           `⎢ ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)} ⎥\n` +
           `⎣ ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * 9)} ⎦`}
        </motion.div>
      ))}
    </div>
  );
};

export default AboutBackground; 