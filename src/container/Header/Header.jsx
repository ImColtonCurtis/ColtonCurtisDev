import React from 'react';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-content">
        <div className="logo_body">
          <div className="logos">
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
