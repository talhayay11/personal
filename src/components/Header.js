import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Portföy
        </motion.div>
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Hakkımda
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projeler
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header; 