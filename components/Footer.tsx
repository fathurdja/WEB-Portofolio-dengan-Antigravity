import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              FR S. Djafar
            </h3>
            <p className="text-slate-400 max-w-xs">
              Crafting high-performance web & mobile solutions with a focus on user experience and scalable architecture.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-surface rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-surface rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#contact" className="p-2 bg-surface rounded-full text-slate-400 hover:text-white hover:bg-primary transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Fathur Rizqi S Djafar. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0 flex items-center">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
