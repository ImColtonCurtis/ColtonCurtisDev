import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'Lets Get High 3',
    subtitle: ['a game by Colton Curtis'],    
    tagline: ["Elevate Your Skills, Fast!"],
    longDescription:
      "'Let's Get High 3' redefines mobile gaming with its dynamic collection of nanogames, each presenting a unique challenge in a compact 3 to 8-second timeframe. Crafted to be exciting and challenging, this game invites players to elevate their skills through quick thinking, reflexes, and problem-solving.\nAs the developer, I designed each nanogame to provide one-word instructions and contextual clues, encouraging players to decipher the task and complete it within the brief timeframe. The result is a fast-paced, immersive experience that continually tests and hones your cognitive abilities.\nThe challenge lies not just in the speed of execution but also in the diversity of tasks presented across nanogames. From quick reflex tests to intricate problem-solving scenarios, each nanogame offers a fresh and stimulating challenge. The dynamic nature of the game ensures that boredom is never an option as you strive to achieve higher scores and conquer new levels.\n'Let's Get High 3' is more than just a game—it's a testament to the fusion of innovation and entertainment. The nanogames are meticulously designed to engage players, providing a platform where quick thinking and reflexes meet to create an exhilarating gaming experience. How high can you score in this ultimate test of skills?",
    vidURL: videos.letsGetHighPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Mobile",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    githubLink: "https://github.com/ImColtonCurtis/LGH3",
  },
];

const LetsGetHighInfo = ({ toggleModal }) => {
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
              <p className="info-mainTitle-text letsGetHigh-mainTitle-text">{videoSource.title}</p>
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

export default LetsGetHighInfo;
