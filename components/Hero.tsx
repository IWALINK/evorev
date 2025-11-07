"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const rotatingWords = ["Soutenez", "Innovez", "Ensemble"];

const stats = [
  { value: "450+", label: "Projets Réalisés" },
  { value: "1.5k+", label: "Membres Actifs" },
  { value: "850+", label: "Vies Impactées" },
  { value: "10k+", label: "Bénéficiaires" }
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://media.istockphoto.com/id/1363141305/fr/vid%C3%A9o/des-personnes-cr%C3%A9atives-r%C3%A9fl%C3%A9chissent-%C3%A0-un-projet-de-d%C3%A9marrage-et-%C3%A0-une-collaboration.mp4?s=mp4-640x640-is&k=20&c=R7pTEZUrku949QEf6bnmrYTKAN-m4dMwJHUzBhrWP-4="
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom w-full relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 lg:mb-20 sm:mt-0 mt-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 max-w-4xl"
          >
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] md:leading-[1.1] tracking-tight">
                <span className="text-white">
                  Investir dans l&apos;avenir de la{" "}
                  <span className="text-primary">Suisse</span>, c&apos;est investir dans sa jeunesse.
                </span>
                <span className="block mt-2 md:mt-3">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="gradient-text"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </span>
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-2xl mx-auto">
              Rejoignez Évorev, une association dédiée à la jeunesse et à
              l&apos;entrepreneuriat suisse. Une opportunité unique d&apos;allier un
              investissement à fort potentiel de rendement et un impact social
              direct et local.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
              <button
                onClick={() => scrollToSection("opportunity")}
                className="w-full sm:w-auto bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              >
                Découvrir l&apos;opportunité
              </button>
              
              <a
                href="https://portal.evorev.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-secondary border-2 border-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 inline-block"
              >
                Accéder au Portail
              </a>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-4 sm:p-5 md:p-6 backdrop-blur-md bg-white/10 rounded-xl md:rounded-2xl border border-white/30"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("mission")}
        >
          <ChevronDown size={32} className="text-white md:w-10 md:h-10" />
        </motion.div>
      </motion.div>
    </section>
  );
}

