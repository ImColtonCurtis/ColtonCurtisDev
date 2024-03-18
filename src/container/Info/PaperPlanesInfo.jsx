import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'Paper Planes 3D',
    subtitle: ['a game by Colton Curtis'],    
    tagline: ["Soar through Coins, Dodge Pipes!"],
    longDescription:
      "As the solo developer behind 'Paper Planes 3D,' I invite you to join an immersive adventure where the simple joy of flying paper planes takes on a vibrant three-dimensional twist. Crafted with a passion for detail, this game unfolds as a solo endeavor, presenting an exciting journey filled with unique challenges and engaging mechanics.\nThe process began with the animation and modeling of the paper plane, ensuring that its flight through the 3D skies captured the essence of carefree exploration. Each flap and turn was meticulously crafted to offer players an authentic and visually pleasing experience.\nThe world itself underwent a thoughtful transformation, with careful attention given to modeling and texturing. The result is a dynamic environment that enhances the overall visual appeal, creating a lively backdrop for your paper plane adventure.\nBehind the scenes, an intricate infinite level spawning algorithm was developed to ensure a seamless and continually engaging gameplay experience. This algorithm, meticulously written and tested, dynamically generates an infinite set of finite levels, offering a unique and unpredictable challenge with each playthrough.\nThe musical journey of 'Paper Planes 3D' is equally noteworthy. As the developer, I took on the task of writing and recording the music and sound effects, adding a layer of auditory delight to the gaming experience. The goal was to create a soundtrack that complements the thrill of soaring through the 3D skies and evokes a sense of adventure.\nCrafting and designing the UI became a pivotal aspect of the development process. User interface elements were thoughtfully integrated to provide a seamless and intuitive experience. The UI design complements the overall aesthetic, ensuring that players can easily navigate the game while staying immersed in the paper plane adventure.\nExtensive testing was conducted to fine-tune the game's mechanics and difficulty curve. Every level underwent rigorous evaluation to strike the delicate balance between providing a fair challenge and ensuring an enjoyable experience for players of all skill levels.\n'Paper Planes 3D' stands as a testament to the dedication and passion poured into every aspect of game development. From animating the paper plane to crafting the world, developing algorithms, creating music, designing the UI, and extensive testing, this solo endeavor is a celebration of the joy found in the simplicity of flying paper planes in a 3D world.",
    vidURL: videos.paperPlanesPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Mobile",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects",
    githubLink: "https://github.com/ImColtonCurtis/paper_plane",
  },
];

const PaperPlanesInfo = ({ toggleModal }) => {
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
              <p className="info-mainTitle-text paperPlanes-mainTitle-text">{videoSource.title}</p>
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

export default PaperPlanesInfo;
