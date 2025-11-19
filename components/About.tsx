"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 500, suffix: "+", label: "jeunes accompagnés depuis la création" },
  { value: 85, suffix: "%", label: "taux d'insertion professionnelle" },
  { value: 2.5, suffix: "M CHF", label: "investis dans les programmes" },
  { value: 42, suffix: "+", label: "startups soutenues" },
];

const values = [
  {
    title: "Les personnes d'abord",
    content:
      "Nous cultivons un environnement de confiance et de respect où chacun trouve sa place. Nous privilégions l'écoute, la bienveillance et l'inclusion pour permettre à chaque jeune de s'épanouir.",
  },
  {
    title: "Exigence & excellence",
    content:
      "Nous visons des standards élevés dans nos programmes et nos partenariats. La qualité, la rigueur et l'impact mesurable guident nos décisions au quotidien.",
  },
  {
    title: "Esprit de progression",
    content:
      "Nous avançons avec curiosité et pragmatisme. Nous apprenons en faisant, nous itérons vite et nous partageons nos apprentissages pour progresser collectivement.",
  },
  {
    title: "Vérité en action",
    content:
      "Nous agissons avec transparence et responsabilité. Nos engagements se traduisent en preuves concrètes, au service des jeunes et de la société.",
  },
];

function CounterAnimation({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value, hasAnimated]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-extrabold tracking-tight text-current">
      {count.toFixed(suffix === "M CHF" ? 1 : 0)}
      {suffix}
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="about" className="bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-4">
            Qui sommes-nous ?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Valeurs (accordion) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Nos valeurs</p>
              <h3 className="font-heading font-bold text-3xl md:text-5xl text-secondary leading-tight">
                Nos valeurs imprègnent tout ce que nous créons avec Évorev.
              </h3>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {values.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={index !== values.length - 1 ? "border-b border-gray-200" : ""}>
                    <button
                      className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left hover:bg-gray-50 focus:outline-none"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-medium text-gray-900">{item.title}</span>
                      <span className={
                        "inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 text-base"
                      }>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 -mt-1">
                        <p className="text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Illustration inspirée de la maquette */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative"
          >
            <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-600" />
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="bg-white/90 rounded-2xl shadow-xl px-8 py-9 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-5">
                    <Image
                      src="/PhotoCoupeDuMonde.jpg"
                      alt="Coupe du Monde"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-white/90 text-sm">
                    {/* spacer to add subtle glow beneath trophy */}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-between text-sm text-gray-600 mt-3">
              <span>
                Évorev reconnue pour son impact social positif.
              </span>
              <a href="#about" className="inline-flex items-center gap-1 font-medium text-secondary hover:underline">
                Lire plus
                <span aria-hidden>→</span>
              </a>
            </div> */}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="overflow-hidden bg-primary -mx-4 md:-mx-8 lg:mx-0 rounded-none lg:rounded-3xl"
        >
          <h3 className="sr-only">Notre Impact en Chiffres</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-y divide-blue-300/40">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative min-h-[220px] md:min-h-[260px] p-10 md:p-16 text-white"
              >
                <div className="absolute top-8 left-8 md:top-10 md:left-10">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-blue-100/90 max-w-[26ch] leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

