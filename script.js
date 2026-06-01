// ── PHOTOS ──────────────────────────────────────────────────────────────────
// Άλλαξε το order για να αλλάξεις σειρά μέσα στην κατηγορία (μικρότερος = πρώτος).
// Για να κρύψεις φωτογραφία: βάλε // μπροστά στη γραμμή.
// cat: 'portrait' | 'couples' | 'events' | 'video' | 'product'
// ratio: 1.50 = κάθετη | 0.67 = οριζόντια | 1.00 = τετράγωνη

const photos = [
  // ── COUPLES ──
  { order:  1, src: 'images/couples/A7V00014.jpg',    cat: 'couples', ratio: 1.50 },
  { order:  2.5, src: 'images/couples/A7V00155.jpg',    cat: 'couples', ratio: 1.50 },
  { order:  3, src: 'images/couples/A7V04774.jpg',    cat: 'couples', ratio: 1.50 },
  { order:  4, src: 'images/couples/A7V04837-2.JPG',  cat: 'couples', ratio: 1.50 },
  { order:  5, src: 'images/couples/A7V04839.JPG',    cat: 'couples', ratio: 1.50 },
  { order:  6, src: 'images/couples/A7V06072.JPG',    cat: 'couples', ratio: 1.78 },
  { order:  7, src: 'images/couples/A7V06090.JPG',    cat: 'couples', ratio: 1.50 },
  { order:  8, src: 'images/couples/A7V09848-4.jpg',  cat: 'couples', ratio: 1.50 },
  { order:  9, src: 'images/couples/A7V09938.jpg',    cat: 'couples', ratio: 1.50 },
  { order: 10, src: 'images/couples/IMG_9222.jpg',    cat: 'couples', ratio: 1.24 },
  { order: 11, src: 'images/couples/IMG_9223.jpg',    cat: 'couples', ratio: 1.13 },

  // ── EVENTS ──
  { order:  1, src: 'images/events/A7V00207.jpg',  cat: 'events', ratio: 0.67 },
  { order:  2, src: 'images/events/A7V00296.jpg',  cat: 'events', ratio: 1.50 },
  { order:  3, src: 'images/events/A7V09778.jpg',  cat: 'events', ratio: 0.67 },
  { order:  4, src: 'images/events/A7V09853.jpg',  cat: 'events', ratio: 0.67 },
  { order:  5, src: 'images/events/DSC05335.jpg',  cat: 'events', ratio: 0.67 },
  { order:  6, src: 'images/events/DSC05629.jpg',  cat: 'events', ratio: 0.67 },

  // ── PORTRAIT ──
  { order:  1, src: 'images/portrait/A7V05231.jpg',       cat: 'portrait', ratio: 1.50 },
  { order:  2, src: 'images/portrait/A7V05235.jpg',       cat: 'portrait', ratio: 1.50 },
  { order:  3, src: 'images/portrait/A7V06169.jpg',       cat: 'portrait', ratio: 1.50 },
  { order:  4, src: 'images/portrait/A7V06303.jpg',       cat: 'portrait', ratio: 1.50 },
  { order:  5, src: 'images/portrait/A7V06321.jpg',       cat: 'portrait', ratio: 1.50 },
  { order:  6, src: 'images/portrait/A7V06359-Edit.jpg',  cat: 'portrait', ratio: 1.50 },
  { order:  7, src: 'images/portrait/A7V07741.jpg',       cat: 'portrait', ratio: 1.50 },
  { order:  8, src: 'images/portrait/A7V07866-2.jpg',     cat: 'portrait', ratio: 1.50 },
  { order:  9, src: 'images/portrait/A7V08463.jpg',       cat: 'portrait', ratio: 1.50 },
  { order: 10, src: 'images/portrait/IMG_9221.jpg',       cat: 'portrait', ratio: 1.20 },
  { order: 11, src: 'images/portrait/IMG_9224.jpg',       cat: 'portrait', ratio: 1.12 },
  { order: 12, src: 'images/portrait/IMG_9225.jpg',       cat: 'portrait', ratio: 1.14 },
  { order: 13, src: 'images/portrait/IMG_9226.jpg',       cat: 'portrait', ratio: 1.15 },
  { order: 14, src: 'images/portrait/IMG_9227.jpg',       cat: 'portrait', ratio: 1.13 },
  { order: 15, src: 'images/portrait/IMG_9228.jpg',       cat: 'portrait', ratio: 1.21 },
  { order: 16, src: 'images/portrait/IMG_9229.jpg',       cat: 'portrait', ratio: 1.13 },
  { order: 17, src: 'images/portrait/IMG_9230.jpg',       cat: 'portrait', ratio: 1.12 },
  { order: 18, src: 'images/portrait/IMG_9231.jpg',       cat: 'portrait', ratio: 1.22 },
  { order: 19, src: 'images/portrait/IMG_9232.jpg',       cat: 'portrait', ratio: 1.21 },
  { order: 20, src: 'images/portrait/IMG_9462.jpg',       cat: 'portrait', ratio: 1.50 },
  { order: 21, src: 'images/portrait/IMG_9744 2.jpg',     cat: 'portrait', ratio: 1.78 },

  // ── PRODUCT / JEWELRY ── (προσθήκη όταν έτοιμο)
  // { order: 1, src: 'images/product/...jpg', cat: 'product', ratio: 1.25 },

  // ── VIDEO FRAMES ──
  { order:  1, src: 'images/frames/Untitled-1921.jpg', cat: 'video', ratio: 1.25 },
  { order:  2, src: 'images/frames/Untitled-1922.jpg', cat: 'video', ratio: 1.25 },
  { order:  3, src: 'images/frames/Untitled-1923.jpg', cat: 'video', ratio: 1.25 },
  { order:  4, src: 'images/frames/Untitled-1924.jpg', cat: 'video', ratio: 1.25 },
  { order:  5, src: 'images/frames/Untitled-1925.jpg', cat: 'video', ratio: 1.25 },
  { order:  6, src: 'images/frames/Untitled-1926.jpg', cat: 'video', ratio: 1.25 },
  { order:  7, src: 'images/frames/Untitled-1927.jpg', cat: 'video', ratio: 1.25 },
  { order:  8, src: 'images/frames/Untitled-1928.jpg', cat: 'video', ratio: 1.25 },

  // ── ΑΤΑΞΙΝΟΜΗΤΑ (αποφάσισε κατηγορία αργότερα) ──
  // { src: 'images/A7V05223.jpg', cat: '???', ratio: 1.50 },
  // { src: 'images/A7V05363.jpg', cat: '???', ratio: 0.67 },
  // { src: 'images/A7V07487.jpg', cat: '???', ratio: 0.67 },
  // { src: 'images/A7V08489.jpg', cat: '???', ratio: 1.50 },
];

// ── GRID BUILD ──────────────────────────────────────────────────────────────
// size:     'full' (πλήρες πλάτος) | 'hero' (2/3) | 'large' (μισό) | 'small' (1/3)
// priority: 'first' (εμφανίζεται πρώτη) | 'last' (εμφανίζεται τελευταία) | undefined
//
// Παράδειγμα για hero shot:
//   { src: '...', cat: 'couples', ratio: 1.50, size: 'hero', priority: 'first' }

const grid = document.getElementById('grid');
let activeFilter = 'portrait';
let lightboxIndex = 0;

function sortedPhotos(list) {
  return [...list].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function defaultSize(photo) {
  if (photo.size) return photo.size;
  return photo.ratio < 0.85 ? 'hero' : 'large';
}

function buildGrid() {
  grid.innerHTML = '';
  const filter = activeFilter;
  const list = filter === 'all' ? photos : photos.filter(p => p.cat === filter);
  const ordered = sortedPhotos(list);

  if (ordered.length === 0) {
    grid.innerHTML = '<p style="color:var(--muted);font-size:12px;letter-spacing:0.1em;grid-column:span 12;padding:40px 0;">No photos in this category yet.</p>';
    return;
  }

  ordered.forEach((photo, i) => {
    const globalIndex = photos.indexOf(photo);
    const size = defaultSize(photo);
    const ratio = photo.ratio || 1;

    const item = document.createElement('div');
    item.className = 'grid-item';
    item.dataset.cat = photo.cat;
    item.dataset.size = size;
    item.dataset.index = globalIndex;

    item.innerHTML = `
      <div style="position:relative; padding-top:${(ratio * 100).toFixed(1)}%; overflow:hidden;">
        <img src="${photo.src}" alt="${photo.caption || ''}"
             style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;"
             loading="lazy">
      </div>
      <div class="grid-item-overlay">
        <span class="grid-item-caption">${photo.caption || ''}</span>
      </div>`;

    item.addEventListener('click', () => openLightbox(globalIndex));
    grid.appendChild(item);
  });
}

// ── FILTER ──────────────────────────────────────────────────────────────────
function applyFilter(filter) {
  activeFilter = filter;
  grid.classList.add('fading');
  setTimeout(() => {
    buildGrid();
    observeItems();
    grid.classList.remove('fading');
  }, 200);
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

// ── LIGHTBOX ────────────────────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');

function visiblePhotos() {
  return photos.filter(p => activeFilter === 'all' || p.cat === activeFilter);
}

function openLightbox(globalIndex) {
  const photo = photos[globalIndex];
  lbImg.src = photo.src;
  lbCaption.textContent = photo.caption || '';
  lightboxIndex = visiblePhotos().findIndex(p => p.src === photo.src);
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lbImg.src = '';
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

function navigateLightbox(dir) {
  const visible = visiblePhotos();
  if (visible.length === 0) return;
  lightboxIndex = (lightboxIndex + dir + visible.length) % visible.length;
  lbImg.src = visible[lightboxIndex].src;
  lbCaption.textContent = visible[lightboxIndex].caption || '';
}

document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', () => navigateLightbox(-1));
document.getElementById('lb-next').addEventListener('click', () => navigateLightbox(1));

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// ── SCROLL REVEAL ───────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function observeItems() {
  document.querySelectorAll('.grid-item').forEach(item => {
    revealObserver.observe(item);
  });
}

// ── LANGUAGE TOGGLE ─────────────────────────────────────────────────────────
const translations = {
  en: {
    'nav.work':      'Work',
    'nav.selected':  'Selected',
    'nav.about':     'About',
    'nav.contact':   'Contact',

    'hero.roles':    'Photographer &nbsp;·&nbsp; Filmmaker &nbsp;·&nbsp; Visual Artist',
    'hero.location': 'Paris &nbsp;·&nbsp; Available Worldwide',

    'filter.all':     'All',
    'filter.product': 'Product &amp; Jewelry',
    'filter.portrait':'Portrait',
    'filter.couples': 'Couples',
    'filter.events':  'Events',
    'filter.video':   'Video',

    'cs.label':   'Selected Work',
    'cs.link':    'View Work',
    'cs.1.title': 'Social Media<br>&amp; Content',
    'cs.1.desc':  'Photography and video production tailored for social platforms — from single-image posts to full reels and campaign content. Visual storytelling built around brand identity, aesthetic consistency and engagement.',
    'cs.2.title': 'Events<br>&amp; Conferences',
    'cs.2.desc':  'Documentary and editorial coverage of intimate moments — couples sessions, private events and gatherings. A quiet, unposed approach that captures atmosphere and genuine emotion.',
    'cs.3.title': 'E-Commerce<br>&amp; Product',
    'cs.3.desc':  'Clean, precise product photography for e-commerce catalogues, brand lookbooks and online retail. From packshots to styled lifestyle imagery — always delivered ready for web and print.',
    'cs.4.title': 'Couples<br>&amp; Portraits',
    'cs.4.desc':  'Intimate couple sessions and personal portraits — natural light, genuine connection and a quiet editorial eye. Every frame built around the person, not the pose.',

    'about.label': 'About',
    'about.p1':    'Photographer and filmmaker with 5+ years of professional experience, based between Greece and Paris. My work spans portrait, lifestyle, editorial, e-commerce product photography, event coverage and commercial video — always with a cinematic, considered approach to light and atmosphere.',
    'about.p2':    'I collaborate with brands, agencies and individuals across social media content, catalogue shoots, corporate film and personal projects. Comfortable with the full pipeline from shoot to final delivery — Lightroom, Photoshop, DaVinci Resolve.',
    'about.btn':   'Get in touch',

    'contact.label':   'Contact',
    'contact.heading': "Let's create together.",
    'contact.sub':     "If you care about the quality of your visual presence — a brand, an agency, or a project that deserves to be seen properly — I'd like to hear from you.",
    'contact.email':   'Send an Email',
    'contact.cv':      'Download CV',
    'contact.remote':  'Remote-friendly',
  },
  fr: {
    'nav.work':      'Travaux',
    'nav.selected':  'Sélection',
    'nav.about':     'À propos',
    'nav.contact':   'Contact',

    'hero.roles':    'Photographe &nbsp;·&nbsp; Cinéaste &nbsp;·&nbsp; Visual Artist',
    'hero.location': 'Paris &nbsp;·&nbsp; Disponible partout',

    'filter.all':     'Tout',
    'filter.product': 'Produit &amp; Bijoux',
    'filter.portrait':'Portrait',
    'filter.couples': 'Couples',
    'filter.events':  'Événements',
    'filter.video':   'Vidéo',

    'cs.label':   'Travaux sélectionnés',
    'cs.link':    'Voir les travaux',
    'cs.1.title': 'Réseaux sociaux<br>&amp; Contenu',
    'cs.1.desc':  'Photographie et production vidéo adaptées aux réseaux sociaux — des publications simples aux reels et contenus de campagne. Une narration visuelle construite autour de l\'identité de marque, de la cohérence esthétique et de l\'engagement.',
    'cs.2.title': 'Événements<br>&amp; Conférences',
    'cs.2.desc':  'Couverture documentaire et éditoriale — séances en couple, événements privés et rassemblements. Une approche discrète et sans pose qui capture l\'atmosphère et l\'émotion authentique.',
    'cs.3.title': 'E-Commerce<br>&amp; Produit',
    'cs.3.desc':  'Photographie produit précise et soignée pour des catalogues e-commerce, des lookbooks de marque et la vente en ligne. Du packshot aux visuels lifestyle — toujours livrés prêts pour le web et l\'impression.',
    'cs.4.title': 'Couples<br>&amp; Portraits',
    'cs.4.desc':  'Séances en couple et portraits personnels — lumière naturelle, connexion authentique et regard éditorial. Chaque image construite autour de la personne, pas de la pose.',

    'about.label': 'À propos',
    'about.p1':    'Photographe et vidéaste avec plus de 5 ans d\'expérience professionnelle, basé entre la Grèce et Paris. Mon travail couvre le portrait, le lifestyle, l\'éditorial, la photographie de produits e-commerce, la couverture d\'événements et la vidéo commerciale — toujours avec une approche cinématographique de la lumière et de l\'atmosphère.',
    'about.p2':    'Je collabore avec des marques, des agences et des particuliers pour du contenu réseaux sociaux, des shootings catalogue, du film corporate et des projets personnels. À l\'aise avec l\'ensemble du processus, de la prise de vue à la livraison finale — Lightroom, Photoshop, DaVinci Resolve.',
    'about.btn':   'Me contacter',

    'contact.label':   'Contact',
    'contact.heading': 'Créons ensemble.',
    'contact.sub':     'Si la qualité de votre présence visuelle compte autant pour vous qu\'elle compte pour moi — une marque, une agence, ou un projet qui mérite d\'être vu — je serais ravi d\'échanger avec vous.',
    'contact.email':   'Envoyer un email',
    'contact.cv':      'Télécharger le CV',
    'contact.remote':  'Télétravail possible',
  }
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── CV DROPDOWN ─────────────────────────────────────────────────────────────
const cvBtn  = document.getElementById('cv-btn');
const cvMenu = document.getElementById('cv-menu');

if (cvBtn && cvMenu) {
  cvBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cvMenu.classList.toggle('open');
  });
  document.addEventListener('click', () => cvMenu.classList.remove('open'));
}

// ── NAV SCROLL EFFECT ───────────────────────────────────────────────────────
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER MENU ──────────────────────────────────────────────────────────
const burger = document.getElementById('nav-burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});


// ── INIT ────────────────────────────────────────────────────────────────────
buildGrid();
observeItems();

// Case study items scroll reveal
const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 120);
      serviceObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  serviceObserver.observe(el);
});
