import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cosmic Explorer",
    description: "An interactive space exploration experience",
    image: "/gallery/cosmic-explorer.jpg",
    category: "Web Experience"
  },
  {
    id: 2,
    title: "Nebula Dashboard",
    description: "Data visualization platform for space analytics",
    image: "/gallery/nebula-dashboard.jpg",
    category: "Dashboard"
  },
  {
    id: 3,
    title: "Stellar Mobile App",
    description: "Mobile application for star tracking",
    image: "/gallery/stellar-app.jpg",
    category: "Mobile"
  },
  {
    id: 4,
    title: "Galaxy Branding",
    description: "Brand identity for a space tourism company",
    image: "/gallery/galaxy-branding.jpg",
    category: "Branding"
  },
  {
    id: 5,
    title: "Orbit Website",
    description: "Corporate website for a space technology company",
    image: "/gallery/orbit-website.jpg",
    category: "Website"
  },
  {
    id: 6,
    title: "Astro VR Experience",
    description: "Virtual reality journey through the solar system",
    image: "/gallery/astro-vr.jpg",
    category: "VR"
  }
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section id="gallery" className="section-padding relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-responsive font-bold mb-6">
              Our <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-responsive text-secondary-light/80 max-w-2xl mx-auto">
              Explore our universe of creative projects and digital experiences
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary/10 text-secondary-light hover:bg-secondary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cosmic-card cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 bg-primary-dark/50 group-hover:bg-primary-dark/30 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-secondary-light/80">{project.description}</p>
                <span className="inline-block mt-4 px-3 py-1 text-sm bg-secondary/10 text-secondary-light rounded-full">
                  {project.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-dark/95"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full cosmic-card"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-secondary-light hover:text-primary"
                onClick={() => setSelectedProject(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">{selectedProject.title}</h3>
              <p className="text-secondary-light/80 mb-6">{selectedProject.description}</p>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-light rounded-full">
                {selectedProject.category}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery; 