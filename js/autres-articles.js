/**
 * ═══════════════════════════════════════════
 * AUTRES ARTICLES — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Injecte les 3 articles LES PLUS RÉCENTS en bas de chaque article.
 * (Le bouton « Voir tous les articles » mène à /blog/ qui liste tout.)
 *
 * ── POUR AJOUTER UN NOUVEL ARTICLE ──
 *   → Ajouter son objet EN HAUT du tableau ARTICLES ci-dessous
 *     (champ « iso » = AAAA-MM-JJ) et retirer le plus ancien.
 *   → On garde volontairement ~4 entrées seulement (fichier léger).
 * ═══════════════════════════════════════════
 */

(function () {

  /* Registre — uniquement les articles les plus récents (du + récent au + ancien) */
  const ARTICLES = [
    {
      slug:      "/blog/signaux-alerte-entreprise-nettoyage/",
      titre:     "7 signaux qui trahissent une mauvaise entreprise de nettoyage",
      badge:     "Conseils",
      date:      "22 septembre 2026",
      iso:       "2026-09-22",
      image:     "/blog/signaux-alerte-entreprise-nettoyage/img/signaux-alerte-nettoyage.webp",
      extrait:   "Devis flou, pas d'assurance RC Pro, aucune garantie écrite : 7 signaux concrets pour reconnaître une entreprise de nettoyage peu fiable avant de signer."
    },
    {
      slug:      "/blog/entreprise-nettoyage-moudon/",
      titre:     "Entreprise de nettoyage à Moudon : services, prix et conseils pour bien choisir",
      badge:     "Fin de bail",
      date:      "21 septembre 2026",
      iso:       "2026-09-21",
      image:     "/blog/entreprise-nettoyage-moudon/img/nettoyage-moudon.webp",
      extrait:   "Services, fourchettes de prix et critères de choix pour une entreprise de nettoyage à Moudon et dans la Broye-Vully vaudoise. Zone d'intervention et guide 2026."
    },
    {
      slug:      "/blog/nettoyage-intensif-broye/",
      titre:     "Nettoyage intensif dans la Broye : Malo Nettoyage intervient pour les cas difficiles",
      badge:     "Insalubre",
      date:      "15 septembre 2026",
      iso:       "2026-09-15",
      image:     "/blog/nettoyage-intensif-broye/img/nettoyage-intensif-broye.webp",
      extrait:   "Logement très encrassé, laissé à l'abandon, après hospitalisation ou décès : intervention en profondeur, rapide et discrète dans toute la Broye. Réponse sous 24h."
    },
    {
      slug:      "/blog/nettoyage-fin-chantier-fribourg/",
      titre:     "Nettoyage fin de chantier à Fribourg : service professionnel, prix et zones",
      badge:     "Fin de chantier",
      date:      "13 septembre 2026",
      iso:       "2026-09-13",
      image:     "/blog/nettoyage-fin-chantier-fribourg/img/nettoyage-fin-chantier-fribourg.webp",
      extrait:   "Résidus de construction, voile de ciment, poussière fine : prestations, prix et communes couvertes dans le canton de Fribourg. Devis gratuit sous 24h."
    }
  ];

  const container = document.getElementById('autres-articles-container');
  if (!container) return;

  let chemin = decodeURIComponent(window.location.pathname);
  if (!chemin.endsWith('/')) chemin += '/';

  // 3 plus récents, hors article courant
  const articles = ARTICLES
    .filter(a => decodeURIComponent(a.slug) !== chemin)
    .sort((a, b) => (a.iso < b.iso ? 1 : a.iso > b.iso ? -1 : 0))
    .slice(0, 3);
  if (articles.length === 0) return;

  function buildCard(article) {
    return `
      <a href="${article.slug}" class="article-card">
        <div class="card-img-wrap">
          <img
            src="${article.image}"
            alt="${article.titre}"
            loading="lazy"
            onerror="this.style.display='none'"
          >
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-badge">${article.badge}</span>
            <span class="card-date">${article.date}</span>
          </div>
          <div class="card-title">${article.titre}</div>
          <span class="card-link">Lire l'article <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
        </div>
      </a>`;
  }

  container.innerHTML = `
    <section class="other-articles fade-in">
      <h2>Autres articles</h2>
      <div class="blog-grid autres-articles-list">
        ${articles.map(buildCard).join('')}
      </div>
      <a href="/blog/" class="autres-articles-btn">Voir tous les articles →</a>
    </section>`;

})();
