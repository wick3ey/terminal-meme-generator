import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, delay = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="font-mono">
      {displayedText}
      <span className="terminal-cursor"></span>
    </div>
  );
};

export default TypingText;