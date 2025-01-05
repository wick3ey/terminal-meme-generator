import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  delay = 50,
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const randomDelay = delay + (Math.random() * 50 - 25); // Add some randomness
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, randomDelay);

      return () => clearTimeout(timeout);
    } else if (onComplete && displayedText === text) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete, displayedText]);

  return (
    <div className="font-mono text-left">
      <span className="text-terminal-text">{displayedText}</span>
      <span className="terminal-cursor animate-blink">_</span>
    </div>
  );
};

export default TypingText;