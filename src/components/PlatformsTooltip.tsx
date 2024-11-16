"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const platform = [
  {
    id: 1,
    name: "Linkedin",
    image:
      "/linkedin.jpg",
  },
  {
    id: 2,
    name: "Wellfound",
    image:
      "/wellfound.jpg",
  },
  {
    id: 3,
    name: "Internshala",
    image:
      "/internshala.png",
  },
  {
    id: 4,
    name: "Youth Combinator",
    image:
      "/y-combinator.png",
  },
  {
    id: 5,
    name: "Naukri",
    image:
      "/naukri.png",
  },
  {
    id: 6,
    name: "Glassdoor",
    image: "/glassdoor.png",
  },
  {
    id: 7,
    name: "indeed",
    image: "/indeed.webp",
  },
 
];

export function PlatformsTooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={platform} />
    </div>
  );
}
