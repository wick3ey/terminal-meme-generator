import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingText from "../components/TypingText";
import AsciiArt from "../components/AsciiArt";
import StatusMessages from "../components/StatusMessages";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg p-4 sm:p-8">
      <TerminalWindow>
        <div className="space-y-6">
          <div className="mb-8">
            <TypingText text="Welcome to Dickhead Coin Terminal v1.0.0" />
          </div>
          
          <AsciiArt />
          <StatusMessages />
          
          <div className="space-y-4 mt-8">
            <TypingText 
              text="$ initializing dickhead protocol..." 
              delay={70}
            />
            
            <div className="mt-8 space-y-2">
              <TypingText 
                text="TOKEN INFO:" 
                delay={50}
              />
              <TypingText 
                text="→ Name: Dickhead Coin (DICK)" 
                delay={40}
              />
              <TypingText 
                text="→ Blockchain: Solana" 
                delay={40}
              />
              <TypingText 
                text="→ Status: Ready for launch 🚀" 
                delay={40}
              />
            </div>
            
            <div className="mt-4">
              <TypingText 
                text="Type 'help' for available commands..." 
                delay={50}
              />
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Index;