import styles from "../RunicDial.module.css";
import type { SecretCounterProps } from "../types";

export default function SecretCounter({ count, total }: SecretCounterProps) {
  const isVisible = count > 0;

  return (
    <div
      className={`${styles.secretCounter} ${isVisible ? styles.show : ""}`}
      id="secretCounter"
    >
      Ancient Sequence: <span id="sequenceCount">{count}</span>/{total}
    </div>
  );
}
