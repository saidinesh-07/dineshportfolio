import { Button } from "@/components/ui/button";
import { FileText, Mail, Briefcase, Code, Award, User, Menu, X } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { FluidCursor } from "@/components/FluidCursor";
import { useState } from "react";

interface HeroProps {
  onResumeClick: () => void;
  onNavigate: (section: string) => void;
}

export function Hero({ onResumeClick, onNavigate }: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <FluidCursor />
      
      <div className="relative z-10 text-center space-y-8 animate-slide-up">
        <p className="text-lg text-muted-foreground">Hello 👋 Welcome to my portfolio</p>
        
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          PENUGONDA SAI DINESH
        </h1>

        <div className="flex justify-center">
          <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <img 
              src={profilePhoto} 
              alt="Dinesh Penugonda" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
      </div>

      {/* Mobile Menu Button */}
      <Button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        size="icon"
        className="fixed bottom-6 right-6 z-50 md:hidden rounded-full h-14 w-14 bg-primary text-primary-foreground shadow-2xl hover:bg-primary/90"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden flex items-center justify-center">
          <nav className="flex flex-col gap-4 p-8">
            <Button
              onClick={() => {
                onNavigate("about");
                setMobileMenuOpen(false);
              }}
              variant="ghost"
              className="rounded-full flex items-center gap-3 h-auto py-4 px-8 text-lg hover:bg-accent"
            >
              <User className="h-6 w-6" />
              <span>Me</span>
            </Button>
            <Button
              onClick={() => {
                onNavigate("projects");
                setMobileMenuOpen(false);
              }}
              variant="ghost"
              className="rounded-full flex items-center gap-3 h-auto py-4 px-8 text-lg hover:bg-accent"
            >
              <Briefcase className="h-6 w-6" />
              <span>Projects</span>
            </Button>
            <Button
              onClick={() => {
                onNavigate("skills");
                setMobileMenuOpen(false);
              }}
              variant="ghost"
              className="rounded-full flex items-center gap-3 h-auto py-4 px-8 text-lg hover:bg-accent"
            >
              <Code className="h-6 w-6" />
              <span>Skills</span>
            </Button>
            <Button
              onClick={() => {
                onNavigate("certifications");
                setMobileMenuOpen(false);
              }}
              variant="ghost"
              className="rounded-full flex items-center gap-3 h-auto py-4 px-8 text-lg hover:bg-accent"
            >
              <Award className="h-6 w-6" />
              <span>Certifications</span>
            </Button>
            <Button
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              variant="ghost"
              className="rounded-full flex items-center gap-3 h-auto py-4 px-8 text-lg hover:bg-accent"
            >
              <Mail className="h-6 w-6" />
              <span>Contact</span>
            </Button>
            <Button
              onClick={() => {
                onResumeClick();
                setMobileMenuOpen(false);
              }}
              variant="ghost"
              className="rounded-full flex items-center gap-3 h-auto py-4 px-8 text-lg hover:bg-accent"
            >
              <FileText className="h-6 w-6" />
              <span>Resume</span>
            </Button>
          </nav>
        </div>
      )}

      {/* Desktop Bottom Navigation */}
      <nav className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-3 p-3 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-2xl">
          <Button
            onClick={() => onNavigate("about")}
            variant="ghost"
            className="rounded-full flex flex-col items-center gap-1 h-auto py-3 px-6 hover:bg-accent"
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Me</span>
          </Button>
          <Button
            onClick={() => onNavigate("projects")}
            variant="ghost"
            className="rounded-full flex flex-col items-center gap-1 h-auto py-3 px-6 hover:bg-accent"
          >
            <Briefcase className="h-5 w-5" />
            <span className="text-xs">Projects</span>
          </Button>
          <Button
            onClick={() => onNavigate("skills")}
            variant="ghost"
            className="rounded-full flex flex-col items-center gap-1 h-auto py-3 px-6 hover:bg-accent"
          >
            <Code className="h-5 w-5" />
            <span className="text-xs">Skills</span>
          </Button>
          <Button
            onClick={() => onNavigate("certifications")}
            variant="ghost"
            className="rounded-full flex flex-col items-center gap-1 h-auto py-3 px-6 hover:bg-accent"
          >
            <Award className="h-5 w-5" />
            <span className="text-xs">Certifications</span>
          </Button>
          <Button
            onClick={() => onNavigate("contact")}
            variant="ghost"
            className="rounded-full flex flex-col items-center gap-1 h-auto py-3 px-6 hover:bg-accent"
          >
            <Mail className="h-5 w-5" />
            <span className="text-xs">Contact</span>
          </Button>
          <Button
            onClick={onResumeClick}
            variant="ghost"
            className="rounded-full flex flex-col items-center gap-1 h-auto py-3 px-6 hover:bg-accent"
          >
            <FileText className="h-5 w-5" />
            <span className="text-xs">Resume</span>
          </Button>
        </div>
      </nav>
    </section>
  );
}
