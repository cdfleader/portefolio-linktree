import React from 'react';
import { ButtonExample } from '../components';
import { ColorPalette } from '../components/colors';
import './HomePage.css';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="home-page__header">
        <h1 className="home-page__title">Système de Design Dracula</h1>
        <p className="home-page__description">
          Une bibliothèque de composants React inspirée par le thème Dracula, offrant des couleurs vibrantes
          et des composants d'interface utilisateur élégants pour vos applications web modernes.
        </p>
      </header>

      <main className="home-page__content">
        <section className="home-page__section">
          <ColorPalette />
        </section>

        <section className="home-page__section">
          <div className="home-page__buttons-container">
            <h2 className="home-page__section-title">Galerie de Boutons</h2>
            <ButtonExample />
          </div>
        </section>
      </main>

      <footer className="home-page__footer">
        <p>© 2023 - Système de Design Dracula</p>
      </footer>
    </div>
  );
};

export default HomePage; 