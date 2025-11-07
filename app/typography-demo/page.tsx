/**
 * Typography Demo Page
 * Full demonstration of the professional typography system in Next.js
 */

import React from 'react';
import { Typography, TypographyClasses } from '@/lib/typography';

export default function TypographyDemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container-custom py-20 text-center">
        <h1 className="mb-6">
          Système Typographique Professionnel
        </h1>
        <p className="text-body-lg max-w-3xl mx-auto mb-8">
          Un système complet avec Saans, Inter Variable, SFMono et Honk Sans
          pour créer des interfaces modernes et performantes.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
            Voir la démo
          </button>
          <button className="btn-secondary border-2 border-gray-300 px-8 py-4 rounded-lg hover:border-gray-400 transition">
            Documentation
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-5xl fw-bold mb-2">4</div>
              <p className="text-body-sm opacity-80">Polices intégrées</p>
            </div>
            <div>
              <div className="font-heading text-5xl fw-bold mb-2">220KB</div>
              <p className="text-body-sm opacity-80">Poids total</p>
            </div>
            <div>
              <div className="font-heading text-5xl fw-bold mb-2">100%</div>
              <p className="text-body-sm opacity-80">Responsive</p>
            </div>
            <div>
              <div className="font-heading text-5xl fw-bold mb-2">∞</div>
              <p className="text-body-sm opacity-80">Possibilités</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Showcase */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2>Hiérarchie Typographique</h2>
          <p className="text-body">
            Une structure claire du H1 au caption
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Headings */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="mb-6">Titres (Saans)</h3>
            <div className="space-y-4">
              <div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  Heading 1
                </h1>
                <code className="text-caption">
                  font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem)
                </code>
              </div>
              <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                  Heading 2
                </h2>
                <code className="text-caption">
                  font-size: clamp(2rem, 3vw + 0.5rem, 3.5rem)
                </code>
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Heading 3
                </h3>
                <code className="text-caption">
                  font-size: clamp(1.5rem, 2vw + 0.5rem, 2.5rem)
                </code>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
            <h3 className="mb-6">Texte Body (Inter)</h3>
            <div className="space-y-4">
              <div>
                <p className="text-body-lg mb-2">
                  Large body text - Pour introductions
                </p>
                <code className="text-caption">
                  text-body-lg: 1.125rem → 1.25rem
                </code>
              </div>
              <div>
                <p className="text-body mb-2">
                  Standard body text - Contenu principal
                </p>
                <code className="text-caption">
                  text-body: 1rem → 1.125rem
                </code>
              </div>
              <div>
                <p className="text-body-sm mb-2">
                  Small body text - Informations secondaires
                </p>
                <code className="text-caption">
                  text-body-sm: 0.875rem → 1rem
                </code>
              </div>
              <div>
                <p className="text-caption mb-2">
                  CAPTION - Métadonnées et labels
                </p>
                <code className="text-caption">
                  text-caption: 0.75rem → 0.875rem
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Fonctionnalités Principales</h2>
            <p className="text-body">
              Tout ce dont vous avez besoin pour une typographie professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h4>Performance Optimale</h4>
              <p className="text-body-sm mb-4">
                WOFF2, police variable, et font-display: swap pour des
                chargements ultra-rapides sans FOUT.
              </p>
              <pre className="text-xs"><code>font-display: swap</code></pre>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 card-hover">
              <div className="text-4xl mb-4">📱</div>
              <h4>Responsive Natif</h4>
              <p className="text-body-sm mb-4">
                Utilise clamp() pour des tailles fluides qui s'adaptent
                automatiquement à tous les écrans.
              </p>
              <pre className="text-xs"><code>clamp(MIN, PREF, MAX)</code></pre>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 card-hover">
              <div className="text-4xl mb-4">🔒</div>
              <h4>Type-Safe</h4>
              <p className="text-body-sm mb-4">
                Support TypeScript complet avec auto-complétion et vérification
                de types pour tous les styles.
              </p>
              <pre className="text-xs"><code>Typography.h1</code></pre>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 card-hover">
              <div className="text-4xl mb-4">🎨</div>
              <h4>4 Polices Intégrées</h4>
              <p className="text-body-sm mb-4">
                Saans pour impact, Inter pour lisibilité, SFMono pour code,
                Honk Sans pour accents.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="font-heading text-sm px-2 py-1 bg-gray-100 rounded">
                  Saans
                </span>
                <span className="font-body text-sm px-2 py-1 bg-green-100 rounded">
                  Inter
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 card-hover">
              <div className="text-4xl mb-4">📐</div>
              <h4>Variables CSS</h4>
              <p className="text-body-sm mb-4">
                Plus de 30 variables CSS pour personnaliser facilement tailles,
                graisses, espacements et hauteurs de ligne.
              </p>
              <pre className="text-xs"><code>var(--fs-h1)</code></pre>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 card-hover">
              <div className="text-4xl mb-4">🛠️</div>
              <h4>Classes Utilitaires</h4>
              <p className="text-body-sm mb-4">
                Classes prêtes à l'emploi pour tous les cas d'usage : titres,
                body, boutons, code, décoratif.
              </p>
              <pre className="text-xs"><code>btn-primary</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2>Utilisation Simple</h2>
          <p className="text-body">
            Trois façons d'utiliser le système typographique
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <h4 className="mb-4">HTML/JSX Direct</h4>
            <pre className="text-sm"><code>{`<h1>Mon titre</h1>
<p>Mon texte</p>
<button className="btn-primary">
  Action
</button>`}</code></pre>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <h4 className="mb-4">TypeScript Styles</h4>
            <pre className="text-sm"><code>{`import { Typography } from '@/lib/typography';

<div style={Typography.h1}>
  Titre
</div>`}</code></pre>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
            <h4 className="mb-4">TypeScript Classes</h4>
            <pre className="text-sm"><code>{`import { TypographyClasses } from '@/lib/typography';

<div className={TypographyClasses.h2}>
  Titre
</div>`}</code></pre>
          </div>
        </div>
      </section>

      {/* Decorative Example */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <div className="text-decorative text-3xl mb-6">
            ✨ Offre Spéciale ✨
          </div>
          <h2 className="text-white mb-4">
            Obtenez 50% de réduction aujourd'hui
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8 opacity-90">
            Profitez de notre système typographique professionnel avec une
            documentation complète, des exemples, et un support TypeScript.
          </p>
          <button className="bg-white hover:bg-gray-50 text-secondary border-2 border-secondary px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
            Commencer maintenant
          </button>
          <p className="text-caption mt-4 opacity-70">
            Aucune carte de crédit requise • Installation en 5 minutes
          </p>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="container-custom py-16">
        <div className="text-center mb-12">
          <h2>Documentation</h2>
          <p className="text-body">
            Tout ce dont vous avez besoin pour démarrer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-2 border-gray-200 p-6 rounded-lg text-center hover:border-primary transition">
            <div className="text-4xl mb-3">📖</div>
            <h5 className="mb-2">README</h5>
            <p className="text-body-sm mb-3">
              Vue d'ensemble complète du système
            </p>
            <code className="text-xs">TYPOGRAPHY_README.md</code>
          </div>

          <div className="border-2 border-gray-200 p-6 rounded-lg text-center hover:border-primary transition">
            <div className="text-4xl mb-3">⚡</div>
            <h5 className="mb-2">Quick Start</h5>
            <p className="text-body-sm mb-3">
              Guide de démarrage rapide
            </p>
            <code className="text-xs">TYPOGRAPHY_QUICKSTART.md</code>
          </div>

          <div className="border-2 border-gray-200 p-6 rounded-lg text-center hover:border-primary transition">
            <div className="text-4xl mb-3">📕</div>
            <h5 className="mb-2">Guide complet</h5>
            <p className="text-body-sm mb-3">
              Documentation détaillée
            </p>
            <code className="text-xs">TYPOGRAPHY_GUIDE.md</code>
          </div>

          <div className="border-2 border-gray-200 p-6 rounded-lg text-center hover:border-primary transition">
            <div className="text-4xl mb-3">🧪</div>
            <h5 className="mb-2">Tests</h5>
            <p className="text-body-sm mb-3">
              Page de test HTML
            </p>
            <code className="text-xs">typography-test.html</code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container-custom text-center">
          <h3 className="text-white mb-4">
            Prêt à améliorer votre typographie ?
          </h3>
          <p className="text-body opacity-80 mb-6">
            Système complet, performant et facile à utiliser
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <button className="bg-white hover:bg-gray-50 text-secondary px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
              Voir les exemples
            </button>
            <button className="bg-transparent hover:bg-white text-white hover:text-secondary border-2 border-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
              Lire la doc
            </button>
          </div>
          <p className="text-caption opacity-60">
            © 2024 EvoRev • Système typographique professionnel
          </p>
        </div>
      </footer>
    </main>
  );
}

