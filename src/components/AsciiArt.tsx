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
    <pre className="text-terminal-highlight text-[0.6rem] xs:text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre font-mono overflow-x-auto text-left">
      {frame === 0 ? frame1 : frame2}
    </pre>
  );
};

export default AsciiArt;