import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Security } from "@/components/Security";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Benefits />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
