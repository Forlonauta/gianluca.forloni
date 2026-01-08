const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
const desktopQuery = window.matchMedia('(min-width: 768px)');

const setMenuVisibility = () => {
  if (!navMenu) {
    return;
  }

  if (desktopQuery.matches) {
    navMenu.hidden = false;
    navToggle?.setAttribute('aria-expanded', 'false');
  } else if (navToggle?.getAttribute('aria-expanded') !== 'true') {
    navMenu.hidden = true;
  }
};

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.hidden = isOpen;
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.hidden = true;
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  desktopQuery.addEventListener('change', setMenuVisibility);
  setMenuVisibility();
}

const observerTargets = document.querySelectorAll('section, .card, .timeline-item');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && observerTargets.length > 0) {
  observerTargets.forEach((el) => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observerTargets.forEach((el) => observer.observe(el));
}

const contactForm = document.getElementById('contact-form');
const feedback = document.querySelector('.form-feedback');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) {
      if (feedback) {
        feedback.textContent = 'Compila tutti i campi prima di inviare la richiesta.';
      }
      return;
    }

    const mailSubject = encodeURIComponent(`[${subject}] Richiesta da ${name}`);
    const mailBody = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nOggetto: ${subject}\n\nMessaggio:\n${message}`
    );

    window.location.href = `mailto:info@esempio.com?subject=${mailSubject}&body=${mailBody}`;

    if (feedback) {
      feedback.textContent = 'Sto aprendo la tua email per completare l’invio.';
    }

    contactForm.reset();
  });
}
