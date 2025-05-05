import React from 'react';
import './ButtonGroup.css';

interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'small' | 'medium' | 'large';
  align?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = 'horizontal',
  spacing = 'medium',
  align = 'center',
  className = ''
}) => {
  const groupClasses = [
    'ds-button-group',
    `ds-button-group--${orientation}`,
    `ds-button-group--spacing-${spacing}`,
    `ds-button-group--align-${align}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={groupClasses}>
      {React.Children.map(children, (child, index) => (
        <div key={index} className="ds-button-group__item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup; 