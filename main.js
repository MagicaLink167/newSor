// ========== HEADER SCROLL EFFECT ==========
window.addEventListener('scroll', function () {
  var header = document.getElementById('site-header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
  var menu = document.getElementById('mobile-menu');
  var overlay = document.getElementById('mobile-overlay');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Close menu on resize to desktop
window.addEventListener('resize', function () {
  if (window.innerWidth >= 768) {
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-overlay');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// ========== SCROLL NAVIGATION ==========
function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(e, id) {
  e.preventDefault();
  var el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ========== HERO STARS ==========
(function () {
  var container = document.getElementById('hero-stars');
  if (!container) return;
  for (var i = 0; i < 40; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    var size = Math.random() * 2.5 + 0.5;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
    star.style.setProperty('--delay', (Math.random() * 4) + 's');
    container.appendChild(star);
  }
})();

// ========== GALLERY SCROLL ==========
var galleryScroll = document.getElementById('gallery-scroll');
var arrowLeft = document.getElementById('arrow-left');
var arrowRight = document.getElementById('arrow-right');

function updateGalleryArrows() {
  if (!galleryScroll) return;
  var sl = galleryScroll.scrollLeft;
  var canLeft = sl > 10;
  var canRight = sl < galleryScroll.scrollWidth - galleryScroll.clientWidth - 10;

  if (arrowLeft) {
    arrowLeft.classList.toggle('visible', canLeft);
  }
  if (arrowRight) {
    arrowRight.classList.toggle('visible', canRight);
  }
}

if (galleryScroll) {
  galleryScroll.addEventListener('scroll', updateGalleryArrows, { passive: true });
  window.addEventListener('resize', updateGalleryArrows);
  setTimeout(updateGalleryArrows, 300);
}

function scrollGallery(direction) {
  if (!galleryScroll) return;
  var amount = window.innerWidth < 640 ? 280 : 340;
  galleryScroll.scrollBy({
    left: direction === 'left' ? -amount : amount,
    behavior: 'smooth'
  });
}

// ========== FAQ ACCORDION ==========
function toggleFaq(button) {
  var item = button.parentElement;
  var wasActive = item.classList.contains('active');

  // Close all
  document.querySelectorAll('.faq-item').forEach(function (el) {
    el.classList.remove('active');
  });

  // Toggle clicked
  if (!wasActive) {
    item.classList.add('active');
  }
}

// ========== SCROLL ANIMATIONS ==========
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
    observer.observe(el);
  });
})();

// ========== DEMO VIEWER ==========
const templateNames = {
  'hilo-rojo': '❤️‍🔥 Hilo Rojo',
  'cosmic-love': '🌌 Cosmic Love',
  'elegancia-dorada': '✨ Elegancia Dorada',
  'fiesta-neon': '🎂 Fiesta Neon',
  'recuerdos-tiempo': '🕰️ Recuerdos en el Tiempo'
};

function openDemo(templateId) {
  const overlay = document.getElementById('demoOverlay');
  const frame = document.getElementById('demoFrame');
  const loading = document.getElementById('demoLoading');
  const title = document.getElementById('demoTitle');
  const personalizeBtn = document.getElementById('demoPersonalizeBtn');

  title.textContent = templateNames[templateId] || templateId;
  personalizeBtn.href = 'customize.html?template=' + templateId;
  loading.style.display = 'flex';
  frame.src = '';
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  frame.src = 'templates/' + templateId + '.html';
  frame.onload = function() {
    loading.style.display = 'none';
  };
}

function closeDemo() {
  const overlay = document.getElementById('demoOverlay');
  const frame = document.getElementById('demoFrame');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  frame.src = 'about:blank';
}
