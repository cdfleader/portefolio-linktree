import React from 'react';
import { ButtonStyle } from '../components';
import SocialButton from '../components/SocialButton';
import { 
  TwitterIcon, 
  LinkedInIcon, 
  GitHubIcon, 
  InstagramIcon, 
  YouTubeIcon, 
  FacebookIcon,
  TikTokIcon,
  MediumIcon,
  WhatsAppIcon,
  EmailIcon,
  PortfolioIcon
} from '../components/icons';
import './LinkTreePage.css';

const LinkTreePage: React.FC = () => {
  // Liste des réseaux sociaux (vous pourrez modifier les URL plus tard)
  const socialLinks = [
    {
      name: 'Portfolio',
      url: '/portefolio',
      icon: <PortfolioIcon />,
      style: ButtonStyle.Primary
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/',
      icon: <LinkedInIcon />,
      style: ButtonStyle.Secondary
    },
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: <GitHubIcon />,
      style: ButtonStyle.Tertiary
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: <TwitterIcon />,
      style: ButtonStyle.Cyan
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/',
      icon: <InstagramIcon />,
      style: ButtonStyle.Pink
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/',
      icon: <YouTubeIcon />,
      style: ButtonStyle.Error
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/',
      icon: <FacebookIcon />,
      style: ButtonStyle.Info
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/',
      icon: <TikTokIcon />,
      style: ButtonStyle.Purple
    },
    {
      name: 'Medium',
      url: 'https://medium.com/',
      icon: <MediumIcon />,
      style: ButtonStyle.Secondary
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/123456789',
      icon: <WhatsAppIcon />,
      style: ButtonStyle.Success
    },
    {
      name: 'Email',
      url: 'mailto:contact@example.com',
      icon: <EmailIcon />,
      style: ButtonStyle.Orange
    }
  ];

  return (
    <div className="linktree-page">
      <header className="linktree-page__header">
        <div className="linktree-page__profile">
          <div className="linktree-page__avatar">
            {/* Emplacement pour la photo de profil */}
            <div className="linktree-page__avatar-placeholder">S</div>
          </div>
          <h1 className="linktree-page__title">Sharik Mohamed</h1>
          <p className="linktree-page__description">
            Développeur Web Fullstack | Créateur de contenu | Designer
          </p>
        </div>
      </header>

      <main className="linktree-page__content">
        <div className="linktree-page__links">
          {socialLinks.map((link, index) => (
            <SocialButton
              key={index}
              name={link.name}
              url={link.url}
              icon={link.icon}
              style={link.style}
            />
          ))}
        </div>
      </main>
      
      <footer className="linktree-page__footer">
        <p>© 2023 - Sharik Mohamed</p>
      </footer>
    </div>
  );
};

export default LinkTreePage; 