"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import HyperText from "./ui/hyper-text";
import PulsatingButton from "./ui/pulsating-button";
import Image from 'next/image'; // Assuming you're using Next.js for image optimization

export function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-24 md:mt-24"
      >
        <Highlight className="text-white mt-8 md:mt-0">Hiresync</Highlight> simplifies job
        searching by matching you with the perfect job based on your resume.
        {/* It's a tailored experience just for you. */}
        
        <PulsatingButton className="mx-auto text-xl mt-6">Cook with HireSync</PulsatingButton>
      </motion.h1>
      {/* Image for mobile devices only */}
      <div className="mt-0 block md:hidden">
        <Image 
          src="/worker.png" // Replace with your image path
          alt="Description of image"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="mx-auto " // Moved right and down
        />
      </div>
    </HeroHighlight>
  );
}
