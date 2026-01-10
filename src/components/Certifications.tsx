import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "MySQL HeatWave Implementation Certified Associate Rel 1",
    issuer: "Oracle",
    icon: "database",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    icon: "ai",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    icon: "cloud",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    icon: "analytics",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    icon: "analytics",
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="section-padding bg-muted/30" ref={ref}>
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
            Certifications & <span className="gradient-text">Achievements</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Professional certifications validating my technical expertise
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 hover-glow group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Award className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
