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
      }, 2000); // Increased wait time to 2 seconds after typing completes

      return () => clearTimeout(timeout);
    }
  }, [isTyping, messages.length]);

  const handleTypingComplete = () => {
    // Only set isTyping to false when the entire message is done
    setTimeout(() => {
      setIsTyping(false);
    }, 500); // Added small delay after typing completes
  };

  return (
    <div className="mt-6 text-terminal-highlight font-mono">
      <div className="text-lg md:text-xl font-bold h-8">
        {isTyping && (
          <TypingText 
            text={messages[messageIndex]}
            delay={100} // Slightly slower typing speed
            onComplete={handleTypingComplete}
          />
        )}
      </div>
    </div>
  );
};

export default StatusMessages;