import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "PetFusion",
    description: "A comprehensive platform to manage pet-related products and services, providing seamless user experience for pet owners and service providers.",
    techStack: ["HTML", "CSS", "Python", "MySQL"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "College Management System",
    description: "An efficient system to manage student records, faculty data, and attendance tracking with a user-friendly interface and robust backend.",
    techStack: ["HTML", "CSS", "Python", "JavaScript", "MySQL"],
    gradient: "from-accent/20 to-primary/20",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Showcasing my academic projects and technical implementations
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="glass-card rounded-xl overflow-hidden hover-glow group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Code className="text-primary" size={20} />
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-4 border-primary/50 hover:bg-primary/10 hover:border-primary group-hover:shadow-lg transition-all"
                  >
                    <span>Learn More</span>
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
