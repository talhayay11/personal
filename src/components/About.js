import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Hakkımda
      </motion.h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Front-end geliştirme konusunda tutkulu bir yazılımcıyım. Modern web teknolojileri ile kullanıcı dostu ve etkileyici web siteleri geliştiriyorum.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 