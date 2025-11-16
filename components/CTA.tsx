"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users } from "lucide-react";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="cta" className="bg-gradient-to-b from-primary to-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-4">
            Prêt à façonner l&apos;avenir avec nous ?
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Participez, devenez membre. Votre engagement fait la
            différence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Investor Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary rounded-3xl p-8 md:p-12 text-white border-2 border-secondary card-hover"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={40} />
            </div>
            <h3 className="font-heading font-bold text-3xl mb-6">
              Investir dans le progrès
            </h3>
            <p className="font-sans text-lg mb-8 text-white/90 leading-relaxed">
              Saisissez l&apos;opportunité de faire fructifier votre capital tout
              en soutenant l&apos;économie suisse. Accessible, garanti et à fort
              potentiel.
            </p>
            <a
              href="https://portal.evorev.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-white hover:bg-gray-50 text-secondary px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200  inline-block"
            >
              Accéder au portail
            </a>
          </motion.div>

          {/* Member Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary rounded-3xl p-8 md:p-12 text-white border-2 border-secondary card-hover"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Users size={40} />
            </div>
            <h3 className="font-heading font-bold text-3xl mb-6">
              Devenir Membre de l&apos;Association
            </h3>
            <p className="font-sans text-lg mb-8 text-white/90 leading-relaxed">
              Pour 20 CHF par an, devenez un membre actif d&apos;Évorev.
              Participez à nos assemblées générales, votez sur les orientations
              stratégiques et rejoignez le cœur de notre communauté engagée.
            </p>
            <a
              href="https://portal.evorev.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-white hover:bg-gray-50 text-secondary px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200  inline-block"
            >
              Devenir Membre via le Portail
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-100 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gray-200 rounded-full p-3 flex-shrink-0">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-heading font-bold text-secondary mb-2">
                Transactions Sécurisées
              </h4>
              <p className="font-sans text-gray-600 leading-relaxed">
                Toutes les transactions sont gérées de manière sécurisée sur notre portail partenaire. La création d&apos;un compte est simple, rapide et sécurisée.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

