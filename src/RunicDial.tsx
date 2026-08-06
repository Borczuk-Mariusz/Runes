import { useState } from "react";
import styles from "./RunicDial.module.css";
import Constellation from "./components/Constellation";
import Particles from "./components/Particles";
import ProphecyScroll from "./components/ProphecyScroll";
import RuneButton from "./components/RuneButton";
import SecretCounter from "./components/SecretCounter";
import Whispers from "./components/Whispers";
import { runes } from "./runeData";
import type { Rune } from "./types";

export default function RunicDial() {
  // Secret Sequence: Fehu, Wunjo, Sowilo, Dagaz, Jera, Ansuz, Mannaz
  // Indices based on runeData array: 0, 7, 15, 23, 11, 3, 19
  const secretSequence = [0, 7, 15, 23, 11, 3, 19];

  const [selectedRunes, setSelectedRunes] = useState<Rune[]>([]);
  // We track the sequence of INDICES for validation
  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [explosionSource, setExplosionSource] = useState<
    { x: number; y: number; color: string; id: number } | undefined
  >(undefined);
  const [whisperText, setWhisperText] = useState<string | null>(null);
  const [prophecyVisible, setProphecyVisible] = useState(false);
  const [constellationActive, setConstellationActive] = useState(false);

  // Position Helper
  const getRuneCenter = (index: number) => {
    const radius = 260;
    const centerX = 290;
    const centerY = 290;
    const angle = (index * 360) / runes.length;
    const radian = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(radian - Math.PI / 2);
    const y = centerY + radius * Math.sin(radian - Math.PI / 2);
    return { x, y };
  };

  const selectedRunePoints = currentSequence.map((runeIndex) =>
    getRuneCenter(runeIndex),
  );

  const handleRuneClick = (rune: Rune) => {
    const runeIndex = runes.findIndex((r) => r.symbol === rune.symbol);

    // Check if already selected (toggle off)
    if (selectedRunes.some((r) => r.symbol === rune.symbol)) {
      setSelectedRunes((prev) => prev.filter((r) => r.symbol !== rune.symbol));

      const seqIndex = currentSequence.indexOf(runeIndex);
      if (seqIndex > -1) {
        const newSeq = [...currentSequence];
        newSeq.splice(seqIndex, 1);
        setCurrentSequence(newSeq);
      }
      return;
    }

    // Select logic
    setSelectedRunes((prev) => [...prev, rune]);
    setWhisperText(rune.whisper || null);

    // Explosion effect coordinates
    // rect variable removed as it was unused and replaced by getRuneCenter logic
    // We need coordinates relative to the DIAL CONTAINER.
    // Since we don't have a ref to container easily here without prop drilling or context,
    // let's try to approximate or use the event target better.
    // Actually, in RuneButton we positioned it absolutely efficiently.
    // The Particles component expects coordinates.
    // Let's use the standard math for the center of the button, which we know!
    const center = getRuneCenter(runeIndex);
    // Add randomness handled in Particles, just give center.
    setExplosionSource({
      x: center.x,
      y: center.y,
      color: rune.color || "#d4af37",
      id: Date.now(),
    });

    // Sequence Logic
    if (!currentSequence.includes(runeIndex)) {
      const newSequence = [...currentSequence, runeIndex];
      setCurrentSequence(newSequence);

      // Check if correct so far
      const isCorrectSoFar = newSequence.every(
        (val, idx) => val === secretSequence[idx],
      );

      if (newSequence.length === secretSequence.length && isCorrectSoFar) {
        // Sequence Complete
        setTimeout(() => {
          setConstellationActive(true);
          setProphecyVisible(true);

          // Reset after delay
          setTimeout(() => {
            setConstellationActive(false);
            setCurrentSequence([]);
            setSelectedRunes([]);
          }, 10000);
        }, 1000);
      } else if (!isCorrectSoFar) {
        setWhisperText("The pattern shifts... try another way...");
        // Optional: reset sequence immediately or let user figure it out?
        // Original: "Wrong sequence, but don't reset - let the user experiment"
      }
    }
  };

  const lastSelectedRune = selectedRunes[selectedRunes.length - 1];

  return (
    <>
      <Whispers text={whisperText} />
      <SecretCounter
        count={currentSequence.length}
        total={secretSequence.length}
      />

      <div className={styles.colorInfo}>
        <div>Click a rune to see its symbolic color</div>
        {lastSelectedRune && (
          <>
            <div style={{ marginTop: "10px" }}>
              <strong>{lastSelectedRune.colorName}</strong> (
              {lastSelectedRune.color})
            </div>
            <div style={{ fontSize: "14px", marginTop: "5px", opacity: 0.8 }}>
              {lastSelectedRune.reasoning}
            </div>
          </>
        )}
      </div>

      <div className={styles.sequenceDisplay}>
        <div style={{ marginBottom: "10px" }}>
          Current Sequence:{" "}
          {currentSequence.map((idx) => runes[idx].symbol).join(" ")}
        </div>
        <div style={{ fontSize: "0.9em", opacity: 0.7 }}>
          Ancient Code: ᚠ ᚹ ᛊ ᛞ ᛃ ᚨ ᛗ
        </div>
      </div>

      <div className={styles.dialContainer}>
        <div className={styles.innerCircle}></div>
        <div className={styles.centerStone}></div>

        <Constellation
          active={constellationActive}
          points={selectedRunePoints}
        />
        <Particles explosionSource={explosionSource} />

        {runes.map((rune, index) => (
          <RuneButton
            key={rune.symbol}
            rune={rune}
            index={index}
            totalRunes={runes.length}
            isSelected={selectedRunes.some((r) => r.symbol === rune.symbol)}
            onClick={handleRuneClick}
          />
        ))}
      </div>

      <ProphecyScroll
        show={prophecyVisible}
        onClose={() => setProphecyVisible(false)}
      />

      <div className={styles.selectedRune}>
        {lastSelectedRune ? (
          <>
            <div
              style={{
                fontSize: "36px",
                color: lastSelectedRune.color || "#d4af37",
                textShadow: `0 0 20px ${lastSelectedRune.color || "#d4af37"}`,
              }}
            >
              {lastSelectedRune.symbol}
            </div>
            <div className={styles.runeName}>{lastSelectedRune.name}</div>
            <div className={styles.runeMeaning}>{lastSelectedRune.meaning}</div>
          </>
        ) : (
          <div>Select a Rune</div>
        )}
      </div>
    </>
  );
}
