/**
 * ═══════════════════════════════════════════
 * BLOG PAGINATION — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Gère l'affichage paginé, le filtrage par catégorie
 * et le tri par date (plus récents / plus anciens).
 *
 * CONFIGURATION :
 *   ARTICLES_PAR_PAGE → nombre d'articles par page (défaut : 6)
 *
 * Chaque .article-card doit avoir :
 *   data-category="..."   → pour les filtres
 *   data-date="YYYY-MM-DD" → pour le tri automatique
 * ═══════════════════════════════════════════
 */

(function () {

  /* ── CONFIG ── */
  const ARTICLES_PAR_PAGE = 6;

  /* ── ÉLÉMENTS DOM ── */
  const grid        = document.getElementById('blog-grid');
  const paginationEl = document.getElementById('blog-pagination');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const sortBtn     = document.getElementById('blog-sort-btn');

  if (!grid || !paginationEl) return;

  let pageCourante = 1;
  let filtreActif  = 'tous';
  let sortOrder    = 'desc'; // 'desc' = plus récents en premier

  /* ── RÉCUPÈRE LES CARDS FILTRÉES ET TRIÉES ── */
  function getCardsTriees() {
    const toutes = Array.from(grid.querySelectorAll('.article-card'));

    const filtrees = filtreActif === 'tous'
      ? toutes
      : toutes.filter(c => c.dataset.category === filtreActif);

    return filtrees.sort((a, b) => {
      const dateA = a.dataset.date || '0000-00-00';
      const dateB = b.dataset.date || '0000-00-00';
      return sortOrder === 'desc'
        ? dateB.localeCompare(dateA)
        : dateA.localeCompare(dateB);
    });
  }

  /* ── RÉORDONNE LES CARDS DANS LE DOM SELON LE TRI ── */
  function reordonnerDOM(cards) {
    cards.forEach(c => grid.appendChild(c));
  }

  /* ── AFFICHE LA PAGE DEMANDÉE ── */
  function afficherPage(page, scroll = false) {
    pageCourante = page;
    const cards = getCardsTriees();

    reordonnerDOM(cards);

    // Si filtre actif (≠ tous) → tout afficher sans pagination
    if (filtreActif !== 'tous') {
      Array.from(grid.querySelectorAll('.article-card')).forEach(c => c.classList.remove('hidden'));
      cards.forEach(c => c.classList.remove('hidden'));
      const toutes = Array.from(grid.querySelectorAll('.article-card'));
      toutes.forEach(c => {
        if (c.dataset.category !== filtreActif) c.classList.add('hidden');
      });
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

    html += `<button class="pagination-btn pagination-prev" ${pageCourante === 1 ? 'disabled' : ''} data-page="${pageCourante - 1}" aria-label="Page précédente">
      <i class="fa-solid fa-chevron-left"></i>
    </button>`;

    const pages = getPagesAffichees(pageCourante, totalPages);
    pages.forEach(p => {
      if (p === '...') {
        html += `<span class="pagination-dots">…</span>`;
      } else {
        html += `<button class="pagination-btn pagination-num ${p === pageCourante ? 'active' : ''}" data-page="${p}">${p}</button>`;
      }
    });

    html += `<button class="pagination-btn pagination-next" ${pageCourante === totalPages ? 'disabled' : ''} data-page="${pageCourante + 1}" aria-label="Page suivante">
      <i class="fa-solid fa-chevron-right"></i>
    </button>`;

    paginationEl.innerHTML = html;

    paginationEl.querySelectorAll('.pagination-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => {
        afficherPage(parseInt(btn.dataset.page), true);
      });
    });
  }

  /* ── CALCULE LES PAGES À AFFICHER (avec ellipses) ── */
  function getPagesAffichees(courante, total) {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = [];

    if (courante <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(total);
    } else if (courante >= total - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = total - 4; i <= total; i++) pages.push(i);
    } else {
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
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtreActif  = btn.dataset.filter;
      pageCourante = 1;
      afficherPage(1);
    });
  });

  /* ── TRI PAR DATE ── */
  if (sortBtn) {
    sortBtn.addEventListener('click', () => {
      sortOrder = sortOrder === 'desc' ? 'asc' : 'desc';
      sortBtn.dataset.order = sortOrder;

      if (sortOrder === 'desc') {
        sortBtn.innerHTML = '↓ Plus récents';
      } else {
        sortBtn.innerHTML = '↑ Plus anciens';
      }

      pageCourante = 1;
      afficherPage(1);
    });
  }

  /* ── INIT ── */
  afficherPage(1);

})();
