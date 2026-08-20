import styles from "../RunicDial.module.css";
import type { SequenceDisplayProps } from "../types";

export default function SequenceDisplay({
  currentSequence,
  runes,
  secretMessage,
  showSolution = false,
}: SequenceDisplayProps) {
  return (
    <div className={styles.sequenceDisplay}>
      {currentSequence.length > 0 && (
        <div style={{ padding: "8px 10px", fontSize: "16px", fontWeight: 600 }}>
          Current Sequence:{" "}
          <span style={{ letterSpacing: "2px", color: "#ffd700" }}>
            {currentSequence.map((idx) => runes[idx]?.symbol).join(" ")}
          </span>
        </div>
      )}
      {showSolution && secretMessage && (
        <div
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            background: "rgba(30, 20, 15, 0.85)",
            border: "1px solid #8b4513",
            borderRadius: "8px",
            marginTop: "6px",
            boxShadow: "0 0 15px rgba(212, 175, 55, 0.3)",
          }}
        >
          <span style={{ opacity: 0.85, marginRight: "8px" }}>Secret Solution:</span>
          <span style={{ letterSpacing: "4px", fontWeight: 600, color: "#ffd700" }}>
            {secretMessage}
          </span>
        </div>
      )}
    </div>
  );
}
