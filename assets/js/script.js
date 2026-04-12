const revealElements = document.querySelectorAll('.reveal-up');

// 滚动进入视口时再展示模块，避免首屏信息过载。
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const commandNode = document.getElementById('rotating-command');
const bootCommands = [
  './boot --focus=distributed-systems',
  './benchmark --target=high-concurrency',
  './rag sync --top3-hit=92%',
  './review --ai --coverage=85%+'
];

let commandIndex = 0;

// 定时切换命令，强化“终端启动”叙事。
setInterval(() => {
  commandIndex = (commandIndex + 1) % bootCommands.length;
  commandNode.textContent = bootCommands[commandIndex];
}, 2600);

const yearNode = document.getElementById('year');
yearNode.textContent = String(new Date().getFullYear());
