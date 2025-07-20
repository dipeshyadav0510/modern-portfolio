import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TypeWriter = ({ text, delay = 100, className = "", onType = () => {}, onComplete = () => {} }) => {
  const [displayText, setDisplayText] = useState(text);
  const [currentIndex, setCurrentIndex] = useState(text.length);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Handle initial server-side rendering
  useEffect(() => {
    setIsClient(true);
    setDisplayText('');
    setCurrentIndex(0);
  }, []);

  // Handle typing effect on client-side only
  useEffect(() => {
    if (!isClient) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        const newText = text.slice(0, currentIndex + 1);
        setDisplayText(newText);
        setCurrentIndex(currentIndex + 1);
        onType(newText); // Pass the actual text instead of progress
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, delay, text, onType, onComplete, isClient]);

  // Reset typing effect when route changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [router.asPath]);

  // On server-side or first render, show full text
  if (!isClient) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypeWriter; 