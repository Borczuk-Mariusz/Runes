import { useEffect, useState } from "react";
import styles from "../RunicDial.module.css";
import type { Particle } from "../types";


export default function Particles({
  explosionSource,
}: {
  explosionSource?: { x: number; y: number; color: string; id: number };
}) {
  const [ambientParticles, setAmbientParticles] = useState<Particle[]>([]);
  const [explosionParticles, setExplosionParticles] = useState<Particle[]>([]);

  // Ambient Particles
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const id = Date.now();
        const newParticle: Particle = {
          id,
          x: Math.random() * 600, // 600 is container width
          y: Math.random() * 600,
          duration: Math.random() * 4 + 4,
          delay: 0,
        };
        setAmbientParticles((prev) => [...prev, newParticle]);

        setTimeout(() => {
          setAmbientParticles((prev) => prev.filter((p) => p.id !== id));
        }, 8000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Explosion Particles
  useEffect(() => {
    if (explosionSource) {
      const newParticles: Particle[] = [];
      const timestamp = Date.now();

      for (let i = 0; i < 12; i++) {
        newParticles.push({
          id: timestamp + i,
          x: explosionSource.x,
          y: explosionSource.y,
          duration: 4,
          delay: Math.random() * 2,
          color: explosionSource.color,
          isExplosion: true,
        });
      }

      setExplosionParticles((prev) => [...prev, ...newParticles]);

      // Cleanup these specific particles after they are done
      setTimeout(() => {
        setExplosionParticles((prev) =>
          prev.filter((p) => p.id < timestamp || p.id >= timestamp + 12),
        );
      }, 4000);
    }
  }, [explosionSource]);

  return (
    <div className={styles.mysticalParticles} id="particles">
      {ambientParticles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      {explosionParticles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            background: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            animationDelay: `${p.delay}s`,
            transform: `translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px)`,
            opacity: 0, 
            animationName: styles.float, 
          }}
        />
      ))}
    </div>
  );
}
