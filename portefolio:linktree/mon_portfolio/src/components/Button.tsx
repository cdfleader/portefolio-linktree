import React, { useState } from 'react';
import './Button.css';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  Info = 'info',
  Cyan = 'cyan',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple'
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
  SquareLarge = 'squareLarge',
  SquareMedium = 'squareMedium',
  SquareSmall = 'squareSmall',
  SquareXSmall = 'squareXsmall'
}

export enum ButtonShape {
  Rectangle = 'rectangle',
  Square = 'square',
  Pill = 'pill'
}

interface ButtonProps {
  title?: string;
  style?: ButtonStyle;
  size?: ButtonSize;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  className?: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  title = '',
  style = ButtonStyle.Primary,
  size = ButtonSize.Medium,
  shape = ButtonShape.Rectangle,
  icon,
  className = '',
  onClick
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    
    // Vibration API si disponible
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
    
    // Animation de retour après le clic
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
    
    onClick();
  };

  const buttonClasses = [
    'ds-button',
    `ds-button--style-${style}`,
    `ds-button--size-${size}`,
    `ds-button--shape-${shape}`,
    isPressed ? 'ds-button--pressed' : '',
    className
  ].filter(Boolean).join(' ');

  const isSquare = size.includes('Square');

  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
      type="button"
    >
      <div className="ds-button__content">
        {icon && <span className="ds-button__icon">{icon}</span>}
        {title && <span className="ds-button__title">{title.toUpperCase()}</span>}
      </div>
    </button>
  );
};

export default Button; 