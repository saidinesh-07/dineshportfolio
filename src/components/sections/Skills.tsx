import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ===============================================
// 1. DATA: GENERAL SKILLS & CYBER TOOLS
// ===============================================

const SKILLS_DATA = [
  {
    name: "Python",
    logo: "python.png",
    description: "A versatile, high-level programming language known for its clear syntax. Excellent for backend web development, data science, and scripting.",
    category: "Language",
  },
  {
    name: "Java",
    logo: "java.png",
    description: "A robust, object-oriented language primarily used for enterprise-level applications, large-scale backend systems, and Android development.",
    category: "Language",
  },
  {
    name: "MySQL",
    logo: "MySQL.png",
    description: "A widely-used open-source Relational Database Management System (RDBMS). Essential for structured data storage and management.",
    category: "Database",
  },
  {
    name: "Hibernate",
    logo: "hibernate.png",
    description: "An Object-Relational Mapping (ORM) framework for Java, simplifying database interaction by mapping Java objects to database tables.",
    category: "Framework",
  },
  {
    name: "Spring Boot",
    logo: "Spring Boot.png",
    description: "A framework built on top of the Spring framework, designed to simplify the creation of stand-alone, production-ready, Spring-based applications.",
    category: "Framework",
  },
  {
    name: "Django",
    logo: "Django.png",
    description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design, often referred to as 'batteries-included'.",
    category: "Framework",
  },
  {
    name: "Git",
    logo: "git.png",
    description: "A distributed version control system for tracking changes in source code during software development, crucial for collaboration.",
    category: "Tool",
  },
  {
    name: "React",
    logo: "React.png",
    description: "A JavaScript library for building user interfaces, focused on declarative components and efficient DOM manipulation.",
    category: "Framework",
  },
  {
    name: "Express",
    logo: "Express.png",
    description: "A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    category: "Framework",
  },
  {
    name: "HTML",
    logo: "HTML.png",
    description: "The standard markup language for documents designed to be displayed in a web browser. It provides the structure of web pages.",
    category: "Language",
  },
  {
    name: "CSS",
    logo: "CSS.png",
    description: "A style sheet language used for describing the presentation of a document written in a markup language like HTML, handling the layout and visual styling.",
    category: "Language",
  },
  {
    name: "JavaScript",
    logo: "JS.png",
    description: "A high-level, interpreted scripting language that makes web pages interactive, essential for both frontend and backend development.",
    category: "Language",
  },
];

const CYBER_TOOLS = [
  { name: "Kali Linux", icon: "kali.png", desc: "Advanced Penetration Testing OS" },
  { name: "Nmap", icon: "nmap.png", desc: "Network Discovery & Auditing" },
  { name: "Wireshark", icon: "wireshark.png", desc: "Network Protocol Analyzer" },
  { name: "Burp Suite", icon: "burp.png", desc: "Web Vulnerability Scanner" },
  { name: "Metasploit", icon: "metasploit.png", desc: "Penetration Testing Framework" },
];

// ===============================================
// 2. HELPER HOOK
// ===============================================

const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, handler: (e: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

// ===============================================
// 3. SKILL CARD (Carousel Item)
// ===============================================

const SkillCard = ({ skill, onClick }: { skill: any; onClick: (s: any) => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-6 w-32 h-32 md:w-40 md:h-40 cursor-pointer 
                 rounded-2xl border border-border/50 
                 bg-card/50 backdrop-blur-xl shadow-lg
                 hover:shadow-xl hover:border-primary/50 transition-all duration-300 ease-out
                 relative overflow-hidden group shrink-0"
      onClick={() => onClick(skill)}
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img
        src={skill.logo} 
        alt={`${skill.name} Logo`}
        className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md"
      />
      <p className="mt-3 text-sm font-semibold text-foreground text-center">
        {skill.name}
      </p>
    </motion.div>
  );
};

// ===============================================
// 4. CYBER TOOL CARD (New Section Item)
// ===============================================

const CyberToolCard = ({ tool }: { tool: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative flex flex-col items-center p-4 rounded-xl border border-green-500/20 
                 bg-black/40 backdrop-blur-md overflow-hidden group hover:border-green-500/60 transition-colors"
    >
      {/* Matrix Green Glow on Hover */}
      <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-3 object-contain drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
      
      <h4 className="text-green-400 font-bold font-mono text-sm tracking-wide mb-1 group-hover:text-green-300">
        {tool.name}
      </h4>
      <p className="text-xs text-gray-400 text-center font-mono leading-tight">
        {tool.desc}
      </p>
    </motion.div>
  );
};

// ===============================================
// 5. DETAIL PANEL (Enlarged)
// ===============================================

const SkillDetailPanel = ({ skill, onClose }: { skill: any; onClose: () => void }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  useOutsideClick(panelRef, onClose);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
      >
        <motion.div
          ref={panelRef}
          initial={{ scale: 0.5, opacity: 0, rotateX: 90 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="w-[95%] md:w-[90%] max-w-7xl max-h-[90vh] overflow-y-auto p-8 md:p-12 rounded-3xl 
                     border border-border/50 bg-card/90 
                     shadow-2xl backdrop-blur-2xl 
                     text-foreground relative"
        >
          <div className="flex items-center space-x-6 mb-8 pb-4 border-b border-border/30">
            <img
              src={skill.logo}
              alt={`${skill.name} Logo`}
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <h3 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {skill.name}
            </h3>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            {skill.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base mb-12">
            <div className="p-6 rounded-xl border border-border/30 bg-background/50">
                <h4 className="font-bold text-xl mb-2 text-primary">Category</h4>
                <p className="text-foreground">{skill.category}</p>
            </div>
            <div className="p-6 rounded-xl border border-border/30 bg-background/50">
                <h4 className="font-bold text-xl mb-2 text-primary">Use Cases</h4>
                <p className="text-foreground">Web Development, Software Engineering, Scalable Systems</p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="px-10 py-4 rounded-full font-bold text-lg 
                         bg-primary text-primary-foreground 
                         hover:opacity-90 transition-opacity duration-200 
                         shadow-lg transform active:scale-95 flex items-center gap-2"
            >
              Back
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ===============================================
// 6. MAIN COMPONENT
// ===============================================

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCardClick = (skill: any) => {
    setSelectedSkill(skill);
  };

  const handleClose = () => {
    setSelectedSkill(null);
  };

  const CARD_WIDTH = 160; 
  const GAP_WIDTH = 32;   
  const ITEM_SIZE = CARD_WIDTH + GAP_WIDTH;
  const TOTAL_SCROLL_WIDTH = SKILLS_DATA.length * ITEM_SIZE;

  return (
    <section id="skills" className="min-h-screen py-20 px-4 overflow-hidden relative flex flex-col items-center">
      <div className="max-w-7xl w-full z-10 relative">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 
                       bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>

        {/* --- 1. CAROUSEL SECTION --- */}
        <div 
          className="w-full relative overflow-hidden py-10 mb-20"
          style={{ height: '300px' }} 
        >
          <motion.div
            className="flex flex-nowrap gap-8 absolute top-10 left-0"
            style={{
                width: `${TOTAL_SCROLL_WIDTH * 2}px`, 
                animation: 'scroll-left 40s linear infinite', 
            }}
          >
            {SKILLS_DATA.concat(SKILLS_DATA).map((skill, index) => (
              <SkillCard 
                key={`${skill.name}-${index}`} 
                skill={skill} 
                onClick={handleCardClick} 
              />
            ))}
          </motion.div>
        </div>
        
        {/* --- 2. CYBER SECURITY ARSENAL SECTION --- */}
        <div className="relative w-full max-w-5xl mx-auto mt-10">
            {/* Cyber Container Frame */}
            <div className="relative p-8 md:p-10 rounded-2xl border border-green-500/30 bg-black/80 backdrop-blur-md overflow-hidden">
                
                {/* Header with Terminal Icon */}
                <div className="flex items-center gap-3 mb-8 border-b border-green-500/30 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <h3 className="ml-4 text-green-400 font-mono text-xl md:text-2xl font-bold tracking-wider uppercase">
                        &gt; Cyber_Security_Arsenal
                    </h3>
                </div>

                {/* Animated Scanning Line */}
                <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent z-0"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                    style={{ opacity: 0.3 }}
                />

                {/* Cyber Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative z-10">
                    {CYBER_TOOLS.map((tool, index) => (
                        <CyberToolCard key={index} tool={tool} />
                    ))}
                </div>

                {/* Decorative Grid Background */}
                <div className="absolute inset-0 z-[-1]" 
                     style={{ 
                        backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)', 
                        backgroundSize: '20px 20px' 
                     }}>
                </div>
            </div>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
        `}</style>
      </div>

      {selectedSkill && (
        <SkillDetailPanel skill={selectedSkill} onClose={handleClose} />
      )}
    </section>
  );
}