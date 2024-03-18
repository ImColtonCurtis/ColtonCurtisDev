import React, { useEffect } from 'react';
import './Terms.scss';

const Terms = () => {
  useEffect(() => {
    // Set scroll position to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app__terms">
      <div className="terms-container">
        <h1>Terms of Use</h1>
        <p>Last updated: 17 January 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using my website (coltoncurtis.dev), you agree
          to comply with and be bound by these Terms of Use. If you do not
          agree to these terms, please refrain from using my website.
        </p>

        <h2>2. Use of the Website</h2>
        <p>
          You agree to use coltoncurtis.dev for lawful purposes and in a manner
          consistent with all applicable laws and regulations. You may not use
          my website in any way that could impair its performance, damage its
          content, or interfere with other users' ability to use it.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          The content on coltoncurtis.dev, including text, graphics, logos, and
          images, is my property and is protected by intellectual property laws.
          You may not use, reproduce, distribute, or display any portion of the
          website without my prior written consent.
        </p>

        {/* 4. Limitation of Liability */}
        <h2>4. Limitation of Liability</h2>
        <p>
          I am not liable for any direct, indirect, incidental, consequential,
          or punitive damages arising out of your access to or use of
          coltoncurtis.dev. This includes but is not limited to, any errors or
          omissions in the content, loss or damage of data, or any other matter
          related to the website.
        </p>

        {/* 5. Changes to Terms of Use */}
        <h2>5. Changes to Terms of Use</h2>
        <p>
          I reserve the right to update or modify these Terms of Use at any
          time without prior notice. The updated version will be effective upon
          posting on coltoncurtis.dev.
        </p>

        {/* Contact Information */}
        <h2>6. Contact Me</h2>
        <p>
          If you have any questions or concerns about my Terms of Use, please
          contact me at imcoltoncurtis@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default Terms;
