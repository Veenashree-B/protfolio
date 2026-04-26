"use client";

import { FiDownload } from "react-icons/fi";

export default function Navbar() {

  return (
    <nav className="fixed top-5 left-1/2 z-50 transform -translate-x-1/2 w-[90vw] max-w-6xl bg-white/95 border border-slate-300/70 px-10 py-3 rounded-full flex items-center justify-between text-slate-900 backdrop-blur-lg shadow-lg">
      <div className="flex items-center gap-6">
        <a href="#home" className="text-base font-medium text-slate-800 hover:text-indigo-600 transition">Home</a>
        <a href="#skills" className="text-base font-medium text-slate-800 hover:text-indigo-600 transition">Skills</a>
        <a href="#projects" className="text-base font-medium text-slate-800 hover:text-indigo-600 transition">Projects</a>
        <a href="#experience" className="text-base font-medium text-slate-800 hover:text-indigo-600 transition">Experience</a>
        <a href="#contact" className="text-base font-medium text-slate-800 hover:text-indigo-600 transition">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="/resume.pdf"
          className="flex items-center gap-2 rounded-full bg-violet-600/95 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-violet-500 transition"
        >
          <FiDownload /> Resume
        </a>
      </div>
    </nav>
  );
}