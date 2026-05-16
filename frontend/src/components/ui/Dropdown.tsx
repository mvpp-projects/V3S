import React, { ReactNode, useRef, useEffect, useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  closeOnClick?: boolean;
}

/**
 * Dropdown component with accessible keyboard navigation.
 * Opens a menu on trigger click; supports arrow key navigation and escape to close.
 *
 * @example
 * <Dropdown trigger={<button>Options</button>}>
 *   <button>Edit</button>
 *   <button>Delete</button>
 * </Dropdown>
 */
export default function Dropdown({
  trigger,
  children,
  align = 'left',
  closeOnClick = true,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Focus management for menu items
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!menuRef.current) return;

    const items = menuRef.current.querySelectorAll('button');
    if (items.length === 0) return;

    let nextIndex = 0;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = Math.min(items.length - 1, Array.from(items).indexOf(document.activeElement as HTMLButtonElement) + 1);
        (items[nextIndex] as HTMLButtonElement).focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = Math.max(0, Array.from(items).indexOf(document.activeElement as HTMLButtonElement) - 1);
        (items[nextIndex] as HTMLButtonElement).focus();
        break;
      case 'Home':
        e.preventDefault();
        (items[0] as HTMLButtonElement).focus();
        break;
      case 'End':
        e.preventDefault();
        (items[items.length - 1] as HTMLButtonElement).focus();
        break;
    }
  };

  const handleMenuItemClick = () => {
    if (closeOnClick) {
      setIsOpen(false);
    }
  };

  return (
    <div className="v3s-dropdown" ref={dropdownRef}>
      <button
        className="v3s-dropdown__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {trigger}
      </button>
      {isOpen && (
        <div
          className={`v3s-dropdown__menu v3s-dropdown__menu--${align}`}
          ref={menuRef}
          role="menu"
          onKeyDown={handleKeyDown}
        >
          <div className="v3s-dropdown__items" onClick={handleMenuItemClick}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
