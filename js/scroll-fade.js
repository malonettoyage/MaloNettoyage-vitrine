document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('active');
  });
});

const video = document.getElementById("portrait-video");
const toggleBtn = document.getElementById("video-toggle");

if (video && toggleBtn) {
  let isPlaying = false;
  let hideTimeout;

  function showButton(text) {
    toggleBtn.textContent = text;
    toggleBtn.style.opacity = "1";
    toggleBtn.style.pointerEvents = "auto";

    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      if (isPlaying) {
        toggleBtn.style.opacity = "0";
        toggleBtn.style.pointerEvents = "none";
      }
    }, 2000);
  }

  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
      video.muted = false;
    }
  });

  video.addEventListener("play", () => {
    isPlaying = true;
    showButton("⏸️ Mettre en pause");
  });

  video.addEventListener("pause", () => {
    isPlaying = false;
    showButton("▶️ Lire la vidéo");
  });

  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.pause();
  });

  video.addEventListener("mousemove", () => {
    if (isPlaying) showButton("⏸️ Mettre en pause");
  });

  video.addEventListener("touchstart", () => {
    if (isPlaying) showButton("⏸️ Mettre en pause");
  }, { passive: true });
}

const btnVoirPlus = document.getElementById('voir-plus-avis');
const rangees = document.querySelectorAll('.list-avis-2, .list-avis-3, .list-avis-4');
let rangIndex = 0;

if (btnVoirPlus) {
  function toggleAvis(e) {
    e.preventDefault();

    if (btnVoirPlus.classList.contains('voir-moins')) {
      for (let i = 0; i < rangees.length; i++) {
        const rang = rangees[i];
        rang.style.height = '0';
        rang.style.opacity = 0;
        setTimeout(() => rang.style.display = 'none', 500);
      }
      rangIndex = 0;
      btnVoirPlus.textContent = 'Voir plus d’avis';
      btnVoirPlus.classList.remove('voir-moins');
      return;
    }

    if (rangIndex < rangees.length) {
      const rang = rangees[rangIndex];
      rang.style.display = 'flex';
      const fullHeight = rang.scrollHeight + "px";
      rang.style.height = fullHeight;
      rang.style.opacity = 1;
      rangIndex++;

      if (rangIndex >= rangees.length) {
        btnVoirPlus.textContent = 'Voir moins d’avis';
        btnVoirPlus.classList.add('voir-moins');
      }
    }
  }

  btnVoirPlus.addEventListener('click', toggleAvis);
  btnVoirPlus.addEventListener('touchstart', toggleAvis, { passive: true });
}

const siteNav = document.getElementById('site-nav');
if (siteNav) {
  document.querySelector('.burger').addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}
