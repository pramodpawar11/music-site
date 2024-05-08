import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import Whychooseus from "@/components/Whychooseus";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedSection/>
        <Whychooseus/>
      </main>
    </div>
  );
}
