import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CvPage.css';

// Types pour les expériences
interface Experience {
  id: string;
  titre: string;
  entreprise: string;
  periode: string;
  description: string;
  technologies: string[];
  logo: string;
}

// Types pour les formations
interface Formation {
  id: string;
  diplome: string;
  etablissement: string;
  periode: string;
  description: string;
  logo: string;
}

// Types pour les compétences
interface Competence {
  categorie: string;
  skills: Array<{
    nom: string;
    niveau: number;
  }>;
}

// Données fictives pour les expériences
const experiences: Experience[] = [
  {
    id: 'exp1',
    titre: 'Développeur Full Stack',
    entreprise: 'TechInnovate Solutions',
    periode: 'Janvier 2022 - Présent',
    description: 'Conception et développement d\'applications web modernes. Travail sur des projets clients variés en utilisant les dernières technologies du marché. Collaboration étroite avec les designers et les chefs de produit pour livrer des solutions optimales.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
    logo: 'https://cdn-icons-png.flaticon.com/512/2537/2537338.png'
  },
  {
    id: 'exp2',
    titre: 'Développeur Front-End',
    entreprise: 'DigitalCraft Agency',
    periode: 'Mars 2020 - Décembre 2021',
    description: 'Développement d\'interfaces utilisateur attractives et réactives. Implémentation de designs en suivant les meilleures pratiques d\'accessibilité et de SEO. Optimisation des performances et expérience utilisateur.',
    technologies: ['JavaScript', 'Vue.js', 'CSS/SASS', 'Webpack', 'Figma'],
    logo: 'https://cdn-icons-png.flaticon.com/512/9913/9913429.png'
  },
  {
    id: 'exp3',
    titre: 'Stagiaire Développeur Web',
    entreprise: 'WebGen Studio',
    periode: 'Juin 2019 - Février 2020',
    description: 'Stage de fin d\'études axé sur le développement web. Participation à la création de sites web et applications pour les clients. Apprentissage des fondamentaux du développement web professionnel et des méthodes agiles.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
    logo: 'https://cdn-icons-png.flaticon.com/512/1997/1997930.png'
  }
];

// Données fictives pour les formations
const formations: Formation[] = [
  {
    id: 'form1',
    diplome: 'Master en Développement Web',
    etablissement: 'École Supérieure du Digital',
    periode: '2018 - 2020',
    description: 'Formation approfondie en développement web et mobile. Spécialisation dans les technologies modernes du front-end et back-end. Projet de fin d\'études sur la création d\'une application de gestion de projet.',
    logo: 'https://cdn-icons-png.flaticon.com/512/8074/8074808.png'
  },
  {
    id: 'form2',
    diplome: 'Licence en Informatique',
    etablissement: 'Université de Technologie',
    periode: '2015 - 2018',
    description: 'Formation généraliste en informatique couvrant les bases de la programmation, des algorithmes, des bases de données et des réseaux. Option développement logiciel en dernière année.',
    logo: 'https://cdn-icons-png.flaticon.com/512/2602/2602414.png'
  },
  {
    id: 'form3',
    diplome: 'Baccalauréat Scientifique',
    etablissement: 'Lycée International',
    periode: '2014 - 2015',
    description: 'Baccalauréat avec spécialité mathématiques. Option informatique et sciences du numérique.',
    logo: 'https://cdn-icons-png.flaticon.com/512/2602/2602392.png'
  }
];

// Données fictives pour les compétences
const competences: Competence[] = [
  {
    categorie: 'Langages de programmation',
    skills: [
      { nom: 'JavaScript', niveau: 90 },
      { nom: 'TypeScript', niveau: 85 },
      { nom: 'Python', niveau: 75 },
      { nom: 'PHP', niveau: 65 },
      { nom: 'Java', niveau: 60 }
    ]
  },
  {
    categorie: 'Front-End',
    skills: [
      { nom: 'React', niveau: 90 },
      { nom: 'HTML5/CSS3', niveau: 95 },
      { nom: 'Vue.js', niveau: 80 },
      { nom: 'Angular', niveau: 70 },
      { nom: 'SASS/SCSS', niveau: 85 }
    ]
  },
  {
    categorie: 'Back-End',
    skills: [
      { nom: 'Node.js', niveau: 85 },
      { nom: 'Express', niveau: 80 },
      { nom: 'Django', niveau: 70 },
      { nom: 'Laravel', niveau: 65 },
      { nom: 'Spring Boot', niveau: 60 }
    ]
  },
  {
    categorie: 'Base de données',
    skills: [
      { nom: 'MongoDB', niveau: 85 },
      { nom: 'MySQL', niveau: 80 },
      { nom: 'PostgreSQL', niveau: 75 },
      { nom: 'Firebase', niveau: 80 },
      { nom: 'Redis', niveau: 65 }
    ]
  },
  {
    categorie: 'DevOps & Outils',
    skills: [
      { nom: 'Git', niveau: 90 },
      { nom: 'Docker', niveau: 80 },
      { nom: 'AWS', niveau: 75 },
      { nom: 'CI/CD', niveau: 70 },
      { nom: 'Linux', niveau: 85 }
    ]
  }
];

// Composant pour les expériences
const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="cv-card"
      whileHover={{ y: -5 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="cv-card__header">
        <img src={experience.logo} alt={`Logo ${experience.entreprise}`} className="cv-card__logo" />
        <div className="cv-card__header-text">
          <h3 className="cv-card__title">{experience.titre}</h3>
          <p className="cv-card__subtitle">{experience.entreprise}</p>
          <p className="cv-card__period">{experience.periode}</p>
        </div>
      </div>
      
      <motion.div 
        className="cv-card__content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="cv-card__description">{experience.description}</p>
        <div className="cv-card__technologies">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="cv-card__tag">{tech}</span>
          ))}
        </div>
      </motion.div>
      
      <button className="cv-card__expand-button">
        {isExpanded ? '−' : '+'}
      </button>
    </motion.div>
  );
};

// Composant pour les formations
const FormationCard: React.FC<{ formation: Formation }> = ({ formation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="cv-card"
      whileHover={{ y: -5 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="cv-card__header">
        <img src={formation.logo} alt={`Logo ${formation.etablissement}`} className="cv-card__logo" />
        <div className="cv-card__header-text">
          <h3 className="cv-card__title">{formation.diplome}</h3>
          <p className="cv-card__subtitle">{formation.etablissement}</p>
          <p className="cv-card__period">{formation.periode}</p>
        </div>
      </div>
      
      <motion.div 
        className="cv-card__content"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="cv-card__description">{formation.description}</p>
      </motion.div>
      
      <button className="cv-card__expand-button">
        {isExpanded ? '−' : '+'}
      </button>
    </motion.div>
  );
};

// Composant pour les compétences
const SkillBar: React.FC<{ skill: { nom: string; niveau: number } }> = ({ skill }) => {
  return (
    <div className="skill-bar">
      <div className="skill-bar__info">
        <span className="skill-bar__name">{skill.nom}</span>
        <span className="skill-bar__percent">{skill.niveau}%</span>
      </div>
      <div className="skill-bar__bg">
        <motion.div
          className="skill-bar__progress"
          initial={{ width: 0 }}
          animate={{ width: `${skill.niveau}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const CvPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experiences' | 'formations' | 'competences'>('all');
  
  return (
    <div className="cv-page">
      <div className="cv-page__glass-background"></div>
      
      <header className="cv-page__header">
        <h1 className="cv-page__title">Mon CV</h1>
        <p className="cv-page__description">
          Découvrez mon parcours professionnel et mes compétences
        </p>
        
        <div className="cv-page__tabs">
          <button 
            className={`cv-page__tab ${activeTab === 'all' ? 'cv-page__tab--active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Tout
          </button>
          <button 
            className={`cv-page__tab ${activeTab === 'experiences' ? 'cv-page__tab--active' : ''}`}
            onClick={() => setActiveTab('experiences')}
          >
            Expériences
          </button>
          <button 
            className={`cv-page__tab ${activeTab === 'formations' ? 'cv-page__tab--active' : ''}`}
            onClick={() => setActiveTab('formations')}
          >
            Formations
          </button>
          <button 
            className={`cv-page__tab ${activeTab === 'competences' ? 'cv-page__tab--active' : ''}`}
            onClick={() => setActiveTab('competences')}
          >
            Compétences
          </button>
        </div>
      </header>

      <main className="cv-page__content">
        {(activeTab === 'all' || activeTab === 'experiences') && (
          <section className="cv-page__section">
            <h2 className="cv-page__section-title">Expériences</h2>
            <div className="cv-page__cards">
              {experiences.map(experience => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          </section>
        )}
        
        {(activeTab === 'all' || activeTab === 'formations') && (
          <section className="cv-page__section">
            <h2 className="cv-page__section-title">Formations</h2>
            <div className="cv-page__cards">
              {formations.map(formation => (
                <FormationCard key={formation.id} formation={formation} />
              ))}
            </div>
          </section>
        )}
        
        {(activeTab === 'all' || activeTab === 'competences') && (
          <section className="cv-page__section">
            <h2 className="cv-page__section-title">Compétences</h2>
            <div className="cv-page__skills">
              {competences.map((categorie, index) => (
                <div key={index} className="cv-page__skill-category">
                  <h3 className="cv-page__skill-category-title">{categorie.categorie}</h3>
                  <div className="cv-page__skill-bars">
                    {categorie.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <section className="cv-page__section">
          <h2 className="cv-page__section-title">Télécharger mon CV</h2>
          <div className="cv-page__download">
            <p>Vous préférez consulter mon CV au format PDF ?</p>
            <a 
              href="/CV_Sharik_Mohamed.pdf" 
              download="CV_Sharik_Mohamed.pdf"
              className="cv-page__download-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le CV complet
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CvPage; 