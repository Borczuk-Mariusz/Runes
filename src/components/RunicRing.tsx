import React from "react";
import { runes } from "../runeData";
import type { RunicRingProps } from "../types";
import RuneStone from "./RuneStone";


const RunicRing: React.FC<RunicRingProps> = ({
  selectedRunes,
  onRuneClick,
}) => {
  const radius = 260;
  const centerX = 300;
  const centerY = 300;

  return (
    <>
      {runes.map((rune, index) => {
        const isSelected = selectedRunes.some((r) => r.symbol === rune.symbol);

        let x, y;

        if (isSelected) {
          // If selected, move to center (or slightly offset if multiple?)
          // For now, let's move exactly to center as requested.
          // If strictly to center, they will stack.
          // Let's assume the "active" one is on top.
          x = centerX;
          y = centerY;
        } else {
          const angle = (index * 360) / runes.length;
          const radian = (angle * Math.PI) / 180;
          // - Math.PI / 2 to start from top
          x = centerX + radius * Math.cos(radian - Math.PI / 2);
          y = centerY + radius * Math.sin(radian - Math.PI / 2);
        }

        return (
          <RuneStone
            key={rune.symbol}
            rune={rune}
            isSelected={isSelected}
            onClick={onRuneClick}
            x={x}
            y={y}
          />
        );
      })}
    </>
  );
};

export default RunicRing;
