import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Proje 1",
      description: "Proje açıklaması buraya gelecek",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Proje 2",
      description: "Proje açıklaması buraya gelecek",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projelerim
      </motion.h2>
      <motion.div
        className="project-grid"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Projeyi Görüntüle
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 