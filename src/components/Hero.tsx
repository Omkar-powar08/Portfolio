import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Phone } from "lucide-react";

const roles = ["Aspiring Software Developer", "MCA Student", "Problem Solver", "Tech Enthusiast"];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container-custom px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Omkar Powar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-8 md:h-10"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 2,
                    repeat: Infinity,
                    repeatDelay: (roles.length - 1) * 2,
                  }}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    display: index === 0 ? "block" : "none",
                  }}
                >
                  {role}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Aspiring Software Developer with a strong foundation in programming, logical thinking, and database management. 
            Passionate about building scalable applications and continuously learning new technologies to solve real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary text-primary hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 justify-center items-center pt-4"
          >
            <a
              href="mailto:omkarpowar004@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/omkar-powar-a38914353/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="tel:7411487006"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection("#about")}
              className="text-primary animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
