const root = document.documentElement;
const revealElements = document.querySelectorAll('.reveal-up');
const sectionElements = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

function updateRevealDelays() {
  revealElements.forEach((element) => {
    const delay = Number(element.getAttribute('data-reveal') || 0);
    element.style.setProperty('--reveal-delay', `${delay}ms`);
  });
}

function setupRevealObserver() {
  if (!('IntersectionObserver' in window) || reducedMotionMedia.matches) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.18
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupSectionObserver() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');

        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('is-active', active);
          link.setAttribute('aria-current', active ? 'true' : 'false');
        });
      });
    },
    {
      rootMargin: '-35% 0px -48% 0px',
      threshold: 0.15
    }
  );

  sectionElements.forEach((section) => observer.observe(section));
}

function setupYear() {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function setupScrollDepth() {
  if (reducedMotionMedia.matches) {
    root.style.setProperty('--scroll-depth', '0');
    return;
  }

  let ticking = false;

  function update() {
    const maxScrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const ratio = Math.min(Math.max(window.scrollY / maxScrollable, 0), 1);
    root.style.setProperty('--scroll-depth', ratio.toFixed(4));
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}

updateRevealDelays();
setupRevealObserver();
setupSectionObserver();
setupScrollDepth();
setupYear();
