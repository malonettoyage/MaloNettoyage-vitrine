/**
 * ═══════════════════════════════════════════
 * SOCIAL PROOF GOOGLE — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Injecte l'image Google Avis sur toutes les pages.
 *
 * ── POUR METTRE À JOUR L'IMAGE ──
 *   1. Dépose la nouvelle image dans /img/icons/
 *   2. Modifie SRC ci-dessous → toutes les pages se mettent à jour
 *
 * ── UTILISATION DANS UNE PAGE HTML ──
 *   Placer un conteneur vide là où l'image doit apparaître :
 *   <div class="img-google"></div>
 *   Le script remplit automatiquement tous les .img-google trouvés.
 * ═══════════════════════════════════════════
 */

(function () {

  /* ══════════════════════════════════════════
     CONFIG — MODIFIER ICI UNIQUEMENT
  ══════════════════════════════════════════ */
  const SRC = '/img/icons/social-proof-google.webp';
  const ALT = 'Avis clients 5 étoiles sur Google pour Malo Nettoyage';

  /* ══════════════════════════════════════════
     INJECTION DANS TOUS LES CONTENEURS
  ══════════════════════════════════════════ */
  document.querySelectorAll('.img-google').forEach(function (container) {
    const img = document.createElement('img');
    img.src     = SRC;
    img.alt     = ALT;
    img.loading = 'lazy';
    container.innerHTML = '';
    container.appendChild(img);
  });

})();
