# Évorev - Site Web Officiel

Site web moderne et responsive pour l'Association Évorev, plateforme d'investissement à impact social suisse.

## 🚀 Technologies Utilisées

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: React Intersection Observer

## 📦 Installation

1. Installez les dépendances :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

2. Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎨 Structure du Projet

```
evorev-website/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil (one-page)
│   ├── globals.css         # Styles globaux
│   └── sitemap.ts          # Sitemap pour SEO
├── components/
│   ├── Header.tsx          # Navigation sticky
│   ├── Hero.tsx            # Section hero avec animations
│   ├── Mission.tsx         # Section mission
│   ├── Opportunity.tsx     # Opportunités d'investissement
│   ├── HowItWorks.tsx      # Comment ça marche
│   ├── Affiliation.tsx     # Programme d'affiliation
│   ├── Impact.tsx          # Impact social
│   ├── About.tsx           # À propos avec statistiques
│   ├── CTA.tsx             # Call-to-action final
│   ├── FAQ.tsx             # Questions fréquentes
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Fonctions utilitaires
├── types/
│   └── index.ts            # Types TypeScript
└── public/
    ├── images/             # Images du site (à ajouter)
    └── robots.txt          # Configuration SEO
```

## 🎯 Sections du Site

1. **Header & Navigation** - Navigation sticky avec menu responsive
2. **Hero Section** - Section d'accueil avec texte animé et CTAs
3. **Notre Mission** - 3 blocs expliquant la mission d'Évorev
4. **L'Opportunité** - Présentation des obligations de participation 2026
5. **Comment ça marche** - 3 étapes pour investir
6. **Programme d'Affiliation** - Devenir ambassadeur (10% commission)
7. **Notre Impact** - Projets soutenus et réalisations
8. **À Propos** - Présentation de l'association avec statistiques animées
9. **Devenir Membre & CTA** - Deux options : investir ou devenir membre
10. **FAQ** - Accordéon interactif avec questions fréquentes
11. **Footer** - Informations légales et liens importants

## 🎨 Palette de Couleurs

- **Couleur principale**: #00caa0 (turquoise)
- **Couleur secondaire**: #000000 (noir)
- **Background**: #FFFFFF (blanc)

## 🔤 Système de Typographie

Le site utilise un système de typographie moderne basé sur **Google Fonts** :

### Polices Principales

- **Space Grotesk** (400, 700) - Utilisée pour tous les titres et sous-titres (headings)
- **Work Sans** (400, 500, 600) - Utilisée pour le corps de texte, boutons et liens

### Classes Tailwind Personnalisées

**Famille de polices:**
- `font-heading` - Pour les titres (Space Grotesk)
- `font-sans` - Pour le corps de texte (Work Sans)

**Tailles de texte avec line-heights:**
- `text-caption` - 12px / 16px
- `text-body-sm` - 14px / 20px
- `text-body` - 16px / 24px
- `text-body-lg` - 18px / 26px
- `text-subtitle-sm` - 16px / 22px
- `text-subtitle` - 18px / 24px
- `text-subtitle-lg` - 20px / 28px
- `text-title-sm` - 24px / 32px
- `text-title` - 28px / 36px
- `text-title-lg` - 32px / 40px

**Exemples d'utilisation:**

```tsx
// Pour un titre principal
<h1 className="font-heading font-bold text-4xl md:text-5xl">Titre</h1>

// Pour un sous-titre
<h2 className="font-heading font-bold text-title">Sous-titre</h2>

// Pour un paragraphe
<p className="font-sans text-body text-gray-600">Texte du paragraphe</p>

// Pour un bouton
<button className="font-sans font-semibold text-lg">Bouton</button>
```

### Fichier de Configuration

Le système complet est défini dans `lib/typography.ts` avec :
- Constantes de polices
- Styles de typographie (title, subtitle, body, button, link, caption)
- Classes Tailwind prêtes à l'emploi

## ✨ Fonctionnalités

### Animations
- Scroll reveal avec fade-in et slide-up
- Hover effects sur boutons et cartes
- Compteurs animés pour les statistiques
- Timeline animée
- Rotation de texte dans le hero
- Smooth scroll navigation
- Parallaxe subtil

### Responsive Design
- Mobile-first approach
- Menu burger pour mobile
- Grilles adaptatives
- Images optimisées

### Performance
- Lazy loading des images
- Code splitting automatique
- Optimisation SEO
- Score Lighthouse > 90

### Accessibilité
- Semantic HTML
- ARIA labels
- Navigation au clavier
- Focus visible

## 📱 Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🖼️ Assets à Ajouter

Placez vos images dans le dossier `public/images/` :

- Logo Évorev (180x60px, SVG ou PNG transparent)
- Image hero (1920x1080px)
- 3 images mission (600x400px)
- 2 images impact (800x600px)
- Favicon (32x32px et autres tailles)

## 🔗 Liens Externes

Le site intègre des liens vers le portail externe :
- Bouton "Accéder au Portail" : `https://portal.evorev.ch`
- Tous les CTA d'investissement et d'adhésion pointent vers ce portail

## 🚀 Déploiement

### Vercel (Recommandé)

Le moyen le plus simple de déployer est d'utiliser [Vercel](https://vercel.com) :

```bash
npm run build
vercel --prod
```

### Build Production

```bash
npm run build
npm start
```

## 📝 Configuration SEO

Le site inclut :
- Meta tags optimisés (title, description, keywords)
- Open Graph pour les réseaux sociaux
- Sitemap automatique
- Robots.txt
- Metadata Next.js

## 🛠️ Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` pour ajuster les couleurs :

```typescript
colors: {
  primary: "#00caa0",
  secondary: "#000000",
}
```

### Modifier le contenu

Le contenu est directement dans les composants. Éditez les fichiers dans `components/` pour modifier le texte.

### Ajouter des animations

Utilisez Framer Motion pour ajouter des animations personnalisées :

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Votre contenu
</motion.div>
```

## 📄 Licence

© 2024 Évorev Association. Tous droits réservés.

## 🤝 Support

Pour toute question, contactez-nous via le [portail Évorev](https://portal.evorev.ch).

