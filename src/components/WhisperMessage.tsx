import type { WhisperMessageProps } from "../types";

/**
 * WhisperMessage component for displaying the whisper response/answer when runes are selected.
 */
export default function WhisperMessage({ text }: WhisperMessageProps) {
  if (!text) return null;

  return (
    <div
      style={{
        color: "#d4af37",
        fontSize: "15px",
        fontStyle: "italic",
        padding: "4px 0",
        textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
      }}
    >
      {text}
    </div>
  );
}
