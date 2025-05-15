import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      // Here you would typically send the form data to a server
      alert('Mesajınız gönderildi!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        İletişim
      </motion.h2>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="İsim"
          value={formData.name}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          name="message"
          placeholder="Mesajınız"
          value={formData.message}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Gönder
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact; 