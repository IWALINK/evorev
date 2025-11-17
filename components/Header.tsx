"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/utils";

const navItems = [
  { label: "Notre Mission", href: "mission", isLink: false },
  { label: "L'Opportunité", href: "opportunity", isLink: false },
  { label: "Programme d'Affiliation", href: "affiliation", isLink: false },
  { label: "Blog", href: "/blog", isLink: true },
  { label: "Événements", href: "/events", isLink: true },
  { label: "À Propos", href: "about", isLink: false },
  { label: "FAQ", href: "faq", isLink: false },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Détecter la section active
      const sections = navItems.filter(item => !item.isLink).map(item => item.href);
      const scrollPosition = window.scrollY + 150; // Offset pour la détection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Appel initial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // Si on est sur la page d'accueil, on scroll vers la section
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      // Sinon, on redirige vers la page d'accueil avec l'ancre
      window.location.href = `/#${href}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={scrollToTop}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#00caa0"/>
              <circle cx="12" cy="12" r="4" fill="#00caa0"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-secondary font-heading">ÉVOREV</span>
        </motion.button>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden lg:flex items-center gap-8"
        >
          {navItems.map((item, index) => {
            if (item.isLink) {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="transition-colors duration-200 font-medium text-sm relative text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              );
            }
            // Si on n'est pas sur la page d'accueil, utiliser un Link vers /#section
            if (!isHomePage) {
              return (
                <Link
                  key={index}
                  href={`/#${item.href}`}
                  className={`transition-colors duration-200 font-medium text-sm relative ${
                    activeSection === item.href
                      ? "text-secondary"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className={`transition-colors duration-200 font-medium text-sm relative ${
                  activeSection === item.href
                    ? "text-secondary"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex items-center gap-6"
        >
          <a
            href="https://portal.evorev.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium text-[15px]"
          >
            <Bell size={18} />
            <span>Portail</span>
          </a>
          {isHomePage ? (
            <button
              onClick={() => handleNavClick("cta")}
              className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            >
              Devenir Membre
            </button>
          ) : (
            <Link
              href="/#cta"
              className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            >
              Devenir Membre
            </Link>
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-1">
              {navItems.map((item, index) => {
                if (item.isLink) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full text-left hover:bg-gray-50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg text-gray-600 hover:text-gray-900"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                }
                // Si on n'est pas sur la page d'accueil, utiliser un Link
                if (!isHomePage) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={`/#${item.href}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left hover:bg-gray-50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg ${
                          activeSection === item.href
                            ? "text-secondary bg-secondary/5 border-l-2 border-secondary"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                }
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left hover:bg-gray-50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg ${
                      activeSection === item.href
                        ? "text-secondary bg-secondary/5 border-l-2 border-secondary"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                href="https://portal.evorev.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium py-3 px-4 rounded-lg"
              >
                <Bell size={18} />
                <span>Portail</span>
              </motion.a>
              {isHomePage ? (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.05 }}
                  onClick={() => handleNavClick("cta")}
                  className="w-full text-center bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 mt-4"
                >
                  Devenir Membre
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.05 }}
                >
                  <Link
                    href="/#cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 mt-4 block"
                  >
                    Devenir Membre
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

