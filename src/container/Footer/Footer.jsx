import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="app__footer app__flex">
      <div className="footer-links">
        <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms-of-use" className="footer-link">Terms of Use</Link>
      </div>
      <div className="copyright">
        <p className="p-text">Copyright © 2024 Colton Curtis</p>
      </div>
    </div>
  );
};

export default Footer;