"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Users, GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Co-Lead",
      organization: "GDG (Google Developer Groups) on Campus UIN Alauddin Makassar",
      period: "2023 - Present",
      location: "Makassar, Indonesia",
      description: "Leading a community of student developers. Organizing technical workshops, study jams, and networking events focused on Google technologies.",
      icon: <Users className="text-blue-500" size={24} />,
      color: "from-blue-500/20 to-blue-500/0",
      borderColor: "border-blue-500/30",
    },
    {
      role: "Active Member",
      organization: "Study Club Inready Workgroup",
      period: "2022 - Present",
      location: "Makassar, Indonesia",
      description: "Participating in collaborative learning and project development focusing on Web and Mobile technologies. Engaging in peer-to-peer mentoring and hackathons.",
      icon: <GraduationCap className="text-cyan-500" size={24} />,
      color: "from-cyan-500/20 to-cyan-500/0",
      borderColor: "border-cyan-500/30",
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience & Leadership" 
          subtitle="My journey in tech communities and professional roles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-slate-900/50 backdrop-blur-md border ${exp.borderColor} rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Subtle Gradient Background */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${exp.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm md:text-base">{exp.organization}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center text-slate-400 text-sm mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {exp.location}
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
