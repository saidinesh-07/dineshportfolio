import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  
  const handleDownload = () => {
    // Logic to download the specific PDF file
    const pdfUrl = "/Dinesh_Resume.pdf"; // Ensure this file exists in your 'public' folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Dinesh_Resume.pdf"; // The name the file will have when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Resume Preview</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
          {/* Header Info */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Veera Venkata Naga Sai Dinesh Penugonda</h1>
            <p className="text-muted-foreground">Computer Science & Engineering (Cybersecurity)</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm text-foreground/80">
              <span>penugondasaidinesh@gmail.com</span>
              <span className="hidden md:inline">|</span>
              <span>+91 8008346727</span>
              <span className="hidden md:inline">|</span>
              <span>Vijayawada, India</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border pb-2 text-primary">Education</h2>
            <div className="space-y-3">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor of Technology - CSE (Cybersecurity)</h3>
                    <p className="text-sm text-muted-foreground">KL University, Vijayawada</p>
                  </div>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded">CGPA: 9.6/10</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-secondary/20 rounded-md">
                  <span className="font-medium block">12th Grade</span> 
                  <span className="text-muted-foreground">95.9%</span>
                </div>
                <div className="p-3 bg-secondary/20 rounded-md">
                  <span className="font-medium block">10th Grade</span> 
                  <span className="text-muted-foreground">98.6%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border pb-2 text-primary">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                   Languages
                </h3>
                <p className="text-muted-foreground leading-relaxed">Python, Java, C, JavaScript, HTML, CSS, MySQL</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                   Frameworks & Tools
                </h3>
                <p className="text-muted-foreground leading-relaxed">Django, React, Spring Boot, Express, Hibernate, Git, MongoDB</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border pb-2 text-primary">Projects</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg border border-border/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-foreground">Automobile Management System</h3>
                <p className="text-xs text-primary mt-1">Python, Django, PostgreSQL</p>
              </div>
              <div className="p-4 rounded-lg border border-border/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-foreground">Online Job Portal</h3>
                <p className="text-xs text-primary mt-1">ReactJS, NodeJS, MongoDB (Encrypted APIs)</p>
              </div>
              <div className="p-4 rounded-lg border border-border/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-foreground">Airline Reservation System</h3>
                <p className="text-xs text-primary mt-1">Java, Servlets, MySQL</p>
              </div>
              <div className="p-4 rounded-lg border border-border/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-foreground">Nutrition Management System</h3>
                <p className="text-xs text-primary mt-1">Java, Spring Boot, MySQL</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold border-b border-border pb-2 text-primary">Certifications</h2>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> AWS Cloud Practitioner</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> ServiceNow System Admin</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Salesforce AI Associate</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Oracle Foundations Associate</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Red Hat Certified Developer (EX183)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> NPTEL - C Language</li>
            </ul>
          </div>
        </div>

        <Button 
          onClick={handleDownload} 
          className="w-full mt-4 bg-primary hover:bg-primary/90 h-12 text-lg font-semibold shadow-lg"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Resume PDF
        </Button>
      </DialogContent>
    </Dialog>
  );
}