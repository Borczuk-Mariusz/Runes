import { useRef, useState } from "react";
import styles from "../RunicDial.module.css";
import type { RuneButtonProps } from "../types";


export default function RuneButton({
  rune,
  index,
  totalRunes,
  isSelected,
  onClick,
  radiusPercent = 43.333,
  startAngle = -90,
  sizePx,
}: RuneButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Modular Angle & Percentage Polar Coordinates
  const angleDeg = (index * 360) / totalRunes + startAngle;
  const rad = (angleDeg * Math.PI) / 180;

  // Position relative to 50% 50% center
  const xPct = 50 + radiusPercent * Math.cos(rad);
  const yPct = 50 + radiusPercent * Math.sin(rad);

  // Dynamic button size scaling based on rune count if sizePx not explicitly set
  const calculatedSize = sizePx || Math.max(36, Math.min(56.25, 1350 / totalRunes));
  const fontSize = Math.max(18, Math.round(calculatedSize * 0.53));

  // Colors
  const runeColor = rune.color || "#d4af37";
  const shadowColor = runeColor + "80";

  // Dynamic Styles
  const createBackground = (
    opacity1: string,
    opacity2: string,
    opacity3: string,
  ) =>
    `radial-gradient(circle at 30% 30%, ${runeColor}${opacity1} 0%, ${runeColor}${opacity2} 70%, ${runeColor}${opacity3} 100%)`;

  const normalStyle = {
    background: createBackground("40", "20", "10"),
    textShadow: `0 0 10px ${runeColor}`,
    boxShadow: `
      0 4px 8px rgba(0, 0, 0, 0.5),
      inset 0 0 10px rgba(0, 0, 0, 0.3),
      0 0 15px ${shadowColor}
    `,
    borderColor: runeColor,
    color: runeColor,
    left: `${xPct.toFixed(4)}%`,
    top: `${yPct.toFixed(4)}%`,
    width: `${calculatedSize}px`,
    height: `${calculatedSize}px`,
    fontSize: `${fontSize}px`,
  };

  const hoverStyle = {
    background: createBackground("60", "40", "20"),
    textShadow: `0 0 15px ${runeColor}`,
    boxShadow: `
      0 8px 16px rgba(0, 0, 0, 0.8),
      inset 0 0 20px rgba(0, 0, 0, 0.2),
      0 0 25px ${runeColor}80
    `,
  };

  const selectedStyle = {
    background: createBackground("80", "60", "30"),
    textShadow: `0 0 20px ${runeColor}`,
    boxShadow: `
      0 8px 16px rgba(0, 0, 0, 0.8),
      inset 0 0 20px rgba(0, 0, 0, 0.2),
      0 0 30px ${runeColor}
    `,
  };

  const currentStyle = isSelected
    ? { ...normalStyle, ...selectedStyle }
    : isHovered
      ? { ...normalStyle, ...hoverStyle }
      : normalStyle;

  return (
    <div
      ref={buttonRef}
      className={`${styles.runeButton} ${isSelected ? styles.selected : ""}`}
      style={currentStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onClick(rune, buttonRef.current!);
      }}
    >
      {rune.symbol}
    </div>
  );
}
