import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [animate, setAnimate] = useState({ x: 300, opacity: 0 });
  const links = ['home', 'about', 'work', 'skills', 'contact'];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" />
      </div>
      <ul className="app__navbar-links">
        {links.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div
        className="app__navbar-menu"
        onClick={() => setAnimate({ x: 0, opacity: 1 })}
      >
        <HiMenuAlt4 />
      </div>
      <motion.div
        animate={animate}
        transition={{ duration: 0.85, ease: 'easeInOut' }}
        className="menu"
      >
        <HiX onClick={() => setAnimate({ x: 300, opacity: 0 })} />
        <ul>
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setAnimate({ x: 300, opacity: 0 })}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href={images.resume} rel="noreferrer" target="_blank">
              My Resume
            </a>
          </li>
          <div className="app__flex">
            <h2>Let&lsquo;s Collaborate</h2>
            <div className="socials">
              <a href="https://twitter.com/alwayslovechuks" target="blank">
                <BsTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/chukwuka-solomon-ba57b027b/"
                target="blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://github.com/loveisthekeysteven" target="blank">
                <BsGithub />
              </a>
              <a href="mailto: solomon.chukwuka28@gmail.com">
                <MdEmail />
              </a>
              <a href="https://instagram.com/loveisthekeysteven">
                <BsInstagram />
              </a>
            </div>
          </div>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
