import React from "react";

interface TerminalWindowProps {
  children: React.ReactNode;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-7xl mx-auto p-2 sm:p-4 border border-terminal-text rounded-lg bg-terminal-bg shadow-lg">
      <div className="flex items-center mb-2 sm:mb-4 border-b border-terminal-text pb-2">
        <div className="flex gap-1 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-3 sm:ml-4 text-terminal-text text-xs sm:text-sm">dickhead-coin-terminal</span>
      </div>
      {children}
    </div>
  );
};

export default TerminalWindow;