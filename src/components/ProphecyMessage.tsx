import type { ProphecyMessageProps } from "../types";
import { prophecies } from "../runeData";

/**
 * ProphecyMessage component displaying the ancient prophecy poem/lines.
 */
export default function ProphecyMessage({ message }: ProphecyMessageProps) {
  const lines: string[] = message
    ? Array.isArray(message)
      ? message
      : message.split("\n")
    : prophecies;

  return (
    <div
      style={{
        lineHeight: "1.6",
        fontStyle: "italic",
        letterSpacing: "0.5px",
        padding: "8px 0",
      }}
    >
      {lines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  );
}
