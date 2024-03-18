import React, { useRef, useState, useEffect } from 'react';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYS";

const animateTextOnHover = (element, originalText) => {
  let iterations = 0;

  const interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= 9) clearInterval(interval);

    iterations += 1 / 3;
  }, 30);
};

const Header = () => {
  const handleHover = (event) => {
    const originalText = event.target.dataset.value || event.target.innerText;

    animateTextOnHover(event.target, originalText);
  };

  useEffect(() => {
    const headers = document.querySelectorAll(".app__header-subtitles h1, .app__header-subtitles h2, .app__header-subtitles h3");

    headers.forEach((header) => {
      animateTextOnHover(header, header.dataset.value || header.innerText);
      header.addEventListener("mouseover", handleHover);

      return () => {
        header.removeEventListener("mouseover", handleHover);
      };
    });
  }, []);

  const logoRef = useRef(null);
  const [active, setActive] = useState(false);

  const shift = (element, index, rangeX, rangeY) => {
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
  };

  const shiftAll = (elements, rangeX, rangeY) => {
    Array.from(elements).forEach((element, index) => shift(element, index, rangeX, rangeY));
  };

  const shiftLogo = (e) => {
    const rect = logoRef.current.getBoundingClientRect();
    const radius = 1000;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rangeX = -(e.clientX - centerX) / radius;
    const rangeY = -(e.clientY - centerY) / radius;

    shiftAll(logoRef.current.children, rangeX, rangeY);
  };

  const resetLogo = () => {
    setActive(false);
    shiftAll(logoRef.current.children, 0.4, -0.7);
  };

  useEffect(() => {
    const handleMouseMove = (e) => shiftLogo(e);
    const handleMouseLeave = () => !active && resetLogo();

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active]);

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

export default AppWrap(Header, 'header');
