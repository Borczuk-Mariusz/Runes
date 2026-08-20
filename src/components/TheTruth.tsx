import type { TheTruthProps } from "../types";
import { theTruth } from "../runeData";

/**
 * TheTruth component for rendering the ancient truth narrative ("theTruth").
 */
export default function TheTruth({ paragraphs }: TheTruthProps) {
  const content = paragraphs || theTruth;

  return (
    <div
      style={{
        textAlign: "left",
        fontSize: "13.5px",
        lineHeight: "1.7",
        maxHeight: "150px",
        overflowY: "auto",
        paddingRight: "8px",
        color: "#f5e6c8",
      }}
    >
      {content.map((textBlock, idx) => (
        <div key={idx}>
          {textBlock.split("\n\n").map((para, pIdx) => (
            <p key={pIdx} style={{ marginBottom: "12px", textIndent: "1em" }}>
              {para.trim()}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
