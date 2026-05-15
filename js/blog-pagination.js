/**
 * ═══════════════════════════════════════════
 * BLOG PAGINATION — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Gère l'affichage paginé des articles du blog.
 *
 * CONFIGURATION :
 *   ARTICLES_PAR_PAGE → nombre d'articles par page (défaut : 6)
 *
 * COMPATIBLE avec le système de filtres par catégorie.
 * Quand un filtre est actif → tous les articles filtrés
 * sont affichés (pas de pagination, peu de résultats).
 * Quand filtre = "Tous" → pagination normale.
 * ═══════════════════════════════════════════
 */

(function () {

  /* ── CONFIG ── */
  const ARTICLES_PAR_PAGE = 6;

  /* ── ÉLÉMENTS DOM ── */
  const grid       = document.getElementById('blog-grid');
  const paginationEl = document.getElementById('blog-pagination');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!grid || !paginationEl) return;

  let pageCourante = 1;
  let filtreActif  = 'tous';

  /* ── RÉCUPÈRE LES CARDS VISIBLES SELON LE FILTRE ── */
  function getCardsVisibles() {
    const toutes = Array.from(grid.querySelectorAll('.article-card'));
    if (filtreActif === 'tous') return toutes;
    return toutes.filter(c => c.dataset.category === filtreActif);
  }

  /* ── AFFICHE LA PAGE DEMANDÉE ── */
  function afficherPage(page, scroll = false) {
    pageCourante = page;
    const cards = getCardsVisibles();

    // Si filtre actif (≠ tous) → tout afficher sans pagination
    if (filtreActif !== 'tous') {
      cards.forEach(c => c.classList.remove('hidden'));
      paginationEl.innerHTML = '';
      return;
    }

    const total      = cards.length;
    const totalPages = Math.ceil(total / ARTICLES_PAR_PAGE);
    const debut      = (pageCourante - 1) * ARTICLES_PAR_PAGE;
    const fin        = debut + ARTICLES_PAR_PAGE;

    // Masquer toutes les cards puis afficher celles de la page courante
    Array.from(grid.querySelectorAll('.article-card')).forEach(c => c.classList.add('hidden'));
    cards.slice(debut, fin).forEach(c => c.classList.remove('hidden'));

    // Rendre la pagination
    renderPagination(totalPages);

    // Remonter en haut de la grille (uniquement sur changement de page utilisateur)
    if (scroll) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ── CONSTRUIT LE HTML DE PAGINATION ── */
  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
      return;
    }

    let html = '';

    // Bouton Précédent
    html += `<button class="pagination-btn pagination-prev" ${pageCourante === 1 ? 'disabled' : ''} data-page="${pageCourante - 1}" aria-label="Page précédente">
      <i class="fa-solid fa-chevron-left"></i>
    </button>`;

    // Numéros de page avec ellipses si besoin
    const pages = getPagesAffichees(pageCourante, totalPages);
    pages.forEach(p => {
      if (p === '...') {
        html += `<span class="pagination-dots">…</span>`;
      } else {
        html += `<button class="pagination-btn pagination-num ${p === pageCourante ? 'active' : ''}" data-page="${p}">${p}</button>`;
      }
    });

    // Bouton Suivant
    html += `<button class="pagination-btn pagination-next" ${pageCourante === totalPages ? 'disabled' : ''} data-page="${pageCourante + 1}" aria-label="Page suivante">
      <i class="fa-solid fa-chevron-right"></i>
    </button>`;

    paginationEl.innerHTML = html;

    // Événements sur les boutons
    paginationEl.querySelectorAll('.pagination-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        afficherPage(parseInt(btn.dataset.page), true);
      });
    });
  }

  /* ── CALCULE LES PAGES À AFFICHER (avec ellipses) ── */
  function getPagesAffichees(courante, total) {
    if (total <= 7) {
      // Afficher toutes les pages
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = [];

    if (courante <= 4) {
      // Début : 1 2 3 4 5 ... dernier
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(total);
    } else if (courante >= total - 3) {
      // Fin : 1 ... avant-avant-dernier → dernier
      pages.push(1);
      pages.push('...');
      for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
      // Milieu : 1 ... courante-1 courante courante+1 ... dernier
      pages.push(1);
      pages.push('...');
      pages.push(courante - 1);
      pages.push(courante);
      pages.push(courante + 1);
      pages.push('...');
      pages.push(total);
    }

    return pages;
  }

  /* ── SYNCHRONISATION AVEC LES FILTRES ── */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filtreActif  = btn.dataset.filter;
      pageCourante = 1;
      afficherPage(1);
    });
  });

  /* ── INIT ── */
  afficherPage(1);

})();
