console.log('script chargé');

document.addEventListener('DOMContentLoaded', () => {
  // FOMO Counter
  (function () {
    const TOTAL_SLOTS = 7;
    const seed = new Date().getDay();
    const freeSlots = [2, 3, 2, 3, 1, 3, 2][seed];
    const takenSlots = TOTAL_SLOTS - freeSlots;

    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const nextDayIdx = (new Date().getDay() + (freeSlots > 0 ? 1 : 2)) % 7;
    const nextDay = days[nextDayIdx];

    const countEl = document.getElementById('fomo-count');
    const dayEl = document.getElementById('fomo-day');
    const slotsEl = document.getElementById('fomo-slots');

    if (countEl) {
      countEl.textContent = freeSlots + ' créneau' + (freeSlots > 1 ? 'x' : '');
    }

    if (dayEl) {
      dayEl.textContent = nextDay;
    }

    if (slotsEl) {
      slotsEl.innerHTML = '';

      for (let i = 0; i < TOTAL_SLOTS; i++) {
        const dot = document.createElement('div');
        dot.className = 'fomo-slot ' + (i < takenSlots ? 'taken' : 'free');
        slotsEl.appendChild(dot);
      }

      slotsEl.querySelectorAll('.fomo-slot.free').forEach((el, i) => {
        el.style.animationDelay = (i * 0.3) + 's';
      });
    }
  })();

  // FAQ accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-btn');
    const body = item.querySelector('.faq-body');

    if (item.classList.contains('open')) {
      body.style.height = body.scrollHeight + 'px';
    }

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach((otherItem) => {
        const otherBody = otherItem.querySelector('.faq-body');
        otherItem.classList.remove('open');
        otherBody.style.height = '0px';
      });

      if (!isOpen) {
        item.classList.add('open');
        body.style.height = body.scrollHeight + 'px';
      }
    });
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealEls.forEach((el) => observer.observe(el));
  }
});