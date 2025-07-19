import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Star = ({ x, color, delay }) => (
  <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{
      y: ["0vh", "100vh"],
      opacity: [1, 1, 0]
    }}
    transition={{
      duration: 5, // Increased duration for slower fall
      delay,
      ease: "linear",
      repeat: Infinity,
      times: [0, 0.9, 1]
    }}
    style={{
      position: "absolute",
      left: `${x}%`,
      width: "3px",
      height: "3px",
      backgroundColor: color,
      borderRadius: "50%",
      boxShadow: `0 0 20px 2px ${color}`,
      zIndex: 20
    }}
  >
    {/* Star trail */}
    <motion.div
      style={{
        width: "2px",
        height: "25px", // Slightly longer trail for slower movement
        background: `linear-gradient(to bottom, ${color}, transparent)`,
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
  </motion.div>
);

const FallingStars = () => {
  const [stars] = useState(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      x: 20 + (i * 20) + (Math.random() * 5), // More spread out across the screen
      color: i % 2 === 0 ? "#06B6D4" : "#6366F1",
      delay: i * 1.5 // Sequential delays for more organized falling pattern
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
};

export default FallingStars; 