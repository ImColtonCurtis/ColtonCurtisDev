import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { images, videos } from '../../constants';
import { ChooInfo, ColtonCurtisDevInfo, CrabInfo, DingInfo, DropInfo, FlapInfo, LetsGetHighInfo, PaperPlanesInfo } from '../../container';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const works = [
    { title: 'choo', 
    shortDescription: "Immerse in hyper-casual thrills—leap between trains, collect stars in a solo mobile adventure!",
    longDescription: "Dive into a meticulously crafted hyper-casual sensation, leaping between speeding trains, collecting stars, and avoiding unfortunate falls. Achieve the top spot in this adrenaline-fueled solo project.",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    subtitle: "Game Design & Development",
    vidURL: videos.chooThumbnail,
    mainTitleClass: 'choo-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/choo",
    tags: ['Mobile', 'All'] },
    { title: 'coltoncurtis.dev', 
    shortDescription: "Portfolio website for Colton Curtis!",
    longDescription: "Portfolio website for engineer, developer, and designer Colton Curtis. Crafted to showcase his skills in general software development, game development, and web development.",
    languageList: "Languages: Javascript, CSS, HTML",
    toolsList: "Tools: React, VScode, After Effects",
    subtitle: "Web Design & Development",
    vidURL: videos.coltonCurtisThumbnail,
    mainTitleClass: 'coltonCurtisDev-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/ColtonCurtisDev",
    tags: ['Web', 'All'] },
    { title: 'crab', 
    shortDescription: "Master the art of navigating mystical pages in this mobile challenge.",
    longDescription: "Embark on a strategic journey, skillfully navigating treacherous pages. Guide the crab through an intense mobile adventure, avoiding the peril of crushing weight. Navigate with precision to claim victory.",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    subtitle: "Game Design & Development",
    vidURL: videos.crabThumbnail,
    mainTitleClass: 'crab-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/crab",
    tags: ['Mobile', 'All'] },
    { title: 'ding', 
    shortDescription: "Advanced sensors facilitate  instant alerts for enhanced vehicle security.",
    longDescription: "Experience advanced security with a sensor-packed device. Detect incidents and receive SMS alerts. Access live dual-cam stream and sensor updates via a user-friendly website link and WebGL app.",
    languageList: "Languages: C, Python, C#, Javascript, CSS",
    toolsList: "Tools: AWS, React, Unity, Blender, After Effects",
    subtitle: "Product Design & Development",
    vidURL: videos.dingThumbnail,
    mainTitleClass: 'ding-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/A.C.S.S/tree/sensors",
    tags: ['Mobile', 'Web', 'All'] },
    { title: 'drop', 
    shortDescription: "Drop the ball through wild obstacles into the cup. Avoid the abyss!",
    longDescription: "Engage in a thrilling challenge—guide the ball through crazy obstacles into the cup. Master the skill and avoid abyss pitfalls for an intense gaming experience.",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    subtitle: "Game Design & Development",
    vidURL: videos.dropThumbnail,
    mainTitleClass: 'drop-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/drop",
    tags: ['Mobile', 'All'] },
    { title: 'flap',
    shortDescription: "Navigate obstacles, avoid the purple smoke monsters, and flap your way up!",
    longDescription: "Set forth on an exhilarating journey where you navigate a revolving set of obstacles to ascend to the highest peaks. Challenge yourself to master the flap while steering clear of the disruptive purple smoke. How high can your skills take you in this thrilling adventure?",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    subtitle: "Game Design & Development",
    vidURL: videos.flapThumbnail,
    mainTitleClass: 'flap-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/flap",
    tags: ['Mobile', 'All'] },
  { title: 'Lets Get High 3', 
    shortDescription: "Quick, challenging nanogames test reflexes and problem-solving!",
    longDescription: "An exhilarating mobile game featuring a collection of fast-paced nanogames. With one-word instructions and contextual clues, each nanogame lasts 3 to 8 seconds, demanding quick thinking, reflexes, and problem-solving!",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    subtitle: "Game Design & Development",
    vidURL: videos.letsGetHighThumbnail,
    mainTitleClass: 'letsGetHigh-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/LGH3",
    tags: ['Mobile', 'All'] },
    { title: 'Paper Planes 3D', 
    shortDescription: "Collect coins, dodge obstacles, and fly. Easy, engaging fun for all!",
    longDescription: "Experience the thrill of collecting coins and dodging obstacles while flying paper planes in a vibrant three-dimensional environment. With simple yet engaging tap and drag mechanics, this game offers easy and enjoyable fun for players of all!",
    languageList: "Language: C#",
    toolsList: "Tools: Unity, Blender, After Effects, Ableton",
    subtitle: "Game Design & Development",
    vidURL: videos.paperPlanesThumbnail,
    mainTitleClass: 'paperPlanes-mainTitle-text',
    githubLink: "https://github.com/ImColtonCurtis/paper_plane",
    tags: ['Mobile', 'All'] },
];

const Work = ({ toggleModal, modal }) => {
  const [filterWork, setFilterWork] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState('Platforms');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const containerRef = useRef(null);
  const dragStartX = useRef(null);
  const isDragging = useRef(false);
  const animationControls = useAnimation();
  const dropdownRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    if (selectedPlatform === 'Platforms') {
      setFilterWork(works);
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(selectedPlatform)));
    }
    setActiveIndex(0);
  }, [selectedPlatform]);

  useEffect(() => {
    // Pause all videos first
    Object.values(videoRefs.current).forEach(video => {
      video.pause();
    });
  
    // Play the video of the active work item
    if (filterWork.length > 0) {
      const activeVideo = videoRefs.current[filterWork[activeIndex].title];
      activeVideo.play();
    }
  }, [activeIndex, filterWork]);

  const handleWorkFilter = useCallback((item) => {
    setSelectedPlatform((prevSelectedPlatform) => {
      if (prevSelectedPlatform !== item) {
        animationControls.start({ x: 0 }); // Reset position on filter change
      }
      return item;
    });
    setSelectedPlatform(item);
    setShowDropdown(false);
  }, [setSelectedPlatform, setShowDropdown, animationControls]);

  useEffect(() => {
    // Set the default platform
    setSelectedPlatform('Platforms');
    // Set initial state for filterWork to all works
    setFilterWork(works);
    videoRefs.current = works.reduce((acc, work) => {
      acc[work.title] = React.createRef();
      return acc;
    }, {});
  }, []); // Empty dependency array to run the effect only once on mount

  const setupInterval = () => {
    // Clear the existing interval
    clearInterval(intervalId);

    // Set up a new interval only if modal is not open
    if (!modal) {
      const newIntervalId = setInterval(() => {
        if (!isDragging.current) {
          setActiveIndex((prevIndex) => {
          if (filterWork.length > 1) {
            return (prevIndex + 1) % filterWork.length;
          } else {
            return prevIndex; // Prevents the index from changing if there's only one item
          }
        });
        }
      }, 5500);

      // Store the new interval ID in state
      setIntervalId(newIntervalId);
    }
  };

  useEffect(() => {
    // Trigger setupInterval when filterWork is updated
    setupInterval();
  }, [filterWork]);

  useEffect(() => {
    if (filterWork.length > 0)
      setupInterval();
  
    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(intervalId);
    }
  }, [modal]);

  useEffect(() => {
    const container = containerRef.current;
  
    if (container) {
      const containerWidth = container.offsetWidth;
      const itemWidth = container.firstChild ? container.firstChild.offsetWidth : 0;
  
      if (itemWidth) {
        const newPosition = 
        -itemWidth * activeIndex + (containerWidth - itemWidth) / 2;
  
        // Only update the position if the drag is not in progress
        if (!isDragging.current) {
          animationControls.start({ x: newPosition });
        }
      }
    }
  }, [activeIndex, filterWork, animationControls, containerRef.current, isDragging.current]);

  const handleDotClick = (index) => {
    setupInterval();

    // Set the active index
    setActiveIndex(index);
  };

  const handleItemClick = (work, index) => {
    // Check if the user is dragging
    if (isDragging.current) {
      return;
    }

    setupInterval();

    // Check if the modal is closed before updating activeIndex
    if (!modal) {
      // Set the new active index after the modal is closed
      if (index === activeIndex)
        toggleModal();

      setActiveIndex(index);
      setSelectedGame(work.title);
    }
  };

  const handleHover = (title) => {
    return modal && selectedGame === title ? 'hover-active' : '';
  };

  const handleActive = (index) => {
    return index === activeIndex ? 'active' : '';
  };

  const handleDragStart = (e) => {
    dragStartX.current = e.clientX || e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleDragEnd = (_, info) => {
    isDragging.current = false;
    dragStartX.current = null;
  
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const dragDistance = info.offset.x;
  
    // Calculate how many items to skip based on drag distance
    const itemsToSkip = Math.round(dragDistance / containerWidth);
  
    // Calculate the new index based on the dragged distance
    const newIndex = (activeIndex - itemsToSkip + filterWork.length) % filterWork.length;
  
    // Declare itemWidth here
    const itemWidth = container.firstChild ? container.firstChild.offsetWidth : 0;
  
    // Calculate the distance for each item
    const distances = filterWork.map((_, i) => {
      const distance = Math.abs(itemWidth * (i - newIndex) + dragDistance);
      return distance;
    });
  
    // Find the index of the item with the smallest positive distance
    const minDistanceIndex = distances.indexOf(Math.min(...distances.filter(d => Math.abs(d))));
  
    // Set the new active index and position
    const newPosition = 
      -itemWidth * minDistanceIndex + (containerWidth - itemWidth) / 2;
    animationControls.start({ x: newPosition });
  
    setActiveIndex(minDistanceIndex);
  
    // Set up a new interval
    setupInterval();
  };
  

  const handleDrag = (e) => {
    if (isDragging.current) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - dragStartX.current;
      const containerWidth = containerRef.current.offsetWidth;
      const newPosition = -containerWidth * activeIndex + deltaX;
      animationControls.start({ x: newPosition });
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleDropdownClick = (item) => {
    handleWorkFilter(item);
  };

  const dropdownWidth = Math.max(
    ...['Platforms', 'All', 'Mobile', 'PC/Mac', 'Web'].map((item) => item.length)
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = modal ? 'hidden' : 'auto';
    };

    // Attach the event listener when the component mounts
    document.body.style.overflow = modal ? 'hidden' : 'auto';
    
    // Detach the event listener when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  return (
    <>
      <div id="work" className="app__work-header app__flex">
        <h2 className="header-text">My Projects</h2>
        <div className="app__work-dropdown" ref={dropdownRef}>
          <div className="app__work-selected" onClick={toggleDropdown}>
            {selectedPlatform}
            <div className="dropdown-icon">
              <img src={images.dropDownTriangle} alt="dropdown triangle" />
            </div>
          </div>
          {showDropdown && (
            <div className="app__work-options" style={{ width: dropdownWidth, minWidth: '100px' }}>
              <div onClick={() => handleDropdownClick('All')}>All</div>
              <div onClick={() => handleDropdownClick('Mobile')}>Mobile</div>
              <div onClick={() => handleDropdownClick('Web')}>Web</div>
            </div>
          )}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        animate={animationControls}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        transition={{ duration: 0.3, delayChildren: 0.3 }}
        className={`app__work-portfolio`}
      >
        {filterWork.map((work, index) => (
          <div
            key={index}
            className={`app__work-item app__flex ${handleHover(work.title, index)} ${handleActive(index)}`}
            onClick={() => handleItemClick(work, index)}
          >
            <div className="app__work-vid app__flex">
              <video
                ref={(el) => (videoRefs.current[work.title] = el)}
                src={work.vidURL}
                autoPlay={false}
                loop
                muted
                playsInline
                alt={work.title}
                className="app__work-main-video"
              />
              <video
                src={work.vidURL}
                autoPlay={false} 
                loop
                muted
                playsInline
                className="app__work-ambient-video"
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.3 }}
                className={`app__work-hover app__flex`}
              ></motion.div>
            </div>
            <div className="app__work-info">
              <div className="title-container">
                <h3 className={work.mainTitleClass}>{work.title}</h3>
                <img className="arrow-icon" src={images.angledArrow} alt="Arrow" />
              </div>
              <div className="app__work-longDescription">{work.longDescription}</div>
              <div className="app__work-shortDescription">{work.shortDescription}</div>
              <div className="app__work-languagesList">{work.languageList}</div>
              <div className="app__work-toolsList">{work.toolsList}</div>
              <div
                onClick={(e) => {
                  const isGitHubLogoClicked = e.target.classList.contains('github-button-image');
                  if (isGitHubLogoClicked) {
                    window.open(work.githubLink, '_blank');
                  }
                }}
                className="app__work_github-button"
              >
                <motion.button 
                  className="github-button"
                  whileHover={{ scale: [1, 1.2] }}
                >
                  <img src={images.gitHubLogo} alt="GitHub Logo" className="github-button-image" />
                </motion.button>
              </div>
              <div className="app__work-subtitle">{work.subtitle}</div>
            </div>
          </div>
        ))}        
      </motion.div>
      <div className="app__work-navigation">
          {filterWork.map((_, index) => (
            <div
              key={index}
              className={`app__work-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
      </div>
      {modal && selectedGame && (
      <div className="app__info-modal">
        <div
          onClick={() => {
            toggleModal();
          }}
          className={`overlay`}
        ></div>
        {selectedGame === 'choo' && <ChooInfo toggleModal={toggleModal} />}
        {selectedGame === 'coltoncurtis.dev' && <ColtonCurtisDevInfo toggleModal={toggleModal} />}
        {selectedGame === 'crab' && <CrabInfo toggleModal={toggleModal} />}
        {selectedGame === 'ding' && <DingInfo toggleModal={toggleModal} />}
        {selectedGame === 'drop' && <DropInfo toggleModal={toggleModal} />}
        {selectedGame === 'flap' && <FlapInfo toggleModal={toggleModal} />}
        {selectedGame === 'Lets Get High 3' && <LetsGetHighInfo toggleModal={toggleModal} />}
        {selectedGame === 'Paper Planes 3D' && <PaperPlanesInfo toggleModal={toggleModal} />}
      </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__works'), 'work', 'app__darkGraybg');
