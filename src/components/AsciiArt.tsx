import React from "react";

const AsciiArt: React.FC = () => {
  return (
    <pre className="text-terminal-text text-xs sm:text-sm md:text-base whitespace-pre overflow-x-auto">
      {`
 ____  ___ ____ _  ___  _ ___    _    ____     ____ ___ ___ _   _ 
|  _ \\|_ _/ ___| |/ / || | ____|  / \\  |  _ \\   / ___|_ _/ _ \\ \\ / /
| | | || | |   | ' /| || |  _|   / _ \\ | | | | | |    | | | | \\ V / 
| |_| || | |___| . \\| || | |___ / ___ \\| |_| | | |___ | | |_| || |  
|____/|___\\____|_|\\_\\___/|_____/_/   \\_\\____/   \\____|___\\___/ |_|  
      `}
    </pre>
  );
};

export default AsciiArt;