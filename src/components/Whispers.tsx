import { useEffect, useState } from "react";
import styles from "../RunicDial.module.css";
import type { WhispersProps } from "../types";

export default function Whispers({ text }: WhispersProps) {
  const [visible, setVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (text) {
      setCurrentText(text);
      setVisible(false); 
      setTimeout(() => setVisible(true), 10);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div
      className={`${styles.ancientWhispers} ${visible ? styles.show : ""}`}
      id="whispers"
    >
      {currentText}
    </div>
  );
}
