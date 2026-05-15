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
 *   data-category="..."    → pour les filtres
 *   data-date="YYYY-MM-DD" → pour le tri automatique
 * ═══════════════════════════════════════════
 */

(function () {

  /* ── CONFIG ── */
  const ARTICLES_PAR_PAGE = 6;

  /* ── ÉLÉMENTS DOM ── */
  const grid         = document.getElementById('blog-grid');
  const paginationEl = document.getElementById('blog-pagination');
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const sortBtn      = document.getElementById('blog-sort-btn');

  if (!grid || !paginationEl) return;

  let pageCourante = 1;
  let filtreActif  = 'tous';
  let sortOrder    = 'desc'; // 'desc' = plus récents en premier

  /* ── APPLIQUE LE TRI VIA CSS ORDER (pas de déplacement DOM) ── */
  function appliquerOrdre() {
    const toutes = Array.from(grid.querySelectorAll('.article-card'));

    const triees = [...toutes].sort((a, b) => {
      const dateA = a.dataset.date || '0000-00-00';
      const dateB = b.dataset.date || '0000-00-00';
      return sortOrder === 'desc'
        ? dateB.localeCompare(dateA)
        : dateA.localeCompare(dateB);
    });

    triees.forEach((card, i) => { card.style.order = i; });
  }

  /* ── RÉCUPÈRE LES CARDS FILTRÉES DANS L'ORDRE DE TRI ── */
  function getCardsFiltreesTriees() {
    const toutes = Array.from(grid.querySelectorAll('.article-card'));

    const filtrees = filtreActif === 'tous'
      ? toutes
      : toutes.filter(c => c.dataset.category === filtreActif);

    return filtrees.sort((a, b) => parseInt(a.style.order) - parseInt(b.style.order));
  }

  /* ── AFFICHE LA PAGE DEMANDÉE ── */
  function afficherPage(page, scroll = false) {
    pageCourante = page;
    appliquerOrdre();

    const cards = getCardsFiltreesTriees();

    // Masquer toutes les cards d'abord
    Array.from(grid.querySelectorAll('.article-card')).forEach(c => c.classList.add('hidden'));

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

    cards.slice(debut, fin).forEach(c => c.classList.remove('hidden'));

    renderPagination(totalPages);

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="0.625em" height="1em" fill="currentColor" aria-hidden="true"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="0.625em" height="1em" fill="currentColor" aria-hidden="true"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
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

      sortBtn.textContent = sortOrder === 'desc' ? '↓ Plus récents' : '↑ Plus anciens';

      pageCourante = 1;
      afficherPage(1);
    });
  }

  /* ── INIT ── */
  afficherPage(1);

})();
