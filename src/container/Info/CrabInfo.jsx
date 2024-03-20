import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'crab',
    subtitle: ['a game by Colton Curtis'],    
    tagline: ["Pages Unfold, Guide Wisely!"],
    longDescription:
      'The inception of this hyper-casual mobile experience marked the commencement of a meticulous journey, one rooted in the conceptualization of a whimsical realm where players adeptly navigate through treacherous pages. The protagonist, an intrepid traveler, assumes the spotlight in an audacious adventure teeming with distinctive challenges and surprises. The immersive experience seamlessly melds intuitive controls with enchanting visuals, bringing the mystical world to life through intricacies that capture the imagination.\nModeling and texturing stand as the cornerstone, contributing to the creation of an enchanting environment. Every element, from the textures of the pages to the nuanced challenges, underwent deliberate design to elevate the visual and atmospheric appeal. Animation infuses vitality into the character, endowing it with a charming and dynamic quality that enriches the overall gameplay experience.\nThe coding foundation, executed with exactitude, guarantees not only smooth controls but also a responsive and immersive gameplay experience. Thorough scrutiny of runtime behavior, leveraging advanced techniques and optimizations, ensures a seamless encounter for players. At the core lies the challenge of adeptly navigating through pages, deftly evading the intensifying weight as players progress.\nUI development, a pivotal facet, aims to enhance user interaction seamlessly. From intuitive controls to informative displays, the UI design contributes to a holistic and engaging player experience. Rigorous testing, incorporating code reviews and extensive beta testing, plays a pivotal role in refining dynamics, difficulty levels, and overall enjoyment.\nIterative development permits continuous refinement based on user feedback, culminating in an engaging and captivating hyper-casual mobile experience. As players navigate the unfolding adventure, the allure and challenge of dodging mystical pages, avoiding the crushing weight, unfold in a journey where each level presents a new and thrilling experience.',
    vidURL: videos.crabPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Mobile",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    githubLink: "https://github.com/ImColtonCurtis/crab",
  },
];

const CrabInfo = ({ toggleModal }) => {
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
              <p className="info-mainTitle-text crab-mainTitle-text">{videoSource.title}</p>
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

export default CrabInfo;
