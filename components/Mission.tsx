"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const missionBlocks = [
  {
    title: "Fédérer la finance et l'impact social",
    text: "Évorev est une association suisse à but non lucratif qui révolutionne l'insertion professionnelle. En investissant dans nos obligations de participation, vous soutenez des jeunes talents et des startups innovantes.",
    icon: "🤝",
    gradient: "from-blue-600 to-blue-800",
    image: "https://media.istockphoto.com/id/1602814557/fr/photo/couple-mature-canap%C3%A9-et-ordinateur-portable-pour-la-planification-du-financement-le.jpg?s=2048x2048&w=is&k=20&c=I5eQ9Xd1eohgTgPEMzoOYIntGUvFJo0wSWmayS8_R84=",
  },
  {
    title: "Notre approche : du potentiel à la réussite",
    text: "Nous accompagnons les jeunes talents et les startups à travers des parcours qualifiants, des communautés d'apprentissage et le développement d'outils numériques.",
    icon: "📈",
    gradient: "from-gray-200 to-gray-300",
    image: 'https://media.istockphoto.com/id/827498286/fr/photo/ceux-qui-travaillent-dur-gagner.jpg?s=2048x2048&w=is&k=20&c=9oUqrzBBYrCGF3qSmOSZaiW3jSsgbRmrzD2vrJXwY0Y='
  },
  {
    title: "Un investissement transparent et engagé",
    text: "Chaque franc investi dans Évorev finance directement des programmes d'insertion, des formations qualifiantes et des projets entrepreneuriaux portés par de jeunes Suisses.",
    icon: "💎",
    gradient: "from-gray-700 to-gray-900",
    image: 'https://plus.unsplash.com/premium_photo-1677675634231-70bbe246db1f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1335'
  },
];

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device on mount
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleCardClick = (index: number) => {
    if (isTouchDevice) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  const isExpanded = (index: number) => {
    if (isTouchDevice) {
      return clickedIndex === index;
    }
    return hoveredIndex === index;
  };

  return (
    <section id="mission" className="bg-black py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight max-w-5xl mx-auto">
            Plus qu&apos;un investissement,{" "}
            <span className="text-white">un mouvement pour l&apos;impact social</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => !isTouchDevice && setHoveredIndex(index)}
              onMouseLeave={() => !isTouchDevice && setHoveredIndex(null)}
              onClick={() => handleCardClick(index)}
            >
              {/* Background gradient or image */}
              <div
                className={`absolute inset-0 transition-transform duration-500 ${isExpanded(index) ? "scale-105" : "scale-100"
                  }`}
              >
                {block.image ? (
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${block.gradient}`} />
                    {/* Overlay pattern or icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <span className="text-[200px]">{block.icon}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative backdrop-blur-sm bg-black/20 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-3 leading-tight">
                    {block.title}
                  </h3>

                  {/* Description - shows on hover/click */}
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      isExpanded(index)
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="font-sans text-base text-white/90 leading-relaxed overflow-hidden"
                  >
                    {block.text}
                  </motion.p>
                </motion.div>

                {/* Plus button */}
                <motion.button
                  className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white text-2xl font-light hover:bg-white/30 hover:scale-110 transition-all duration-300"
                  animate={{ rotate: isExpanded(index) ? 45 : 0 }}
                  whileHover={{ rotate: isExpanded(index) ? 45 : 90 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className=" rounded-3xl mt-16">
          <div className="flex items-start gap-4">
            {/* <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div> */}
            <div className="flex-1 ">
              <h4 className="font-heading font-bold text-lg text-primary mb-5">
                Timing de votre investissement
              </h4>
              <p className="font-sans text-white leading-relaxed sm:text-4xl text-2xl">
                La période de 6 mois débute le 1er janvier 2026 pour tout investissement réalisé avant cette date.
                Pour les investissements effectués après le 1er janvier 2026, la période de 6 mois commence à la date de votre investissement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

