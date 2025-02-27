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
    title: "Upload Your Resume",
    description:
      "Begin your journey by uploading your resume to HireSync.",
  },
  {
    title: "Resume Scanning",
    description:
      "HireSync scans your resume to extract key information and skills.",
  },
  {
    title: "Summary Generation",
    description:
      "A concise summary of your qualifications is generated for better job matching.",
  },
  {
    title: "Job Opportunity Exploration",
    description:
      "HireSync explores the internet for relevant job opportunities tailored to your profile.",
  },
  {
    title: "Multi-Site Job Search",
    description:
      "We search multiple websites to find the perfect job opportunity for you.",
  },
  {
    title: "Perfect Job Match",
    description:
      "Finally, HireSync matches you with the perfect job and provides a direct link to apply.",
  },
];
