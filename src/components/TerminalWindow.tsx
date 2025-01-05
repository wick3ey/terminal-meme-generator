import React from "react";

interface TerminalWindowProps {
  children: React.ReactNode;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 border border-terminal-text rounded-lg bg-terminal-bg shadow-lg">
      <div className="flex items-center mb-4 border-b border-terminal-text pb-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="ml-4 text-terminal-text text-sm">dickhead-coin-terminal</span>
      </div>
      {children}
    </div>
  );
};

export default TerminalWindow;