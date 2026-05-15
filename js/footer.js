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

  // Signature auteur — injectée automatiquement sur toutes les pages article
  const authorTarget = document.getElementById('autres-articles-container');
  if (authorTarget) {
    const author = document.createElement('div');
    author.className = 'article-author fade-in';
    author.innerHTML = `
  <div class="article-author-avatar">
    <img src="/img/reger-malo-nettoyage_signature.webp" alt="Reger - Fondateur Malo Nettoyage" loading="lazy">
  </div>
  <div class="article-author-info">
    <p class="article-author-name">Rédigé par <strong>Reger</strong> — Fondateur de Malo Nettoyage</p>
    <p class="article-author-bio">Expert en nettoyage professionnel, spécialisé dans les fins de bail, nettoyages de chantier et entretien de vitres dans tout le canton de Vaud.</p>
  </div>`;
    authorTarget.parentNode.insertBefore(author, authorTarget);
  }

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
          <a href="https://www.instagram.com/malonettoyage/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
          <a href="https://www.linkedin.com/company/malonettoyage/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
          <a href="https://www.youtube.com/@MaloNettoyage" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>
          <a href="tel:+41798594120" aria-label="Téléphone"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></a>
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
