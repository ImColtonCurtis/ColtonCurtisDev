import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'flap',
    subtitle: ['a game by Colton Curtis'],    
    tagline: ["Soar to New Heights!"],
    longDescription:
      "Dive into the immersive creation of 'flap', a solo endeavor where every aspect was carefully designed to deliver a captivating gaming experience. As the sole creator, I took on the challenge of animating characters, modeling the world, and crafting an infinite level spawning algorithm to ensure a seamless and continuously engaging gameplay experience.\nThe characters in 'flap' were brought to life through meticulous animation. Every flap, obstacle interaction, and environmental element was crafted to enhance the sense of fluidity and responsiveness, contributing to the overall enjoyment of the game.\nModeling the world required a keen eye for design principles. I sculpted a visually stunning environment that seamlessly integrates obstacles, background elements, and the ominous purple smoke. The cohesive design enhances immersion and visual appeal, creating an engaging backdrop for the ascent.\nA key element in the development process was the creation of an infinite level spawning algorithm. This algorithm ensures that each level presents a unique and challenging combination of obstacles, offering players a continuously evolving experience. The meticulous coding and testing of this algorithm were critical to achieving a perfect balance between challenge and playability.\nMusic and sound effects were composed and implemented to complement the game's pace and intensity. Each note and sound effect was carefully chosen to enhance the overall gaming experience, creating an auditory dimension that aligns seamlessly with the on-screen action.\nTesting played a pivotal role in refining 'flap' to achieve a fair yet challenging difficulty curve. I meticulously tested each level, adjusting obstacle placements, flap mechanics, and overall pacing to ensure an optimal and satisfying player experience. The iterative testing process aimed at striking the right balance between difficulty and accessibility.\nThe journey from concept to creation in 'flap' stands as a testament to the dedication poured into every aspect of game development. This solo project represents a harmonious fusion of animation, modeling, algorithm design, and audio composition, resulting in a game that invites players to master the flap and soar to new heights.",
    vidURL: videos.flapPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Mobile",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    githubLink: "https://github.com/ImColtonCurtis/flap",
  },
];

const FlapInfo = ({ toggleModal }) => {
  const videoSource = gameInfo[0];
  const githubLogoRef = useRef(null);
    
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
              <p className="info-mainTitle-text flap-mainTitle-text">{videoSource.title}</p>
              <div className="sdb_title-subtitle-line"></div>
              <p className="longDescription-text">{videoSource.subtitle}</p>
            </div>
          </div>
          <video
            src={videoSource.vidURL}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="app__info-header-video"
          />
          <video
            src={videoSource.vidURL}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="app__info-ambient-video"
          />
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

export default FlapInfo;
