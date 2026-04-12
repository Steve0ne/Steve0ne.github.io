const root = document.documentElement;
const revealElements = document.querySelectorAll('.reveal-up');
const sectionElements = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');
const commandNode = document.getElementById('rotating-command');
const statusNode = document.getElementById('live-status');
const fxToggle = document.getElementById('fx-toggle');
const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

const bootCommands = [
  './boot --focus=distributed-systems',
  './benchmark --target=high-concurrency',
  './rag sync --top3-hit=92%',
  './review --ai --coverage=85%+'
];

const liveStatuses = [
  'SYSTEM NOMINAL',
  'QUEUE STABLE',
  'PIPELINE GREEN',
  'DEPLOY READY'
];

let commandIndex = 0;
let statusIndex = 0;

function applyFXState(mode) {
  const muted = mode === 'low';
  document.body.classList.toggle('fx-muted', muted);
  fxToggle?.setAttribute('aria-pressed', String(muted));
  if (fxToggle) {
    fxToggle.textContent = muted ? 'FX: LOW' : 'FX: HIGH';
  }
}

function loadFXPreference() {
  const saved = window.localStorage.getItem('fx-level');
  const fallback = reducedMotionMedia.matches ? 'low' : 'high';
  applyFXState(saved === 'low' ? 'low' : fallback);
}

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
    { threshold: 0.16 }
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
        });
      });
    },
    {
      rootMargin: '-38% 0px -45% 0px',
      threshold: 0.15
    }
  );

  sectionElements.forEach((section) => observer.observe(section));
}

function updateTextNode(node, value) {
  if (!node) return;
  node.classList.add('is-updating');
  window.setTimeout(() => {
    node.textContent = value;
    node.classList.remove('is-updating');
  }, 140);
}

function setupDynamicText() {
  if (reducedMotionMedia.matches) return;

  window.setInterval(() => {
    commandIndex = (commandIndex + 1) % bootCommands.length;
    updateTextNode(commandNode, bootCommands[commandIndex]);
  }, 2600);

  window.setInterval(() => {
    statusIndex = (statusIndex + 1) % liveStatuses.length;
    statusNode.textContent = liveStatuses[statusIndex];
  }, 3200);
}

function setupScrollRatio() {
  let ticking = false;

  function update() {
    const maxScrollable = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const ratio = Math.min(Math.max(window.scrollY / maxScrollable, 0), 1);
    root.style.setProperty('--scroll-ratio', ratio.toFixed(4));
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

function setupFXToggle() {
  if (!fxToggle) return;

  fxToggle.addEventListener('click', () => {
    const muted = document.body.classList.contains('fx-muted');
    const nextMode = muted ? 'high' : 'low';
    applyFXState(nextMode);
    window.localStorage.setItem('fx-level', nextMode);
  });
}

function setupReducedMotionListener() {
  reducedMotionMedia.addEventListener('change', (event) => {
    const stored = window.localStorage.getItem('fx-level');
    if (stored) return;
    applyFXState(event.matches ? 'low' : 'high');
  });
}

function setupYear() {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

loadFXPreference();
updateRevealDelays();
setupRevealObserver();
setupSectionObserver();
setupDynamicText();
setupScrollRatio();
setupFXToggle();
setupReducedMotionListener();
setupYear();
