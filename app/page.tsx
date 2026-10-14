import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Clients from "@/components/home/Clients";
import Pitch from "@/components/home/Pitch";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";
import { pageMetadata, DEFAULT_DESCRIPTION } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Coreflux Solutions — Software for serious businesses",
  absoluteTitle: true,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Clients />
      <Pitch />
      <Process />
      <CTA />
    </>
  );
}
