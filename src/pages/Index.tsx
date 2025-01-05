import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingText from "../components/TypingText";
import AsciiArt from "../components/AsciiArt";
import StatusMessages from "../components/StatusMessages";
import { MessageCircle } from "lucide-react";

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
                text="→ Status: BULLISH" 
                delay={40}
              />
              <TypingText 
                text="→ Total Supply: 1 billion dickheads" 
                delay={40}
              />
              <TypingText 
                text="→ Locked LP: 100%" 
                delay={40}
              />
            </div>
            
            <div className="mt-4">
              <TypingText 
                text="Type 'help' for available commands..." 
                delay={50}
              />
            </div>

            <div className="mt-4 text-terminal-highlight flex items-center gap-2">
              <MessageCircle className="text-terminal-text" size={20} />
              <a 
                href="https://t.me/dickheadscoin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-terminal-highlight transition-colors"
              >
                <TypingText 
                  text="$ Join us and become a dickhead: t.me/dickheadscoin" 
                  delay={40}
                />
              </a>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Index;