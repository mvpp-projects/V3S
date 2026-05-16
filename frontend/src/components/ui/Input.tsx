import React, { InputHTMLAttributes, forwardRef } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

/**
 * Input component using glassmorphism design tokens.
 * Accessible by default: supports labels, error messages, focus management, and ARIA attributes.
 *
 * @example
 * <Input id="name" label="Object name" value={name} onChange={e=>setName(e.target.value)} />
 * <Input id="email" label="Email" type="email" error="Invalid email" />
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...rest }, ref) => {
    const errorId = error ? `${id}-error` : undefined;
    const inputClasses = `v3s-input ${error ? 'v3s-input--error' : ''} ${className}`.trim();

    return (
      <div className="v3s-input-wrapper">
        {label && (
          <label htmlFor={id} className="v3s-input__label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={inputClasses}
          aria-describedby={errorId}
          aria-invalid={!!error}
          {...rest}
        />
        {error && (
          <div id={errorId} className="v3s-input__error" role="alert">
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
