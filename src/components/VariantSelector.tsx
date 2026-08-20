import { puzzleVariants } from "../runeData";
import type { PuzzleVariant } from "../types";

interface VariantSelectorProps {
  activeVariantIndex: number;
  onSelectVariant: (index: number) => void;
  showSolution: boolean;
  onToggleSolution: (show: boolean) => void;
}

export default function VariantSelector({
  activeVariantIndex,
  onSelectVariant,
  showSolution,
  onToggleSolution,
}: VariantSelectorProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        left: "20px",
        zIndex: 150,
        fontFamily: "'Cinzel', serif",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          color: "#d4af37",
          opacity: 0.8,
          marginBottom: "4px",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        Select Prophecy Variant
      </div>
      <select
        value={activeVariantIndex}
        onChange={(e) => onSelectVariant(Number(e.target.value))}
        style={{
          background: "rgba(30, 20, 15, 0.9)",
          color: "#ffd700",
          border: "1.5px solid #8b4513",
          borderRadius: "8px",
          padding: "6px 12px",
          fontSize: "13px",
          fontFamily: "'Cinzel', serif",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.6), inset 0 0 8px rgba(0, 0, 0, 0.5)",
          outline: "none",
          transition: "all 0.3s ease",
        }}
      >
        {puzzleVariants.map((variant: PuzzleVariant, idx: number) => (
          <option key={variant.id} value={idx} style={{ background: "#2a1f1a", color: "#ffd700" }}>
            {variant.name}
          </option>
        ))}
      </select>

      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "10px",
          fontSize: "12px",
          color: "#d4af37",
          cursor: "pointer",
          userSelect: "none",
          background: "rgba(30, 20, 15, 0.8)",
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid rgba(139, 69, 19, 0.6)",
        }}
      >
        <input
          type="checkbox"
          checked={showSolution}
          onChange={(e) => onToggleSolution(e.target.checked)}
          style={{
            accentColor: "#d4af37",
            width: "15px",
            height: "15px",
            cursor: "pointer",
          }}
        />
        <span>Reveal Secret Solution</span>
      </label>
    </div>
  );
}
