import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Database, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C", "Java", "JavaScript"],
    color: "primary",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS"],
    color: "accent",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
    color: "primary",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Teamwork", "Logical Thinking", "Good Communication"],
    color: "accent",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern applications
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 hover-glow group"
              >
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${
                    category.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                  }`}
                >
                  <category.icon
                    className={category.color === "primary" ? "text-primary" : "text-accent"}
                    size={28}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        category.color === "primary"
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : "bg-accent/20 text-accent hover:bg-accent/30"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
