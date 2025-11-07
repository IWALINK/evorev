"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Shield,
  Wallet,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    label: "Doublez",
    subtitle: "50-100% de rendement",
    position: "top-right",
  },
  {
    icon: Shield,
    label: "Sécurisé",
    subtitle: "Remboursement garanti",
    position: "right",
  },
  {
    icon: Wallet,
    label: "Accessible",
    subtitle: "Minimum 500 CHF",
    position: "bottom-right",
  },
  {
    icon: Users,
    label: "Impact",
    subtitle: "Innovation suisse",
    position: "bottom-left",
  },
];

export default function Opportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="opportunity" className="py-24 relative overflow-hidden">



      <div className="container-custom">
        {/* Important notice */}
       

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-6">
              <span className="font-sans text-sm font-medium tracking-wider text-gray-500 uppercase">
                Obligations 2026
              </span>
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-secondary mb-6 leading-tight">
              Obligations de Participation 2026
            </h2>
            <p className="font-sans text-xl md:text-2xl text-gray-500 max-w-xl lg:max-w-none mb-10 leading-relaxed">
              Un produit financier à fort rendement, sécurisé et à impact social.
            </p>
            {/* <a
              href="#details"
              className="group inline-flex items-center gap-2 font-sans text-lg font-medium text-gray-900 hover:text-secondary transition-colors duration-200"
            >
              En savoir plus
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a> */}
          </motion.div>

          {/* Right side - Responsive feature display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Mobile: Simple grid (< lg) */}
            <div className="grid grid-cols-2 gap-6 lg:hidden">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="flex flex-col items-center gap-3 text-center group"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ${isEven
                      ? 'bg-gradient-to-br from-green-400 to-green-600 border border-green-500'
                      : 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                      }`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className={`font-sans text-sm font-semibold mb-1 ${isEven ? 'text-green-700' : 'text-gray-900'
                        }`}>
                        {feature.label}
                      </div>
                      <div className="font-sans text-xs text-gray-500">
                        {feature.subtitle}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop: Circular flow (>= lg) */}
            <div className="hidden lg:block relative w-full max-w-[600px] mx-auto aspect-square py-12">
              {/* Center element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="font-sans text-sm font-bold text-green-700 mb-1">
                      Investir
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature nodes */}
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const positions = {
                  "top-right": "top-[5%] right-[15%]",
                  "right": "top-1/2 -translate-y-1/2 right-[2%]",
                  "bottom-right": "bottom-[5%] right-[15%]",
                  "bottom-left": "bottom-[5%] left-[15%]",
                };
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className={`absolute ${positions[feature.position as keyof typeof positions]}`}
                  >
                    <div className="flex flex-col items-center gap-2 group cursor-pointer max-w-[100px]">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 ${isEven
                          ? 'bg-gradient-to-br from-green-400 to-green-600 border-2 border-green-500'
                          : 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700'
                          }`}
                      >
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <div className="text-center">
                        <div className={`font-sans text-sm font-semibold mb-0.5 ${isEven ? 'text-green-700' : 'text-gray-900'
                          }`}>
                          {feature.label}
                        </div>
                        <div className="font-sans text-xs text-gray-500 whitespace-nowrap">
                          {feature.subtitle}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connection lines (subtle) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ opacity: 0.15 }}
              >
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="20%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-400"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="90%"
                  y2="50%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="80%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-400"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="80%"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Details section */}
        <motion.div
          id="details"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Detail cards */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-dashed border-green-300 hover:border-green-500 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-xl text-green-800 mb-2">
                Doublez votre investissement
              </h3>
              <p className="font-sans text-gray-700 text-[18px] leading-relaxed">
                Rendement de 50% à 100% + remboursement intégral du capital investi en 6 mois.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-dashed border-gray-400 hover:border-gray-600 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                Investissement sécurisé
              </h3>
              <p className="font-sans text-gray-700 text-[18px] leading-relaxed">
                Remboursement garanti au terme de 6 mois, période débutant le 1er janvier 2026.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-dashed border-gray-400 hover:border-gray-600 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-2">
                Accessible dès 500 CHF
              </h3>
              <p className="font-sans text-gray-700 text-[18px] leading-relaxed">
                652 obligations disponibles. Investissez selon vos moyens, participez au changement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-dashed border-green-300 hover:border-green-500 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-xl text-green-800 mb-2">
                Impact social direct
              </h3>
              <p className="font-sans text-gray-700 text-[18px] leading-relaxed">
                Vos fonds soutiennent des startups prometteuses et des programmes d'insertion professionnelle.
              </p>
            </div>
          </div>



          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://portal.evorev.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              Investir Maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

