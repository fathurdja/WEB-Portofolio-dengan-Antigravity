"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Medal, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "2023",
      icon: <Award className="text-blue-500" size={24} />
    },
    {
      title: "Flutter & Dart App Development Bootcamp",
      issuer: "Udemy",
      date: "2022",
      icon: <CheckCircle2 className="text-cyan-500" size={24} />
    },
    {
      title: "First Place - University Hackathon",
      issuer: "UIN Alauddin Makassar",
      date: "2023",
      icon: <Medal className="text-yellow-500" size={24} />
    },
    {
      title: "Dicoding: Belajar Membuat Aplikasi Flutter untuk Pemula",
      issuer: "Dicoding Indonesia",
      date: "2022",
      icon: <CheckCircle2 className="text-teal-500" size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Certifications & Awards" 
          subtitle="Continuous learning and recognition in technical fields."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-6 bg-surface border border-slate-800 rounded-2xl hover:bg-slate-800/80 transition-all duration-300"
            >
              <div className="p-4 bg-slate-900 rounded-full border border-slate-700 mr-6">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">{cert.title}</h3>
                <div className="flex items-center text-sm text-slate-400 mt-1">
                  <span className="font-medium text-slate-300 mr-2">{cert.issuer}</span>
                  &bull;
                  <span className="ml-2">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
