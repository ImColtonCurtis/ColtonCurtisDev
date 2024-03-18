import React, { useEffect } from 'react';
import './Privacy.scss';

const Privacy = () => {
  useEffect(() => {
    // Set scroll position to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app__privacy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>Last updated: 17 January 2024</p>

        <h2>1. Introduction</h2>
        <p>Welcome to Colton Curtis's ("I," "me," or "my") development portfolio. This Privacy Policy outlines how I collect, use, disclose, and safeguard your personal information when you use my website coltoncurtis.dev and the services offered through it.</p>

        <h2>2. Information We Collect</h2>
        <p>I may collect various types of information, including but not limited to:</p>
        <ul>
          <li>Personal Information: such as your name, email address, and contact details.</li>
          <li>Log Data: information about your device, browser, IP address, and pages you visit on nonothing.com.</li>
          <li>Cookies: small data files stored on your device to enhance your experience on my website.</li>
        </ul>

        <h2>3. How I Use Your Information</h2>
        <p>I use the collected information for various purposes, including:</p>
        <ul>
          <li>To provide and maintain my website.</li>
          <li>To personalize your experience.</li>
          <li>To communicate with you about my products and services.</li>
          <li>To improve coltoncurtis.dev and my services.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>4. Information Sharing and Disclosure</h2>
        <p>I may share your information with third parties in the following circumstances:</p>
        <ul>
          <li>With your consent.</li>
          <li>To comply with legal obligations.</li>
          <li>To protect my rights or the rights of others.</li>
        </ul>

        <h2>5. Your Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information.</li>
          <li>Opt-out of receiving promotional communications.</li>
          <li>Disable cookies through your browser settings.</li>
        </ul>

        <h2>6. Security</h2>
        <p>I take reasonable measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>I may update my Privacy Policy from time to time. The updated version will be effective upon posting on coltoncurtis.dev.</p>

        <h2>8. Contact Me</h2>S
        <p>If you have any questions or concerns about my Privacy Policy, please contact me at imcoltoncurtis@gmail.com.</p>
      </div>
    </div>
  );
};

export default Privacy;
