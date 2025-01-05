import React, { useState, useEffect } from "react";

const StatusMessages: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  
  const messages = [
    "🚀 WE ARE DICKHEADS 🚀",
    "💎 HODL THE DICK 💎",
    "📈 STATUS: BULLISH AF 📈",
    "🌙 TO THE MOON 🌙",
    "🦍 APES TOGETHER STRONG 🦍"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 text-terminal-highlight font-mono">
      <div className="text-lg md:text-xl font-bold animate-bounce">
        {messages[messageIndex]}
      </div>
    </div>
  );
};

export default StatusMessages;