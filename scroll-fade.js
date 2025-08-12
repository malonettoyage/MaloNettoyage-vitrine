document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // On arrête d’observer après apparition
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

      // Toggle l'état actif
      item.classList.toggle('active');
    });
  });

  const video = document.getElementById("portrait-video");
const toggleBtn = document.getElementById("video-toggle");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    video.pause();
    toggleBtn.textContent = "▶️ Lire la vidéo";
  } else {
    video.play();
    video.muted = false; // Active le son
    toggleBtn.textContent = "⏸️ Mettre en pause";
  }
  isPlaying = !isPlaying;
});

// Quand la vidéo se termine → redémarre directement
video.addEventListener("ended", () => {
  video.currentTime = 0; // Retour au début
  video.play();          // Relance
});