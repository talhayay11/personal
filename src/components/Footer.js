import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p>&copy; {new Date().getFullYear()} Tüm hakları saklıdır.</p>
    </motion.footer>
  );
};

export default Footer; 