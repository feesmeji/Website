document.addEventListener('DOMContentLoaded', function () {
  // ---------- Particles.js ----------
  particlesJS('particles-js', {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#41FF00" },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.4 }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: true, speed: 2, size_min: 1 }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#41FF00",
        opacity: 0.6,
        width: 1.5
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  // ---------- Project modals (technical writing + programming) ----------
  function setupModal(modalId, triggerId) {
    const modal = document.getElementById(modalId);
    const trigger = document.getElementById(triggerId);
    const closeBtn = modal.querySelector('.close');

    trigger.addEventListener('click', function (ev) {
      ev.preventDefault();
      modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  setupModal('doc-modal', 'briefcase-icon');
  setupModal('code-projects-modal', 'code-projects-icon');
});