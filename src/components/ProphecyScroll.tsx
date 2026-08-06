import { useEffect, useState } from "react";
import { prophecies } from "../runeData";
import styles from "../RunicDial.module.css";
import type { ProphecyScrollProps } from "../types";


export default function ProphecyScroll({ show, onClose }: ProphecyScrollProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (show) {
      const randomProphecy =
        prophecies[Math.floor(Math.random() * prophecies.length)];
      setText(randomProphecy);
    }
  }, [show]);

  return (
    <div
      className={`${styles.prophecyScroll} ${show ? styles.show : ""}`}
      id="prophecyScroll"
    >
      <div className={styles.closeBtn} onClick={onClose}>
        ✕
      </div>
      <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>
        Ancient Prophecy Revealed
      </div>
      <div id="prophecyText" style={{ fontSize: "14px", lineHeight: "1.4" }}>
        {text}
      </div>
    </div>
  );
}
