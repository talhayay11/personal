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
          Karadeniz Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden yeni mezun oldum. 
          Eğitim hayatım boyunca iki farklı staj deneyimi edindim ve bu deneyimler sayesinde 
          profesyonel yazılım geliştirme süreçlerini yakından tanıma fırsatı buldum.
        </p>
        <p>
          Şu anda web geliştirme alanında kariyer yapmak için aktif olarak iş arıyorum. 
          Modern web teknolojileri ile kullanıcı dostu ve etkileyici web uygulamaları 
          geliştirmeye odaklanıyorum. Sürekli öğrenmeye ve kendimi geliştirmeye açık bir 
          yaklaşımla, yeni teknolojileri takip ediyor ve projelerimde uyguluyorum.
        </p>
      </motion.div>
    </section>
  );
};

export default About; 