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
      slug:      "/blog/nettoyer-joints-carrelage/",
      titre:     "Nettoyer les joints de carrelage : calcaire, graisse, moisissures, la méthode adaptée",
      badge:     "Calcaire",
      date:      "8 novembre 2026",
      iso:       "2026-11-08",
      image:     "/blog/nettoyer-joints-carrelage/img/nettoyer-joints-carrelage.webp",
      extrait:   "Joints noirs, jaunis ou entartrés : identifier la saleté, puis la méthode graduée du savon et de la brosse à l'antifongique pour les nettoyer sans abîmer le ciment."
    },
    {
      slug:      "/blog/fin-de-bail-decembre/",
      titre:     "Fin de bail en décembre : réussir son nettoyage et son état des lieux pendant les fêtes",
      badge:     "Fin de bail",
      date:      "6 novembre 2026",
      iso:       "2026-11-06",
      image:     "/blog/fin-de-bail-decembre/img/fin-de-bail-decembre.webp",
      extrait:   "Jours fériés, froid, journées courtes, régies au ralenti : le rétroplanning de novembre au jour J et les 5 pièges de la période des fêtes pour récupérer sa caution."
    },
    {
      slug:      "/blog/devis-nettoyage-insalubre-que-preparer/",
      titre:     "Devis nettoyage insalubre : comment bien préparer sa demande",
      badge:     "Insalubre",
      date:      "4 novembre 2026",
      iso:       "2026-11-04",
      image:     "/blog/devis-nettoyage-insalubre-que-preparer/img/devis-nettoyage-insalubre.webp",
      extrait:   "Quelles informations donner, faut-il des photos, ce qui fait varier le prix, les délais et les questions à poser. Un guide simple, discret et sans jugement."
    },
    {
      slug:      "/blog/ce-que-la-regie-verifie-etat-des-lieux/",
      titre:     "Ce que la régie vérifie lors d'un état des lieux : checklist interactive à cocher",
      badge:     "Fin de bail",
      date:      "1 octobre 2026",
      iso:       "2026-10-01",
      image:     "/blog/ce-que-la-regie-verifie-etat-des-lieux/img/checklist-regie-etat-des-lieux.webp",
      extrait:   "Les points exacts que la régie inspecte, dans l'ordre — avec une checklist interactive à cocher et à télécharger en PDF. Expérience terrain 64/64 validés."
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
