import React from "react";
import styles from "../RunicDial.module.css";
import { runes as defaultRunes } from "../runeData";
import type { RunicRingProps } from "../types";
import RuneButton from "./RuneButton";

const RunicRing: React.FC<RunicRingProps> = ({
  runes = defaultRunes,
  selectedRunes,
  onRuneClick,
  radiusPercent = 43.333, // default ~260px / 600px radius
  startAngle = -90,
}) => {
  const totalRunes = runes.length;
  // Calculate dynamic button size so any length of runes fits snugly without overlap
  const buttonSize = Math.max(36, Math.min(56.25, 1350 / Math.max(1, totalRunes)));

  return (
    <div className={styles.ringLayer}>
      {runes.map((rune, index) => {
        const isSelected = selectedRunes.some((r) => r.symbol === rune.symbol);
        return (
          <RuneButton
            key={rune.symbol || index}
            rune={rune}
            index={index}
            totalRunes={totalRunes}
            radiusPercent={radiusPercent}
            startAngle={startAngle}
            sizePx={buttonSize}
            isSelected={isSelected}
            onClick={(r, el) => onRuneClick(r, el)}
          />
        );
      })}
    </div>
  );
};

export default RunicRing;
