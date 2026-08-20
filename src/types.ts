/**
 * Utility to adjust hex color brightness
 * @param hex - Hex color string
 * @param percent - Percentage adjustment
 */
export function adjustBrightness(hex: string | undefined, percent: number): string {
  if (!hex || !hex.startsWith("#")) return hex || "#d4af37";
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split("").map((c) => c + c).join("");
  }
  const num = parseInt(cleanHex, 16);
  if (isNaN(num)) return hex;

  const amt = Math.round(2.55 * percent);
  let r = (num >> 16) + amt;
  let g = ((num >> 8) & 0x00ff) + amt;
  let b = (num & 0x0000ff) + amt;

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Enhanced String object for color names providing .tinted and .illuminated values
 */
export class RuneColorName extends String {
  hex: string;

  constructor(name: string, hex: string) {
    super(name);
    this.hex = hex;
  }

  /** Gets 10% darker hex color */
  get tinted(): string {
    return adjustBrightness(this.hex, -10);
  }

  /** Gets 10% brighter hex color */
  get illuminated(): string {
    return adjustBrightness(this.hex, 10);
  }
}

export function wrapRuneColor(colorName?: string | RuneColorName, color?: string): RuneColorName | undefined {
  if (!colorName) return undefined;
  if (colorName instanceof RuneColorName) return colorName;
  return new RuneColorName(colorName, color || "#d4af37");
}

export interface Rune {
  symbol: string;
  name: string;
  meaning: string;
  color?: string;
  colorName?: string | RuneColorName;
  reasoning?: string;
  whisper?: string;
}

export interface RunicDialProps {
  onRuneSelect?: (rune: Rune) => void;
  initialSequence?: number[];
  showProphecy?: boolean;
}

export interface ParticleProps {
  color: string;
  position: {
    x: number;
    y: number;
  };
}

export interface RuneStoneProps {
  rune: Rune;
  isSelected: boolean;
  onClick: (rune: Rune) => void;
  x?: number;
  y?: number;
}

export interface ConstellationProps {
  active: boolean;
  points: { x: number; y: number }[];
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  color?: string;
  isExplosion?: boolean;
}

export interface PuzzleVariant {
  id: string;
  name: string;
  haiku: string[];
  secretSequence: number[];
  truth: string[];
}

export interface ProphecyScrollProps {
  show?: boolean;
  onClose?: () => void;
  isSolved?: boolean;
  haiku?: string[];
  truth?: string[];
}

export interface TheTruthProps {
  paragraphs?: string[];
}

export interface RuneButtonProps {
  rune: Rune;
  index: number;
  totalRunes: number;
  isSelected: boolean;
  onClick: (rune: Rune, element: HTMLElement) => void;
  radiusPercent?: number;
  startAngle?: number;
  sizePx?: number;
}

export interface RunicRingProps {
  runes?: Rune[];
  selectedRunes: Rune[];
  onRuneClick: (rune: Rune, element?: HTMLElement) => void;
  radiusPercent?: number;
  startAngle?: number;
  showTrack?: boolean;
}

export interface SecretCounterProps {
  count: number;
  total: number;
}

export interface WhispersProps {
  text: string | null;
}

export interface ColorInfoProps {
  lastSelectedRune?: Rune | null;
  whisperText?: string | null;
  hasSelectedRunes?: boolean;
}

export interface WhisperMessageProps {
  text: string | null;
}

export interface CenterStoneInfoProps {
  rune?: Rune | null;
}

export interface SequenceDisplayProps {
  currentSequence: number[];
  runes: Rune[];
  secretMessage?: string;
  showSolution?: boolean;
}

export interface SelectedRuneDisplayProps {
  lastSelectedRune?: Rune | null;
  whisperText?: string | null;
}

export interface ProphecyMessageProps {
  message?: string | string[];
}

