/**
 * ═══════════════════════════════════════════
 * FOOTER GLOBAL — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Ce fichier injecte le footer sur toutes les pages.
 * Pour modifier le footer (copyright, liens, texte…)
 * → modifier UNE SEULE FOIS ici, ça s'applique partout.
 * ═══════════════════════════════════════════
 */

(function () {
  const footer = document.createElement('div');
  footer.innerHTML = `

<!-- ═══════════════════════════════════════════
     FOOTER
     → Modifier dans /js/footer.js uniquement
═══════════════════════════════════════════ -->
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">

      <!-- Colonne 1 : Logo + description + réseaux -->
      <div class="footer-brand">
        <img src="/img/MaloNettoyage_Logo-white.webp" alt="Malo Nettoyage" class="footer-logo-img" loading="lazy">
        <p>Entreprise familiale de nettoyage à Payerne et dans tout le canton de Vaud &amp; Fribourg. Fiable, soigné et humain.</p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/malonettoyage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/malonettoyage/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.youtube.com/@MaloNettoyage" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="tel:+41798594120" aria-label="Téléphone"><i class="fa-solid fa-phone"></i></a>
        </div>
      </div>

      <!-- Colonne 2 : Navigation -->
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/services/fin-de-bail/">Fin de bail</a></li>
          <li><a href="/services/nettoyage-fin-de-chantier/">Fin de chantier</a></li>
          <li><a href="/services/nettoyage-vitres/">Vitres</a></li>
          <li><a href="/services/nettoyage-regulier/">Régulier</a></li>
          <li><a href="/blog/">Blog</a></li>
        </ul>
      </div>

      <!-- Colonne 3 : Contact -->
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="tel:+41798594120" class="footer-contact-item">+41 79 859 41 20</a>
        <a href="mailto:hello@malonettoyage.ch" class="footer-contact-item">hello@malonettoyage.ch</a>
        <a href="/devis-gratuit/" class="footer-cta">Devis gratuit →</a>
      </div>

    </div>

    <!-- Zones d'intervention -->
    <div class="footer-zones">
      <p><strong>Zones d'intervention :</strong> Payerne · Yverdon-les-Bains · Moudon · Avenches · Estavayer-le-Lac · Fribourg · Romont · Lausanne · Morges · Nyon · et alentours</p>
    </div>

    <!-- Bas du footer : copyright + liens légaux -->
    <div class="footer-bottom">
      <p>© 2026 Malo Nettoyage · Tous droits réservés · N° IDE : CHE-307.067.923</p>
      <div style="display:flex;gap:16px;">
        <a href="/politique-de-confidentialite/">Politique de confidentialité</a>
      </div>
    </div>

  </div>
</footer>`;

  document.body.appendChild(footer.firstElementChild);
})();
