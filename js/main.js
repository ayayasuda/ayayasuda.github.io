// =============================================
//  main.js — 共通JavaScript
//  全ページで読み込む
// =============================================

// ---- Custom Cursor ----
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    ring.style.left   = e.clientX + 'px';
    ring.style.top    = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.width   = '56px';
      ring.style.height  = '56px';
      ring.style.opacity = '1';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width   = '36px';
      ring.style.height  = '36px';
      ring.style.opacity = '0.7';
    });
  });
}

// ---- Scroll Reveal ----
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  items.forEach(el => obs.observe(el));
}

// ---- Page Transition ----
function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  document.body.appendChild(overlay);

  // Animate out on load
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      overlay.classList.add('leaving');
      setTimeout(() => overlay.classList.remove('leaving'), 600);
    });
  });

  // Animate in on link click
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Skip anchors, external, and javascript: links
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('javascript')) return;

    link.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.add('entering');
      setTimeout(() => { window.location.href = href; }, 520);
    });
  });
}

// ---- Active Nav Link ----
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const linkPath = a.getAttribute('href').split('/').pop();
    if (linkPath === path) a.classList.add('active');
  });
}

// ---- Init All ----
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initReveal();
  initPageTransitions();
  setActiveNav();
});
