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
    copus-tutor>
    Ah, Dickhead Coin. A natural choice. After all, one cannot have gains without a dick.
    ...

     _____ _____ _____ _  ___    _ ______          _____     _____ ____ _____ _   _ 
    |  __ \\_   _/ ____| |/ / |  | |  ____|   /\\   |  __ \\   / ____/ __ \\_   _| \\ | |
    | |  | || || |    | ' /| |__| | |__     /  \\  | |  | | | |   | |  | || | |  \\| |
    | |  | || || |    |  < |  __  |  __|   / /\\ \\ | |  | | | |   | |  | || | | . \` |
    | |__| || || |____| . \\| |  | | |____ / ____ \\| |__| | | |___| |__| || |_| |\\  |
    |_____/_____\\_____|_|\\_\\_|  |_|______/_/    \\_\\_____/   \\_____\\____/_____|_| \\_|
    ...
    Initializing analysis...
    Brace yourself for the winds of innovation.
  `;

  const frame2 = `
    copus-tutor>
    Ah, Dickhead Coin. A natural choice. After all, one cannot have gains without a dick.
    ...

     _____ _____ _____ _  ___    _ ______          _____     _____ ____ _____ _   _ 
    |  __ \\_   _/ ____| |/ / |  | |  ____|   /\\   |  __ \\   / ____/ __ \\_   _| \\ | |
    | |  | || || |    | ' /| |__| | |__     /  \\  | |  | | | |   | |  | || | |  \\| |
    | |  | || || |    |  < |  __  |  __|   / /\\ \\ | |  | | | |   | |  | || | | . \` |
    | |__| || || |____| . \\| |  | | |____ / ____ \\| |__| | | |___| |__| || |_| |\\  |
    |_____/_____\\_____|_|\\_\\_|  |_|______/_/    \\_\\_____/   \\_____\\____/_____|_| \\_|
    ...
    System analysis complete...
    Loading memetic protocols...
  `;

  return (
    <div className="relative">
      <pre className="text-terminal-highlight text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre font-mono overflow-x-auto text-left">
        {frame === 0 ? frame1 : frame2}
      </pre>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-text opacity-30 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsciiArt;