import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Trophy, Users } from "lucide-react";

const achievements = [
  {
    icon: Heart,
    title: "National Service Scheme (NSS)",
    description: "Participated in State and National-level camps, demonstrating strong leadership, community service, and teamwork skills.",
    color: "primary",
  },
  {
    icon: Trophy,
    title: "Active Sports Person",
    description: "Demonstrated discipline, perseverance, and team spirit through active participation in various sports activities.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Collaborative Leader",
    description: "Proven track record of working effectively in team environments and taking initiative in group projects.",
    color: "primary",
  },
];

export const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="achievements" className="section-padding bg-background" ref={ref}>
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
            Achievements & <span className="gradient-text">Activities</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Beyond technical skills - leadership, community service, and personal growth
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 text-center hover-glow group"
              >
                <div
                  className={`inline-flex p-4 rounded-full mb-4 ${
                    achievement.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                  } group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon
                    className={achievement.color === "primary" ? "text-primary" : "text-accent"}
                    size={32}
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
