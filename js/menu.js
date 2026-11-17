// =====================================================================
// SUD SPORT — CAFÉTÉRIA MENU
// =====================================================================

// Tags: popular | protein | veg
const MENU = [
  {
    id: 'coffee',
    title: 'Hot Coffee',
    note: '100% Arabica house blend',
    items: [
      { name: 'Espresso', price: '$2.00' },
      { name: 'Double Espresso', price: '$3.50', tags: ['popular'] },
      { name: 'Americano', price: '$3.00' },
      { name: 'Cappuccino', price: '$3.50' },
      { name: 'Café Latte', price: '$3.75' },
      { name: 'Flat White', price: '$3.75' },
      { name: 'Turkish Coffee', price: '$2.50', desc: 'With cardamom' },
      { name: 'Hot Chocolate', price: '$3.50', desc: 'Belgian chocolate, steamed milk' }
    ]
  },
  {
    id: 'iced',
    title: 'Iced Drinks',
    note: 'Made over fresh ice',
    items: [
      { name: 'Iced Spanish Latte', price: '$3.50', desc: 'Espresso, condensed milk, cold milk', tags: ['popular'] },
      { name: 'Iced Americano', price: '$3.00' },
      { name: 'Iced Caramel Macchiato', price: '$4.25' },
      { name: 'Iced Mocha', price: '$4.25' },
      { name: 'Iced Matcha Latte', price: '$4.50' },
      { name: 'Iced Tea', price: '$2.50', desc: 'Peach or lemon' }
    ]
  },
  {
    id: 'shakes',
    title: 'Shakes & Smoothies',
    note: 'Post-match recovery',
    items: [
      { name: 'Sud Sport Recovery Shake', price: '$6.00', desc: '30g whey, banana, peanut butter, oats, chocolate', tags: ['popular', 'protein'] },
      { name: 'Tropical Energizer', price: '$4.50', desc: 'Mango, passion fruit, mint, ginger', tags: ['veg'] },
      { name: 'Fresh Detox', price: '$4.50', desc: 'Apple, spinach, cucumber, lemon, ginger', tags: ['veg'] },
      { name: 'Berry Blast', price: '$4.50', desc: 'Strawberry, blueberry, banana, yogurt', tags: ['veg'] },
      { name: 'Oreo Milkshake', price: '$5.00', tags: ['veg'] },
      { name: 'Classic Milkshake', price: '$4.50', desc: 'Vanilla, chocolate or strawberry', tags: ['veg'] }
    ]
  },
  {
    id: 'juices',
    title: 'Juices & Cold Drinks',
    note: 'Freshly squeezed daily',
    items: [
      { name: 'Fresh Orange Juice', price: '$3.50', tags: ['veg'] },
      { name: 'Lemonade with Mint', price: '$3.00', tags: ['popular', 'veg'] },
      { name: 'Carrot, Orange & Ginger', price: '$3.75', tags: ['veg'] },
      { name: 'Isotonic Sports Drink', price: '$2.50' },
      { name: 'Energy Drink', price: '$3.00' },
      { name: 'Soft Drinks', price: '$1.50' },
      { name: 'Mineral Water', price: '$1.00', desc: '500ml' }
    ]
  },
  {
    id: 'paninis',
    title: 'Paninis & Wraps',
    note: 'Served warm courtside or in the lounge',
    items: [
      { name: 'Grilled Halloumi Pesto Panini', price: '$6.50', desc: 'Halloumi, basil pesto, tomato, rocket', tags: ['popular', 'veg'] },
      { name: 'Turkey Club Panini', price: '$6.50', desc: 'Smoked turkey, cheddar, lettuce, tomato' },
      { name: 'Chicken Caesar Wrap', price: '$7.00', desc: 'Grilled chicken, romaine, parmesan, caesar dressing', tags: ['protein'] },
      { name: 'Tuna Melt', price: '$6.00', desc: 'Tuna, mozzarella, sweetcorn' },
      { name: 'Labneh & Zaatar Wrap', price: '$4.00', desc: 'Labneh, mint, cucumber, olives', tags: ['veg'] },
      { name: 'Cheese Manouche', price: '$3.50', tags: ['veg'] },
      { name: 'Zaatar Manouche', price: '$2.50', tags: ['veg'] }
    ]
  },
  {
    id: 'snacks',
    title: 'Snacks',
    note: 'Perfect for sharing',
    items: [
      { name: 'Chicken Tenders', price: '$6.50', desc: 'With fries and honey mustard', tags: ['protein'] },
      { name: 'Loaded Fries', price: '$5.00', desc: 'Cheese sauce, jalapeños, spring onion', tags: ['popular'] },
      { name: 'Nachos', price: '$5.50', desc: 'Cheese, salsa, sour cream', tags: ['veg'] },
      { name: 'French Fries', price: '$3.00', tags: ['veg'] },
      { name: 'Protein Bar', price: '$3.00', tags: ['protein'] },
      { name: 'Mixed Nuts', price: '$2.50', tags: ['veg'] }
    ]
  },
  {
    id: 'sweets',
    title: 'Crêpes & Sweets',
    note: 'Made to order',
    items: [
      { name: 'Nutella Crêpe', price: '$5.00', tags: ['popular', 'veg'] },
      { name: 'Nutella & Banana Crêpe', price: '$5.50', tags: ['veg'] },
      { name: 'Lotus Crêpe', price: '$5.50', tags: ['veg'] },
      { name: 'Cheesecake Slice', price: '$4.50', tags: ['veg'] },
      { name: 'Chocolate Brownie', price: '$3.50', tags: ['veg'] },
      { name: 'Croissant', price: '$2.50', desc: 'Butter, zaatar or cheese', tags: ['veg'] }
    ]
  },
  {
    id: 'shisha',
    title: 'Shisha',
    note: 'Terrace only',
    items: [
      { name: 'Classic Two Apples', price: '$10.00' },
      { name: 'Lemon & Mint', price: '$10.00' },
      { name: 'Grape & Mint', price: '$10.00' },
      { name: 'Premium Blend', price: '$14.00', desc: 'Ask for today\'s blend' }
    ]
  }
];

const TAG_LABELS = {
  popular: 'Popular',
  protein: 'High Protein',
  veg: 'Vegetarian'
};

// --- HELPERS ---

const $ = (id) => document.getElementById(id);

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );

// Lowercase and strip accents so "crepe" finds "Crêpe"
const normalize = (str) =>
  str.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// =====================================================================
// RENDER
// =====================================================================

function buildChips() {
  $('catChips').innerHTML = MENU.map(
    (cat) => `<a href="#cat-${cat.id}" class="cat-chip" data-cat="${cat.id}">${escapeHtml(cat.title)}</a>`
  ).join('');
}

function buildSections() {
  $('menuSections').innerHTML = MENU.map(
    (cat, i) => `
      <section class="menu-cat" id="cat-${cat.id}" data-cat="${cat.id}">
        <div class="menu-cat__head">
          <span class="menu-cat__index">/${String(i + 1).padStart(2, '0')}</span>
          <h2 class="menu-cat__title">${escapeHtml(cat.title)}</h2>
          <span class="menu-cat__note">${escapeHtml(cat.note)}</span>
        </div>
        <ul class="menu-items">
          ${cat.items.map(renderItem).join('')}
        </ul>
      </section>`
  ).join('');
}

function renderItem(item) {
  const tags = (item.tags || [])
    .map((t) => `<span class="tag tag--${t}">${TAG_LABELS[t]}</span>`)
    .join('');
  const search = normalize(`${item.name} ${item.desc || ''}`);

  return `
    <li class="menu-item-row" data-search="${escapeHtml(search)}">
      <div class="menu-item-row__top">
        <span class="menu-item-row__name">${escapeHtml(item.name)}</span>
        <span class="menu-item-row__leader" aria-hidden="true"></span>
        <span class="menu-item-row__price">${escapeHtml(item.price)}</span>
      </div>
      ${item.desc ? `<p class="menu-item-row__desc">${escapeHtml(item.desc)}</p>` : ''}
      ${tags ? `<div class="menu-item-row__tags">${tags}</div>` : ''}
    </li>`;
}

// =====================================================================
// ACTIVE CATEGORY (SCROLL SPY)
// =====================================================================

function setActiveChip(id) {
  const chips = $('catChips');
  chips.querySelectorAll('.cat-chip').forEach((chip) => {
    const active = chip.dataset.cat === id;
    chip.classList.toggle('is-active', active);
    if (active) {
      // Keep the active chip visible inside the horizontal bar without moving the page
      const left = chip.offsetLeft - (chips.clientWidth - chip.offsetWidth) / 2;
      chips.scrollTo({ left, behavior: 'smooth' });
    }
  });
}

function initScrollSpy() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveChip(entry.target.dataset.cat);
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  document.querySelectorAll('.menu-cat').forEach((section) => observer.observe(section));
  setActiveChip(MENU[0].id);
}

// =====================================================================
// SEARCH
// =====================================================================

function applySearch(query) {
  const q = normalize(query.trim());
  let anyVisible = false;

  document.querySelectorAll('.menu-cat').forEach((section) => {
    let visibleInSection = 0;
    section.querySelectorAll('.menu-item-row').forEach((row) => {
      const match = !q || row.dataset.search.includes(q);
      row.hidden = !match;
      if (match) visibleInSection++;
    });
    section.hidden = visibleInSection === 0;
    if (visibleInSection) anyVisible = true;

    const chip = document.querySelector(`.cat-chip[data-cat="${section.dataset.cat}"]`);
    if (chip) chip.classList.toggle('is-disabled', visibleInSection === 0);
  });

  $('menuEmpty').hidden = anyVisible;
  $('searchClear').hidden = !q;
}

// =====================================================================
// INIT
// =====================================================================

// Fill the gap behind the floating nav once the category bar sticks
function initStickyBar() {
  const bar = $('catBar');
  const update = () => {
    const stickTop = parseFloat(getComputedStyle(bar).top);
    bar.classList.toggle('is-stuck', bar.getBoundingClientRect().top <= stickTop + 1);
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

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

document.addEventListener('DOMContentLoaded', () => {
  buildChips();
  buildSections();
  initScrollSpy();
  initStickyBar();
  initCursor();

  $('menuSearch').addEventListener('input', (e) => applySearch(e.target.value));
  $('searchClear').addEventListener('click', () => {
    $('menuSearch').value = '';
    applySearch('');
    $('menuSearch').focus();
  });
});
