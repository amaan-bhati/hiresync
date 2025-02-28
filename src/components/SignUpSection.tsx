"use client";
// import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// import { HeroHighlight } from "./ui/hero-highlight";
export function SignUpSection() {
  const words = [
    {
      text: "Job",
    },
    {
      text: "searching",
    },
    {
      text: "made",
    },
    {
      text: "easy",
    },
    {
      text: "with",
    },
    {
      text: "HireSync!",
      className: "bg-gradient-to-r from-[#6964f1] to-[#8d5cf5] text-transparent bg-clip-text",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] bg-black">
      <p className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700 text-transparent bg-clip-text font-bold text-sm sm:text-lg">
        Get relevant and latest jobs based on your resume.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="https://hiresync.onrender.com/">
          <button className="w-40 h-10 rounded-xl bg-white border dark:border-white border-transparent text-black text-sm">
            Hiresync
          </button>
        </a>
        <a href="https://resources-eight-zeta.vercel.app/">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Resources
          </button>
        </a>
      </div>
      <footer className="mt-4 text-center text-lg text-gray-500">
        Developed by <a href="https://amaanbhati.tech" className="text-blue-500 underline">Amaan</a> and <a href="https://www.pradipto.in/" className="text-blue-500 underline">Pradipto</a>
      </footer>
    </div>
  );
}
