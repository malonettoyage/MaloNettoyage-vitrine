/**
 * ═══════════════════════════════════════════
 * AUTRES SERVICES — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Injecte automatiquement "Nos autres services" sur
 * chaque page de service, en excluant le service courant.
 *
 * ── POUR MODIFIER UN SERVICE ──
 *   Changer image, titre ou description ICI uniquement.
 *   Toutes les pages se mettent à jour automatiquement.
 *
 * ── UTILISATION DANS UNE PAGE HTML ──
 *   <div id="autres-services-container"></div>
 *   <script src="/js/autres-services.js" defer></script>
 * ═══════════════════════════════════════════
 */

(function () {

  /* ══════════════════════════════════════════
     REGISTRE DES SERVICES
     → Modifier image, titre ou description ici
     → slug : correspond au pathname de la page
  ══════════════════════════════════════════ */
  const SERVICES = [
    {
      slug:        '/services/fin-de-bail/',
      image:       '/img/services/nettoyage-de-fin-de-bail.webp',
      imageAlt:    'Nettoyage complet appartement pour état des lieux de sortie',
      titre:       'Nettoyage de fin de bail',
      description: '58/58 états des lieux validés. Garantie retour gratuit si la régie refuse.'
    },
    {
      slug:        '/services/nettoyage-fin-de-chantier/',
      image:       '/img/services/nettoyage-de-fin-de-chantier.webp',
      imageAlt:    'Employé passant une monobrosse sur un sol de chantier',
      titre:       'Nettoyage de fin de chantier',
      description: 'Après travaux ou rénovation, locaux prêts à accueillir vos équipes en 48h.'
    },
    {
      slug:        '/services/nettoyage-vitres/',
      image:       '/img/services/nettoyage-de-vitres.webp',
      imageAlt:    'Nettoyage de vitres professionnelles sans traces',
      titre:       'Nettoyage de vitres',
      description: 'Intérieur et extérieur, sans traces. Résultat garanti ou on revient.'
    },
    {
      slug:        '/services/nettoyage-regulier/',
      image:       '/img/services/nettoyage-regulier.webp',
      imageAlt:    'Nettoyage régulier de bureaux et locaux professionnels',
      titre:       'Nettoyage régulier',
      description: 'Bureaux et locaux propres chaque semaine. Facturation mensuelle, même équipe.'
    }
  ];

  /* ══════════════════════════════════════════
     INJECTION
  ══════════════════════════════════════════ */
  const container = document.getElementById('autres-services-container');
  if (!container) return;

  const chemin = window.location.pathname.replace(/\/$/, '') + '/';

  const autres = SERVICES.filter(s => s.slug !== chemin);

  const cardsHTML = autres.map(s => `
    <a href="${s.slug}" class="info-services" style="text-decoration:none;color:inherit;">
      <img src="${s.image}" alt="${s.imageAlt}" class="img-service" loading="lazy">
      <h3>${s.titre}</h3>
      <p>${s.description}</p>
    </a>`).join('');

  container.innerHTML = `
    <div class="services section">
      <h2>Nos autres <span class="highlight">services</span> de nettoyage</h2>
      <div class="list-column">
        <div class="list-services">
          ${cardsHTML}
        </div>
        <div class="cta-global">
          <a href="mailto:hello@malonettoyage.ch?subject=Demande%20de%20devis%20gratuit" class="cta">Obtenez votre devis gratuit</a>
          <a href="tel:+41798594120" class="sous-cta">ou appelez-nous au <strong>+41 79 859 41 20</strong></a>
        </div>
      </div>
    </div>`;

})();
