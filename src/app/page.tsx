import { AboutSection } from "@/components/AboutSection";
import { GeminiComponent } from "@/components/GeminiComponent";
import { GlowingEffectSection } from "@/components/GlowingEffect";
// import { GlobeSection } from "@/components/GlobeSection";
import { HeroSection } from "@/components/HeroSection";
import { HeroVideoDialogDemo } from "@/components/HeroVideoDialogDemo";
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
      <GeminiComponent/>
      {/* <GlobeSection/> */}
      <HeroVideoDialogDemo/>
      <AboutSection/>
      {/* <ProductsTab/> */}
      
      {/* <ParallaxSection/> */}
     
      {/* <WobbleCardSection/> */}
      {/* <GlowingEffectSection/> */}
      <SignUpSection />
     
    </>
  );
}
