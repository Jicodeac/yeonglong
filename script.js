/* 영롱 YEONGLONG — Minimal Script */

// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Apply fade-in to key elements
document.querySelectorAll(
  '.region-card, .product-card, .product-header, .story-text, .story-visual, .goddess-note, .section-title'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Hero floating particles
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = (6 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 6) + 's';
  p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
  p.style.opacity = 0.2 + Math.random() * 0.5;
  particleContainer.appendChild(p);
}
