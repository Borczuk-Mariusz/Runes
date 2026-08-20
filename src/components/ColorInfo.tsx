import styles from "../RunicDial.module.css";
import type { ColorInfoProps } from "../types";
import { wrapRuneColor } from "../types";
import SelectRunePrompt from "./SelectRunePrompt";

/**
 * ColorInfo component displaying rune color details.
 */
export default function ColorInfo({
  lastSelectedRune,
  hasSelectedRunes,
}: ColorInfoProps) {
  const colorNameObj = lastSelectedRune
    ? wrapRuneColor(lastSelectedRune.colorName, lastSelectedRune.color)
    : undefined;

  return (
    <div className={styles.colorInfo}>
      {!hasSelectedRunes && <SelectRunePrompt />}

      {lastSelectedRune && (
        <>
          <div style={{ padding: "0 10px", marginTop: "10px" }}>
            <strong>{colorNameObj?.toString()}</strong> ({lastSelectedRune.color})
          </div>
          {lastSelectedRune.reasoning && (
            <div
              style={{
                fontSize: "14px",
                padding: "10px 10px",
                opacity: 0.85,
                color: colorNameObj?.illuminated || lastSelectedRune.color,
              }}
            >
              {lastSelectedRune.reasoning}
            </div>
          )}
        </>
      )}
    </div>
  );
}
