import React, { useEffect, useState } from "react";
import styles from "../RunicDial.module.css";
import type { ConstellationProps } from "../types";

export default function Constellation({ active, points }: ConstellationProps) {
  const [lines, setLines] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (active && points.length > 1) {
      const newLines = [];
      for (let i = 0; i < points.length - 1; i++) {
        const start = points[i];
        const end = points[i + 1];

        const length = Math.sqrt(
          (end.x - start.x) ** 2 + (end.y - start.y) ** 2,
        );
        const angle =
          (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI;

        newLines.push(
          <div
            key={i}
            className={styles.constellationLine}
            style={
              {
                left: `${start.x}px`,
                top: `${start.y}px`,
                transform: `rotate(${angle}deg)`,
                "--line-length": `${length}px`,
                animationDelay: `${i * 0.3}s`,
              } as React.CSSProperties
            }
          />,
        );
      }
      setLines(newLines);
    } else if (!active) {
      setLines([]);
    }
  }, [active, points]);

  return (
    <div
      className={`${styles.constellationLines} ${active ? styles.active : ""}`}
      id="constellationLines"
    >
      {lines}
    </div>
  );
}
