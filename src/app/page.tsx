import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import Whychooseus from "@/components/Whychooseus";
import { Ourtestimonials } from "@/components/Ourtestimonials";
import UpcommingWebinars from "@/components/UpcommingWebinars";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedSection />
        <Whychooseus />
        <Ourtestimonials />
        <UpcommingWebinars />
      </main>
    </div>
  );
}
