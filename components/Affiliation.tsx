"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Check } from "lucide-react";

const steps = [
  {
    label: "Étape 1",
    title: "Inscrivez-vous",
    items: [
      "Créez votre compte ambassadeur en quelques minutes",
      "Obtenez votre code unique de parrainage",
      "Accédez à votre tableau de bord personnalisé",
    ],
  },
  {
    label: "Étape 2",
    title: "Partagez l'opportunité",
    items: [
      "Partagez votre lien avec vos proches",
      "Présentez les avantages d'investir avec Évorev",
      "Suivez vos invitations en temps réel",
    ],
  },
  {
    label: "Étape 3",
    title: "Recevez vos récompenses",
    items: [
      "10% de commission sur chaque investissement",
      "Paiements automatiques sur votre compte",
      "Aucune limite de gains",
    ],
  },
];

export default function Affiliation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="affiliation"
      className="bg-gradient-to-b from-primary to-white py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="container-custom max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <p className="font-sans text-sm md:text-base lg:text-lg text-white mb-3 md:mb-4">
            Gagnez en partageant notre mission.
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-secondary mb-6 md:mb-8 px-4">
            Devenez Ambassadeur{" "}
            <span className="gradient-text">Évorev</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-gray-800 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-heading font-semibold text-base md:text-lg lg:text-xl shadow-xl">
            <span>10% de Commission</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </motion.div>

        {/* Timeline Section - Desktop & Tablet */}
        <div className="hidden md:block relative px-2 md:px-6 lg:px-8">
          {/* Timeline Labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-10 lg:mb-12"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white border-2 border-dotted border-gray-200 rounded-full px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2.5 font-sans text-xs  text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200">
                  {step.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Timeline Line with Dots */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mb-10 md:mb-14 lg:mb-20"
          >
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white -translate-y-1/2" />

            {/* Progress Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-white -translate-y-1/2 origin-left"
            />

            {/* Dots */}
            <div className="relative grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="flex justify-center"
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-primary shadow-lg ring-4 ring-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                className="bg-white rounded-2xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 border-2 border-dotted border-gray-200  hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-heading font-semibold text-lg md:text-xl  text-secondary mb-4 md:mb-5 lg:mb-6">
                  {step.title}
                </h3>

                <ul className="space-y-3 md:space-y-3.5 lg:space-y-4">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2.5 md:gap-3">
                      <div className="flex-shrink-0 w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="font-sans text-xs md:text-sm  text-gray-600 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section - Mobile (Vertical) */}
        <div className="md:hidden relative px-4 sm:px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 sm:left-7 top-0 bottom-0 w-0.5 bg-white" />

            {/* Animated Progress Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="absolute left-6 sm:left-7 top-0 bottom-0 w-0.5 bg-white origin-top"
            />

            {/* Steps */}
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    animate={inView ? { scale: 1, rotate: 360 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.2,
                      ease: "easeOut"
                    }}
                    className="absolute left-0 sm:left-1 top-6 sm:top-8"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary shadow-xl flex items-center justify-center ring-4 ring-white">
                      <span className="text-white font-heading font-bold text-lg sm:text-xl">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>

                  {/* Step Label Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                    className="inline-block bg-white border-2 border-gray-200 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 font-sans text-xs sm:text-sm font-medium text-gray-700 shadow-sm mb-3 sm:mb-4"
                  >
                    {step.label}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-gray-200 shadow-md"
                  >
                    <h3 className="font-heading font-semibold text-lg sm:text-xl text-secondary mb-4 sm:mb-5">
                      {step.title}
                    </h3>

                    <ul className="space-y-3 sm:space-y-3.5">
                      {step.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.7 + index * 0.2 + itemIndex * 0.1
                          }}
                          className="flex items-start gap-2.5 sm:gap-3"
                        >
                          <div className="flex-shrink-0 w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                          </div>
                          <span className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <a
            href="https://portal.evorev.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-gray-800 text-white px-6 md:px-8 lg:px-10 py-3 md:py-3.5 lg:py-4 rounded-full text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 inline-block shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Rejoindre le Programme d&apos;Affiliation
          </a>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-center mt-12 md:mt-16 lg:mt-20"
        >
          <a
            href="https://portal.evorev.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
          >
            Rejoindre le Programme d&apos;Affiliation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

