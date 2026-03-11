"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Smartphone, Globe, Server } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={28} className="text-blue-500" />,
      skills: ["Flutter", "Dart", "Jetpack Compose"],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Web Development",
      icon: <Globe size={28} className="text-cyan-500" />,
      skills: ["Laravel Framework", "PHP", "Filament PHP", "Next.js", "Tailwind CSS"],
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "DevOps & Automation",
      icon: <Server size={28} className="text-violet-500" />,
      skills: ["Ubuntu Server", "n8n Workflow Automation", "ZeroTier VPN Networking", "Docker"],
      gradient: "from-violet-500 to-purple-500",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My toolkit for building high-performance applications."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-surface border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition-colors group"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-slate-800 border border-slate-700 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium hover:text-white hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
