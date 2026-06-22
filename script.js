/* ============================================
   PORTFOLIO SCRIPT — Do Cong Huy
   ============================================ */

'use strict';

// ── Nav scroll behavior ──────────────────────
const nav = document.getElementById('nav');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
  lastY = y;
}, { passive: true });

// ── Mobile nav toggle ────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

navToggle.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
});

navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ── Animate skill bars on scroll ─────────────
const barFills = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

barFills.forEach(bar => barObserver.observe(bar));

// ── Fade-in on scroll ────────────────────────
const fadeEls = document.querySelectorAll('.project, .skill-card, .about-stat');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // small staggered delay per element
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  el.dataset.delay = (i % 3) * 80;
  fadeObserver.observe(el);
});

// ── Active nav link highlight ─────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const navLinksDesktop = document.querySelectorAll('.nav-links a');

const activateLink = (id) => {
  navLinksDesktop.forEach(a => {
    const href = a.getAttribute('href');
    if (href === `#${id}`) {
      a.style.color = 'var(--accent)';
    } else {
      a.style.color = '';
    }
  });
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activateLink(entry.target.id);
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(sec => sectionObserver.observe(sec));

// ── Panel counter animation ───────────────────
const animateCounter = (el, from, to, duration, decimals = 0) => {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const val = from + (to - from) * eased;
    el.textContent = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

const panelRows = document.querySelectorAll('.panel-val');
let panelAnimated = false;

const panelObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !panelAnimated) {
    panelAnimated = true;

    const targets = [
      { el: panelRows[0], from: 3.0, to: 3.87, decimals: 2 },
      { el: panelRows[1], from: 0.5, to: 0.852, decimals: 3 },
      { el: panelRows[2], from: 0.8, to: 0.994, decimals: 3 },
      { el: panelRows[3], from: 0.6, to: 0.906, decimals: 3 },
      { el: panelRows[4], from: 0.3, to: 0.5295, decimals: 4 },
      { el: panelRows[5], from: 1800, to: 2248, decimals: 0 },
    ];

    targets.forEach(({ el, from, to, decimals }, i) => {
      if (!el) return;
      // strip dim span before animating
      const dim = el.querySelector('.panel-dim');
      const dimText = dim ? dim.outerHTML : '';
      el.innerHTML = '';
      setTimeout(() => {
        animateCounter(el, from, to, 1400, decimals);
        if (dimText) {
          setTimeout(() => {
            el.insertAdjacentHTML('beforeend', dimText);
          }, 1450);
        }
      }, i * 120);
    });
  }
}, { threshold: 0.5 });

const heroPanel = document.querySelector('.hero-panel');
if (heroPanel) panelObserver.observe(heroPanel);

// ── Smooth scroll for same-page anchors ───────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
