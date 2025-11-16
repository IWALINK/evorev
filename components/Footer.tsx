"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-[180px] h-[60px] bg-secondary rounded-lg flex items-center justify-center text-white font-heading font-bold text-2xl mb-6">
              ÉVOREV
            </div>
            <p className="text-gray-300 leading-relaxed">
              Association suisse dédiée à la jeunesse et à l&apos;entrepreneuriat.
              Investir dans l&apos;avenir, ensemble.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://portal.evorev.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Accéder au Portail
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("opportunity")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Investir
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("affiliation")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Programme d&apos;Affiliation
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  À Propos
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Legal Documents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Documents Légaux</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/documents/statuts.pdf"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <FileText size={18} />
                  <span>Télécharger les Statuts (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href="/legal/mentions-legales"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <Shield size={18} />
                  <span>Mentions Légales</span>
                </a>
              </li>
              <li>
                <a
                  href="/legal/politique-confidentialite"
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <Lock size={18} />
                  <span>Politique de Confidentialité</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Location & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="text-center space-y-4">
            <p className="text-gray-400">
              Association Évorev | Basée à Genève, Suisse 🇨🇭
            </p>
            <p className="text-gray-400">
              Adresse: 25 rue de Genève 1225 Chêne Bourg
            </p>
            <p className="text-gray-400">
              Politiquement neutre et
              confessionnellement indépendante
            </p>
            <p className="text-gray-300 font-medium">
              © {currentYear} Évorev Association | Tous droits réservés
            </p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center items-center space-x-8 mt-8 flex-wrap gap-4"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <Shield size={20} className="text-primary" />
            <span className="text-sm">Transactions Sécurisées</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Lock size={20} className="text-primary" />
            <span className="text-sm">Données Protégées</span>
          </div>
          {/* <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-2xl">🇨🇭</span>
            <span className="text-sm">100% Suisse</span>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}

