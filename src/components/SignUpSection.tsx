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
    // <HeroHighlight>
    // <motion.h1
    //   initial={{
    //     opacity: 0,
    //     y: 20,
    //   }}
    //   animate={{
    //     opacity: 1,
    //     y: [20, -5, 0],
    //   }}
    //   transition={{
    //     duration: 0.5,
    //     ease: [0.4, 0.0, 0.2, 1],
    //   }}
    //   className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
    // >
    <div className="flex flex-col items-center justify-center h-[20rem] bg-black">
      <p className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-700 dark:to-purple-700 text-transparent bg-clip-text font-bold text-sm sm:text-lg">
        Get relevant and latest jobs based on your resume.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
          Signup
        </button>
      </div>
    </div>

    
    // </motion.h1>
    // </HeroHighlight>
  );
}
