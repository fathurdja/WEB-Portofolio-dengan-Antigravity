"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
                Software Engineer & Mobile Developer
              </h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 leading-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Fathur Rizqi S Djafar</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-medium mt-4">
                Crafting High-Performance Web & Mobile Solutions
              </p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Informatics Engineering Student at UIN Alauddin Makassar.
              Passionate about building scalable applications and intuitive user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-full bg-surface border border-slate-700 hover:border-slate-500 text-slate-200 font-medium transition-all hover:bg-slate-800"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Optional: Add an image or illustration here */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-slate-800 p-2 shadow-2xl relative">
              <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative flex items-center justify-center">
                <Image
                  src="/profil.jpeg"
                  alt="Fathur Rizqi Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
