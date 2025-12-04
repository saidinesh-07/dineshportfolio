import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ResumeModal } from "@/components/ResumeModal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <ResumeModal open={resumeOpen} onOpenChange={setResumeOpen} />
      
      <Hero 
        onResumeClick={() => setResumeOpen(true)}
        onNavigate={scrollToSection}
      />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Veera Venkata Naga Sai Dinesh Penugonda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
