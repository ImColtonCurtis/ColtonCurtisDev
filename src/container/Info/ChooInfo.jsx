import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'choo',
    subtitle: ['a game by Colton Curtis'],    
    tagline: ["The Thrill of Train Leaps!"],
    longDescription:
      'The meticulous journey of crafting my hyper-casual mobile experience began with conceptualizing a dynamic world—leaping between speeding trains, collecting stars, and avoiding falls. My dedication focused on creating an immersive environment from the initial press of the play button.\nCritical steps of modeling and texturing in-game assets aimed to bring the virtual world to life. Meticulously designed details, from the sleek trains to vibrant stars, met the highest standards of quality.\nAnimating in-game models added realism and excitement, ensuring fluid character movements and dynamic interactions. Fine-tuned animations fostered a genuine sense of accomplishment with each successful leap.\nRigorous UI development became integral to the project, enhancing user experience seamlessly. From intuitive controls to informative displays, every aspect underwent meticulous design to ensure accessibility and visual appeal.\nThe coding process, executed in C#, was a cornerstone of my development approach. Meticulous lines of code ensured smooth and responsive controls, complementing optimal performance. Leveraging the Unity Profiler, I delved deep into runtime behavior, optimizing resource usage. This, coupled with advanced techniques, guaranteed that "Choo" exceeded the highest standards. My commitment to creating a seamless experience extended to optimizing graphics, reducing load times, and implementing efficient memory management.\nTesting played a pivotal role in refining the experience. Rigorous code testing eliminated bugs, while extensive beta testing provided insights into dynamics, difficulty levels, and overall enjoyment.\nIterative development allowed me to fine-tune "Choo" based on user insights, creating an immersive adventure. The result is a hyper-casual mobile experience delivering a thrilling sensation from the initial leap to the final star collected.',
    vidURL: videos.chooPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Mobile",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    githubLink: "https://github.com/ImColtonCurtis/choo",
  },
];

const ChooInfo = ({ toggleModal }) => {
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
              <p className="info-mainTitle-text choo-mainTitle-text">{videoSource.title}</p>
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

export default ChooInfo;
