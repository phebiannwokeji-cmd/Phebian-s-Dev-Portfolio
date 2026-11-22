import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import MarqueeBand from "@/components/sections/MarqueeBand";
import About from "@/components/sections/About";
import Desk from "@/components/sections/Desk";
import Work from "@/components/sections/Work";
import Archive from "@/components/sections/Archive";
import Toolkit from "@/components/sections/Toolkit";
import CodeSection from "@/components/sections/CodeSection";
import Credentials from "@/components/sections/Credentials";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <MarqueeBand />
        <About />
        <Desk />
        <Work />
        <Archive />
        <Toolkit />
        <CodeSection />
        <Credentials />
        <Journey />
      </main>
      <Contact />
    </>
  );
}
