import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section id="about" className="section-padding relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-responsive font-bold mb-8">
              <span className="text-primary">Our</span> Mission
            </h2>
            <p className="text-responsive text-secondary-light/80 mb-12">
              At NovaMind, we're on a mission to push the boundaries of digital creativity
              and innovation. We believe in crafting experiences that transcend the ordinary,
              bringing together cutting-edge technology and artistic vision to create
              something truly extraordinary.
            </p>
          </motion.div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and exploring new frontiers in digital design and technology."
              },
              {
                title: "Excellence",
                description: "Delivering exceptional quality in every project, no matter the scale."
              },
              {
                title: "Collaboration",
                description: "Working together to create something greater than the sum of its parts."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="cosmic-card"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-secondary-light/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-padding relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-responsive font-bold mb-8 text-center">
              Our <span className="text-primary">Journey</span>
            </h2>
            <div className="cosmic-card">
              <p className="text-responsive text-secondary-light/80 mb-6">
                Founded with a vision to revolutionize digital experiences, NovaMind has grown
                from a small team of passionate creators to a full-service digital agency.
                Our journey has been marked by continuous learning, innovation, and a
                commitment to excellence.
              </p>
              <p className="text-responsive text-secondary-light/80">
                Today, we stand at the forefront of digital innovation, helping brands
                navigate the ever-evolving digital landscape with confidence and creativity.
                Our team of experts combines technical expertise with artistic vision to
                create solutions that not only meet but exceed expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 