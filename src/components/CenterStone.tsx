import React from "react";
import styles from "../RunicDial.module.css";

const CenterStone: React.FC = () => {
  return (
    <div
      className={`${styles["absolute-center"]} 
                  w-[120px] h-[120px] shrink-0 rounded-full
                  border-[3px] border-[#8b4513]
                  bg-[radial-gradient(circle_at_30%_30%,_#666666_0%,_#333333_70%,_#111111_100%)]
                  shadow-[0_0_20px_rgba(139,69,19,0.6),inset_0_0_15px_rgba(0,0,0,0.8)]
                  z-0`}
    />
  );
};

export default CenterStone;
