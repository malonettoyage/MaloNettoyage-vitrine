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
let hideTimeout;

// Affiche le bouton temporairement
function showButton(text) {
  toggleBtn.textContent = text;
  toggleBtn.style.opacity = "1";
  toggleBtn.style.pointerEvents = "auto";

  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    if (isPlaying) { // Ne le cache que si la vidéo joue
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
    video.muted = false; // Active le son
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

// Quand la vidéo se termine
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.pause();
});

// Interaction souris ou tactile → afficher bouton
video.addEventListener("mousemove", () => {
  if (isPlaying) showButton("⏸️ Mettre en pause");
});
video.addEventListener("touchstart", () => {
  if (isPlaying) showButton("⏸️ Mettre en pause");
});
