"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const faqs = [
  {
    question: "Quand commence le délai de 6 mois pour le remboursement ?",
    answer:
      "Le délai de 6 mois commence le 1er janvier 2026, quelle que soit votre date d'investissement. Si vous investissez après cette date, le délai débute à votre date d'investissement.",
  },
  {
    question: "Mon capital est-il vraiment garanti ?",
    answer:
      "Oui. Votre capital initial est garanti et vous sera remboursé intégralement au terme des 6 mois, en plus de vos rendements.",
  },
  {
    question: "Puis-je investir et devenir membre simultanément ?",
    answer:
      "Absolument. L'investissement dans les obligations et l'adhésion à l'association sont deux démarches distinctes mais complémentaires. La cotisation de membre est de 20 CHF/an.",
  },
  {
    question: "Comment fonctionne exactement le programme de parrainage ?",
    answer:
      "Connectez-vous à la plateforme pour obtenir votre code de parrainage unique. Partagez-le avec vos proches. Lorsqu'une personne investit en utilisant votre code, vous recevez 10% du montant investi directement sur votre compte.",
  },
  {
    question: "Où va exactement mon argent ?",
    answer:
      "Vos fonds financent des startups suisses à fort potentiel et des programmes d'insertion professionnelle pour jeunes. Vous recevrez des rapports détaillés sur l'utilisation des fonds.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-4">
            Questions <span className="gradient-text">Fréquentes</span>
          </h2>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={index !== faqs.length - 1 ? "border-b border-gray-200" : ""}>
                  <button
                    className="w-full flex items-center justify-between gap-4 py-5 px-6 md:px-8 text-left hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-lg md:text-xl text-secondary pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={
                        "inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-600 text-base"
                      }
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 font-sans text-gray-600 leading-relaxed text-lg -mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-lg text-gray-600 mb-6">
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="https://portal.evorev.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 inline-block"
          >
            Contactez-nous via le Portail
          </a>
        </motion.div>
      </div>
    </section>
  );
}

