import React from "react";

interface DialProps {
  children?: React.ReactNode;
}

const Dial: React.FC<DialProps> = ({ children }) => {
  return (
    <div
      className="relative w-[600px] h-[600px] shrink-0 rounded-full border-8 border-[#8b4513]
                    bg-[radial-gradient(circle_at_center,_#3a2f2a_0%,_#2a1f1a_70%,_#1a0f0a_100%)]
                    shadow-[0_0_50px_rgba(139,69,19,0.5),inset_0_0_100px_rgba(0,0,0,0.8),0_20px_40px_rgba(0,0,0,0.6)]
                    animate-subtleGlow mx-auto"
    >
      <div
        className="absolute top-[65px] left-[65px] w-[350px] h-[450px] rounded-full 
                    border-4 border-[#654321]
                    bg-[radial-gradient(circle_at_center,_#4a3530_0%,_#3a251a_100%)]
                    shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]"
      >
        {children}
      </div>
    </div>
  );
};

export default Dial;
