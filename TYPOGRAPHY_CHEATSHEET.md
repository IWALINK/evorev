# 🎯 Typography Cheat Sheet

Quick reference pour le développement quotidien.

---

## 🎨 Polices

| Police | Usage | Weight |
|--------|-------|--------|
| **Saans** | Titres, CTA | 500, 600 |
| **Inter** | Body, Texte | 100-900 |
| **SFMono** | Code | 400 |
| **Honk Sans** | Décoratif (rare) | 500 |

---

## 📝 HTML Direct

```jsx
// Titres (Saans)
<h1>Titre 1</h1>
<h2>Titre 2</h2>
<h3>Titre 3</h3>

// Texte (Inter)
<p>Paragraphe</p>
<p className="text-body-lg">Grand</p>
<p className="text-body-sm">Petit</p>
<p className="text-caption">Caption</p>

// Boutons
<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-primary btn-large">Large</button>
<button className="btn-primary btn-small">Small</button>

// Code
<code>inline code</code>
<pre><code>bloc code</code></pre>

// Décoratif (rare!)
<span className="text-decorative">Accent</span>
<span className="text-accent">Grand accent</span>
```

---

## 💻 TypeScript

```typescript
import { Typography, TypographyClasses } from '@/lib/typography';

// Inline styles
<div style={Typography.h1}>...</div>
<div style={Typography.body}>...</div>
<div style={Typography.buttonPrimary}>...</div>

// Classes
<div className={TypographyClasses.h2}>...</div>
<div className={TypographyClasses.body}>...</div>
<div className={TypographyClasses.buttonPrimary}>...</div>
```

---

## 🎨 Classes Utilitaires

### Familles
```css
.font-heading    /* Saans */
.font-body       /* Inter */
.font-mono       /* SFMono */
.font-decorative /* Honk Sans */
```

### Graisses
```css
.fw-regular   /* 400 */
.fw-medium    /* 500 */
.fw-semibold  /* 600 */
.fw-bold      /* 700 */
```

### Letter Spacing
```css
.tracking-tight   /* -0.02em */
.tracking-normal  /* 0 */
.tracking-wide    /* 0.02em */
.tracking-wider   /* 0.05em */
```

### Line Height
```css
.leading-tight    /* 1.3 */
.leading-normal   /* 1.6 */
.leading-relaxed  /* 1.8 */
```

---

## 📐 Variables CSS

### Font Families
```css
var(--font-heading)
var(--font-body)
var(--font-mono)
var(--font-decorative)
```

### Font Sizes (responsive)
```css
var(--fs-h1)     /* 2.5rem → 4.5rem */
var(--fs-h2)     /* 2rem → 3.5rem */
var(--fs-h3)     /* 1.5rem → 2.5rem */
var(--fs-body-lg)
var(--fs-body)
var(--fs-body-sm)
var(--fs-caption)
```

### Font Weights
```css
var(--fw-regular)   /* 400 */
var(--fw-medium)    /* 500 */
var(--fw-semibold)  /* 600 */
var(--fw-bold)      /* 700 */
```

### Line Heights
```css
var(--lh-h1)       /* 1.1 */
var(--lh-h2)       /* 1.2 */
var(--lh-body)     /* 1.6 */
var(--lh-tight)    /* 1.3 */
var(--lh-relaxed)  /* 1.8 */
```

### Letter Spacing
```css
var(--ls-tight)   /* -0.02em */
var(--ls-normal)  /* 0 */
var(--ls-wide)    /* 0.02em */
var(--ls-wider)   /* 0.05em */
```

---

## 🎯 Exemples rapides

### Hero Section
```jsx
<section>
  <h1>Titre principal</h1>
  <p className="text-body-lg">Description</p>
  <button className="btn-primary btn-large">CTA</button>
</section>
```

### Card
```jsx
<div className="card">
  <h3>Titre</h3>
  <p className="text-body-sm">Description</p>
  <button className="btn-secondary">Action</button>
</div>
```

### Code Block
```jsx
<div>
  <h4>Installation</h4>
  <pre><code>npm install package</code></pre>
  <p className="text-caption">Node 18+ required</p>
</div>
```

---

## ✅ Règles d'or

1. **Saans** → Titres et CTA
2. **Inter** → Texte body
3. **SFMono** → Code uniquement
4. **Honk Sans** → Accents rares
5. Hiérarchie : h1 → h2 → h3
6. Ne pas mélanger polices

---

## 🔗 Liens

- **Quick Start** : `TYPOGRAPHY_QUICKSTART.md`
- **Guide** : `TYPOGRAPHY_GUIDE.md`
- **Test** : `/typography-test.html`
- **Demo** : `/typography-demo`

---

*Gardez cette carte sous les yeux pendant le dev !* 📌

