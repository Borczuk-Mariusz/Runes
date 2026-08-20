import { useState } from "react";
import styles from "./RunicDial.module.css";
import CenterStoneInfo from "./components/CenterStoneInfo";
import ColorInfo from "./components/ColorInfo";
import Constellation from "./components/Constellation";
import Particles from "./components/Particles";
import ProphecyScroll from "./components/ProphecyScroll";
import RuneButton from "./components/RuneButton";
import SecretCounter from "./components/SecretCounter";
import SelectedRuneDisplay from "./components/SelectedRuneDisplay";
import SequenceDisplay from "./components/SequenceDisplay";
import { runes } from "./runeData";
import type { Rune } from "./types";

export default function RunicDial() {
  // Secret Sequence: Fehu Jera Kenaz Dagaz Hagalaz Ingwaz Mannaz Ansuz Ehwaz
  // ᚠ ᛃ ᚲ ᛞ ᚺ ᛜ ᛗ ᚨ ᛇ
  const secretSequence = [0, 11, 5, 23, 8, 21, 19, 3, 12 ];
  const [selectedRunes, setSelectedRunes] = useState<Rune[]>([]);

  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [explosionSource, setExplosionSource] = useState<
    { x: number; y: number; color: string; id: number } | undefined
  >(undefined);
  const [whisperText, setWhisperText] = useState<string | null>(null);
  const [prophecyVisible, setProphecyVisible] = useState(true);
  const [constellationActive, setConstellationActive] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

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

    // Check for selection
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

    const center = getRuneCenter(runeIndex);
    
    // Particle effect coordinates
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

      const isCorrectSoFar = newSequence.every(
        (val, idx) => val === secretSequence[idx],
      );

      if (newSequence.length === secretSequence.length && isCorrectSoFar) {
        // Sequence Complete
        setTimeout(() => {
          setConstellationActive(true);
          setIsSolved(true);
          setProphecyVisible(true);

          setTimeout(() => {
            setConstellationActive(false);
            setCurrentSequence([]);
            setSelectedRunes([]);
          }, 10000);
        }, 1000);
      } else if (!isCorrectSoFar) {
        setWhisperText("It is not the way ");
      }
    }
  };

  const lastSelectedRune = selectedRunes[selectedRunes.length - 1];

  return (
    <>
      <SecretCounter
        count={currentSequence.length}
        total={secretSequence.length}
      />

      <ColorInfo
        lastSelectedRune={lastSelectedRune}
        hasSelectedRunes={selectedRunes.length > 0}
      />

      <SequenceDisplay currentSequence={currentSequence} runes={runes} />

      <div className={styles.dialContainer}>
        <div className={styles.innerCircle}></div>
        <div className={styles.centerStone}>
          <CenterStoneInfo rune={lastSelectedRune} />
        </div>

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
        isSolved={isSolved}
      />

      <SelectedRuneDisplay
        lastSelectedRune={lastSelectedRune}
        whisperText={whisperText}
      />
    </>
  );
}
