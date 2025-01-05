import React, { useState, useEffect } from "react";
import TypingText from "./TypingText";

const StatusMessages: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const messages = [
    "WE ARE DICKHEADS",
    "HODL THE DICK",
    "STATUS: BULLISH AF",
    "TO THE MOON",
    "APES TOGETHER STRONG"
  ];

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, messages.length]);

  const handleTypingComplete = () => {
    setTimeout(() => {
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="mt-4 sm:mt-6 text-terminal-highlight font-mono">
      <div className="text-base sm:text-lg md:text-xl font-bold h-6 sm:h-8">
        {isTyping && (
          <TypingText 
            text={messages[messageIndex]}
            delay={100}
            onComplete={handleTypingComplete}
          />
        )}
      </div>
    </div>
  );
};

export default StatusMessages;