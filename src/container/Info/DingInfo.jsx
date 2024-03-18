import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { images, videos } from '../../constants';
import './AppInfo.scss';

const gameInfo = [
  {
    title: 'ding',
    subtitle: ['a device by Colton Curtis'],    
    tagline: ["Elevate Vehicle Security."],
    longDescription:
      "The inception of this groundbreaking project emerged from a collective vision to redefine vehicle security. The collaborative efforts of a dedicated team, consisting of myself and three skilled individuals, combined expertise in various domains, leading to the creation of a comprehensive and sophisticated security solution.\nThe planning phase involved meticulous discussions and brainstorming sessions to outline the project's scope and objectives. Leveraging both waterfall and sprint methodologies, we established a systematic approach that allowed for structured development phases while remaining adaptable to evolving requirements.\nThe device's architecture incorporated cutting-edge technologies, including AWS for robust backend hosting of the website, React for the frontend, and Unity/C# for the WebGL app development. This fusion of platforms ensured a seamless and responsive user experience, from real-time alerts to intuitive data visualization.\nMachine learning played a pivotal role in the development of the device's computer vision capabilities. Utilizing various ML software, we trained the system to recognize potential incidents around a parked vehicle with a high degree of accuracy. This aspect added a layer of sophistication to the device's threat detection capabilities.\nBlender facilitated the modeling of the physical device, ensuring a sleek and ergonomic design. The 3D printing process brought the conceptual design to life, resulting in a tangible prototype that seamlessly integrated with the advanced technological components.\nThe collaborative effort extended to the website development, where AWS served as the backend host and React as the frontend framework. This combination ensured a responsive and visually appealing interface for users accessing the live dual-cam stream and sensor data updates.\nWebGL development in Unity/C# further enhanced the user experience, offering a sophisticated and user-friendly app for data visualization. This aspect showcased our commitment to not only functionality but also a seamless and aesthetically pleasing interface.\nThe development journey embraced challenges and breakthroughs, with each team member contributing their expertise to overcome obstacles. Iterative testing, feedback loops, and refinements characterized our approach, ensuring that the final product met the highest standards of security and user satisfaction.\nIn summary, this multifaceted project stands as a testament to collaborative innovation, combining modern platforms, advanced technologies, and meticulous development methodologies. The result is a comprehensive vehicle security solution that not only detects potential incidents but elevates the user experience through intuitive interfaces and cutting-edge technologies.",
    vidURL: videos.dingPreview,
    tags: ['Mobile', 'Web', 'All'],
    platformsList: "Platform: Mobile and Web",
    languageList: "Languages: C, Python, C#, Javascript, CSS",
    toolsList: "Tools: AWS, React, Unity, Blender, After Effects",
    githubLink: "https://github.com/ImColtonCurtis/A.C.S.S/tree/sensors",
  },
];

const DingInfo = ({ toggleModal }) => {
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
              <p className="info-mainTitle-text ding-mainTitle-text">{videoSource.title}</p>
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

export default DingInfo;
