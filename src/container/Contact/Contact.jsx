import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [contactName, setContactName] = useState(sessionStorage.getItem('contactName') || '');  
  const [isValidContactName, setValidContactName] = useState(true);

  const [contactEmail, setContactEmail] = useState(sessionStorage.getItem('contactEmail') || '');  
  const [isValidContactEmail, setValidContactEmail] = useState(true);
  
  const [contactMessage, setContactMessage] = useState(sessionStorage.getItem('contactMessage') || '');  
  const [isValidContactMessage, setValidContactMessage] = useState(true);
  
  const [isContactSubmitted, setContactSubmitted] = useState(false);

  const form = useRef();
  
  useEffect(() => {
    // Check sessionStorage to see if the user has submitted an email
    const storedSubmittedStatus = sessionStorage.getItem('isContactSubmitted');
    if (storedSubmittedStatus) {
      setContactSubmitted(true);
    }
  }, []);
  
  const handleSubmit = (e) => {
    // Perform validation logic here
    // Perform email validation
    const isNameValid = validateContactName(contactName);
    const isEmailValid = validateContactEmail(contactEmail);
    const isMessageValid = validateContactMessage(contactMessage);

    if (isNameValid)
      setValidContactName(true);
    else
      setValidContactName(false);

    if (isEmailValid)
      setValidContactEmail(true);
    else
      setValidContactEmail(false);

    if (isMessageValid)
      setValidContactMessage(true);
    else
      setValidContactMessage(false);

    if (isNameValid && isEmailValid && isMessageValid) {
      e.preventDefault();

      console.log(serviceId);

      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      setContactSubmitted(true);
      // Store the submitted status in sessionStorage
      sessionStorage.setItem('isContactSubmitted', 'true');
    }
  };
  
  const validateContactName = (contactName) => {
    // Check if the name is not empty
    if (!contactName.trim()) {
      return false;
    }

    // Check if the name contains only letters and spaces
    const nameRegex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    if (!nameRegex.test(contactName)) {
      return false;
    }

    // Check if the name has a minimum and maximum length
    const minLength = 2;
    const maxLength = 50;
    if (contactName.length < minLength || contactName.length > maxLength) {
      return false;
    }

    // Check if there are no consecutive spaces
    if (/(\s{2,})/.test(contactName)) {
      return false;
    }

    // Check if the name doesn't start or end with a space
    if (contactName.startsWith(' ') || contactName.endsWith(' ')) {
      return false;
    }
  
    return true;
  };
  
  const validateContactEmail = (contactEmail) => {
    // Basic email validation (contains '@' symbol and '.')
    if (!contactEmail.includes('@') || !contactEmail.includes('.')) {
      return false;
    }
  
    // Check for a valid position of '@'
    if (contactEmail.indexOf('@') <= 0) {
      return false;
    }
  
    // Check for consecutive dots
    if (/(\.{2,})/.test(contactEmail)) {
      return false;
    }
  
    // Check if the domain has at least one '.' after '@'
    const domainParts = contactEmail.split('@')[1].split('.');
    if (domainParts.length < 2) {
      return false;
    }
  
    return true;
  };
  
  const validateContactMessage = (contactMessage) => {
    // Check if the name is not empty
    if (!contactMessage.trim()) {
      return false;
    }
  
    return true;
  };
    
  return (
    <div id="contact" className="app__contact">
      <div className="app__contact-headers">
        <h1 className="secondTitle">
          Get in touch
        </h1>
        <button 
          className="app__contact-EmailButton" 
          onClick={() => {
            window.location.href = 'mailto:imcoltoncurtis@gmail.com';
          }}
        >
          <img src={images.envelopeIcon} alt="More Info Logo" className="button-logo" />
          imcoltoncurtis@gmail.com
        </button>
      </div>
      <motion.div 
        className="app__contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {!isContactSubmitted ? (
          <motion.div
            className="app__contact-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <h1>Contact Me</h1>
            <form ref={form}>
              <div className="input-row">
                <input
                  className="name-input"
                  type="text"
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => {
                    setContactName(e.target.value);
                    setValidContactName(true); // Reset validation status when typing
                    sessionStorage.setItem('contactName', e.target.value);
                  }}
                  style={{ 
                    borderColor: contactName.trim() ? (isValidContactName ? 'initial' : 'red') : 'rgba(255, 255, 255, 0.5)', 
                  }}
                  name='user_name' required
                />
                <input
                  className="email-input"
                  type="text"
                  placeholder="Your Email"
                  value={contactEmail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                    setValidContactEmail(true); // Reset validation status when typing
                    sessionStorage.setItem('contactEmail', e.target.value);
                  }}
                  style={{ 
                    borderColor: contactEmail.trim() ? (isValidContactEmail ? 'initial' : 'red') : 'rgba(255, 255, 255, 0.5)', 
                  }}
                  name='user_email' required
                />
              </div>
              <textarea
                placeholder="Message"
                className="message-input"
                value={contactMessage}
                onChange={(e) => {
                  setContactMessage(e.target.value);
                  setValidContactMessage(true);
                  sessionStorage.setItem('contactMessage', e.target.value);
                }}
                style={{ 
                  borderColor: contactMessage.trim() ? (isValidContactMessage ? 'initial' : 'red') : 'rgba(255, 255, 255, 0.5)', 
                }}
                rows="5"
                name='message' required
              />            
              <button
                onClick={handleSubmit}
                style={{
                  cursor: contactName && isValidContactName && contactEmail && isValidContactEmail && contactMessage && isValidContactMessage ? 'pointer' : 'not-allowed',
                }}
                disabled={!contactName || !isValidContactName || !contactEmail || !isValidContactEmail || !contactMessage || !isValidContactMessage}
              >
                {'Send'}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            className="form-submitted-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            Message Sent.
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact