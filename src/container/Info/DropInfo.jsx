import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'drop',
    subtitle: ['a game by Colton Curtis'],    
    tagline: ["Navigate Chaos, Master the Drop!"],
    longDescription:
      "Crafted by a seasoned game developer in a solo pursuit, 'Drop' unfolds as a meticulously designed digital adventure. Immerse yourself in the challenge of guiding the ball through an array of dynamic obstacles, each level introducing novel twists and challenges. As the sole architect of this interactive experience, the developer intricately shaped the game's mechanics to achieve a seamless fusion of excitement, strategy, and precision.\nThe development process prioritized the creation of a responsive and dynamic gaming environment. Leveraging expert knowledge, the solo developer designed a series of progressively challenging levels, each introducing unique obstacles to engage and captivate players. A carefully calibrated difficulty curve ensures players can progressively master the art of skillfully dropping the ball into the cup.\nVisual aesthetics played a pivotal role in the development journey. The solo developer, well-versed in design principles, crafted a visually stunning and cohesive gaming environment. These aesthetic elements harmonize with the gameplay, elevating overall immersion and enjoyment for players.\nIn tandem with gameplay and visual design, user experience remained a focal point throughout development. Intuitive controls were implemented by the solo developer, providing players with precise navigation capabilities through the challenging obstacles. User feedback was thoughtfully considered and iteratively integrated to refine the gaming experience, guaranteeing a seamless and enjoyable journey for players across various skill levels.\nApproaching the final stages, rigorous testing and debugging underscored the commitment to a polished product. The solo developer systematically tested each level, fine-tuning gameplay mechanics to eliminate potential issues. This meticulous attention to detail ensures a final product that not only meets but exceeds the highest standards of quality.\nThe culmination of this solo endeavor is 'Drop', a captivating game poised to deliver hours of entertainment for players seeking a unique and challenging experience. It stands as a testament to the expertise, creativity, and dedication of a seasoned game developer, inviting players to master the thrilling descent through a world of dynamic obstacles and abyss pitfalls.",
    vidURL: videos.dropPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Mobile",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    githubLink: "https://github.com/ImColtonCurtis/drop",
  },
];

const DropInfo = ({ toggleModal }) => {
  const videoSource = gameInfo[0];
  const githubLogoRef = useRef(null);
    
  // Inline lazy-loaded video component
  const LazyVideo = () => (
    <video
      src={videoSource.vidURL}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      alt="Info Video"      
      className="app__info-header-video"
    />
  );

  const AmbientLazyVideo = () => (
    <video
      src={videoSource.vidURL}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      alt="Ambient Video"
      className="app__info-ambient-video"
    />
  );

  return (
    <motion.div 
      className="app__info"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      
      <motion.div 
        className="app__info-videoDetails"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <motion.div 
          className="app__info-video"
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <div className="app__info-mainTitle">
            <div className="info-centered-text-details">
              <p className="info-mainTitle-text drop-mainTitle-text">{videoSource.title}</p>
              <div className="sdb_title-subtitle-line"></div>
              <p className="longDescription-text">{videoSource.subtitle}</p>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyVideo />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <AmbientLazyVideo />
          </Suspense>
          <button 
            className="exit-button" 
            onClick={toggleModal}
          >
            <motion.div whileHover={{ scale: [1, 1.2] }}>
              <img src={images.exit} alt="Exit Button" className="exit-button-image" />
            </motion.div>
          </button>
        </motion.div>
        <div className="info-text-details">
          <div
            onClick={(e) => {
              const isGitHubLogoClicked = e.target.classList.contains('github-button-image');
              if (isGitHubLogoClicked) {
                window.open(videoSource.githubLink, '_blank');
              }
            }}
            className="app__work_github-button"
          >
            <motion.button
              ref={githubLogoRef}
              className="github-button"
              whileHover={{ scale: [1, 1.2] }}
            >
              <img src={images.gitHubLogo} alt="GitHub Logo" className="github-button-image" />
            </motion.button>
          </div>
          <p className="info-descriptionHeader-text">{videoSource.tagline}</p>
          <div className="longDescription-text">
          {videoSource.longDescription
            .split('\n')
            .map((paragraph, index) => (
              <React.Fragment key={index}>
                <p>{paragraph}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
          <p className="longDescription-text">{videoSource.platformsList}</p>
          <p className="longDescription-text">{videoSource.languageList}</p>
          <p className="longDescription-text">{videoSource.toolsList}</p>
        </div>      
      </motion.div>
    </motion.div>
  );
};

export default DropInfo;
