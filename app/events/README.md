# Events Section - Architecture Client-Side avec API Fetching

## Structure

Cette section utilise l'architecture Next.js App Router avec des **Client Components** qui effectuent les appels API côté client avec `useEffect`.

### Pages (Server Components minimaux)

Les pages principales sont des **Server Components légers** qui :
- Définissent les métadonnées SEO
- Rendent le layout de base (Header/Footer)
- Délèguent la logique aux composants client

**Fichiers :**
- `page.tsx` - Page liste des événements (délègue à EventsPageClient)
- `[slug]/page.tsx` - Page détail d'un événement (délègue à EventDetailPageClient)

### Composants Client Principaux (_components/)

#### EventsPageClient ⚡ Client Component
- **Type:** Client Component (`"use client"`)
- **Rôle:** Gère le fetching et l'état de la liste des événements
- **Fonctionnalités:**
  - Appel API avec `useEffect` vers `/api/events`
  - Gestion des états: `loading`, `error`, `events`
  - Console.log détaillés pour le debugging
  - États de chargement et d'erreur
- **Props:** Aucune

**Console logs émis :**
- 🚀 Début du chargement
- 📡 Appel API
- 📥 Réponse reçue avec status
- ✅ Données parsées
- ✨ Nombre d'événements chargés
- 🏁 Chargement terminé
- ❌ Erreurs éventuelles

#### EventDetailPageClient ⚡ Client Component
- **Type:** Client Component (`"use client"`)
- **Rôle:** Gère le fetching et l'état d'un événement spécifique
- **Fonctionnalités:**
  - Appel API avec `useEffect` vers `/api/events/{slug}`
  - Chargement des événements liés
  - Gestion de la navigation (404 redirect)
  - Console.log détaillés pour le debugging
  - États de chargement et d'erreur
- **Props:** `slug: string`

**Console logs émis :**
- 🚀 Début du chargement de l'événement
- 📡 Appels API (événement principal + événements liés)
- 📥 Réponses reçues avec status
- ✅ Données parsées
- ✨ Événement et événements liés chargés
- ⚠️ Warnings pour 404
- 🏁 Chargement terminé
- ❌ Erreurs éventuelles

### Composants de Présentation (_components/)

Ces composants sont des **Server Components** purs qui reçoivent leurs données via props :

#### EventsHero
- **Rôle:** Section hero de la page liste
- **Props:** `featuredEvent?: Event`

#### EventsList
- **Rôle:** Grille des événements
- **Props:** `events: Event[]`, `featuredEventSlug?: string`

#### EventCard
- **Rôle:** Carte d'un événement
- **Props:** `event: Event`, `isPriority?: boolean`

#### EventDetailHero
- **Rôle:** Section hero de la page détail
- **Props:** `event: Event`

#### EventDetailContent
- **Rôle:** Contenu de la page détail
- **Props:** `event: Event`

#### RelatedEvents
- **Rôle:** Événements liés
- **Props:** `events: Event[]`

## Flux de Données

```
Page (Server) 
  → Composant Client (useEffect + fetch)
    → Composants de Présentation (Server)
```

1. **Page initiale** : Rendu server-side du layout
2. **Hydratation** : Le composant client s'active
3. **useEffect** : Appel API automatique au montage
4. **État Loading** : Spinner affiché pendant le chargement
5. **Mise à jour** : Les données chargées passent aux composants de présentation
6. **Console** : Tous les logs sont visibles dans la console du navigateur

## Debugging avec Console.log

### Comment voir les logs ?

1. **Ouvrez la console du navigateur** :
   - Chrome/Edge: `F12` ou `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
   - Firefox: `F12` ou `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
   - Safari: `Cmd+Option+C`

2. **Naviguez vers une page événement** :
   - `/events` - Pour voir les logs de la liste
   - `/events/[slug]` - Pour voir les logs d'un événement spécifique

3. **Observez les logs** :
   - Les icônes emoji facilitent la lecture (🚀 📡 📥 ✅ ✨ 🏁 ❌ ⚠️)
   - Les préfixes `[EventsPageClient]` et `[EventDetailPageClient]` identifient la source
   - Les logs incluent les status HTTP, les données chargées, et les erreurs

### Exemple de logs dans la console

**Pour la page liste (/events) :**
```
🏠 [EventsPage] Rendu de la page événements
🚀 [EventsPageClient] Début du chargement des événements...
📡 [EventsPageClient] Appel API vers /api/events
📥 [EventsPageClient] Réponse reçue, status: 200
✅ [EventsPageClient] Données parsées: { success: true, data: [...] }
✨ [EventsPageClient] 5 événements chargés avec succès
🏁 [EventsPageClient] Chargement terminé
```

**Pour une page détail (/events/mon-evenement) :**
```
🏠 [EventDetailPage] Rendu de la page événement: mon-evenement
🚀 [EventDetailPageClient] Début du chargement de l'événement: mon-evenement
📡 [EventDetailPageClient] Appel API vers /api/events/mon-evenement
📥 [EventDetailPageClient] Réponse événement reçue, status: 200
✅ [EventDetailPageClient] Événement parsé: { success: true, data: {...} }
✨ [EventDetailPageClient] Événement "Mon Événement" chargé
📡 [EventDetailPageClient] Chargement des événements liés...
📥 [EventDetailPageClient] Réponse événements liés reçue, status: 200
✨ [EventDetailPageClient] 3 événements liés chargés
🏁 [EventDetailPageClient] Chargement terminé
```

## Types

Le type `Event` est défini dans `/lib/api.ts` :

```typescript
export type Event = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  event_date: string;
  location: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};
```

## Avantages de cette Architecture

1. **Debugging facile** : Console.log détaillés à chaque étape du chargement
2. **Transparence** : Vous voyez exactement quand et comment les données sont chargées
3. **États visuels** : Spinners de chargement et messages d'erreur
4. **Séparation des responsabilités** : Client Components pour la logique, Server Components pour la présentation
5. **Flexibilité** : Facile d'ajouter des intercepteurs, du caching, ou de la logique métier

