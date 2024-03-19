import React, { useRef, useState, useEffect, useCallback } from 'react';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYS";

const animateTextOnHover = (element, originalText) => {
  let iterations = 0;
  let interval;

  const animate = () => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= 9) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  };

  interval = setInterval(animate, 30);
};

const Header = () => {
  const handleHover = useCallback((event) => {
    const originalText = event.target.dataset.value || event.target.innerText;
    animateTextOnHover(event.target, originalText);
  }, []);

  useEffect(() => {
    const headers = document.querySelectorAll(".app__header-subtitles h1, .app__header-subtitles h2, .app__header-subtitles h3");

    headers.forEach((header) => {
      animateTextOnHover(header, header.dataset.value || header.innerText);
      header.addEventListener("mouseover", handleHover);

      return () => {
        header.removeEventListener("mouseover", handleHover);
      };
    });
    
    // Clean up event listeners when the component unmounts
    return () => {
      headers.forEach((header) => {
        header.removeEventListener("mouseover", handleHover);
      });
    };
  }, [handleHover]);

  const logoRef = useRef(null);
  const [active, setActive] = useState(false);

  const shift = useCallback((element, index, rangeX, rangeY) => {
    const translationIntensity = active ? 24 : 4;
    const maxTranslation = translationIntensity * (index + 1);
    const currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;
    const scale = active ? 1 + (index * 0.4) : 1;

    element.animate(
      {
        translate: currentTranslation,
        scale,
      },
      { duration: 750, fill: 'forwards', easing: 'ease' }
    );
  }, [active]);

  const shiftAll = useCallback((elements, rangeX, rangeY) => {
    Array.from(elements).forEach((element, index) => shift(element, index, rangeX, rangeY));
  }, [shift]);

  const shiftLogo = useCallback((e) => {
    const rect = logoRef.current.getBoundingClientRect();
    const radius = 1000;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rangeX = -(e.clientX - centerX) / radius;
    const rangeY = -(e.clientY - centerY) / radius;

    shiftAll(logoRef.current.children, rangeX, rangeY);
  }, [shiftAll]);

  const resetLogo = useCallback(() => {
    setActive(false);
    shiftAll(logoRef.current.children, 0.4, -0.7);
  }, [shiftAll]);

  useEffect(() => {
    const handleMouseMove = (e) => shiftLogo(e);
    const handleMouseLeave = () => !active && resetLogo();

    const debouncedMouseMove = debounce(handleMouseMove, 16); // 60fps
    window.addEventListener('mousemove', debouncedMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', debouncedMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active, resetLogo, shiftLogo]);

  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-content">
        <div className="logo_body">
          <div className="logos" ref={logoRef}>
            <h1>Colton Curtis</h1>
            <h1>Colton Curtis</h1>
            <h1>Colton Curtis</h1>
            <h1>Colton Curtis</h1>
            <h1>Colton Curtis</h1>
            <h1>Colton Curtis</h1>
          </div>
        </div>
        <div className="app__header-subtitles">
          <h2 data-value="Engineer">Engineer</h2>
          <h2 data-value="Developer">Developer</h2>
          <h2 data-value="Designer">Designer</h2>
        </div>
      </div>
    </div>
  );
};

// Define the debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default AppWrap(Header, 'header');
