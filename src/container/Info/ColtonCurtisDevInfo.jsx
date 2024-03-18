import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'coltoncurtis.dev',
    subtitle: ['a website by Colton Curtis'],    
    tagline: ["Engineer, Developer, Designer"],
    longDescription:
      "In the digital landscape, a captivating portfolio website serves as a gateway for professionals to exhibit their talents and expertise. Such a platform stands as a testament to the skills and creativity of its creator. Embodying this ethos is a meticulously crafted website tailored for an individual whose prowess extends across engineering, development, and design realms.\nThis portfolio site emerges as a digital canvas, meticulously designed to accentuate the multifaceted talents within the realms of software and game development, as well as web design. Its interface seamlessly integrates various elements, providing visitors with a holistic view of the creator's capabilities.\nAt its core, this platform serves as a showcase of mastery over an array of programming languages, notably JavaScript, CSS, and HTML. Through strategic utilization of these languages, the website not only achieves aesthetic appeal but also ensures seamless functionality, enhancing user experience.\nDriven by innovation, the website harnesses a suite of tools, including React, VScode, and After Effects, to elevate its visual presentation and interactive features. These tools empower the creator to transcend conventional boundaries, delivering a user experience that is both engaging and immersive.\nEmbedded within the website's framework is a testament to collaboration and open-source ethos, exemplified by the provision of a GitHub link. This link invites exploration, fostering a sense of community and transparency, while also providing a glimpse into the creator's ongoing projects and contributions to the wider development community.\nNavigating through the website, visitors are enveloped in an immersive experience that transcends the conventional boundaries of digital portfolios. With each click, they unravel layers of creativity and technical prowess, gaining insights into the mind of a master craftsman. From intricate web designs to groundbreaking software solutions, this platform encapsulates the essence of innovation, firmly establishing its creator as a trailblazer in the digital realm.",
    vidURL: videos.coltonCurtisPreview,
    tags: ['Mobile', 'All'],
    platformsList: "Platform: Web",
    languageList: "Languages: Javascript, CSS, HTML",
    toolsList: "Tools: React, VScode, After Effects",
    githubLink: "https://github.com/ImColtonCurtis/ColtonCurtisDev",
  },
];

const ColtonCurtisDevInfo = ({ toggleModal }) => {
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
              <p className="info-mainTitle-text coltonCurtisDev-mainTitle-text">{videoSource.title}</p>
              <div className="ccd_title-subtitle-line"></div>
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

export default ColtonCurtisDevInfo;
