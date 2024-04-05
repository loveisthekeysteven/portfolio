import React, { useState, forwardRef, useRef } from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = forwardRef(function Footer(props, ref) {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to fill in all the fields!',
      });
    } else {
      emailjs
        .sendForm(
          'service_r001ifk',
          'template_qcklvgp',
          form.current,
          'qeovJUbH_FVoLIU69'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setIsFormSubmitted(true);
      Swal.fire('Good job!', 'Thank you for getting in touch!', 'success');
    }
  };

  const phoneNumber = '+2349031719680';
  const returnURL = 'http://localhost:3000/';

  const handleClick = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      'Hello! I contacted you from your website.'
    );
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappURL, '_blank');
    window.location.href = returnURL;
  };

  return (
    <div id="contact" className="app__container app__wrapper app__flex">
      <motion.div
        ref={ref}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__flex app__footer"
      >
        <h2 className="head-text">
          Get In <span>Touch!</span>
        </h2>

        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="email" />
            <a href="mailto:solomon.chukwuka28@gmail.com" className="p-text">
              Contact via Mail
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="mobile" />
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
            <a href="#" onClick={handleClick} className="p-text">
              Contact via WhatsApp
            </a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="app__footer-form app__flex"
          >
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>

            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>

            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                onChange={handleChangeInput}
                name="message"
              />
            </div>
            <button type="submit" className="p-text">
              send Message
            </button>
          </form>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </motion.div>
    </div>
  );
});

export default Footer;
