import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button"; // Keeping your existing import

// ===============================================
// 1. PROJECT DATA (Enhanced with links & details)
// ===============================================
const PROJECTS_DATA = [
  {
    title: "Automobile Management System",
    description: "A comprehensive system for managing automobile inventory, sales, and services.",
    longDescription: "This platform streamlines the entire lifecycle of automobile dealership management. From tracking inventory in real-time to managing customer sales records and scheduling service appointments, it acts as a central hub for dealership operations.",
    features: ["Real-time Inventory Tracking", "Automated Sales Invoicing", "Service Appointment Scheduling", "Customer CRM Integration"],
    technologies: ["Python", "Django", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    // githubLink: "https://github.com/yourusername/project1",
    // liveLink: "https://project-demo.com"
  },
  {
    title: "Online Job Portal",
    description: "Full-featured job portal with encrypted APIs and user authentication.",
    longDescription: "A secure and efficient bridge between recruiters and job seekers. The system utilizes advanced algorithms to match candidate profiles with job descriptions, ensuring high relevance. Includes resume parsing and secure chat functionality.",
    features: ["JWT Authentication", "Resume Parsing Algorithm", "Real-time Chat", "Application Status Tracking"],
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    githubLink: "https://github.com/saidinesh-07/SDP_Job_Portal",
    // liveLink: "https://project-demo.com"
  },
  {
    title: "Airline Reservation System",
    description: "Complete airline booking system with seat selection and payment integration.",
    longDescription: "Designed to handle high-concurrency booking requests, this system allows users to search flights, select seats via an interactive map, and process payments securely. Includes an admin panel for flight scheduling.",
    features: ["Interactive Seat Map", "Payment Gateway Integration", "Ticket PDF Generation", "Flight Schedule Management"],
    technologies: ["Java", "Servlets", "MySQL"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    githubLink: "https://github.com/VSri12/EPSDPPROJECT",
    // liveLink: "https://project-demo.com"
  },
  {
    title: "Nutrition Management System",
    description: "Health-focused application for tracking nutrition and meal planning.",
    longDescription: "A personalized health assistant that calculates daily caloric needs based on user biometrics. It suggests meal plans, tracks macro-nutrient intake, and generates progress reports over time.",
    features: ["BMI & Calorie Calculator", "Custom Meal Planning", "Progress Visualization Charts", "Food Database API"],
    technologies: ["Java", "Spring Boot", "MySQL"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    githubLink: "https://github.com/saidinesh-07/JFSDSDPPS-23",
    // liveLink: "https://project-demo.com"
  },
];

// ===============================================
// 2. HELPER HOOK (Click Outside to Close)
// ===============================================
const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

// ===============================================
// 3. PROJECT DETAIL MODAL (The New Frame)
// ===============================================
const ProjectDetailModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, onClose);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
          // Glass styling matched to your theme
          className="w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col
                     rounded-3xl border border-border/50 bg-card/95 
                     shadow-2xl relative"
        >
          {/* Close Button (Top Right) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* 1. Modal Header Image */}
          <div className="relative h-64 md:h-80 w-full shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            
            <div className="absolute bottom-6 left-6 md:left-10 right-6">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2 shadow-black drop-shadow-lg">
                    {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs md:text-sm font-semibold backdrop-blur-md">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
          </div>

          {/* 2. Scrollable Content Area */}
          <div className="p-6 md:p-10 overflow-y-auto flex-grow">
            <div className="grid md:grid-cols-3 gap-10">
                
                {/* Left Column: Description */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-primary">Overview</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {project.longDescription}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-3 text-primary">Key Features</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.features?.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Tech Stack & Info */}
                <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
                        <h4 className="font-semibold mb-4 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech: string) => (
                                <span key={tech} className="text-sm text-muted-foreground bg-background px-2 py-1 rounded border border-border">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* 3. Footer: Links at Bottom Right (As Requested) */}
          <div className="p-6 border-t border-border/40 bg-secondary/10 flex justify-end gap-4 shrink-0">
             {project.githubLink && (
                 <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                     <Button variant="outline" className="gap-2 rounded-full border-primary/20 hover:border-primary">
                         <Github className="w-4 h-4" />
                         GitHub Repo
                     </Button>
                 </a>
             )}
             {project.liveLink && (
                 <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                     <Button className="gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                         <ExternalLink className="w-4 h-4" />
                         Live Deployment
                     </Button>
                 </a>
             )}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ===============================================
// 4. MAIN COMPONENT
// ===============================================

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-xl overflow-hidden hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground line-clamp-2">
                        {project.description}
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs text-muted-foreground">+more</span>
                  )}
                </div>

                <div className="mt-auto pt-2">
                    <Button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full rounded-full text-sm md:text-base transition-transform active:scale-95" 
                        variant="outline"
                    >
                        <Info className="mr-2 h-4 w-4" />
                        View Details
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the Modal if a project is selected */}
      {selectedProject && (
        <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}