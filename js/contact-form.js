/**
 * ═══════════════════════════════════════════
 * FORMULAIRE DE CONTACT GLOBAL — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Injecte le formulaire de devis sur toutes les pages.
 * Pour modifier le formulaire → modifier UNE SEULE FOIS ici.
 *
 * ── UTILISATION DANS UNE PAGE HTML ──
 *   Remplacer toute la section formulaire par :
 *
 *   <div id="contact-form-container"
 *     data-service="Nettoyage de fin de bail"
 *     data-placeholder="Surface, nombre de pièces, date de l'état des lieux…"
 *     data-submit="Je veux récupérer ma caution"
 *     data-subject="Nouvelle demande de devis – Fin de bail"
 *     data-photos-label="Photos du logement">
 *   </div>
 *   <script src="/js/contact-form.js" defer></script>
 *
 * ── PARAMÈTRES data-* ──
 *   data-service       : valeur pré-sélectionnée dans le select (doit correspondre exactement à une option)
 *   data-placeholder   : texte du textarea (adapté au service)
 *   data-submit        : texte du bouton de soumission
 *   data-subject       : objet de l'email reçu sur Formspree
 *   data-photos-label  : label du champ photos (ex: "Photos du logement", "Photos du chantier")
 * ═══════════════════════════════════════════
 */

(function () {

  const container = document.getElementById('contact-form-container');
  if (!container) return;

  /* ── LECTURE DES PARAMÈTRES ── */
  const cfg = {
    service:      container.dataset.service      || '',
    placeholder:  container.dataset.placeholder  || 'Décrivez votre besoin (type de nettoyage, surface, délai…)',
    submit:       container.dataset.submit        || 'Recevoir mon devis gratuit',
    subject:      container.dataset.subject       || 'Nouvelle demande de devis',
    photosLabel:  container.dataset.photosLabel   || 'Photos'
  };

  /* ── OPTIONS DU SELECT ── */
  const SERVICES = [
    'Nettoyage de fin de bail',
    'Nettoyage régulier',
    'Nettoyage de vitres',
    'Nettoyage de fin de chantier',
    'Nettoyage extrême',
    'Nettoyage en profondeur',
    'Autre demande'
  ];

  const optionsHTML = SERVICES.map(s =>
    `<option value="${s}"${s === cfg.service ? ' selected' : ''}>${s}</option>`
  ).join('\n          ');

  /* ── INJECTION DU HTML ── */
  container.innerHTML = `
    <section class="contact-section section">
      <h2>Devis gratuit — <span class="highlight">réponse sous 24h</span></h2>

      <div class="devis-steps">
        <span>Demande</span>
        <span class="devis-steps-arrow">→</span>
        <span>Visite sans engagement</span>
        <span class="devis-steps-arrow">→</span>
        <span>Devis gratuit</span>
        <span class="devis-steps-arrow">→</span>
        <span>On nettoie</span>
      </div>

      <form id="contact-form" class="contact-form" action="https://formspree.io/f/xbdqdpry" method="POST">
        <input type="hidden" name="_subject" value="${cfg.subject}">

        <div class="field">
          <label for="c-name"><p>Votre nom</p></label>
          <input type="text" id="c-name" name="name" placeholder="Laura Morel" required>
        </div>

        <div class="field">
          <label for="c-email"><p>Votre email</p></label>
          <input type="email" id="c-email" name="email" placeholder="lauramorel@exemple.ch" required>
        </div>

        <div class="field">
          <label for="c-tel"><p>Téléphone <span style="color:#999;font-weight:400;">(optionnel)</span></p></label>
          <input type="tel" id="c-tel" name="telephone" placeholder="+41 79 859 41 20">
        </div>

        <div class="field">
          <label for="c-service"><p>Type de service</p></label>
          <select id="c-service" name="service" required>
            <option value="">— Choisissez un service —</option>
            ${optionsHTML}
          </select>
        </div>

        <div class="field">
          <label for="c-msg"><p>Votre message</p></label>
          <textarea id="c-msg" name="message" placeholder="${cfg.placeholder}" required></textarea>
        </div>

        <div class="field">
          <label for="c-photos"><p>${cfg.photosLabel} <span style="color:#999;font-weight:400;">(optionnel)</span></p></label>
          <label for="c-photos" id="upload-btn" class="upload-button">Ajouter des photos</label>
          <input type="file" id="c-photos" name="photos" multiple accept="image/*,video/*" style="display: none;">
          <div id="preview-container" class="preview-container"></div>
          <div id="upload-status" class="upload-status"></div>
        </div>
        <input type="hidden" id="image_links" name="image_links" value="">

        <button type="submit" class="cta">${cfg.submit}</button>
        <p class="contact-note">Sans engagement · Réponse sous 24h</p>
      </form>
    </section>`;

  /* ── SOUMISSION DU FORMULAIRE ── */
  const form   = document.getElementById('contact-form');
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    button.disabled  = true;
    button.innerText = 'Envoi en cours...';

    fetch(form.action, {
      method:  'POST',
      body:    new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(() => {
      window.location.href = '/merci.html';
    }).catch(() => {
      button.disabled  = false;
      button.innerText = cfg.submit;
      alert('Erreur, réessaie.');
    });
  });

  /* ── UPLOAD CLOUDINARY ── */
  (function () {
    const CLOUDINARY = { cloudName: 'dacbutv4g', uploadPreset: 'malo_nettoyage' };
    let uploadedImages = [];

    const fileInput      = document.getElementById('c-photos');
    const previewCont    = document.getElementById('preview-container');
    const uploadStatus   = document.getElementById('upload-status');
    const imageLinksField = document.getElementById('image_links');

    if (!fileInput) return;

    fileInput.addEventListener('change', function () {
      Array.from(fileInput.files).forEach(file => uploadFile(file));
      fileInput.value = '';
    });

    async function uploadFile(file) {
      const tempId = Date.now() + Math.random();
      const item   = createPreviewItem(file, tempId);
      previewCont.appendChild(item);
      uploadStatus.textContent = 'Upload en cours...';

      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_preset', CLOUDINARY.uploadPreset);

      try {
        const resourceType = file.type.startsWith('video') ? 'video' : 'image';
        const res  = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY.cloudName}/${resourceType}/upload`, {
          method: 'POST',
          body:   fd
        });
        const data = await res.json();
        if (data.secure_url) {
          uploadedImages.push({ id: tempId, url: data.secure_url });
          syncImageLinks();
          uploadStatus.textContent = uploadedImages.length + ' fichier(s) prêt(s)';
        }
      } catch (e) {
        item.remove();
        uploadStatus.textContent = "Erreur lors de l'upload.";
      }
    }

    function createPreviewItem(file, tempId) {
      const item = document.createElement('div');
      item.className  = 'preview-item';
      item.dataset.id = tempId;

      if (file.type.startsWith('image')) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        item.appendChild(img);
      } else {
        const vid = document.createElement('video');
        vid.src   = URL.createObjectURL(file);
        vid.muted = true;
        item.appendChild(vid);
        const badge = document.createElement('span');
        badge.className   = 'video-badge';
        badge.textContent = '🎥';
        item.appendChild(badge);
      }

      const del = document.createElement('button');
      del.className   = 'preview-delete';
      del.textContent = '×';
      del.addEventListener('click', () => {
        uploadedImages = uploadedImages.filter(img => img.id !== tempId);
        item.remove();
        syncImageLinks();
        uploadStatus.textContent = uploadedImages.length
          ? uploadedImages.length + ' fichier(s) prêt(s)'
          : '';
      });
      item.appendChild(del);
      return item;
    }

    function syncImageLinks() {
      imageLinksField.value = uploadedImages.map(img => img.url).join('\n');
    }
  })();

})();
