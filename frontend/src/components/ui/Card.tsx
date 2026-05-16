import React, { ReactNode, useState } from 'react';
import './Card.css';

interface CardProps {
  title?: string;
  subtitle?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Card/Panel component using glassmorphism design tokens.
 * Supports collapsible sections with accessible toggle.
 *
 * @example
 * <Card title="Object Properties" collapsible>
 *   <p>Content here</p>
 * </Card>
 */
export default function Card({
  title,
  subtitle,
  collapsible = false,
  defaultCollapsed = false,
  children,
  className = '',
}: CardProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <div className={`v3s-card ${className}`.trim()}>
      {(title || subtitle) && (
        <div className="v3s-card__header">
          <div className="v3s-card__heading">
            <h3 className="v3s-card__title">{title}</h3>
            {subtitle && <p className="v3s-card__subtitle">{subtitle}</p>}
          </div>
          {collapsible && (
            <button
              className="v3s-card__toggle"
              onClick={() => setIsCollapsed(!isCollapsed)}
              aria-expanded={!isCollapsed}
              aria-label={`${isCollapsed ? 'Expand' : 'Collapse'} ${title || 'section'}`}
            >
              <svg
                className="v3s-card__toggle-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}
        </div>
      )}
      {!isCollapsed && <div className="v3s-card__content">{children}</div>}
    </div>
  );
}
