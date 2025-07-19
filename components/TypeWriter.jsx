import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypeWriter = ({ text, className, delay = 100, onComplete, onProgress, onType }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsTypingComplete(false);
    
    let currentIndex = 0;
    let mounted = true;

    const timer = setInterval(() => {
      if (currentIndex < text.length && mounted) {
        const newText = text.substring(0, currentIndex + 1);
        setDisplayText(newText);
        if (onType) onType(newText);
        currentIndex++;
        
        if (onProgress) {
          const progress = currentIndex / text.length;
          onProgress(progress);
        }
      } else if (mounted) {
        clearInterval(timer);
        setIsTypingComplete(true);
        if (onComplete) onComplete();
      }
    }, delay);

    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [text, delay, onComplete, onProgress, onType]);

  return (
    <span className={className}>
      {displayText}
      {!isTypingComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle"
        />
      )}
    </span>
  );
};

export default TypeWriter; 