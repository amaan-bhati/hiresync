'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export function AboutSection() {
  return (
    <div className="w-auto mx-auto px-8 bg-black">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HireSync Overview",
    description:
      "Discover how HireSync connects job seekers with opportunities in a seamless manner.",
    // link: "https://hiresync-ten.vercel.app",
  },
  {
    title: "Features of HireSync",
    description:
      "Explore the innovative features that make HireSync the go-to platform for job matching.",
    // link: "https://hiresync-ten.vercel.app",
  },
  {
    title: "Success Stories",
    description:
      "Read testimonials from users who found their dream jobs through HireSync.",
    // link: "https://hiresync-ten.vercel.app",
  },
  {
    title: "Join the Community",
    description:
      "Become a part of the HireSync community and connect with like-minded professionals.",
    // link: "https://hiresync-ten.vercel.app",
  },
  {
    title: "Get Started with HireSync",
    description:
      "Learn how to create your profile and start your job search with HireSync today.",
    // link: "https://hiresync-ten.vercel.app",
  },
  {
    title: "Contact Us",
    description:
      "Have questions? Reach out to our support team for assistance with HireSync.",
    // link: "https://hiresync-ten.vercel.app",
  },
];
