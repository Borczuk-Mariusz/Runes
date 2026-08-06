export interface Rune {
  symbol: string;
  name: string;
  meaning: string;
  color?: string;
  colorName?: string;
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
  points: { x: number; y: number }[]; // Array of center coordinates of selected runes
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

export interface ProphecyScrollProps {
  show: boolean;
  onClose: () => void;
}

export interface RuneButtonProps {
  rune: Rune;
  index: number;
  totalRunes: number;
  isSelected: boolean;
  onClick: (rune: Rune, element: HTMLElement) => void;
}

export interface RunicRingProps {
  selectedRunes: Rune[];
  onRuneClick: (rune: Rune) => void;
}

export interface SecretCounterProps {
  count: number;
  total: number;
}

export interface WhispersProps {
  text: string | null;
}
