import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.scss';

const Navbar = ({ currentPage, modal }) => {
  const [toggle, setToggle] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [listClass, setListClass] = useState('');
  const [navbarBg, setNavbarBg] = useState({
    backgroundColor: 'rgba(40, 40, 40, 0)',
    transition: 'background-color 0.35s ease', // Add a transition property
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Calculate and set the navbar height when the component mounts
    const navbar = document.querySelector('.app__navbar'); // Adjust the selector if needed
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);

  useEffect(() => {
    const body = document.body;

    if (toggle) {
      body.classList.add('menu-open');      
    } else {
      body.classList.remove('menu-open');      
    }

    // Event listener for scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const transitionDuration = scrollTop === 0 ? '0.5s' : '0.3s';

      setNavbarBg({
        backgroundColor:
          scrollTop === 0 ? 'rgba(30, 30, 30, 0)' : 'rgba(30, 30, 30, 0.99)',
        transition: `background-color ${transitionDuration} ease`,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      body.classList.remove('menu-open');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggle]);

  const initiateMenuExit = () => {
    // Add the 'exited' class immediately
    setIsMenuOpen(false);
    setMenuClass('exited');
    setListClass('exited');

    // Wait for 600 milliseconds and then remove the 'exited' class
    setTimeout(() => {
      setMenuClass('');
      setListClass('');
      setToggle(false);
    }, 650); // Adjust the timeout based on your exit transition duration
  };

  const openMenu = () => {
    // Set the 'entered' class when opening the menu
    setIsMenuOpen(true);
    setMenuClass('entered');
    setListClass('entered');
    setToggle(true);
  };

  const location = useLocation();

  const handleLinkClick = (to) => {
    setToggle(false); // Close the menu
  
    const targetElement = document.getElementById(to);

    if (location.pathname === '/') {
      // If on the home page, use ScrollLink
      if (targetElement) {
        // Check if the target section is already in view
        const isInView = targetElement.getBoundingClientRect().top >= 0;

        if (!isInView) {
          // Scroll to the correct section based on the clicked item
          scroll.scrollTo(to, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: to === 'home' ? 0 : -navbarHeight,
          });
        }
      }
    } else {
      // If on a different page, use RouterLink to navigate to the home page
      // Adjust the route as needed
  
      // Use a delay to wait for the scroll animation to complete before navigating
      setTimeout(() => {
        const targetElement = document.getElementById(to);
        if (targetElement) {
          const targetOffset = targetElement.offsetTop - navbarHeight; // Adjust the offset as needed
          window.scrollTo({ 
            top: targetOffset,
            smooth: 'easeInOutQuart', 
            behavior: 'smooth',
            duration: 1000 });
        }
      }, 20); // Adjust the timeout based on your scroll animation duration
    }
  };

  return (
    <nav className={`app__navbar ${isMenuOpen ? 'app__navbar-menu-open' : ''} ${modal ? 'app__navbar-disabled' : ''}`} style={navbarBg}>
      <ul className={`app__navbar-links ${modal ? 'disabled' : ''}`}>
        {['home', 'work', 'about', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {location.pathname === '/ColtonCurtisDev' ? (
              <ScrollLink
                to={item === 'home' ? 'home' : item.toLowerCase()}
                onClick={() => handleLinkClick(item.toLowerCase())}
                smooth={true}
                duration={500}
                offset={item === 'home' ? 0 : -navbarHeight} // Set the offset to 0 for the home section
              >
                {item}
              </ScrollLink>
            ) : (
              <RouterLink
                to={{ pathname: '/ColtonCurtisDev', hash: `#${item.toLowerCase()}` }}
                className="scroll-link"
                onClick={() => handleLinkClick(item.toLowerCase())}
              >
                {item}
              </RouterLink>
            )}
          </li>
        ))}
      </ul>

      <div className={`app__navbar-menu ${modal ? 'disabled' : ''}`} id="app__navbar-menu">
        <svg className="menu-icon" onClick={openMenu}>
          <HiMenuAlt4 />
        </svg>
        {toggle && (
          <motion.div
            initial={{ y: -1000 }}
            animate={menuClass === 'exited' ? { y: -1000 } : { y: 0 }}
            className={menuClass}

            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 38,
            }}
          >
            <svg className="close-icon" onClick={initiateMenuExit}>
              <HiX />
            </svg>
            <ul>
            {['home', 'work', 'about', 'contact'].map((item, index) => (
                <motion.li key={item} className={listClass}>
                  {location.pathname === '/ColtonCurtisDev' ? (
                    <ScrollLink
                      to={item === 'home' ? 'home' : item.toLowerCase()}
                      onClick={() => handleLinkClick(item.toLowerCase())}
                      smooth={true}
                      duration={500}
                      offset={item === 'home' ? 0 : -navbarHeight} // Set the offset to 0 for the home section
                    >
                      {item}
                    </ScrollLink>
                  ) : (
                    <RouterLink to="/" className="scroll-link">
                      {item}
                    </RouterLink>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
