import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Pitch from "@/components/home/Pitch";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Pitch />
      <Process />
      <CTA />
    </>
  );
}
