# 🚀 Typography Quick Start

Guide rapide pour utiliser le système typographique professionnel.

## ✅ Installation terminée

Toutes les polices sont déjà configurées dans `app/globals.css` :
- ✅ Saans SemiBold & Medium
- ✅ Inter Variable
- ✅ SFMono
- ✅ Honk Sans

## 🎯 Usage de base

### HTML/JSX direct

```jsx
// Titres (Saans)
<h1>Titre principal</h1>
<h2>Section</h2>
<h3>Sous-section</h3>

// Texte (Inter)
<p>Paragraphe standard</p>
<p className="text-body-lg">Grand texte</p>
<p className="text-body-sm">Petit texte</p>

// Boutons
<button className="btn-primary">CTA Principal (Saans)</button>
<button className="btn-secondary">Secondaire (Inter)</button>

// Code
<code>const x = 10;</code>
```

### Avec TypeScript

```typescript
import { Typography, TypographyClasses } from '@/lib/typography';

// Inline styles
<div style={Typography.h1}>Titre</div>
<div style={Typography.body}>Texte</div>

// Classes (type-safe)
<div className={TypographyClasses.h2}>Titre</div>
<div className={TypographyClasses.body}>Texte</div>
```

## 📋 Classes essentielles

### Titres (Saans)
- `h1` `h2` - SemiBold (600)
- `h3` `h4` `h5` `h6` - Medium (500)

### Texte (Inter)
- `text-body` - Standard
- `text-body-lg` - Large
- `text-body-sm` - Small
- `text-caption` - Caption

### Boutons
- `btn-primary` - Saans Medium
- `btn-secondary` - Inter Medium
- `btn-large` `btn-small` - Tailles

### Familles
- `font-heading` - Saans
- `font-body` - Inter
- `font-mono` - SFMono
- `font-decorative` - Honk Sans (rare!)

### Utilitaires
- `fw-regular` `fw-medium` `fw-semibold` `fw-bold`
- `tracking-tight` `tracking-wide`
- `leading-tight` `leading-relaxed`

## 🎨 Exemple complet

```jsx
export const FeatureCard = () => (
  <div className="p-6 border rounded-lg">
    <h3>Titre de la Feature</h3>
    <p className="text-body-sm">
      Description de la fonctionnalité avec Inter Variable
      pour une excellente lisibilité.
    </p>
    <code>npm install package</code>
    <button className="btn-primary mt-4">
      Découvrir
    </button>
  </div>
);
```

## ⚡ Variables CSS

Utilisez les variables pour la cohérence :

```css
.custom-element {
  font-family: var(--font-heading);
  font-size: var(--fs-h3);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-h3);
  letter-spacing: var(--ls-tight);
}
```

## 📱 Responsive automatique

Toutes les tailles utilisent `clamp()` :
- Pas besoin de media queries
- Scale automatique mobile → desktop
- Redimensionnez le navigateur pour voir l'effet

## ⚠️ Règles importantes

✅ **À FAIRE**
- Saans pour titres et CTA
- Inter pour texte long
- Hiérarchie h1 → h2 → h3...

❌ **À ÉVITER**
- Mélanger polices dans un paragraphe
- Sauter des niveaux de titre
- Abuser de Honk Sans (décoratif)

## 📖 Documentation complète

Voir `TYPOGRAPHY_GUIDE.md` pour :
- Variables CSS détaillées
- Exemples avancés
- Bonnes pratiques
- Performance tips

Voir `components/TypographyExample.tsx` pour :
- Démonstration visuelle complète
- Cas d'usage réels
- Code examples

## 🎯 Architecture

```
Saans SemiBold → H1, H2 (Impact visuel)
Saans Medium   → H3-H6, Buttons primaires
Inter Variable → Body, Paragraphes, Buttons secondaires
SFMono         → Code uniquement
Honk Sans      → Accents rares
```

---

**Prêt à utiliser !** 🎉

Commencez par ajouter `<h1>`, `<p>`, et `<button className="btn-primary">` dans vos composants.

