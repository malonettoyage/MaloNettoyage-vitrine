/**
 * ═══════════════════════════════════════════
 * AUTRES ARTICLES — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Injecte automatiquement 2 articles liés en bas
 * de chaque article de blog.
 *
 * ── POUR AJOUTER UN NOUVEL ARTICLE ──
 *   1. Ajouter un objet dans le tableau ARTICLES ci-dessous
 *   2. C'est tout — tous les articles existants
 *      proposeront le nouvel article automatiquement
 *
 * ── LOGIQUE DE SÉLECTION ──
 *   → Priorité aux articles de la même catégorie
 *   → Si pas assez dans la même catégorie, complète avec les autres
 *   → L'article courant est toujours exclu
 *   → Affiche toujours les 2 plus récents parmi les candidats
 * ═══════════════════════════════════════════
 */

(function () {

  /* ══════════════════════════════════════════
     REGISTRE DES ARTICLES
     → Ajouter chaque nouvel article ici
     → slug      : chemin URL (avec slashs)
     → titre     : titre complet de l'article
     → categorie : fin-de-bail | conseils | vitres
     → badge     : texte affiché sur la card
     → date      : date lisible en français
     → image     : chemin vers cover.webp
     → extrait   : résumé court (1-2 phrases)
  ══════════════════════════════════════════ */
  const ARTICLES = [
    {
      slug:      '/blog/2026-05-03-checklist-fin-bail/',
      titre:     'Checklist complète : tout ce qu\'il faut nettoyer avant de rendre les clés',
      categorie: 'fin-de-bail',
      badge:     'Fin de bail',
      date:      '3 mai 2026',
      image:     '/blog/2026-05-03-checklist-fin-bail/img/checklist_fin-de-bail.webp',
      extrait:   'La liste exhaustive des points contrôlés par les régies lors de l\'état des lieux de sortie.'
    },
    {
      slug:      '/blog/2026-05-06-erreurs-nettoyage/',
      titre:     '5 erreurs courantes qui font échouer l\'état des lieux de sortie',
      categorie: 'conseils',
      badge:     'Conseils',
      date:      '6 mai 2026',
      image:     '/blog/2026-05-06-erreurs-nettoyage/img/erreur_etat-lieu.webp',
      extrait:   'Hotte oubliée, joints moisis, vitres avec traces… les pièges les plus fréquents et comment les éviter.'
    },
    {
      slug:      '/blog/2026-05-09-etats-lieux-valide/',
      titre:     'Comment faire valider son état des lieux du premier coup',
      categorie: 'fin-de-bail',
      badge:     'Fin de bail',
      date:      '9 mai 2026',
      image:     '/blog/2026-05-09-etats-lieux-valide/img/valide_-fin-de-bail.webp',
      extrait:   'Préparer son appartement et récupérer sa caution en entier : notre méthode en 3 étapes.'
    },
    {
      slug:      '/blog/2026-05-12-vitres-sans-traces/',
      titre:     'Vos vitres restent toujours striées après le nettoyage ? Voici pourquoi',
      categorie: 'vitres',
      badge:     'Vitres',
      date:      '12 mai 2026',
      image:     '/blog/2026-05-12-vitres-sans-traces/img/vitres-sans-traces.webp',
      extrait:   'Mauvais produit, mauvaise technique, mauvais moment : les vraies raisons des traces sur vos vitres — et comment les éliminer.'
    },
    {
      slug:      '/blog/2026-05-15-debarras-nettoyage/',
      titre:     'Débarras + nettoyage : on s\'occupe de tout',
      categorie: 'conseils',
      badge:     'Conseils',
      date:      '15 mai 2026',
      image:     '/blog/2026-05-15-debarras-nettoyage/img/debarras-nettoyage.webp',
      extrait:   'Après un décès, avant une vente ou un déménagement — vous n\'avez rien à faire. Débarras et nettoyage coordonnés, clé en main.'
    },
    {
      slug:      '/blog/2026-05-17-entreprise-nettoyage-payerne/',
      titre:     'Entreprise de nettoyage à Payerne : comment bien choisir en 2026',
      categorie: 'conseils',
      badge:     'Conseils',
      date:      '17 mai 2026',
      image:     '/blog/2026-05-17-entreprise-nettoyage-payerne/img/entreprise-nettoyage-payerne.webp',
      extrait:   'Assurance RC Pro, devis fixe, garantie retour gratuit : les 3 critères clés pour choisir une entreprise de nettoyage fiable à Payerne et dans la Broye.'
    },
    /* ── AJOUTER LES PROCHAINS ARTICLES ICI ──
    {
      slug:      '/blog/AAAA-MM-JJ-mon-article/',
      titre:     'Titre de l\'article',
      categorie: 'fin-de-bail',
      badge:     'Fin de bail',
      date:      'JJ mois AAAA',
      image:     '/blog/AAAA-MM-JJ-mon-article/img/cover.webp',
      extrait:   'Court résumé de l\'article en 1-2 phrases.'
    },
    */
  ];


  /* ══════════════════════════════════════════
     DÉTECTION DE L'ARTICLE COURANT
  ══════════════════════════════════════════ */
  const container = document.getElementById('autres-articles-container');
  if (!container) return;

  // Normalise le pathname : décode les %XX et s'assure qu'il y a un slash final
  let chemin = decodeURIComponent(window.location.pathname);
  if (!chemin.endsWith('/')) chemin += '/';

  // Trouve l'article courant dans le registre
  const courant = ARTICLES.find(a => decodeURIComponent(a.slug) === chemin);


  /* ══════════════════════════════════════════
     SÉLECTION DES 2 ARTICLES À AFFICHER
  ══════════════════════════════════════════ */
  function selectionnerArticles() {
    // Tous les articles sauf le courant
    const candidats = ARTICLES.filter(a => decodeURIComponent(a.slug) !== chemin);

    if (candidats.length === 0) return [];

    // Priorité : même catégorie que l'article courant
    const memeCat  = courant ? candidats.filter(a => a.categorie === courant.categorie) : [];
    const autreCat = courant ? candidats.filter(a => a.categorie !== courant.categorie) : candidats;

    // Construit la liste finale : même catégorie d'abord, puis complète si besoin
    const selection = [...memeCat, ...autreCat];

    return selection.slice(0, 3);
  }


  /* ══════════════════════════════════════════
     GÉNÈRE LE HTML D'UNE CARD
  ══════════════════════════════════════════ */
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


  /* ══════════════════════════════════════════
     INJECTION DANS LA PAGE
  ══════════════════════════════════════════ */
  const articles = selectionnerArticles();
  if (articles.length === 0) return;

  container.innerHTML = `
    <section class="other-articles fade-in">
      <h2>Autres articles</h2>
      <div class="autres-articles-list">
        ${articles.map(buildCard).join('')}
      </div>
      <a href="/blog/" class="autres-articles-btn">Voir tous les articles →</a>
    </section>`;

})();
