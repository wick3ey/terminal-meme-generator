import React, { useState, useEffect } from "react";
import TypingText from "./TypingText";

const StatusMessages: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const messages = [
    "🚀 WE ARE DICKHEADS 🚀",
    "💎 HODL THE DICK 💎",
    "📈 STATUS: BULLISH AF 📈",
    "🌙 TO THE MOON 🌙",
    "🦍 APES TOGETHER STRONG 🦍"
  ];

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 1000); // Wait 1 second after typing completes before starting next message

      return () => clearTimeout(timeout);
    }
  }, [isTyping, messages.length]);

  return (
    <div className="mt-6 text-terminal-highlight font-mono">
      <div className="text-lg md:text-xl font-bold h-8">
        {isTyping && (
          <TypingText 
            text={messages[messageIndex]}
            delay={80}
            onComplete={() => setIsTyping(false)}
          />
        )}
      </div>
    </div>
  );
};

export default StatusMessages;