import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProfilePage.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface Hobby {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Projets personnels fictifs
const personalProjects: Project[] = [
  {
    id: 'project1',
    title: 'Application de recettes',
    description: 'Application web permettant de découvrir, sauvegarder et partager des recettes de cuisine. Inclut une fonctionnalité de planification de repas hebdomadaire.',
    image: 'https://img.freepik.com/free-vector/app-order-food-with-smartphone_23-2148551749.jpg',
    tags: ['React', 'Firebase', 'Styled Components'],
    link: 'https://github.com/username/recipe-app'
  },
  {
    id: 'project2',
    title: 'Extension de navigateur',
    description: "Extension Chrome qui permet de suivre votre temps passé sur différents sites web et d'établir des limites pour améliorer votre productivité.",
    image: 'https://img.freepik.com/free-vector/productivity-concept-illustration_114360-1079.jpg',
    tags: ['JavaScript', 'Chrome API', 'Chart.js'],
    link: 'https://github.com/username/time-tracker'
  },
  {
    id: 'project3',
    title: 'Blog tech personnel',
    description: 'Blog statique où je partage mes connaissances sur le développement web, les nouvelles technologies et mes expériences professionnelles.',
    image: 'https://img.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg',
    tags: ['Next.js', 'Markdown', 'Tailwind CSS'],
    link: 'https://github.com/username/tech-blog'
  }
];

// Centres d'intérêt fictifs
const hobbies: Hobby[] = [
  {
    id: 'hobby1',
    name: 'Photographie',
    icon: 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png',
    description: "J'aime capturer des moments uniques lors de mes voyages. Je me spécialise principalement dans la photographie de paysage et de rue."
  },
  {
    id: 'hobby2',
    name: 'Randonnée',
    icon: 'https://cdn-icons-png.flaticon.com/512/71/71423.png',
    description: "La randonnée me permet de me reconnecter avec la nature et de découvrir de nouveaux horizons. J'essaie de faire au moins une grande randonnée par mois."
  },
  {
    id: 'hobby3',
    name: 'Cuisine',
    icon: 'https://cdn-icons-png.flaticon.com/512/1830/1830839.png',
    description: "J'aime expérimenter de nouvelles recettes et cuisiner pour mes amis. Je m'intéresse particulièrement à la cuisine asiatique et méditerranéenne."
  },
  {
    id: 'hobby4',
    name: 'Lecture',
    icon: 'https://cdn-icons-png.flaticon.com/512/2702/2702134.png',
    description: "Je lis principalement des livres sur le développement personnel, la technologie et la science-fiction. J'essaie de lire au moins un livre par mois."
  }
];

// Langues parlées
const languages = [
  { name: 'Français', level: 'Natif', percent: 100 },
  { name: 'Anglais', level: 'Courant', percent: 90 },
  { name: 'Espagnol', level: 'Intermédiaire', percent: 70 },
  { name: 'Allemand', level: 'Débutant', percent: 30 }
];

const ProfilePage: React.FC = () => {
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  return (
    <div className="profile-page">
      <div className="profile-page__glass-background"></div>
      
      <header className="profile-page__header">
        <div className="profile-page__avatar-container">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Avatar" 
            className="profile-page__avatar" 
          />
        </div>
        <h1 className="profile-page__title">Sharik Mohamed</h1>
        <p className="profile-page__subtitle">Développeur Web Fullstack | Paris, France</p>
        <p className="profile-page__description">
          Passionné par le développement web et les nouvelles technologies.
          Je crée des applications web modernes, intuitives et performantes.
        </p>
      </header>

      <main className="profile-page__content">
        <section className="profile-page__section">
          <h2 className="profile-page__section-title">À Propos de Moi</h2>
          <div className="profile-page__about">
            <div className="profile-page__bio">
              <p>
                Développeur web passionné avec une solide expérience dans la création d'applications web modernes et réactives.
                Je m'efforce constamment d'améliorer mes compétences et de rester à jour avec les dernières technologies et tendances du développement web.
              </p>
              <p>
                J'ai une approche axée sur l'utilisateur et je crois fermement que le meilleur code est celui qui résout efficacement les problèmes tout en offrant une expérience utilisateur exceptionnelle.
              </p>
              <p>
                En dehors du développement, je m'intéresse à la photographie, à la randonnée et à la cuisine. Ces activités me permettent de maintenir un bon équilibre entre vie professionnelle et personnelle.
              </p>
            </div>
            
            <div className="profile-page__details">
              <div className="profile-page__detail-item">
                <span className="profile-page__detail-label">Email:</span>
                <span className="profile-page__detail-value">contact@example.com</span>
              </div>
              <div className="profile-page__detail-item">
                <span className="profile-page__detail-label">Localisation:</span>
                <span className="profile-page__detail-value">Paris, France</span>
              </div>
              <div className="profile-page__detail-item">
                <span className="profile-page__detail-label">Disponibilité:</span>
                <span className="profile-page__detail-value">Freelance / CDI</span>
              </div>
              <div className="profile-page__detail-item">
                <span className="profile-page__detail-label">Langues:</span>
                <div className="profile-page__languages">
                  {languages.map((language, index) => (
                    <div key={index} className="profile-page__language">
                      <div className="profile-page__language-info">
                        <span className="profile-page__language-name">{language.name}</span>
                        <span className="profile-page__language-level">{language.level}</span>
                      </div>
                      <div className="profile-page__language-bar">
                        <div 
                          className="profile-page__language-progress"
                          style={{ width: `${language.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="profile-page__section">
          <h2 className="profile-page__section-title">Mes Projets Personnels</h2>
          <div className="profile-page__projects">
            {personalProjects.map(project => (
              <motion.div 
                key={project.id}
                className="profile-page__project"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="profile-page__project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="profile-page__project-image" 
                  />
                </div>
                <div className="profile-page__project-content">
                  <h3 className="profile-page__project-title">{project.title}</h3>
                  <p className="profile-page__project-description">{project.description}</p>
                  <div className="profile-page__project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="profile-page__project-tag">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="profile-page__project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le projet
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="profile-page__section">
          <h2 className="profile-page__section-title">Centres d'Intérêt</h2>
          <div className="profile-page__hobbies">
            <div className="profile-page__hobby-icons">
              {hobbies.map(hobby => (
                <div 
                  key={hobby.id}
                  className={`profile-page__hobby-icon-container ${activeHobby === hobby.id ? 'profile-page__hobby-icon-container--active' : ''}`}
                  onClick={() => setActiveHobby(hobby.id)}
                >
                  <img 
                    src={hobby.icon} 
                    alt={hobby.name} 
                    className="profile-page__hobby-icon" 
                  />
                  <span className="profile-page__hobby-name">{hobby.name}</span>
                </div>
              ))}
            </div>
            
            <motion.div 
              className="profile-page__hobby-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: activeHobby ? 1 : 0, 
                height: activeHobby ? 'auto' : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              {activeHobby && (
                <div className="profile-page__hobby-content">
                  <h3 className="profile-page__hobby-title">
                    {hobbies.find(h => h.id === activeHobby)?.name}
                  </h3>
                  <p className="profile-page__hobby-description">
                    {hobbies.find(h => h.id === activeHobby)?.description}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage; 