import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, CheckCircle2, FileText, Maximize2, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

// ===============================================
// 1. CERTIFICATION DATA
// ===============================================
const CERTIFICATIONS = [
  {
    id: "servicenow",
    name: "ServiceNow System Admin",
    issuer: "ServiceNow",
    date: "December 2023",
    type: "pdf",
    file: "27496648_ServiceNow_CSA.pdf",
    color: "from-green-500 to-emerald-700",
    iconBg: "bg-green-500/20 text-green-400"
  },
  {
    id: "aws",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "March 2024",
    type: "pdf",
    file: "AWS Certified Cloud Practitioner certificate.pdf", 
    color: "from-orange-400 to-yellow-500",
    iconBg: "bg-orange-500/20 text-orange-400"
  },
  {
    id: "oracle",
    name: "Oracle Foundations Associate",
    issuer: "Oracle",
    date: "February 2024", // Placeholder date
    type: "pdf",
    file: "OCI_CLOUD_FOUNDATIONS_ASSOCIATE.pdf",
    color: "from-red-600 to-orange-600",
    iconBg: "bg-red-600/20 text-red-500"
  },
  {
    id: "redhat",
    name: "Red Hat Certified Developer",
    issuer: "Red Hat",
    date: "November 2023",
    type: "pdf",
    file: "ProfessionalCertificationDigitalCredentials20250423-25-wngkar.pdf",
    color: "from-red-500 to-red-700",
    iconBg: "bg-red-500/20 text-red-400"
  },
  {
    id: "salesforce",
    name: "Salesforce AI Associate",
    issuer: "Salesforce",
    date: "January 2024",
    type: "pdf",
    file: "Cert5134058_AIAssociate_20241026.pdf",
    color: "from-blue-400 to-blue-600",
    iconBg: "bg-blue-500/20 text-blue-400"
  },
  {
    id: "nptel",
    name: "NPTEL Certification",
    issuer: "NPTEL",
    date: "October 2023",
    type: "image",
    file: "NPTL.jpg",
    color: "from-purple-500 to-indigo-600",
    iconBg: "bg-purple-500/20 text-purple-400"
  },
];

export function Certifications() {
  const [activeCert, setActiveCert] = useState(CERTIFICATIONS[0]);

  return (
    <section id="certifications" className="min-h-screen py-24 px-4 bg-background relative overflow-hidden flex flex-col justify-center">
      
      {/* --- BACKGROUND BLOBS (Matches Skills Theme) --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications & Credentials
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* --- MASTER-DETAIL LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:h-[750px]">
          
          {/* 1. LEFT SIDE: VERTICAL NAVIGATION */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col gap-4"
          >
             <div className="p-6 rounded-[2rem] bg-card/30 backdrop-blur-xl border border-white/10 shadow-2xl h-full flex flex-col">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-foreground px-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Award className="w-5 h-5" />
                    </div>
                    Credentials Library
                </h3>
                
                <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar pr-2 flex-grow">
                  {CERTIFICATIONS.map((cert) => (
                    <button
                      key={cert.id}
                      onClick={() => setActiveCert(cert)}
                      className={`relative group w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between
                        ${activeCert.id === cert.id 
                          ? 'bg-primary/10 border-primary/20 shadow-lg shadow-primary/5' 
                          : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* Colored Icon Box */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-colors duration-300 ${cert.iconBg}`}>
                           {cert.type === 'pdf' ? <FileText className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                        </div>
                        
                        <div className="flex flex-col">
                          <h4 className={`font-bold text-sm md:text-base transition-colors ${activeCert.id === cert.id ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                            {cert.name}
                          </h4>
                          <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
                        </div>
                      </div>

                      {activeCert.id === cert.id ? (
                        <motion.div layoutId="active-arrow">
                           <CheckCircle2 className="w-5 h-5 text-primary" />
                        </motion.div>
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-50 transition-opacity" />
                      )}
                    </button>
                  ))}
                </div>
             </div>
          </motion.div>

          {/* 2. RIGHT SIDE: PREVIEWER FRAME */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[500px] lg:h-full"
          >
             <div className="relative w-full h-full rounded-[2rem] bg-card/30 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                
                {/* Header Bar */}
                <div className="p-6 border-b border-white/10 bg-black/20 flex flex-wrap items-center justify-between gap-4 shrink-0">
                   <div>
                      <motion.h3 
                        key={activeCert.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold text-foreground"
                      >
                        {activeCert.name}
                      </motion.h3>
                      <motion.div 
                        key={`${activeCert.name}-meta`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground mt-1"
                      >
                         <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{activeCert.date}</span>
                         </div>
                         <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                         <span>{activeCert.issuer}</span>
                      </motion.div>
                   </div>
                   
                   <div className="flex gap-3">
                      <a href={activeCert.file} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="rounded-full h-9 border-white/10 bg-white/5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                           <Maximize2 className="w-4 h-4 mr-2" />
                           Full Screen
                        </Button>
                      </a>
                   </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-black/40 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                   
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeCert.id}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-full flex items-center justify-center p-4 lg:p-8"
                      >
                         {activeCert.type === 'image' ? (
                            // IMAGE RENDERER
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img 
                                  src={activeCert.file} 
                                  alt={activeCert.name} 
                                  className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
                                />
                            </div>
                         ) : (
                            // PDF RENDERER
                            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white relative">
                               <iframe 
                                 src={`${activeCert.file}#toolbar=0&view=FitH&navpanes=0`} 
                                 className="w-full h-full border-none"
                                 title={activeCert.name}
                               />
                               {/* Mobile Overlay for PDFs */}
                               <div className="absolute inset-0 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 text-foreground z-10 lg:hidden text-center p-6">
                                   <div className={`p-4 rounded-full bg-gradient-to-br ${activeCert.color} text-white shadow-lg`}>
                                      <FileText className="w-8 h-8" />
                                   </div>
                                   <div>
                                     <h4 className="font-bold text-lg">PDF Document</h4>
                                     <p className="text-sm text-muted-foreground">Tap below to view full certificate</p>
                                   </div>
                                   <a href={activeCert.file} target="_blank" rel="noopener noreferrer">
                                      <Button className="rounded-full font-bold">
                                         Open PDF <ExternalLink className="w-4 h-4 ml-2" />
                                      </Button>
                                   </a>
                               </div>
                            </div>
                         )}
                      </motion.div>
                   </AnimatePresence>
                </div>

                {/* Decorative Bottom Bar */}
                <motion.div 
                    key={activeCert.id}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`h-1.5 w-full bg-gradient-to-r ${activeCert.color}`} 
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}