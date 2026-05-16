import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import './Button.css';

type ButtonVariant = 'default' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  loading?: boolean;
  children?: ReactNode;
}

/**
 * Button component using glassmorphism design tokens.
 * Accessible by default: supports keyboard focus, ARIA attributes, and loading/disabled states.
 *
 * @example
 * <Button variant="accent" size="md" onClick={handleSave}>Save</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'md',
      icon,
      loading = false,
      disabled = false,
      type = 'button',
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const variantClass = `v3s-btn--${variant}`;
    const sizeClass = `v3s-btn--${size}`;
    const loadingClass = loading ? 'v3s-btn--loading' : '';
    const allClasses = `v3s-btn ${variantClass} ${sizeClass} ${loadingClass} ${className}`.trim();

    return (
      <button
        ref={ref}
        type={type}
        className={allClasses}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...rest}
      >
        {loading && <span className="v3s-btn__spinner" aria-hidden="true" />}
        {icon && <span className="v3s-btn__icon">{icon}</span>}
        {children && <span className="v3s-btn__text">{children}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
