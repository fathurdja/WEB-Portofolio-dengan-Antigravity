"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Interested in collaborating or have a project in mind? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Contact Information</h3>
            <p className="text-slate-400">
              Feel free to reach out for collaborations, freelance opportunities, or just to say hi! I usually respond within 24 hours.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Me At</p>
                  <p className="text-lg font-medium text-slate-200">hello@fathurrizqi.dev</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Me At</p>
                  <p className="text-lg font-medium text-slate-200">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-lg font-medium text-slate-200">Makassar, South Sulawesi, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-slate-800 rounded-2xl p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-4 rounded-lg flex items-center justify-center transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
