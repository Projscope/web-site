/* ============================================
   Projscope — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Theme Toggle ---
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('projscope-theme', theme);
  }

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('projscope-theme') || 'light';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // --- Header scroll effect ---
  const header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav toggle ---
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      burger.classList.toggle('is-active');
      document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
    });

    nav.querySelectorAll('.header__nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll animations with IntersectionObserver ---
  const animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = Array.from(parent.querySelectorAll('[data-animate]'));
            const siblingIndex = siblings.indexOf(entry.target);
            const delay = siblingIndex * 100;

            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    animatedElements.forEach((el) => el.classList.add('is-visible'));
  }

  // --- Counter animation ---
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const duration = 2000;
            const startTime = performance.now();

            function updateCount(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * target);
              el.textContent = current;

              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            }

            requestAnimationFrame(updateCount);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  animateCounters();

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Contact form handling ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = 'var(--color-success)';
        btn.style.borderColor = 'var(--color-success)';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1000);
    });
  }
})();
