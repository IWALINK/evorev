# 🎨 Système Typographique Professionnel

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Démarrage rapide](#démarrage-rapide)
3. [Architecture](#architecture)
4. [Fichiers créés](#fichiers-créés)
5. [Test & Validation](#test--validation)

---

## Vue d'ensemble

Système typographique complet et professionnel intégrant 4 polices pour un design moderne et performant.

### ✅ Polices intégrées

| Police | Usage | Poids | Source |
|--------|-------|-------|--------|
| **Saans SemiBold** | Titres principaux (h1, h2) | 600 | `/fonts/Saans-SemiBold.woff2` |
| **Saans Medium** | Sous-titres (h3-h6), CTA | 500 | `/fonts/Saans-Medium.woff2` |
| **Inter Variable** | Corps de texte, paragraphes | 100-900 | `/fonts/InterVariable.woff2` |
| **SFMono** | Code, éléments techniques | 400 | Système (local) |
| **Honk Sans** | Accents décoratifs (rare) | 500 | Système (local) |

### 🎯 Avantages

- ✅ **Responsive** : Tailles avec `clamp()` qui s'adaptent automatiquement
- ✅ **Performant** : WOFF2 + `font-display: swap` + police variable
- ✅ **Type-safe** : Support TypeScript complet
- ✅ **Accessible** : Hiérarchie sémantique claire
- ✅ **Maintenable** : Variables CSS + classes utilitaires

---

## Démarrage rapide

### 1️⃣ Utilisation HTML/JSX

```jsx
// Titres (Saans)
<h1>Titre principal</h1>
<h2>Section</h2>
<h3>Sous-section</h3>

// Texte (Inter)
<p>Paragraphe standard</p>
<p className="text-body-lg">Grand texte</p>

// Boutons
<button className="btn-primary">CTA Principal</button>
<button className="btn-secondary">Secondaire</button>

// Code
<code>npm install</code>
```

### 2️⃣ Utilisation TypeScript

```typescript
import { Typography, TypographyClasses } from '@/lib/typography';

// Inline styles
<div style={Typography.h1}>Titre</div>

// Classes type-safe
<div className={TypographyClasses.body}>Texte</div>
```

### 3️⃣ Variables CSS personnalisées

```css
.custom {
  font-family: var(--font-heading);
  font-size: var(--fs-h3);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-h3);
}
```

---

## Architecture

### 📐 Hiérarchie typographique

```
┌─ Saans SemiBold (600) ─────────────────┐
│  ├─ H1: 2.5rem → 4.5rem (clamp)        │
│  └─ H2: 2rem → 3.5rem                  │
│                                         │
├─ Saans Medium (500) ───────────────────┤
│  ├─ H3: 1.5rem → 2.5rem                │
│  ├─ H4-H6: Progressif                  │
│  └─ Buttons Primary                    │
│                                         │
├─ Inter Variable (400-600) ─────────────┤
│  ├─ Body Large: 1.125rem → 1.25rem     │
│  ├─ Body: 1rem → 1.125rem              │
│  ├─ Body Small: 0.875rem → 1rem        │
│  ├─ Caption: 0.75rem → 0.875rem        │
│  └─ Buttons Secondary                  │
│                                         │
├─ SFMono (400) ─────────────────────────┤
│  └─ Code, Pre, Kbd, Samp               │
│                                         │
└─ Honk Sans (500) ──────────────────────┘
   └─ Accents décoratifs (PARCIMONIE)
```

### 🎨 Règles de design

**✅ À FAIRE**
- Saans pour tous les titres et CTA principaux
- Inter pour tout le texte body
- Hiérarchie claire h1 → h2 → h3
- Laisser `clamp()` gérer le responsive

**❌ À ÉVITER**
- Ne pas mélanger Saans et Inter dans un paragraphe
- Ne pas sauter des niveaux de titres
- Ne pas abuser de Honk Sans (seulement accents)
- Ne pas utiliser des tailles fixes (px)

---

## Fichiers créés

### 📁 Configuration

| Fichier | Description |
|---------|-------------|
| `app/globals.css` | **Modifié** - @font-face, variables CSS, classes utilitaires |
| `lib/typography.ts` | **Modifié** - Constantes TypeScript, classes, types |
| `tailwind.config.ts` | **Modifié** - Configuration Tailwind avec polices |

### 📚 Documentation

| Fichier | Usage |
|---------|-------|
| `TYPOGRAPHY_README.md` | 📖 Ce fichier - Vue d'ensemble complète |
| `TYPOGRAPHY_QUICKSTART.md` | ⚡ Guide de démarrage rapide |
| `TYPOGRAPHY_GUIDE.md` | 📕 Documentation détaillée complète |

### 🧪 Exemples & Tests

| Fichier | Description |
|---------|-------------|
| `components/TypographyExample.tsx` | 💻 Composant React avec exemples complets |
| `public/typography-test.html` | 🧪 Page de test HTML statique |

---

## Test & Validation

### 🧪 Tester visuellement

1. **Page de test HTML** :
   ```bash
   # Démarrer le serveur
   npm run dev
   
   # Ouvrir dans le navigateur
   http://localhost:3000/typography-test.html
   ```

2. **Composant React** :
   ```typescript
   import TypographyExample from '@/components/TypographyExample';
   
   // Utiliser dans une page
   <TypographyExample />
   ```

### ✅ Checklist de validation

- [ ] Toutes les polices se chargent (vérifier dans DevTools)
- [ ] Pas d'erreur de console
- [ ] Titres s'affichent en Saans
- [ ] Texte body en Inter
- [ ] Code en monospace
- [ ] Tailles responsive fonctionnent (redimensionner fenêtre)
- [ ] Pas de FOUT (Flash Of Unstyled Text) grâce à `font-display: swap`

### 🐛 Debugging

Si une police ne se charge pas :

1. **Vérifier les fichiers** :
   ```bash
   ls -lh public/fonts/
   # Devrait montrer :
   # - InterVariable.woff2
   # - InterVariable.woff
   # - Saans-Medium.woff2
   # - Saans-Medium.woff
   # - Saans-SemiBold.woff2
   # - Saans-SemiBold.woff
   ```

2. **Vérifier dans DevTools** :
   - Onglet Network → Filtrer par "Font"
   - Vérifier statut 200 pour chaque police
   - Console → Chercher erreurs de chargement

3. **Tester le fallback** :
   - Si police ne charge pas, fallback système s'active
   - SFMono et Honk Sans utilisent polices locales

---

## 📊 Performance

### Tailles de fichiers

```
Saans Medium     : ~50KB  (WOFF2)
Saans SemiBold   : ~50KB  (WOFF2)
Inter Variable   : ~120KB (WOFF2)
SFMono          : 0KB    (Local)
Honk Sans       : 0KB    (Local)
────────────────────────────────
Total           : ~220KB
```

### Optimisations

✅ **Format WOFF2** : Meilleure compression (-30% vs WOFF)  
✅ **Police variable** : 1 fichier Inter au lieu de 6+  
✅ **font-display: swap** : Texte visible immédiatement  
✅ **Polices locales** : SFMono et Honk Sans = 0 téléchargement  
✅ **Preload** : Ajoutez dans `<head>` si nécessaire :

```html
<link rel="preload" href="/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Saans-SemiBold.woff2" as="font" type="font/woff2" crossorigin>
```

---

## 🎓 Exemples d'usage

### Hero Section

```jsx
<section className="hero">
  <h1>Transformez votre business</h1>
  <p className="text-body-lg">
    Solution innovante pour développer votre entreprise
  </p>
  <button className="btn-primary btn-large">
    Commencer maintenant
  </button>
</section>
```

### Feature Card

```jsx
<div className="card">
  <h3>Performance</h3>
  <p className="text-body-sm">
    Optimisé pour une vitesse maximale avec les dernières
    technologies web.
  </p>
  <code>npm install @evorev/core</code>
  <button className="btn-secondary">En savoir plus</button>
</div>
```

### Accent décoratif

```jsx
<div className="promo">
  <span className="text-accent">
    🎉 Offre spéciale !
  </span>
  <h2>-50% aujourd'hui</h2>
</div>
```

---

## 🔧 Maintenance

### Ajouter une nouvelle graisse

```css
@font-face {
    font-family: 'Saans';
    src: url('/fonts/Saans-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
}
```

### Modifier les tailles responsive

```css
:root {
  /* Modifier la formule clamp() */
  --fs-h1: clamp(MIN, PREFERRED, MAX);
  
  /* Exemple : plus petit sur mobile */
  --fs-h1: clamp(2rem, 4vw + 1rem, 4.5rem);
}
```

### Changer les couleurs

```css
h1, h2, h3 { color: #VOTRE_COULEUR; }
.text-caption { color: #COULEUR_SECONDAIRE; }
code { color: #COULEUR_ACCENT; }
```

---

## 📞 Support

### 📚 Documentation

- **Quick Start** : `TYPOGRAPHY_QUICKSTART.md`
- **Guide complet** : `TYPOGRAPHY_GUIDE.md`
- **Exemples React** : `components/TypographyExample.tsx`
- **Test HTML** : `public/typography-test.html`

### 🐛 Problèmes courants

1. **Police ne charge pas** → Vérifier chemin dans `public/fonts/`
2. **Styles non appliqués** → Importer `globals.css` dans `_app.tsx`
3. **TypeScript erreurs** → Vérifier import de `@/lib/typography`

---

## ✨ Résumé

Vous avez maintenant un système typographique professionnel, performant et maintenable :

✅ **4 polices** intégrées et optimisées  
✅ **Variables CSS** pour flexibilité  
✅ **Classes utilitaires** prêtes à l'emploi  
✅ **TypeScript** type-safe  
✅ **Responsive** avec clamp()  
✅ **Documentation** complète  
✅ **Exemples** fonctionnels  
✅ **Tests** prêts à utiliser  

**🚀 Commencez à utiliser dès maintenant !**

```jsx
<h1>Votre titre en Saans</h1>
<p>Votre texte en Inter</p>
<button className="btn-primary">Action</button>
```

---

*Créé avec ❤️ pour un design typographique professionnel*

