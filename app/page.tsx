import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Opportunity from "@/components/Opportunity";
import HowItWorks from "@/components/HowItWorks";
import Affiliation from "@/components/Affiliation";
import Impact from "@/components/Impact";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <Opportunity />
      <HowItWorks />
      <Affiliation />
      <Impact />
      <About />
      <CTA />
      <FAQ />
      <Footer />
      <BackToTop />
    </main>
  );
}

