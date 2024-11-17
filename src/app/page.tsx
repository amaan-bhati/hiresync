import { AboutSection } from "@/components/AboutSection";
import { GeminiComponent } from "@/components/GeminiComponent";
import { HeroSection } from "@/components/HeroSection";
import { LampDemo } from "@/components/LampDemo";
import { ParallaxSection } from "@/components/ParallaxSection";
// import { ProductsTab } from "@/components/ProductsTab";
import { SignUpSection } from "@/components/SignUpSection";
import { WobbleCardSection } from "@/components/WobbleCardSection";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LampDemo/>
      <AboutSection/>
      {/* <ProductsTab/> */}
      <GeminiComponent/>
      <ParallaxSection/>
     
      <WobbleCardSection/>
      <SignUpSection />
     
    </>
  );
}
