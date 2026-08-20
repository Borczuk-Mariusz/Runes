import styles from "../RunicDial.module.css";
import type { SelectedRuneDisplayProps } from "../types";

export default function SelectedRuneDisplay({
  lastSelectedRune,
  whisperText,
}: SelectedRuneDisplayProps) {
  const activeWhisper = whisperText || lastSelectedRune?.whisper;

  return (
    <div className={styles.selectedRune}>
      {lastSelectedRune && activeWhisper ? (
        <div
          style={{
            fontStyle: "italic",
            fontSize: "15px",
            color: "#d4af37",
            letterSpacing: "0.5px",
            textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          "{activeWhisper}"
        </div>
      ) : (
        <div>Select a Rune</div>
      )}
    </div>
  );
}
