import { useEffect, useState } from "react";
import { prophecies } from "../runeData";
import styles from "../RunicDial.module.css";
import type { ProphecyScrollProps } from "../types";
import ProphecyMessage from "./ProphecyMessage";
import TheTruth from "./TheTruth";

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export default function ProphecyScroll({
  show = true,
  isSolved = false,
}: ProphecyScrollProps) {
  const [text, setText] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (show && !isSolved) {
      const randomProphecy =
        prophecies[Math.floor(Math.random() * prophecies.length)];
      setText(randomProphecy);
    }
  }, [show, isSolved]);

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <div
      className={`${styles.prophecyScroll} ${show ? styles.show : ""} ${
        isMinimized ? styles.minimized : ""
      }`}
      id="prophecyScroll"
    >
      <button
        className={styles.toggleBtn}
        onClick={toggleMinimize}
        title={isMinimized ? "Expand Prophecy" : "Minimize Prophecy"}
        aria-label={isMinimized ? "Expand Prophecy" : "Minimize Prophecy"}
      >
        {isMinimized ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      <div
        onClick={toggleMinimize}
        style={{
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: isMinimized ? "0" : "10px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {isSolved ? "The Ancient Truth Unveiled" : "Ancient Prophecy"}
      </div>
      {!isMinimized && (
        <div id="prophecyText" style={{ fontSize: "14px", lineHeight: "1.4" }}>
          {isSolved ? <TheTruth /> : <ProphecyMessage message={text} />}
        </div>
      )}
    </div>
  );
}
