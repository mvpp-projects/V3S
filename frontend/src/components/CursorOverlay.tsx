import React from 'react';
import './CursorOverlay.css';

export type Presence = {
  userId: string;
  x: number; // percentage 0..100 relative to canvas
  y: number; // percentage
  color?: string;
  initials?: string;
};

export default function CursorOverlay({ presences }: { presences: Presence[] }) {
  return (
    <div className="v3s-cursor-overlay" aria-hidden>
      {presences.map(p => (
        <div
          key={p.userId}
          className="v3s-cursor"
          style={{ left: `${p.x}%`, top: `${p.y}%`, borderColor: p.color || 'var(--presence-blue)' }}
        >
          <div className="v3s-cursor__dot" style={{ background: p.color || 'var(--presence-blue)' }} />
          {p.initials && <div className="v3s-cursor__label">{p.initials}</div>}
        </div>
      ))}
    </div>
  );
}
