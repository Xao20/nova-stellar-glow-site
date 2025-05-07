import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Nova",
    role: "Creative Director",
    bio: "Visionary leader with a passion for pushing creative boundaries and crafting unforgettable digital experiences.",
    skills: ["Creative Direction", "UX Design", "Brand Strategy"],
    image: "/team/sarah.jpg"
  },
  {
    name: "Alex Stellar",
    role: "Lead Developer",
    bio: "Tech innovator who transforms complex problems into elegant solutions through clean, efficient code.",
    skills: ["Full Stack", "React", "Node.js"],
    image: "/team/alex.jpg"
  },
  {
    name: "Maya Cosmos",
    role: "UX Designer",
    bio: "User experience specialist focused on creating intuitive and engaging digital interfaces.",
    skills: ["UI/UX", "Prototyping", "User Research"],
    image: "/team/maya.jpg"
  },
  {
    name: "Leo Nebula",
    role: "Art Director",
    bio: "Visual storyteller who brings brands to life through compelling imagery and design.",
    skills: ["Visual Design", "Branding", "Motion Graphics"],
    image: "/team/leo.jpg"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen">
      <section id="team" className="section-padding relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-responsive font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-responsive text-secondary-light/80 max-w-2xl mx-auto">
              A constellation of creative minds, each bringing their unique brilliance
              to illuminate the digital universe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cosmic-card group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div className="absolute inset-0 bg-primary-dark/50 group-hover:bg-primary-dark/30 transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-secondary mb-4">{member.role}</p>
                <p className="text-secondary-light/80 mb-6">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary/10 text-secondary-light rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 