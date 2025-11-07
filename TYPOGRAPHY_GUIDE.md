# 📖 Guide d'utilisation de la typographie

Ce guide explique comment utiliser le système typographique professionnel implémenté dans le projet.

## 🎨 Architecture des polices

### 1. **Saans** (Titres et CTA principaux)
- **SemiBold (600)** : Pour les titres principaux (h1, h2)
- **Medium (500)** : Pour les sous-titres (h3, h4, h5, h6) et boutons primaires
- **Usage** : Donne du caractère et de l'impact visuel

### 2. **Inter Variable** (Corps de texte)
- **Poids** : 100-900 (police variable)
- **Usage** : Texte body, paragraphes, boutons secondaires
- **Avantage** : Excellente lisibilité pour le contenu long

### 3. **SFMono** (Code et technique)
- **Usage** : Blocs de code, éléments `<code>`, `<pre>`, `<kbd>`, `<samp>`
- **Fallback** : Monaco, Menlo, Courier New

### 4. **Honk Sans** (Décoratif - PARCIMONIE !)
- **Usage** : Accents visuels, éléments marquants ponctuels
- **⚠️ Important** : À utiliser avec modération pour garder un aspect professionnel

---

## 🔤 Variables CSS disponibles

### Familles de polices
```css
--font-heading     /* Saans pour titres */
--font-body        /* Inter pour texte */
--font-mono        /* SFMono pour code */
--font-decorative  /* Honk Sans (rare) */
```

### Tailles de police responsives (clamp)
```css
--fs-h1            /* 2.5rem → 4.5rem */
--fs-h2            /* 2rem → 3.5rem */
--fs-h3            /* 1.5rem → 2.5rem */
--fs-h4            /* 1.25rem → 2rem */
--fs-h5            /* 1.125rem → 1.5rem */
--fs-h6            /* 1rem → 1.25rem */
--fs-body-lg       /* 1.125rem → 1.25rem */
--fs-body          /* 1rem → 1.125rem */
--fs-body-sm       /* 0.875rem → 1rem */
--fs-caption       /* 0.75rem → 0.875rem */
```

### Graisses
```css
--fw-regular       /* 400 */
--fw-medium        /* 500 */
--fw-semibold      /* 600 */
--fw-bold          /* 700 */
```

### Line heights
```css
--lh-h1            /* 1.1 pour grands titres */
--lh-h2            /* 1.2 */
--lh-h3            /* 1.3 */
--lh-h4            /* 1.4 */
--lh-body          /* 1.6 pour texte lisible */
--lh-tight         /* 1.3 */
--lh-relaxed       /* 1.8 */
```

### Letter spacing
```css
--ls-tight         /* -0.02em pour grands titres */
--ls-normal        /* 0 */
--ls-wide          /* 0.02em */
--ls-wider         /* 0.05em pour décoratif */
```

---

## 🛠️ Classes utilitaires

### Titres (Saans)
```html
<h1>Titre principal</h1>
<h2>Section titre</h2>
<h3>Sous-section</h3>

<!-- Ou avec classes -->
<div class="h1">Comme un H1</div>
<div class="h2">Comme un H2</div>
```

### Texte body (Inter)
```html
<p>Paragraphe standard</p>
<p class="text-body">Texte body normal</p>
<p class="text-body-lg">Texte body large</p>
<p class="text-body-sm">Texte body small</p>
<p class="text-caption">Légende ou caption</p>
```

### Familles de polices
```html
<div class="font-heading">Texte en Saans</div>
<div class="font-body">Texte en Inter</div>
<div class="font-mono">Texte en SFMono</div>
<div class="font-decorative">Texte en Honk Sans</div>
```

### Boutons
```html
<!-- Bouton primaire (Saans Medium) -->
<button class="btn-primary">CTA Principal</button>

<!-- Bouton secondaire (Inter Medium) -->
<button class="btn-secondary">Action secondaire</button>

<!-- Tailles -->
<button class="btn-primary btn-large">Grand bouton</button>
<button class="btn-primary btn-small">Petit bouton</button>
```

### Code
```html
<!-- Inline code -->
<code>const x = 10;</code>

<!-- Bloc de code -->
<pre><code>
function hello() {
  console.log('Hello');
}
</code></pre>
```

### Décoratif (Honk Sans - rare!)
```html
<span class="text-decorative">Accent visuel</span>
<span class="text-accent">Grande accent coloré</span>
```

### Graisses
```html
<p class="fw-regular">Texte regular</p>
<p class="fw-medium">Texte medium</p>
<p class="fw-semibold">Texte semibold</p>
<p class="fw-bold">Texte bold</p>
```

### Letter spacing
```html
<h1 class="tracking-tight">Titre serré</h1>
<p class="tracking-normal">Texte normal</p>
<span class="tracking-wide">Texte espacé</span>
<span class="tracking-wider">Très espacé</span>
```

### Line height
```html
<p class="leading-tight">Interligne serré</p>
<p class="leading-normal">Interligne normal</p>
<p class="leading-relaxed">Interligne relâché</p>
```

---

## 💡 Exemples d'usage

### Hero section
```html
<section class="hero">
  <h1>Transformez votre business</h1>
  <p class="text-body-lg">
    Une solution innovante pour développer votre entreprise
  </p>
  <button class="btn-primary btn-large">Commencer</button>
</section>
```

### Card de feature
```html
<div class="card">
  <h3>Innovation</h3>
  <p class="text-body">
    Nous utilisons les dernières technologies pour créer
    des solutions performantes.
  </p>
  <button class="btn-secondary">En savoir plus</button>
</div>
```

### Section code
```html
<div class="code-example">
  <h4>Installation</h4>
  <pre><code>npm install @evorev/toolkit</code></pre>
  <p class="text-caption">Compatible avec Node.js 18+</p>
</div>
```

### Accent décoratif
```html
<section class="testimonials">
  <span class="text-decorative">❤️ Aimé par 10 000+ clients</span>
  <h2>Ce qu'ils disent de nous</h2>
</section>
```

---

## 📊 Hiérarchie typographique

```
H1 (Saans SemiBold 600)
├─ H2 (Saans SemiBold 600)
│  ├─ H3 (Saans Medium 500)
│  │  ├─ H4 (Saans Medium 500)
│  │  │  └─ Body (Inter 400)
│  │  │     ├─ Body Large (Inter 400)
│  │  │     ├─ Body Small (Inter 400)
│  │  │     └─ Caption (Inter 400)
│  │  └─ Button Primary (Saans Medium 500)
│  └─ Button Secondary (Inter Medium 500)
└─ Code (SFMono 400)
```

---

## ✅ Bonnes pratiques

### ✔️ À FAIRE
- Utiliser **Saans** pour tous les titres et boutons principaux
- Utiliser **Inter** pour tout le texte body et paragraphes
- Utiliser **SFMono** uniquement pour le code
- Maintenir une hiérarchie claire (h1 → h2 → h3...)
- Utiliser `clamp()` pour une typographie responsive naturelle
- Privilégier les classes sémantiques (`.h1`, `.text-body`)

### ❌ À ÉVITER
- Ne pas mélanger Saans et Inter dans un même paragraphe
- Ne pas utiliser Honk Sans partout (juste pour des accents)
- Ne pas ignorer la hiérarchie (h1 → h3 sans h2)
- Ne pas mettre du texte body en Saans
- Ne pas utiliser des tailles fixes (px) sans `clamp()`
- Ne pas surcharger de graisses différentes

---

## 🎯 Performance

### Optimisations implémentées
✅ `font-display: swap` → Texte visible immédiatement  
✅ Formats WOFF2 en premier → Meilleure compression  
✅ Police variable Inter → Un seul fichier pour tous les poids  
✅ Fallbacks système → Toujours une police disponible  
✅ `-webkit-font-smoothing` → Meilleur rendu sur Mac/iOS  

### Poids des fichiers
- **Saans Medium** : ~50KB
- **Saans SemiBold** : ~50KB
- **Inter Variable** : ~120KB
- **SFMono** : Local (0KB)
- **Honk Sans** : Local (0KB)

**Total** : ~220KB pour un système typographique complet

---

## 🔧 Maintenance

### Ajouter une nouvelle graisse Saans
```css
@font-face {
    font-family: 'Saans';
    src: url('/fonts/Saans-Bold.woff2') format('woff2'),
         url('/fonts/Saans-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
```

### Modifier les tailles responsives
```css
:root {
  /* Mobile → Desktop */
  --fs-h1: clamp(MIN, PREFERED, MAX);
  /*        2.5rem  4vw + 1rem  4.5rem */
}
```

### Changer la palette
```css
h1, h2, h3 { color: #000000; } /* Black */
.text-caption { color: #6b7280; } /* Gray */
code { color: #00caa0; } /* Brand turquoise */
```

---

## 📞 Support

Pour toute question sur la typographie :
1. Consulter ce guide
2. Vérifier `globals.css` pour les styles
3. Regarder `typography.ts` pour les variables TypeScript

**Maintenu par** : Votre équipe frontend 🚀

