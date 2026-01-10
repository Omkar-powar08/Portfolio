import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Omkar Powar. All rights reserved.
          </p>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <ArrowUp size={18} className="text-primary" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
