import React from 'react';
import Button, { ButtonStyle, ButtonSize, ButtonShape } from './Button';
import './SocialButton.css';

interface SocialButtonProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  style?: ButtonStyle;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  name,
  url,
  icon,
  style = ButtonStyle.Primary,
  className = ''
}) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      title={name}
      icon={icon}
      style={style}
      size={ButtonSize.Large}
      shape={ButtonShape.Pill}
      onClick={handleClick}
      className={`social-button ${className}`}
    />
  );
};

export default SocialButton; 