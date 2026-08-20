import styles from "../RunicDial.module.css";
import type { SequenceDisplayProps } from "../types";

export default function SequenceDisplay({
  currentSequence,
  runes,
  secretMessage = "ᚠ ᛃ ᚲ ᛞ ᚺ ᛜ ᛗ ᚨ ᛇ",
}: SequenceDisplayProps) {
  return (
    <div className={styles.sequenceDisplay}>
      <div style={{ padding: "20px 10px" }}>
        Current Sequence:{" "}
        {currentSequence.map((idx) => runes[idx]?.symbol).join(" ")}
      </div>
      <div style={{ padding: "10px 10px", fontSize: "0.9em", opacity: 0.7 }}>
        Secret Message: {secretMessage}
      </div>
    </div>
  );
}
