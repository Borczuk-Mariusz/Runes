import type { CenterStoneInfoProps } from "../types";

/**
 * CenterStoneInfo component rendered inside the center stone of the dial.
 * Displays the rune symbol (in its color), rune name, and meaning directly inside the stone.
 */
export default function CenterStoneInfo({ rune }: CenterStoneInfoProps) {
  if (!rune) return null;

  return (
    <>
      {/* Inside the stone: Symbol and Name */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          height: "100%",
          padding: "8px",
          boxSizing: "border-box",
          fontFamily: "'Cinzel', serif",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Rune Symbol in its color */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: rune.color || "#d4af37",
            textShadow: `0 0 16px ${rune.color || "#d4af37"}`,
            lineHeight: "1.1",
          }}
        >
          {rune.symbol}
        </div>

        {/* Rune Name */}
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#d4af37",
            marginTop: "4px",
            letterSpacing: "1px",
            textShadow: "0 0 8px rgba(212, 175, 55, 0.6)",
          }}
        >
          {rune.name}
        </div>
      </div>

      {/* Under the stone: Rune Meaning */}
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 12px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Cinzel', serif",
          fontSize: "13px",
          fontStyle: "italic",
          color: "#d4af37",
          textShadow:
            "0 0 10px rgba(0, 0, 0, 0.9), 0 0 5px rgba(212, 175, 55, 0.5)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {rune.meaning}
      </div>
    </>
  );
}
