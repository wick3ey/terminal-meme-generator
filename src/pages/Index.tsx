import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingText from "../components/TypingText";
import AsciiArt from "../components/AsciiArt";
import StatusMessages from "../components/StatusMessages";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg p-2 sm:p-4 md:p-6 lg:p-8">
      <TerminalWindow>
        <div className="space-y-4 sm:space-y-6">
          <div className="mb-4 sm:mb-8">
            <TypingText text="Welcome to Dickhead Coin Terminal v1.0.0" />
          </div>
          
          <AsciiArt />
          <StatusMessages />
          
          <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
            <TypingText 
              text="$ initializing dickhead protocol..." 
              delay={70}
            />
            
            <div className="mt-6 sm:mt-8 space-y-2">
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
              <MessageCircle className="text-terminal-text w-4 h-4 sm:w-5 sm:h-5" />
              <a 
                href="https://t.me/dickheadscoin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-terminal-highlight transition-colors text-sm sm:text-base"
              >
                <TypingText 
                  text="$ Join us and become a dickhead: t.me/dickheadscoin" 
                  delay={40}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <pre className="text-terminal-text text-[0.6rem] xs:text-xs sm:text-sm md:text-base whitespace-pre font-mono mt-6 sm:mt-8 overflow-hidden">
              {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣟⡿⣝⣻⠉⠉⠛⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣇⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⢻⣮⢷⣻⣯⡟⣷⢦⡀⠀⠙⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣤⣾⣿⣿⣶⣄⡀⠀⠀⠀⣰⣿⣛⣾⢻⣼⣳⣿⣳⣻⣭⡟⣿⡄⠀⣹⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⡿⠋⢢⠁⠀⠀⣼⣟⡾⣝⡾⣻⡼⣿⣳⡽⣳⢾⡽⣳⡟⣿⣻⡿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡤⠤⣄⠀⠀⠸⣇⣠⣿⣦⣀⡀⣿⣞⣽⣫⢷⢯⡽⣿⣳⡟⣽⣳⣻⢳⣟⣳⢷⣻⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣏⠀⠀⢹⠀⠀⠀⠉⠙⣿⠋⠁⠀⠙⢾⣧⣟⢯⣯⣟⣽⣷⣻⣳⡽⣳⣟⢾⡽⡾⣽⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡄⠀⢸⠀⠀⠀⠀⠀⠛⠀⠀⠀⠀⢠⣿⣿⣿⡿⣿⢿⣿⣧⡟⣧⢿⡼⣟⣼⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣴⠿⡿⠟⠛⢦⣌⣧⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣟⡾⣷⣟⣯⣿⣞⡿⣿⣯⣷⣿⣽⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⣿⠦⣄⣀⡠⣼⠃⣸⡇⠀⠀⠀⠀⠀⠀⠀⣾⣿⣾⣿⣷⣯⣿⣾⣽⣿⣳⡿⣽⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠘⢧⣄⣀⣀⣀⡼⠁⢿⡆⠀⠀⠀⠀⠀⠀⣸⣿⡿⠛⣻⣿⣽⡻⠿⣿⣿⢯⣟⣷⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠸⣧⣈⣉⣀⡝⢂⡼⣧⡀⠀⠀⠀⠀⢠⣿⡟⡠⢲⣿⣿⡟⠀⣴⣿⣿⣿⣟⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠛⠓⠶⣯⣴⣿⣿⣶⣤⣄⡀⢸⣿⡇⠈⣬⣿⣿⡁⠀⣹⣿⣿⣿⣯⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣷⡀⠹⣿⣿⣇⠀⢿⣿⣿⣿⢷⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣷⣻⢿⣶⣿⡿⣿⣷⣾⣿⣿⢯⣿⣿⡿⠿⠿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣯⢿⣿⣷⣯⣟⣷⣯⣿⣿⣿⣯⣿⡇⠀⠀⠀⣾⣿⣿⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣯⡿⣽⣿⣿⣿⣿⣿⣿⣿⣳⣯⣿⡇⠀⢀⣼⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣽⣻⣿⠿⢿⠟⠛⣿⣟⣷⢯⣿⣧⣴⣿⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣞⡿⣿⡀⠛⢀⣼⣿⣟⣾⣿⢻⣿⣿⣿⣿⣹⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣯⣟⡿⣿⣿⡿⣿⣻⣾⡏⣼⣦⠍⠛⠛⢺⣀⣸⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣞⣿⣳⣯⢿⣷⣻⣽⣷⡀⠻⠀⠀⣀⡼⠁⠀⢈⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⠀⠀⢀⣼⣿⣻⣾⡽⣯⣿⢾⣽⣳⡿⣿⣦⣄⡀⠉⠀⣀⡤⠞⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣷⣾⡿⣟⣿⣿⡾⣽⡷⣯⣿⡽⣷⢿⣷⣻⣟⣿⡿⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣾⣿⣿⣿⣽⢻⣯⣿⣽⡟⣯⣿⣷⣯⣿⣽⣿⣿⢳⣿⣾⣽⣿⡅⠉⠛⣿⣶⡄⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡀⠀⢠⣾⣿⣻⢷⣻⣾⡽⣿⣞⣯⡿⣽⣿⣞⣷⣯⢿⣽⣻⢯⣿⣳⣯⣟⣷⣷⣦⣄⡈⠙⢿⣦⠀⠀⠀
⠀⠀⠀⠀⠀⠉⢩⣿⣿⣳⣿⣻⣽⢾⣻⢷⣯⣷⢿⣻⣟⣿⣿⣾⣿⣳⣿⣻⢷⣯⡷⣿⣾⢷⣯⣟⣿⣦⣼⣿⣇⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣳⡿⣾⣿⣽⣟⣯⣿⢾⣽⣻⢿⣻⣿⣷⣿⣷⣿⣞⣯⣿⣞⡿⣿⣟⡿⣾⣽⢾⣯⣟⣿⣿⠚⠃
⠀⠀⠀⠀⠀⠀⠸⣿⣷⣻⡷⣿⣟⣾⣽⢾⣻⣽⢯⣿⣻⢾⣿⣟⣾⢷⣻⣽⡾⣽⣻⢷⣯⢿⡷⣯⣿⣾⣽⣾⣿⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⣷⣿⣽⣷⡿⣽⡾⣿⣿⡿⣟⣷⢿⣯⣟⡿⣯⣿⢯⣷⣿⣿⣿⡿⣽⣯⢿⣽⣿⣿⣞⣿⠃⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢾⣿⣽⣯⢿⣽⡷⣟⣿⣽⠿⠟⠉⠀⠈⠛⠿⣷⣻⣞⣷⢿⣻⣾⣟⣷⣯⡷⠟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀`}
            </pre>
            <div className="text-terminal-text text-center md:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-6 md:mt-20">
              <TypingText 
                text="DICKHEAD COIN" 
                delay={100}
              />
              <div className="text-terminal-dim text-sm sm:text-base md:text-lg mt-2">
                <TypingText 
                  text="For the dickheads, by the dickheads." 
                  delay={50}
                />
                <br />
                <TypingText 
                  text="Become a dickhead today." 
                  delay={50}
                />
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Index;