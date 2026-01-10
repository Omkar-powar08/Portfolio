import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="section-padding bg-muted/30" ref={ref}>
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <a
                href="mailto:omkarpowar004@gmail.com"
                className="glass-card rounded-xl p-6 flex items-center gap-4 hover-glow group block"
              >
                <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    omkarpowar004@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:7411487006"
                className="glass-card rounded-xl p-6 flex items-center gap-4 hover-glow group block"
              >
                <div className="bg-accent/20 p-3 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold group-hover:text-accent transition-colors">
                    7411487006
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/omkar-powar-a38914353/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 flex items-center gap-4 hover-glow group block"
              >
                <div className="bg-primary/20 p-3 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    Connect on LinkedIn
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-glow"
                  size="lg"
                >
                  <span>Send Message</span>
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
