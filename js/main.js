// =====================================================================
// SUD SPORT — SUD LIBAN
// =====================================================================

// --- OFFICIAL 4-PILLAR SUD SPORT CONTENT & PHOTOGRAPHY ---

const HERO_REEL = [
  {
    id: '01',
    pillar: 'PADEL',
    label: 'PANORAMIC PADEL ARENA',
    headline: 'BLUE COURT PRECISION.',
    sub: 'Championship blue Mondo turf, frameless glass & floodlit night rallies in Sud Liban.',
    accent: '#3B93D4',
    image: 'hero-padel'
  },
  {
    id: '02',
    pillar: 'MINI FOOTBALL',
    shortPillar: 'FOOTBALL',
    label: 'FLOODLIT TURF STADIUM',
    headline: 'UNDER THE LIGHTS.',
    sub: 'High-density emerald FIFA turf for intense 5v5 and 6v6 night derbies.',
    accent: '#008B3A',
    image: 'hero-football'
  },
  {
    id: '03',
    pillar: 'GAMING LOUNGE',
    shortPillar: 'GAMING',
    label: 'PS5 PRO & VIP SQUAD BOOTHS',
    headline: 'NEXT-GEN SQUADS.',
    sub: '4K 120Hz OLED lounges, EA FC 26 showdowns & acoustically treated squad rooms.',
    accent: '#3B93D4',
    image: 'hero-gaming'
  },
  {
    id: '04',
    pillar: 'CAFÉTÉRIA',
    label: 'ESPRESSO, SMOOTHIES & TERRACE',
    headline: 'FUEL & ESPRESSO.',
    sub: 'Specialty iced lattes, protein recovery shakes & court-view social seating.',
    accent: '#008B3A',
    image: 'hero-cafe'
  }
];

const ZONES = [
  {
    id: 'padel',
    index: '01',
    title: 'PADEL',
    subtitle: 'Panoramic Blue Courts',
    ratePreview: '$36 / 90m',
    colorHex: '#3B93D4',
    borderColor: 'rgba(59, 147, 212, 0.5)',
    motif: 'PADEL',
    image: 'zone-padel',
    rates: [
      { name: 'Padel Court — Off-Peak (08:00 – 17:00)', price: '$32', meta: '90 Mins • 4 Players ($8/player)' },
      { name: 'Padel Court — Prime Floodlit (17:00 – 02:00)', price: '$40', meta: '90 Mins • 4 Players ($10/player)' },
      { name: 'Pro Carbon Racket Rental', price: '$5', meta: 'Bullpadel Vertex / Babolat Viper' },
      { name: 'New Pressurized Ball Can (3 Balls)', price: '$8', meta: 'Head Pro S / Bullpadel' }
    ]
  },
  {
    id: 'football',
    index: '02',
    title: 'MINI FOOTBALL',
    shortTitle: 'FOOTBALL',
    subtitle: '5v5 & 6v6 Emerald Pitch',
    ratePreview: '$60 / 90m',
    colorHex: '#008B3A',
    borderColor: 'rgba(0, 139, 58, 0.6)',
    motif: 'FOOTBALL',
    image: 'zone-football',
    rates: [
      { name: '5v5 Mini Football Pitch (Daytime)', price: '$50', meta: '90 Mins • Up to 10 Players' },
      { name: '5v5 / 6v6 Floodlit Night Match', price: '$65', meta: '90 Mins • Includes Bibs & Match Ball' },
      { name: 'Weekly League / Fixed Squad Slot', price: 'Custom', meta: 'Priority Weekly Evening Reservation' },
      { name: 'Youth Academy & Birthday Pitch Buyout', price: 'On Request', meta: 'Includes Coach & Cafétéria Package' }
    ]
  },
  {
    id: 'gaming',
    index: '03',
    title: 'GAMING LOUNGE',
    shortTitle: 'GAMING',
    subtitle: 'PS5 Pro & Squad Booths',
    ratePreview: 'From $6 / hr',
    colorHex: '#3B93D4',
    borderColor: 'rgba(59, 147, 212, 0.5)',
    motif: 'GAMING',
    image: 'zone-gaming',
    rates: [
      { name: '1v1 Dual PS5 Pro Station', price: '$6 / hr', meta: '4K 120Hz OLED Display • 2 Players' },
      { name: '2v2 Squad Lounge Booth (4 Players)', price: '$12 / hr', meta: 'EA FC 26, NBA 2K, Tekken 8, CoD' },
      { name: 'Private VIP 85" OLED Room (Up to 8 Guests)', price: '$22 / hr', meta: 'Soundproofed • Champions League & Gaming' },
      { name: 'Friday Night EA FC Tournament Entry', price: '$10', meta: 'Cash & Court Credit Prizes' }
    ]
  },
  {
    id: 'cafeteria',
    index: '04',
    title: 'CAFÉTÉRIA',
    subtitle: 'Espresso, Shakes & Snacks',
    ratePreview: '08:00 – 02:00',
    colorHex: '#008B3A',
    borderColor: 'rgba(0, 139, 58, 0.6)',
    motif: 'CAFE',
    menuUrl: 'menu.html',
    image: 'zone-cafe',
    rates: [
      { name: 'Double Espresso / Iced Spanish Latte', price: '$3.50', meta: '100% Arabica House Blend' },
      { name: 'Sud Sport Recovery Shake (30g Whey)', price: '$6.00', meta: 'Banana, Peanut Butter, Oats, Chocolate' },
      { name: 'Fresh Detox & Tropical Energizer', price: '$4.50', meta: 'Mango, Passion Fruit, Mint, Ginger' },
      { name: 'Grilled Halloumi Pesto or Turkey Club Panini', price: '$6.50', meta: 'Served Warm Courtside or in Lounge' }
    ]
  }
];

const FILMSTRIP_MOMENTS = [
  {
    title: 'Blue Center Court',
    tag: '01 • PADEL',
    accent: '#3B93D4',
    img: 'film-padel'
  },
  {
    title: 'Night Derby Turf',
    tag: '02 • MINI FOOTBALL',
    accent: '#008B3A',
    img: 'film-football'
  },
  {
    title: 'VIP PS5 Pro Booths',
    tag: '03 • GAMING LOUNGE',
    accent: '#3B93D4',
    img: 'film-gaming'
  },
  {
    title: 'Iced Latte & Recovery',
    tag: '04 • CAFÉTÉRIA',
    accent: '#008B3A',
    img: 'film-latte'
  },
  {
    title: 'Post-Match Smoothies',
    tag: '04 • CAFÉTÉRIA',
    accent: '#008B3A',
    img: 'film-smoothies'
  }
];

// --- STATE ---

const state = {
  heroIdx: 0,
  activeZone: 0, // 0..3 for the 4 SUD SPORT pillars
  rateTab: 'padel'
};

// --- HELPERS ---

const $ = (id) => document.getElementById(id);

const icon = (name, cls = '') =>
  `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

const emblem = (cls = '') =>
  `<svg class="emblem ${cls}" role="img" aria-label="SUD SPORT Official Crest"><use href="#emblem"/></svg>`;

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );

// Photos live in images/ as <name>-<width>.webp in a few widths;
// the browser downloads only the size the screen needs.
const IMAGE_WIDTHS = {
  hero: [960, 1280, 1920],
  zone: [700, 1200],
  film: [480, 800]
};

const HERO_SIZES = '100vw';
const ZONE_SIZES = '(min-width: 1024px) 60vw, 100vw';
const FILM_SIZES = '(min-width: 640px) 360px, 78vw';

function imageSet(name, kind) {
  const widths = IMAGE_WIDTHS[kind];
  return {
    src: `images/${name}-${widths[0]}.webp`,
    srcset: widths.map((w) => `images/${name}-${w}.webp ${w}w`).join(', ')
  };
}

// Re-trigger a CSS entrance animation on an element
function replayAnimation(el, cls) {
  el.classList.remove(cls);
  void el.offsetWidth;
  el.classList.add(cls);
}

// =====================================================================
// HERO REEL
// =====================================================================

let heroTimer = null;

function buildReelNav() {
  $('reelNav').innerHTML = HERO_REEL.map(
    (item, idx) => `
      <button class="reel-btn" data-hero-index="${idx}" style="--accent: ${item.accent}">
        <div class="reel-btn__label">
          <span class="reel-btn__num">${item.id}</span>
          <span class="reel-btn__name">${escapeHtml(item.shortPillar || item.pillar)}</span>
        </div>
        <div class="reel-btn__track"><div class="reel-btn__fill"></div></div>
      </button>`
  ).join('');

  $('reelNav').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-hero-index]');
    if (!btn) return;
    setHero(Number(btn.dataset.heroIndex));
    startHeroTimer();
  });
}

function setHero(idx) {
  state.heroIdx = idx;
  const hero = HERO_REEL[idx];

  // Ken Burns photography layer (fresh <img> restarts the animation)
  const img = imageSet(hero.image, 'hero');
  $('heroMedia').innerHTML = `
    <img src="${img.src}" srcset="${img.srcset}" sizes="${HERO_SIZES}"
      alt="${escapeHtml(hero.headline)}" class="hero__img" fetchpriority="high" decoding="async" />
    <div class="hero__shade"></div>
    <div class="hero__vignette"></div>`;

  // Watermark geometry matching active slide
  $('heroWatermark').innerHTML =
    hero.pillar === 'GAMING LOUNGE'
      ? '<div class="hero__symbols"><span>△</span><span>○</span><span>✕</span><span>□</span></div>'
      : emblem('hero__emblem');

  $('heroDot').style.backgroundColor = hero.accent;
  $('heroId').textContent = hero.id;
  $('heroLabel').textContent = hero.label;
  $('heroTitle').textContent = hero.headline;
  $('heroSub').textContent = hero.sub;
  replayAnimation($('heroContent'), 'animate-fade-up');

  document.querySelectorAll('.reel-btn').forEach((btn, i) => {
    btn.classList.toggle('is-active', i === idx);
  });
}

// Resolves when the image has finished (or failed) loading
function loadImage(set, sizes) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.sizes = sizes;
    img.srcset = set.srcset;
    img.src = set.src;
  });
}

// Load order: first hero photo, then the other three hero slides,
// and only then the photo strip further down the page
async function loadHeroSlidesThenStrip() {
  const [first, ...rest] = HERO_REEL.map((hero) => imageSet(hero.image, 'hero'));
  await loadImage(first, HERO_SIZES);
  await Promise.all(rest.map((set) => loadImage(set, HERO_SIZES)));
  releaseFilmstripImages();
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => {
    setHero((state.heroIdx + 1) % HERO_REEL.length);
  }, 6000);
}

// =====================================================================
// FOUR ZONES ACCORDION
// =====================================================================

function buildZones() {
  const list = $('zonesList');

  list.innerHTML = ZONES.map((zone, idx) => {
    const img = imageSet(zone.image, 'zone');
    const btnText = zone.colorHex === '#008B3A' ? '#FFFFFF' : '#050C1A';
    return `
      <div class="zone" data-zone-index="${idx}" style="--zone-color: ${zone.colorHex}; --zone-border: ${zone.borderColor}">
        <img src="${img.src}" srcset="${img.srcset}" sizes="${ZONE_SIZES}"
          alt="${escapeHtml(zone.title)}" class="zone__img" loading="lazy" decoding="async" />
        <div class="zone__shade"></div>
        <div class="zone__ribbon"></div>
        ${zone.motif === 'GAMING' ? '<div class="zone__symbols">△ ○ ✕ □</div>' : ''}

        <div class="zone__body">
          <div class="zone__top">
            <span class="zone__index">/${zone.index}</span>
            <span class="zone__rate">${escapeHtml(zone.ratePreview)}</span>
          </div>

          <div class="zone__bottom">
            <div>
              <p class="zone__subtitle">${escapeHtml(zone.subtitle)}</p>
              <h3 class="zone__title">${escapeHtml(zone.title)}</h3>
            </div>

            <div class="zone__details">
              <div class="zone__actions">
                <button class="zone__book" style="color: ${btnText}">
                  ${icon('message', 'icon--xs')}
                  <span>Book ${escapeHtml(zone.title)}</span>
                </button>
                ${
                  zone.menuUrl
                    ? `<a href="${zone.menuUrl}" class="zone__rates-link">Full Menu</a>`
                    : `<a href="#rates" class="zone__rates-link" data-rate="${zone.id}">View Rates</a>`
                }
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  list.querySelectorAll('.zone').forEach((card) => {
    const idx = Number(card.dataset.zoneIndex);
    card.addEventListener('mouseenter', () => setActiveZone(idx));
    card.addEventListener('click', () => setActiveZone(idx));
  });
}

function setActiveZone(idx) {
  state.activeZone = idx;
  document.querySelectorAll('.zone').forEach((card, i) => {
    card.classList.toggle('is-active', i === idx);
  });
}

// =====================================================================
// FILMSTRIP
// =====================================================================

function buildFilmstrip() {
  $('filmstrip').innerHTML = FILMSTRIP_MOMENTS.map((item) => {
    const img = imageSet(item.img, 'film');
    return `
      <div class="film">
        <img data-src="${img.src}" data-srcset="${img.srcset}" sizes="${FILM_SIZES}"
          alt="${escapeHtml(item.title)}" class="film__img" loading="lazy" decoding="async" draggable="false" />
        <div class="film__overlay">
          <div>
            <span class="film__tag" style="color: ${item.accent}">${escapeHtml(item.tag)}</span>
            <h4 class="film__title">${escapeHtml(item.title)}</h4>
          </div>
          <span class="film__arrow">${icon('arrow-up-right')}</span>
        </div>
      </div>`;
  }).join('');
}

// Strip photos are held back (data-src) until the hero slides have loaded
function releaseFilmstripImages() {
  $('filmstrip').querySelectorAll('img[data-src]').forEach((img) => {
    img.srcset = img.dataset.srcset;
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.removeAttribute('data-srcset');
  });
}

// Desktop: drag the strip with the mouse, or step through it with the arrows
function initFilmstripControls() {
  const strip = $('filmstrip');
  const prev = $('stripPrev');
  const next = $('stripNext');

  const step = () => {
    const card = strip.querySelector('.film');
    const gap = parseFloat(getComputedStyle(strip).columnGap) || 0;
    return card ? card.offsetWidth + gap : strip.clientWidth;
  };

  const updateArrows = () => {
    const max = strip.scrollWidth - strip.clientWidth;
    prev.disabled = strip.scrollLeft <= 2;
    next.disabled = strip.scrollLeft >= max - 2;
  };

  prev.addEventListener('click', () => strip.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => strip.scrollBy({ left: step(), behavior: 'smooth' }));
  strip.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();

  // Mouse drag (touch devices already swipe natively)
  let startX = 0;
  let startScroll = 0;
  let dragging = false;

  strip.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    dragging = true;
    startX = e.clientX;
    startScroll = strip.scrollLeft;
    strip.classList.add('is-dragging');
    strip.setPointerCapture(e.pointerId);
  });

  strip.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    strip.scrollLeft = startScroll - (e.clientX - startX);
  });

  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    strip.releasePointerCapture(e.pointerId);
    // Re-enabling snap lets the strip settle on the nearest card
    strip.classList.remove('is-dragging');
  };
  strip.addEventListener('pointerup', endDrag);
  strip.addEventListener('pointercancel', endDrag);
}

// =====================================================================
// RATES
// =====================================================================

function buildRateTabs() {
  $('rateTabs').innerHTML = ZONES.map(
    (z) => `<button class="rate-tab" data-rate="${z.id}">${escapeHtml(z.shortTitle || z.title)}</button>`
  ).join('');
}

function setRateTab(id) {
  state.rateTab = id;
  const zone = ZONES.find((z) => z.id === id) || ZONES[0];

  document.querySelectorAll('.rate-tab').forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.rate === zone.id);
  });

  $('rateList').innerHTML = zone.rates
    .map(
      (r) => `
      <div class="rate-row">
        <div>
          <p class="rate-row__name">${escapeHtml(r.name)}</p>
          <p class="rate-row__meta">${escapeHtml(r.meta)}</p>
        </div>
        <span class="rate-row__price">${escapeHtml(r.price)}</span>
      </div>`
    )
    .join('');

  $('rateReserveLabel').textContent = `Reserve ${zone.title}`;
  $('rateMenuLink').hidden = !zone.menuUrl;
}

// =====================================================================
// MENU
// =====================================================================

function openMenu() {
  $('menu').hidden = false;
}

function closeMenu() {
  $('menu').hidden = true;
}

// =====================================================================
// CURSOR FOLLOWER
// =====================================================================

function initCursor() {
  const cursor = $('cursor');
  window.addEventListener(
    'mousemove',
    (e) => {
      cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
    },
    { passive: true }
  );
}

// =====================================================================
// EVENTS
// =====================================================================

function bindEvents() {
  document.addEventListener('click', (e) => {
    const rateTrigger = e.target.closest('[data-rate]');
    if (rateTrigger) setRateTab(rateTrigger.dataset.rate);
  });

  $('menuOpenBtn').addEventListener('click', openMenu);
  $('menuCloseBtn').addEventListener('click', closeMenu);

  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', () => {
      if (item.dataset.zoneIndex !== undefined) setActiveZone(Number(item.dataset.zoneIndex));
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeMenu();
  });
}

// =====================================================================
// INIT
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
  // The loading screen fades itself out in CSS; drop it from the page afterwards
  const loader = $('loader');
  loader.addEventListener('animationend', (e) => {
    if (e.target === loader && e.animationName === 'loaderOut') loader.remove();
  });

  buildReelNav();
  setHero(0);
  startHeroTimer();
  loadHeroSlidesThenStrip();

  buildZones();
  setActiveZone(0);

  buildFilmstrip();
  initFilmstripControls();

  buildRateTabs();
  setRateTab(state.rateTab);

  initCursor();
  bindEvents();
});
