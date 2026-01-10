import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Brain } from "lucide-react";

export const About = () => {
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
    <section id="about" className="section-padding bg-background" ref={ref}>
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Get to know more about my journey and aspirations
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Education Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Master of Computer Applications</h3>
                    <p className="text-primary font-semibold">New Horizon College, Bangalore</p>
                    <p className="text-muted-foreground text-sm mt-1">Currently pursuing (2025–2027)</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover-glow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <GraduationCap className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Bachelor of Computer Applications</h3>
                    <p className="text-primary font-semibold">Divekar BCA College</p>
                    <p className="text-muted-foreground text-sm mt-1">Completed in 2025 • CGPA: 7.8</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Code className="text-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Technical Passion</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Deeply interested in software development, data analytics, and AI applications. 
                      I love exploring new technologies and applying them to solve practical problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Brain className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Learner</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Enthusiastic about working in collaborative environments and continuously 
                      learning new technologies. I thrive on challenges and enjoy finding innovative 
                      solutions to complex problems.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
