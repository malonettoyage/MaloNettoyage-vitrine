/**
 * ═══════════════════════════════════════════
 * BLOCS COMMUNS — Malo Nettoyage
 * ═══════════════════════════════════════════
 * Injecte les blocs IDENTIQUES sur toutes les pages (accueil + pages villes…).
 * Pour modifier un de ces blocs partout → le modifier UNE SEULE FOIS ici.
 *
 * Utilisation dans une page :
 *   <div data-malo-block="partners"></div>
 *   <div data-malo-block="pourquoi"></div>
 *   <div data-malo-block="avantapres"></div>
 *
 * SEO : ces blocs sont identiques sur toutes les pages (aucune valeur SEO
 * propre à une page), on peut donc les injecter en JS sans risque — comme le footer.
 * Le contenu unique de chaque page (hero, texte local, services, FAQ) reste en HTML.
 * ═══════════════════════════════════════════
 */
(function () {
  var BLOCKS = {

    partners: `
<section class="partners-section section">
  <h2>Ils nous font <span class="highlight">confiance</span></h2>
  <div class="partners-viewport">
    <div class="partners-track">
      <div class="partner-card"><img src="/img/logo-partenaire/logo-dgip.webp" alt="logo partenaire etat de vaud dgip" loading="lazy"></div>
      <div class="partner-card"><img src="/img/logo-partenaire/logo-speedwings.webp" alt="logo partenaire speedwings" loading="lazy"></div>
      <div class="partner-card"><img src="/img/logo-partenaire/logo-dom.webp" alt="logo partenaire DOM architectes associés" loading="lazy"></div>
      <div class="partner-card"><img src="/img/logo-partenaire/logo-metalconcept.webp" alt="logo partenaire metal concept SA" loading="lazy"></div>
      <div class="partner-card"><img src="/img/logo-partenaire/logo-cmsa.webp" alt="logo partenaire CMSA" loading="lazy"></div>
      <div class="partner-card"><img src="/img/logo-partenaire/logo-bersier.webp" alt="logo partenaire La Gérance Bersier Weibel Sàrl" loading="lazy"></div>
    </div>
  </div>
</section>`,

    pourquoi: `
<div class="pourquoi-nous section">
  <h2>Pourquoi nos <span class="highlight">clients</span> nous adorent</h2>
  <div class="list-raison">
    <div class="raison">
      <h3 class="icon" role="img" aria-label="Icône poignée de main symbolisant entreprise familiale">🤝</h3>
      <div class="raison-text"><h3>Familiale</h3><p>Des valeurs humaines, proches de vous</p></div>
    </div>
    <div class="raison">
      <h3 class="icon" role="img" aria-label="Icône maison symbolisant proximité et engagement local">🏡</h3>
      <div class="raison-text"><h3>Local</h3><p>Présents à vos côtés, dans votre région</p></div>
    </div>
    <div class="raison">
      <h3 class="icon" role="img" aria-label="Icône feuille symbolisant respect de l’environnement">🌿</h3>
      <div class="raison-text"><h3>Respectueux</h3><p>80% de produits écologiques et sans danger</p></div>
    </div>
    <div class="raison">
      <h3 class="icon" role="img" aria-label="Icône bulle de dialogue symbolisant écoute et disponibilité">💬</h3>
      <div class="raison-text"><h3>Réactifs</h3><p>Disponibles 7j/7 pour vous</p></div>
    </div>
  </div>
</div>`,

    avantapres: `
<div id="realisations" class="avant_apres section">
  <h2>Voyez la <span class="highlight">différences</span></h2>
  <div class="list-avant_apres">
    <div class="avant_apres-img">
      <div class="avant"><p class="tete-avant"><strong>Avant</strong> notre passage</p><img src="/img/avant-apres/avant-1.webp" alt="Robinet de douche recouvert de calcaire" class="img-avant_apres" loading="lazy"></div>
      <div class="apres"><p class="tete-apres"><strong>Après</strong> notre passage</p><img src="/img/avant-apres/apres-1.webp" alt="Robinet de douche propre et sans calcaire" class="img-avant_apres" loading="lazy"></div>
    </div>
    <div class="avant_apres-img">
      <div class="avant"><p class="tete-avant"><strong>Avant</strong> notre passage</p><img src="/img/avant-apres/avant-6.webp" alt="Coin de fenêtre au sol sale avec poussière" class="img-avant_apres" loading="lazy"></div>
      <div class="apres"><p class="tete-apres"><strong>Après</strong> notre passage</p><img src="/img/avant-apres/apres-6.webp" alt="Coin de fenêtre propre sans poussière" class="img-avant_apres" loading="lazy"></div>
    </div>
    <div class="avant_apres-img">
      <div class="avant"><p class="tete-avant"><strong>Avant</strong> notre passage</p><img src="/img/avant-apres/avant-7.webp" alt="Robinet de douche recouvert de calcaire" class="img-avant_apres" loading="lazy"></div>
      <div class="apres"><p class="tete-apres"><strong>Après</strong> notre passage</p><img src="/img/avant-apres/apres-7.webp" alt="Robinet de douche propre et sans calcaire" class="img-avant_apres" loading="lazy"></div>
    </div>
  </div>
  <div class="cta-global">
    <a href="#contact" class="cta" onclick="gtagSendEvent('contact_email');">Obtenez votre devis gratuit</a>
    <a href="tel:+41798594120" class="sous-cta" onclick="gtagSendEvent('contact_tel');">ou appelez-nous au <strong>+41 79 859 41 20</strong></a>
  </div>
</div>`

  };

  // Injection : remplace chaque <div data-malo-block="..."></div> par son bloc
  var placeholders = document.querySelectorAll('[data-malo-block]');
  placeholders.forEach(function (ph) {
    var key = ph.getAttribute('data-malo-block');
    if (BLOCKS[key]) {
      ph.insertAdjacentHTML('beforebegin', BLOCKS[key]);
      ph.parentNode.removeChild(ph);
    }
  });

  // Carrousel partenaires (mobile) — après injection
  var vp = document.querySelector('.partners-section .partners-viewport');
  var track = vp && vp.querySelector('.partners-track');
  if (!track) return;
  var mq = window.matchMedia('(max-width:768px)');
  var timer = null, idx = 0, count = 0;
  function clearClones(){ for (var i=track.children.length-1;i>=0;i--){ if(track.children[i].getAttribute('data-clone')) track.removeChild(track.children[i]); } }
  function stop(){ if(timer){clearInterval(timer);timer=null;} track.style.transition='none'; track.style.transform='translateX(0)'; clearClones(); idx=0; }
  function stepPx(){ var f=track.children[0]; var cs=getComputedStyle(track); var g=parseFloat(cs.columnGap||cs.gap)||12; return f.getBoundingClientRect().width+g; }
  function next(){ idx++; track.style.transition='transform .6s ease'; track.style.transform='translateX('+(-idx*stepPx())+'px)'; if(idx>=count){ window.setTimeout(function(){ track.style.transition='none'; idx=0; track.style.transform='translateX(0)'; },620); } }
  function start(){ stop(); if(!mq.matches) return; var o=Array.prototype.slice.call(track.children); count=o.length; if(count<=3) return; o.forEach(function(c){ var cl=c.cloneNode(true); cl.setAttribute('data-clone','1'); track.appendChild(cl); }); idx=0; timer=setInterval(next,3000); }
  start();
  if (mq.addEventListener) mq.addEventListener('change', start); else if (mq.addListener) mq.addListener(start);
})();
