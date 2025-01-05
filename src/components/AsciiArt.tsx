import React, { useState, useEffect } from "react";

const AsciiArt: React.FC = () => {
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 2);
    }, 800);
    
    return () => clearInterval(timer);
  }, []);

  const frame1 = `
    /$$$$$$$  /$$$$$$  /$$$$$$  /$$   /$$
   | $$__  $$|_  $$_/ /$$__  $$| $$  /$$/
   | $$  \\ $$  | $$  | $$  \\__/| $$ /$$/ 
   | $$  | $$  | $$  | $$      | $$$$$/  
   | $$  | $$  | $$  | $$      | $$  $$  
   | $$  | $$  | $$  | $$    $$| $$\\  $$ 
   | $$$$$$$/ /$$$$$$|  $$$$$$/| $$ \\  $$
   |_______/ |______/ \\______/ |__/  \\__/
  `;

  const frame2 = `
    /$$$$$$$  /$$$$$$  /$$$$$$  /$$   /$$ 💀
   | $$__  $$|_  $$_/ /$$__  $$| $$  /$$/ 🚀
   | $$  \\ $$  | $$  | $$  \\__/| $$ /$$/  
   | $$  | $$  | $$  | $$      | $$$$$/   
   | $$  | $$  | $$  | $$      | $$  $$   
   | $$  | $$  | $$  | $$    $$| $$\\  $$  
   | $$$$$$$/ /$$$$$$|  $$$$$$/| $$ \\  $$ 
   |_______/ |______/ \\______/ |__/  \\__/ 
  `;

  return (
    <div className="relative">
      <pre className="text-terminal-highlight text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre font-mono animate-pulse">
        {frame === 0 ? frame1 : frame2}
      </pre>
    </div>
  );
};

export default AsciiArt;