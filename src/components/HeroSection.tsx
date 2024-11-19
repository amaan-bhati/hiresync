"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
// import HyperText from "./ui/hyper-text";
import PulsatingButton from "./ui/pulsating-button";
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import { PlatformsTooltip } from "./PlatformsTooltip";
import Link from "next/link";

export function HeroSection() {
  return (
    <HeroHighlight>

        {/* <motion.div
          className="mb-18" // Reduced top margin to bring it closer to the section below
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MembersTooltip />
        </motion.div> */}
      
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
         <PlatformsTooltip />
        <Highlight className="text-white mt-8 md:mt-0">Hiresync</Highlight> simplifies job
        searching by matching you with the perfect job based on your resume.
        {/* It's a tailored experience just for you. */}
        
        <Link href="https://hiresync.onrender.com/">
          <PulsatingButton className="mx-auto text-xl mt-6">Cook with HireSync</PulsatingButton>
        </Link>
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
