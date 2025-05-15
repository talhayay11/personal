import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Front-end Geliştirici';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="profile-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="/images/person.jpeg" alt="Talha" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Merhaba, Ben Talha
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.p>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
        </motion.div>

        <Link to="about" smooth={true} duration={500}>
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 