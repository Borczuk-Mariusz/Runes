import React from "react";
import type { RuneStoneProps } from "../types";

const RuneStone: React.FC<RuneStoneProps> = ({
  rune,
  isSelected,
  onClick,
  x,
  y,
}) => {
  const runeColor = rune.color || "#d4af37";
  const shadowColor = runeColor + "80";

  const isAbsolute = x !== undefined && y !== undefined;

  const style: React.CSSProperties = {
    ...(isAbsolute
      ? {
          left: `${x}px`,
          top: `${y}px`,
          transform: `translate(-50%, -50%) ${
            isSelected ? "scale(1.25)" : "scale(1)"
          }`,
          position: "absolute",
        }
      : {
          transform: isSelected ? "scale(1.25)" : "scale(1)",
          position: "relative",
          margin: "10px",
        }),
    zIndex: isSelected ? 20 : 10,
    background: isSelected
      ? `radial-gradient(circle at 50% 50%, ${runeColor}80 0%, ${runeColor}60 70%, ${runeColor}30 100%)`
      : `radial-gradient(circle at 50% 50%, ${runeColor}40 0%, ${runeColor}20 70%, ${runeColor}10 100%)`,
    borderColor: runeColor,
    color: runeColor,
    textShadow: `0 0 ${isSelected ? "20px" : "10px"} ${runeColor}`,
    boxShadow: isSelected
      ? `0 8px 16px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.2), 0 0 30px ${runeColor}`
      : `0 4px 8px rgba(0, 0, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.3), 0 0 15px ${shadowColor}`,
  };

  return (
    <div
      className={`w-[56.25px] h-[56.25px] shrink-0 rounded-full flex items-center justify-center
            text-3xl font-semibold transition-all duration-500 ease-in-out cursor-pointer border-2`}
      style={style}
      onClick={() => onClick(rune)}
      onMouseEnter={(e) => {
        if (!isSelected) {
          if (isAbsolute) {
            e.currentTarget.style.transform =
              "translate(-50%, -50%) scale(1.1)";
          } else {
            e.currentTarget.style.transform = "scale(1.1)";
          }
          e.currentTarget.style.background = `radial-gradient(circle at 50% 50%, ${runeColor}60 0%, ${runeColor}40 70%, ${runeColor}20 100%)`;
          e.currentTarget.style.textShadow = `0 0 15px ${runeColor}`;
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          if (isAbsolute) {
            e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
          } else {
            e.currentTarget.style.transform = "scale(1)";
          }
          e.currentTarget.style.background = `radial-gradient(circle at 50% 50%, ${runeColor}40 0%, ${runeColor}20 70%, ${runeColor}10 100%)`;
          e.currentTarget.style.textShadow = `0 0 10px ${runeColor}`;
        }
      }}
      data-rune={rune.symbol}
    >
      {rune.symbol}
    </div>
  );
};

export default RuneStone;
