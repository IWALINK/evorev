"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { UserPlus, Calculator, Banknote } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Créez votre compte",
    description:
      "Inscrivez-vous sur notre plateforme sécurisée en quelques minutes. Aucun frais d'inscription.",
    badgeBg: "bg-green-600",
  },
  {
    number: 2,
    icon: Calculator,
    title: "Choisissez votre investissement",
    description:
      "Investissez à partir de 500 CHF dans nos obligations de participation. Suivez l'évolution de votre portefeuille en temps réel.",
    badgeBg: "bg-secondary",
  },
  {
    number: 3,
    icon: Banknote,
    title: "Recevez vos rendements",
    description:
      "Après 6 mois (à partir du 1er janvier 2026), recevez votre capital + vos rendements directement sur votre compte.",
    badgeBg: "bg-green-600",
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-white to-gray-50/30 py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28 max-w-3xl mx-auto"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary mb-6">
            Votre parcours d&apos;investisseur{" "}
            <span className="gradient-text">en 3 étapes</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-gray-500">
            Un processus simple et transparent pour commencer à investir dès aujourd'hui.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Visual Icon Container */}
                  <div className="mb-10 relative w-full max-w-[280px] mx-auto">
                    <div className="w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center border border-gray-200/50 transition-all duration-300 overflow-hidden">
                      <Icon className="text-secondary w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
                    </div>
                    {/* Step number badge */}
                    <div className={`absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 ${step.badgeBg} rounded-full flex items-center justify-center z-10`}>
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="font-heading font-[400] text-xl md:text-2xl text-secondary">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-xs mx-auto px-2">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - Mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-10">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Arrow - Desktop/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 lg:top-16 lg:-right-12 xl:-right-10">
                      <svg
                        className="w-6 h-6 lg:w-8 lg:h-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

