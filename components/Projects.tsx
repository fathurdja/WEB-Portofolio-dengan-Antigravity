"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Employee Attendance System",
      description: "A comprehensive attendance tracking system featuring a Laravel backend and seamless Mobile App integration. Includes real-time tracking, reporting, and leave management.",
      tags: ["Laravel", "Flutter", "MySQL", "REST API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "ZeroTier VPN Performance Analysis",
      description: "A research and networking project evaluating the throughput, latency, and reliability of ZeroTier VPN across different network topologies and conditions.",
      tags: ["Networking", "ZeroTier", "Ubuntu Server", "Research"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      links: {
        github: "#",
      }
    },
    {
      title: "Dashboard Admin Specialist",
      description: "A highly customizable and responsive admin dashboard application built rapidly using Filament PHP. Features robust roles and permissions management, data tables, and interactive charts.",
      tags: ["Filament PHP", "Laravel", "Tailwind CSS", "Livewire"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Project Gallery" 
          subtitle="A selection of my recent work in web, mobile, and networking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.links.github && (
                    <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1">
                      <ExternalLink size={18} />
                      <span className="text-sm">Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
