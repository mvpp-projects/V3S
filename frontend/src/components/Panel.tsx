import React, { PropsWithChildren } from 'react';
import './Panel.css';

type PanelProps = PropsWithChildren<{
  className?: string;
  subtle?: boolean;
}>;

export default function Panel({ children, className = '', subtle = false }: PanelProps) {
  return (
    <div className={`v3s-panel ${subtle ? 'v3s-panel--subtle' : ''} ${className}`}>{children}</div>
  );
}
