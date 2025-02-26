import React, { useState } from "react";
import TerminalWindow from "../components/TerminalWindow";
import TypingText from "../components/TypingText";
import AsciiArt from "../components/AsciiArt";
import StatusMessages from "../components/StatusMessages";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const tokenAddress = "D2jR3MEE5qHsZoDFB65QpuNYRQ6bnPmqnxcrhEampump"; // Updated token address

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      toast({
        title: "Address copied",
        description: "Token address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Error",
        description: "Failed to copy address",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg p-2 sm:p-4 md:p-6 lg:p-8 animate-fade-in">
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
            
            <div className="mt-6 sm:mt-8 space-y-2 bg-terminal-dim/10 p-4 rounded-lg border border-terminal-dim/20">
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
            
            <div className="mt-4 bg-terminal-dim/5 p-3 rounded-md border border-terminal-dim/15">
              <TypingText 
                text="Type 'help' for available commands..." 
                delay={50}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <pre className="text-terminal-text text-[0.6rem] xs:text-xs sm:text-sm md:text-base whitespace-pre font-mono mt-6 sm:mt-8 overflow-hidden animate-fade-in">
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
                <div className="mt-4 flex items-center gap-2 bg-terminal-dim/20 p-2 rounded-md hover:bg-terminal-dim/30 transition-colors">
                  <input 
                    type="text" 
                    value={tokenAddress}
                    readOnly
                    className="bg-transparent text-terminal-text flex-1 outline-none text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="hover:bg-terminal-dim/30"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-terminal-highlight" />
                    ) : (
                      <Copy className="h-4 w-4 text-terminal-text" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};

export default Index;