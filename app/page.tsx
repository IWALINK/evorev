import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import dynamic from "next/dynamic";
import HowItWorks from "@/components/HowItWorks";

const Opportunity = dynamic(() => import("@/components/Opportunity"), {
  ssr: false,
});
import Affiliation from "@/components/Affiliation";
import Impact from "@/components/Impact";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { fetchProjects } from "@/lib/api";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Opportunity />
      <HowItWorks />
      <Affiliation />
      <Impact projects={projects} />
      <About />
      <CTA />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}

