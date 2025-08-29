# Roadmap Globale — Next.js + Strapi + SEO & AI‑SEO

> Document vivant. Mettez à jour au fil du projet.  
> Contexte: Frontend Next.js + Tailwind (Vercel). Backend Strapi 5 (Strapi Cloud).

---

## Phase 0 — Pré‑requis techniques
**Faire**
- [ ] Vérifier variables Vercel: `NEXT_PUBLIC_STRAPI_URL`, `REVALIDATE_SECRET`.
- [ ] CORS Strapi: ajouter domaines Vercel (prod + preview).
- [ ] Permissions Public Strapi: `site-settings.find`, `site-seo.find`, `project.find`, `project.findOne`, `tag.find`.

**Pourquoi**: éviter 403/404 et garantir l’accès API en prod.

---
## Phase 1 — Modèles Strapi
**Faire**
- [ ] Single Type **site-settings**: `siteTitle`, `nav[] {label, href}`, `homeVideoEmbed`.
- [ ] Single Type **site-seo**: `defaultTitle`, `defaultDescription`, `canonicalBase`, `openGraphImage`, `twitterHandle`, `organization { name, url, logo(media), sameAs[] }`, `aiPolicy`, `verification { google, bing, meta[] }`.
- [ ] Component **seoMeta** (réutilisable): `{ title, description, noindex, canonicalPath, ogImage(media), jsonLd(JSON) }`.
- [ ] Collection **tag**: `name`, `slug`, `seo(seoMeta)`.
- [ ] Collection **project**: `title`, `slug`, `subtitle`, `excerpt`, `cover(media)`, `tags(rel)`, `blocks(DZ: richText, image, gallery, videoEmbed)`, `seo(seoMeta)`.
- [ ] Publier ≥ 3 projets complets (cover + tag).

**Pourquoi**: tout le contenu éditorial et SEO devient éditable, par type et globalement.

---

## Phase 2 — Data Layer (`lib/strapi.ts`)
**Faire**
- [ ] Créer/compléter helpers:
  - `getSiteSettings()`
  - `getSiteSeo()`
  - `getProjectsListGrid()`
  - `getProjectBySlug(slug)`
  - `getAllProjectSlugs()`
  - `getProjectsByTagGrid(tagSlug)`
  - `getRelatedProjectsGrid(excludeSlug, limit)`
- [ ] Normaliser URLs images: `ABS(url)`.
- [ ] Utiliser `populate`, `fields`, `pagination`, `sort`, et `{ next: { revalidate: 60 } }`.

**Pourquoi**: centraliser le fetch, éviter répétitions, faciliter maintenance et perf (ISR).

---

## Phase 3 — Layout global
**Faire**
- [ ] `app/layout.tsx` async: fetch `site-settings` + `site-seo`.
- [ ] Afficher `siteTitle` + `nav` partout.
- [ ] Définir metadata par défaut via `site-seo` (voir Phase 9/SEO).

**Pourquoi**: cohérence visuelle et SEO par défaut sur toutes les pages.

---

## Phase 4 — Home / Landing
**Faire**
- [ ] `app/page.tsx`: afficher `homeVideoEmbed` (`dangerouslySetInnerHTML` dans `aspect-video`).
- [ ] Injecter `<ProjectGrid />` en dessous.
- [ ] SEO: `generateMetadata` (titre/desc/canonical/OG/Twitter), JSON‑LD `WebSite` + `Organization`.

**Pourquoi**: page d’accueil éditable, introduit le site aux moteurs et LLMs.

---

## Phase 5 — Grille Projet (`components/project-grid.tsx`)
**Faire**
- [ ] Remplacer data statique par Strapi (`getProjectsListGrid` / `getProjectsByTagGrid`).
- [ ] Props: `variant?: "default"|"compact"`, `tagSlug?`, `excludeSlug?`, `limit?`.
- [ ] Liens: `/projects/[slug]`, `/tags/[slug]`.
- [ ] `next/image` + `sizes`, `alt` non vide.

**Pourquoi**: composant unique réutilisable (landing, related, tags), perf et DRY.

---

## Phase 6 — Page Projet `/projects/[slug]`
**Faire**
- [ ] `generateStaticParams()` via `getAllProjectSlugs()`.
- [ ] Fetch: `getProjectBySlug(slug)` avec `populate(blocks, cover, tags, seo)`.
- [ ] Rendu: `title`, `subtitle`, `tags`, `ProjectBlocks` (richText/image/gallery/videoEmbed).
- [ ] Bas de page: `<ProjectGrid variant="compact" excludeSlug={slug} limit={10} />`.
- [ ] SEO: `generateMetadata` (fusion `project.seo` + fallback `site-seo`).
- [ ] JSON‑LD: `CreativeWork` (ou `VisualArtwork`/`Photograph`) + `BreadcrumbList`.

**Pourquoi**: pages riches, maillage interne naturel, snippets enrichis.

---

## Phase 7 — Pages Tag `/tags/[slug]`
**Faire**
- [ ] Route dynamique + fetch `getProjectsByTagGrid(slug)` + `tag.seo`.
- [ ] Rendu: titre du tag + grille filtrée.
- [ ] SEO: `generateMetadata` + JSON‑LD `CollectionPage`.

**Pourquoi**: navigation thématique, pages catégories qui rankent et qui guident les bots IA.

---

## Phase 8 — Revalidation (ISR on‑demand)
**Faire**
- [ ] Webhook Strapi → `/api/revalidate?path=...&token=...`.
- [ ] Revalider: `/`, `/projects`, `/projects/[slug]`, `/tags/[slug]`, `/sitemap*.xml`, `/ai/*`.

**Pourquoi**: contenu publié visible immédiatement sans redeploy.

---

## Phase 9 — SEO avancé (classique)
**Faire**
- [ ] Par page: `generateMetadata` avec `title`, `description`, `robots`, `alternates.canonical`, `openGraph`, `twitter` (dérivés de `seoMeta` + `site-seo`).
- [ ] JSON‑LD adapté:
  - Home: `WebSite`, `Organization`.
  - Projet: `CreativeWork` (+ variante), `BreadcrumbList`.
  - Tag: `CollectionPage`.
- [ ] Fallbacks: `site-seo.defaultTitle/defaultDescription/openGraphImage`.  
- [ ] `next/image` partout, tailles fixes (réduction CLS). Un seul `h1` par page.

**Pourquoi**: métadonnées complètes pour moteurs classiques, meilleurs extraits et partages sociaux.

---

## Phase 10 — SEO pour IA (AI‑SEO)
**Faire**
- [ ] Créer espace `/ai` (routes server):
  - `/ai/site-manifest.json`: nom du site, org, nav, policies IA, licences.
  - `/ai/knowledge.jsonl`: catalogue projets sérialisés (1 JSON/ligne) `{ id, url, title, tags, summary, updatedAt, license }`.
  - `/ai/faq.json`: Q/A éditées via Strapi (single type).
  - `/ai/sources.xml`: sitemap spécialisé IA.
- [ ] Piloter contenu IA via Strapi (`aiPolicy`, `ai-faq`, champs résumés projet).
- [ ] `robots.txt`: autoriser `/ai/*`.

**Pourquoi**: formats lisibles par LLMs/bots, contrôle explicite de l’usage IA, avantage compétitif sur AI‑SEO.

---

## Phase 11 — Robots, Sitemaps, Canonicals
**Faire**
- [ ] `robots.txt` clair (autoriser `/ai/*`, bloquer previews, respecter `noindex`).
- [ ] Sitemaps multiples: `/sitemap.xml`, `/sitemap-projects.xml`, `/sitemap-tags.xml`, `/sitemap-ai.xml` (`lastmod`, `changefreq`, `priority`).
- [ ] Canonicals: `siteSeo.canonicalBase + (seo.canonicalPath || currentPath)`.

**Pourquoi**: indexation propre, compréhension de l’architecture par moteurs et IA.

---

## Phase 12 — Observabilité & Debug
**Faire**
- [ ] `/api/debug-strapi`: URL, status, items, sample.
- [ ] `/api/health`: versions, base URLs.
- [ ] `/api/seo-check`: rapport minimal (title/desc/canonical/OG/Twitter/JSON‑LD présents).

**Pourquoi**: diagnostics rapides en prod, qualité SEO vérifiable.

---

## Phase 13 — Accessibilité & Performance
**Faire**
- [ ] Hiérarchie titres: `h1` unique, `h2/h3` logiques.
- [ ] Alt descriptifs, focus visibles, contrastes OK.
- [ ] LCP/CLS: images avec dimensions, vidéo lazy si possible.

**Pourquoi**: meilleure UX, meilleurs Core Web Vitals (impact SEO).

---

## Phase 14 — Backlog futur
**Idées**
- [ ] Pagination / infinite scroll `/projects` (>50).
- [ ] Recherche interne (front simple puis back Strapi).
- [ ] Preview drafts (mode brouillon Strapi).
- [ ] Pages “invisibles” calibrées IA: glossaires, timelines, notes, avec JSON‑LD riche.

---

### Critères de “Done” (résumé)
- **Home**: vidéo Strapi, grille dynamique, JSON‑LD `WebSite/Organization`.
- **Projects**: liste triée, images optimisées, tags visibles.
- **Project detail**: blocks rendus, SEO + JSON‑LD, related grid.
- **Tag**: filtre correct, SEO + JSON‑LD.
- **AI**: `/ai/*` fournissent manifest, knowledge.jsonl, faq, sources.xml.
- **Revalidation**: changement Strapi visible immédiatement.
- **Sitemaps/robots/canonicals**: présents et corrects.
- **Perf/a11y**: LCP/CLS et accessibilité sous contrôle.

---

> Notes:
> - Garder `populate` explicite et `fields` réduits.
> - Toujours `encodeURIComponent` sur les slugs dans les filtres.
> - Préfixer les URLs médias relatives avec la base Strapi (ABS).
> - Configurer `next.config.js` → `images.remotePatterns` pour `*.strapiapp.com`.
