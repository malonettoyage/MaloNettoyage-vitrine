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
          <li><a href="/services/nettoyage-insalubre-extreme/">Insalubre</a></li>
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

  // Barre fixe mobile (Appeler / WhatsApp / Devis gratuit)
  const bar = document.createElement('div');
  bar.className = 'mobile-cta-bar';
  bar.innerHTML = `
    <a href="tel:+41798594120" class="mobile-cta-btn mobile-cta-call" aria-label="Appeler Malo Nettoyage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
      <span>Appeler</span>
    </a>
    <a href="https://wa.me/41798594120" target="_blank" rel="noopener noreferrer" class="mobile-cta-btn mobile-cta-whatsapp" aria-label="Contacter via WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="/devis-gratuit/" class="mobile-cta-btn mobile-cta-devis" aria-label="Demander un devis gratuit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
      <span>Devis gratuit</span>
    </a>`;
  document.body.appendChild(bar);





  /* ══════════════════════════════════════════
     NAV — liquid glass effect au scroll
  ══════════════════════════════════════════ */
  (function () {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var scrolled = false;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        if (!scrolled) { nav.classList.add('nav-scrolled'); scrolled = true; }
      } else {
        if (scrolled)  { nav.classList.remove('nav-scrolled'); scrolled = false; }
      }
    }, { passive: true });
  })();


  /* ══════════════════════════════════════════
     FORMULAIRES — ajoute la page d'origine
     Permet de savoir depuis quelle page la demande
     a été envoyée (accueil, fin de bail, blog…).
     Capture phase = s'exécute avant le handler qui
     construit le FormData, donc le champ est inclus.
  ══════════════════════════════════════════ */
  (function () {
    document.addEventListener('submit', function (e) {
      var form = e.target;
      if (!form || !form.action || form.action.indexOf('formspree.io') === -1) return;
      if (form.querySelector('input[data-origin-field]')) return;
      var pageName = document.title.replace(/\s*[|–-]\s*Malo Nettoyage\s*$/i, '').trim();
      var inp = document.createElement('input');
      inp.type = 'hidden';
      inp.name = "Page d'origine";
      inp.setAttribute('data-origin-field', '');
      inp.value = pageName + '  —  ' + window.location.href;
      form.appendChild(inp);
    }, true);
  })();
})();