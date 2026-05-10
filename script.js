/* =========================================================
   Matheus Tasso · Portfolio
   ========================================================= */

(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* -------- theme toggle -------- */
  const html = document.documentElement;
  const themeToggle = $('#themeToggle');

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = saved || (prefersLight ? 'light' : 'dark');
    applyTheme(theme);

    if (!saved) {
      window
        .matchMedia('(prefers-color-scheme: light)')
        .addEventListener('change', (e) => {
          if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'light' : 'dark');
        });
    }
  };
  initTheme();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  /* -------- mobile menu -------- */
  const menuTrigger = $('#menuTrigger');
  const navMenu = $('#navMenu');

  const closeMenu = () => {
    if (!menuTrigger || !navMenu) return;
    menuTrigger.classList.remove('is-open');
    navMenu.classList.remove('is-open');
    menuTrigger.setAttribute('aria-expanded', 'false');
  };

  if (menuTrigger && navMenu) {
    menuTrigger.addEventListener('click', () => {
      const open = navMenu.classList.toggle('is-open');
      menuTrigger.classList.toggle('is-open', open);
      menuTrigger.setAttribute('aria-expanded', String(open));
    });

    $$('a', navMenu).forEach((a) => a.addEventListener('click', closeMenu));

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuTrigger.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* -------- nav scroll state + active section + scroll progress + back-to-top -------- */
  const nav = $('#nav');
  const progress = $('.scroll-progress span');
  const backToTop = $('.back-to-top');
  const navLinks = $$('[data-nav]');
  const sections = navLinks
    .map((a) => $(a.getAttribute('href')))
    .filter(Boolean);

  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;

    if (nav) nav.classList.toggle('is-scrolled', y > 16);
    if (progress) progress.style.width = `${pct}%`;
    if (backToTop) backToTop.classList.toggle('is-visible', y > 600);

    /* active section: pick the one whose top is closest above viewport center */
    if (sections.length) {
      const offset = window.innerHeight * 0.35;
      let activeIdx = 0;
      sections.forEach((sec, i) => {
        const top = sec.getBoundingClientRect().top;
        if (top - offset <= 0) activeIdx = i;
      });
      navLinks.forEach((l, i) => l.classList.toggle('is-active', i === activeIdx));
    }

    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  onScroll();

  /* -------- reveal on scroll -------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => entry.target.classList.add('is-revealed'), Number(delay));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  /* -------- magnetic effect on primary buttons (subtle) -------- */
  const magnets = $$('.btn--primary');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    magnets.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* -------- footer year -------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
