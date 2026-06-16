/* =========================
SERVICE DATA
========================= */
const serviceData = {
  extensions:{
    icon:'fa-solid fa-wand-magic-sparkles',
    title:'Hair Extensions',
    desc:'Premium extension solutions using 100% Remy human hair, applied by certified specialists trained in tape-in, weft, and micro-link techniques.',
    benefits:['Volume and length instantly','100% Remy human hair','Colour-matched to perfection','Up to 3–6 months longevity','Damage-free application methods']
  },
  haircut:{
    icon:'fa-solid fa-scissors',
    title:'Haircuts',
    desc:'Every cut begins with a thorough consultation to understand your lifestyle, face shape, and aesthetic goals. Precision is our standard.',
    benefits:['In-depth personal consultation','Precision cutting techniques','Styling and finish included','Suitable for all hair types','Men, women, and children']
  },
  styling:{
    icon:'fa-solid fa-spa',
    title:'Hair Styling',
    desc:'From soft romantic waves to bold glamorous updos, our styling team transforms your hair for any occasion — weddings, events, or a night out.',
    benefits:['Event and bridal styling','Long-lasting hold products','Soft waves to intricate updos','Tailored to your outfit and occasion','Express styling available']
  },
  blowdry:{
    icon:'fa-solid fa-wind',
    title:'Blow Dry',
    desc:'A luxury blow dry service using premium heat protection and professional techniques for a silky, smooth finish that lasts for days.',
    benefits:['Frizz-free smooth finish','Premium heat protection applied','Long-lasting results','Express and full-service options','Scalp massage included']
  },
  coloring:{
    icon:'fa-solid fa-palette',
    title:'Hair Coloring',
    desc:'From natural-looking balayage to bold all-over transformations, we use only professional-grade European color systems for brilliant, lasting results.',
    benefits:['Full color, highlights, balayage','L\'Oréal and Schwarzkopf professionals','Complimentary color consultation','Toning and gloss treatments','Vibrant, long-lasting color']
  },
  signature:{
    icon:'fa-solid fa-star',
    title:'Signature Coloring',
    desc:'Our flagship service — a completely bespoke color experience crafted around your personality, skin tone, and vision by our senior colorists.',
    benefits:['Custom formula created for you','Senior specialist only service','Portfolio of transformation previewed','Multi-dimensional color techniques','Signature aftercare kit included']
  },
  treatment:{
    icon:'fa-solid fa-droplet',
    title:'Hair Treatments',
    desc:'Targeted treatments to restore, nourish and repair your hair from within — from keratin smoothing to Olaplex bond-building therapies.',
    benefits:['Olaplex bond repair therapy','Keratin smoothing treatments','Deep conditioning masks','Protein restoration treatments','Scalp health treatments']
  },
  koreanspa:{
    icon:'fa-solid fa-leaf',
    title:'Korean Hair Spa',
    desc:'A full sensory ritual inspired by Korean beauty philosophy — scalp analysis, detox treatment, pressure-point massage, and deep conditioning.',
    benefits:['Full scalp detox and cleanse','Pressure-point head massage','Deep conditioning treatment','Strengthens and adds shine','Perfect for hair loss concerns']
  },
  nails:{
    icon:'fa-solid fa-hand-sparkles',
    title:'Nail Services',
    desc:'Exquisite manicures, gel overlays, nail art, and luxury pedicures — every appointment ends with flawless, statement-worthy nails.',
    benefits:['Classic and gel manicures','Nail art and designs','Luxury pedicures','Long-lasting gel extensions','Nail health and repair']
  },
  waxing:{
    icon:'fa-solid fa-gem',
    title:'Waxing Services',
    desc:'Professional waxing using premium strip and stripless wax for a smooth, long-lasting result with minimal discomfort.',
    benefits:['Face and body waxing','Stripless hard wax for sensitive areas','Results last 3–6 weeks','Skin-soothing aftercare applied','Eyebrow shaping included']
  },
  threading:{
    icon:'fa-solid fa-feather',
    title:'Threading Services',
    desc:'Precise, clean threading for eyebrow shaping and facial hair removal — the most accurate technique for defined, symmetrical results.',
    benefits:['Eyebrow shaping and design','Upper lip and facial threading','No chemicals on skin','Long-lasting precise results','Suitable for sensitive skin']
  },
  lashes:{
    icon:'fa-solid fa-eye',
    title:'Eyelash Services',
    desc:'Natural, hybrid, and dramatic lash extensions applied with medical-grade adhesive by certified lash technicians. Wake up flawless every morning.',
    benefits:['Classic, hybrid, volume lashes','Medical-grade adhesive','Lash lifts and tints available','Refills and aftercare guidance','Natural to dramatic looks']
  }
};

/* =========================
PRELOADER
========================= */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('done');
  }, 2400);
});

/* =========================
CUSTOM CURSOR
========================= */
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if(window.matchMedia('(pointer:fine)').matches){
  document.addEventListener('mousemove', e => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a,button,.service-card,.gallery-item,.t-btn,.hdot').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
  });
}

/* =========================
PARTICLES
========================= */
const container = document.getElementById('particles');
for(let i = 0; i < 55; i++){
  const p = document.createElement('span');
  p.classList.add('particle');
  const size = (Math.random() * 3 + 2) + 'px';
  p.style.cssText = `
    left:${Math.random() * 100}%;
    width:${size}; height:${size};
    animation-duration:${10 + Math.random() * 14}s;
    animation-delay:${Math.random() * 8}s;
    opacity:${Math.random() * .6 + .2};
  `;
  container.appendChild(p);
}

/* =========================
NAVBAR
========================= */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-open');
  hamburger.innerHTML = navLinks.classList.contains('mobile-open')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

/* Active nav link on scroll */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if(window.scrollY >= s.offsetTop - 160) current = s.id;
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* =========================
HERO SLIDER
========================= */
const heroImgs = document.querySelectorAll('.hero-img');
const heroDots = document.querySelectorAll('.hdot');
let heroIdx = 0;

function goHero(idx){
  heroImgs[heroIdx].classList.remove('active');
  heroDots[heroIdx].classList.remove('active');
  heroIdx = (idx + heroImgs.length) % heroImgs.length;
  heroImgs[heroIdx].classList.add('active');
  heroDots[heroIdx].classList.add('active');
}

heroDots.forEach(d => d.addEventListener('click', () => goHero(+d.dataset.i)));
setInterval(() => goHero(heroIdx + 1), 5500);

/* =========================
COUNTERS
========================= */
const counters = document.querySelectorAll('.counter');
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    const el = entry.target;
    const target = +el.dataset.target;
    const fmt = el.dataset.format;
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    function tick(now){
      const p = Math.min((now - start) / duration, 1);
      const v = Math.floor(ease(p) * target);
      if(fmt === 'rating') el.textContent = (v / 10).toFixed(1) + '★';
      else if(fmt === 'social') el.textContent = v >= 1000 ? (v/1000).toFixed(1) + 'K+' : v + suffix;
      else el.textContent = v.toLocaleString() + suffix;
      if(p < 1) requestAnimationFrame(tick);
      else {
        if(fmt === 'rating') el.textContent = '4.9★';
        else if(fmt === 'social') el.textContent = '7.7K+';
        else el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

/* =========================
SERVICE MODAL
========================= */
const overlay = document.getElementById('modalOverlay');
const mClose = document.getElementById('modalClose');

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.service;
    const data = serviceData[key];
    if(!data) return;
    document.getElementById('modalIcon').className = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;
    const ul = document.getElementById('modalBenefits');
    ul.innerHTML = data.benefits.map(b => `<li>${b}</li>`).join('');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
mClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* =========================
TESTIMONIAL SLIDER
========================= */
const cards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('tDots');
let tIdx = 0;

cards.forEach((_, i) => {
  const d = document.createElement('span');
  d.classList.add('t-dot');
  if(i === 0) d.classList.add('active');
  d.addEventListener('click', () => goT(i));
  dotsContainer.appendChild(d);
});

function goT(idx){
  cards[tIdx].classList.remove('active');
  dotsContainer.children[tIdx].classList.remove('active');
  tIdx = (idx + cards.length) % cards.length;
  cards[tIdx].classList.add('active');
  dotsContainer.children[tIdx].classList.add('active');
}

document.getElementById('tNext').addEventListener('click', () => goT(tIdx + 1));
document.getElementById('tPrev').addEventListener('click', () => goT(tIdx - 1));

/* =========================
SCROLL REVEAL
========================= */
const reveals = document.querySelectorAll(
  '.service-card,.stat-card,.gallery-item,.insta-card,.experience-content,.location-content,.testimonial-wrapper,.exp-feat'
);
reveals.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if(entry.isIntersecting){
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObs.observe(el));