/* Heart Touching Story's — front-end only. No database: content comes from data.js,
   visitor preferences (language, text size, reading progress) stay in this browser,
   and booking/sign-up open WhatsApp or email with the message pre-filled. */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const lang = () => (document.documentElement.lang === 'hi' ? 'hi' : 'en');
const pick = o => (typeof o === 'string' ? o : o[lang()] || o.en || o.hi);
// Bilingual markup: CSS hides whichever language isn't active. Single-language text stays visible (.keep).
const t = o => !o ? '' : typeof o === 'string' ? o
  : o.en && o.hi ? `<span lang="en">${o.en}</span><span lang="hi">${o.hi}</span>`
  : `<span lang="${o.en ? 'en' : 'hi'}" class="keep">${o.en || o.hi}</span>`;
const L = (en, hi) => t({ en, hi });
const hiNum = n => String(n).replace(/\d/g, d => '०१२३४५६७८९'[d]);
const num = n => L(String(n), hiNum(n));
const params = new URLSearchParams(location.search);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode: preference just isn't remembered */ } },
};
const waTo = text => `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`;
const waShare = text => `https://wa.me/?text=${encodeURIComponent(text)}`;
const firstChar = s => { try { return [...new Intl.Segmenter('hi', { granularity: 'grapheme' }).segment(s)][0].segment; } catch { return s[0]; } };
const byDate = (a, b) => b.date.localeCompare(a.date);
const fmtViews = n => n >= 1e5 ? { en: `${+(n / 1e3).toFixed(0)}K`, hi: `${+(n / 1e5).toFixed(1)} लाख` } : n >= 1e3 ? { en: `${+(n / 1e3).toFixed(1)}K`, hi: `${+(n / 1e3).toFixed(1)} हज़ार` } : { en: String(n), hi: String(n) };

/* ---------- Icons (1.6px line, rounded) ---------- */
const ICONS = {
  book: '<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Z"/><path d="M12 6.5v13"/>',
  diya: '<path class="flame" d="M12 2.8c1.7 2.1 2.3 3.5 2.3 4.7a2.3 2.3 0 0 1-4.6 0c0-1.2.6-2.6 2.3-4.7Z"/><path d="M3.5 13h17c-.8 3.6-4.3 6-8.5 6s-7.7-2.4-8.5-6Z"/><path d="M9 21.2h6"/>',
  compass: '<circle cx="12" cy="12" r="8.6"/><path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z"/>',
  chat: '<path d="M4 5h16v11H10.5L6 19.5V16H4z"/><path d="M12 13.3s-3-1.7-3-3.7c0-1 .8-1.7 1.6-1.7.6 0 1.1.3 1.4.8.3-.5.8-.8 1.4-.8.8 0 1.6.7 1.6 1.7 0 2-3 3.7-3 3.7Z"/>',
  heart: '<path d="M12 19.5s-7.5-4.6-7.5-9.8A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7.5 1.7c0 5.2-7.5 9.8-7.5 9.8Z"/>',
  phone: '<path d="M5.5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 4.9 4.9l1.3-2 4 1.6v3.2a2 2 0 0 1-2.1 2A14.5 14.5 0 0 1 3.5 6.1a2 2 0 0 1 2-2.1Z"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.2"/><path d="m4.2 7.2 7.8 6 7.8-6"/>',
  pin: '<path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.3"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="m10.2 8.6 5 3.4-5 3.4Z"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  wa: '<path d="M4.5 19.5 5.7 16a8 8 0 1 1 2.8 2.6Z"/><path d="M9.3 8.7c.3 2.6 2.2 4.8 5 5.5l.9-1.2-1.7-.9-.8.8a4.5 4.5 0 0 1-2-2l.8-.8-.8-1.7Z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.1"/>',
  arrowL: '<path d="M19 12H5m6-6-6 6 6 6"/>',
  arrowR: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
};
const icon = n => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const MARK = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 25s-9.5-5.6-9.5-11.6A4.8 4.8 0 0 1 24 11.2a4.8 4.8 0 0 1 9.5 2.2C33.5 19.4 24 25 24 25Z" fill="#C0263A"/><path d="M24 31c-5-3.4-11.5-3.8-18-2v12c6.5-1.8 13-1.4 18 2 5-3.4 11.5-3.8 18-2V29c-6.5-1.8-13-1.4-18 2Z" fill="#FFFDF8" stroke="#4A1421" stroke-width="1.8" stroke-linejoin="round"/><path d="M24 31v12" stroke="#4A1421" stroke-width="1.8"/></svg>`;

/* ---------- Header & footer (shared by every page) ---------- */
const NAV = [
  ['stories.html', 'Stories', 'कहानियाँ'],
  ['seekh.html', 'Spiritual Teachings', 'आध्यात्मिक सीख'],
  ['coaching.html', 'Coaching', 'कोचिंग'],
  ['therapy.html', 'Therapy Sessions', 'थेरेपी सेशन'],
  ['stories.html?type=blog', 'Blog', 'ब्लॉग'],
  ['about.html', 'About', 'परिचय'],
];
const langSw = `<div class="lang-sw" role="group" aria-label="Language / भाषा"><button type="button" class="keep" lang="en" data-set-lang="en">EN</button><button type="button" class="keep" lang="hi" data-set-lang="hi">हिं</button></div>`;
const bookBtn = `<a class="btn btn-p" href="book.html">${L('Book a Session', 'सेशन बुक करें')}</a>`;

function header() {
  const here = location.pathname.split('/').pop() || 'index.html';
  const links = NAV.map(([href, en, hi]) => {
    const [file, q] = href.split('?');
    const current = file === here && (q ? location.search.includes(q) : !location.search.includes('type=blog'));
    return `<a href="${href}"${current ? ' aria-current="page"' : ''}>${L(en, hi)}</a>`;
  }).join('');
  const tb = SITE.topbar;
  return `<a class="skip" href="#main">${L('Skip to content', 'मुख्य सामग्री पर जाएँ')}</a>
  ${tb.on ? `<div class="topbar"><div class="wrap"><span>${icon('diya')}${L(tb.en, tb.hi)}</span>${tb.link ? `<a href="${tb.link.href}">${L(tb.link.en, tb.link.hi)}</a>` : ''}</div></div>` : ''}
  <header class="hdr"><div class="wrap hdr-in">
    <a class="brand" href="index.html">${MARK}<span><b>Heart Touching Story's</b><small>${L('Stories that touch the heart', 'दिल को छू जाने वाली कहानियाँ')}</small></span></a>
    <nav class="nav" id="nav" aria-label="Main">${links}<div class="nav-foot">${langSw}${bookBtn}</div></nav>
    <div class="hdr-actions">${langSw}${bookBtn}
      <button type="button" class="menu-btn" aria-expanded="false" aria-controls="nav"><span class="sr">Menu</span>${icon('menu')}${icon('close')}</button>
    </div>
  </div></header>`;
}

function footer() {
  const social = Object.entries(SITE.social).map(([k, v]) => `<li><a href="${v}" target="_blank" rel="noopener">${k}</a></li>`).join('');
  return `<footer class="ftr"><div class="wrap">
    <div class="ftr-grid">
      <div>
        <a class="brand" href="index.html">${MARK}<span><b>Heart Touching Story's</b><small>${L('Stories that touch the heart', 'दिल को छू जाने वाली कहानियाँ')}</small></span></a>
        <p class="motto">Inspire · Connect · Grow</p>
        <p>${L('Real stories, spiritual teachings and 1:1 sessions with Vijay Bhandari, Dehradun.', 'विजय भंडारी, देहरादून के साथ सच्ची कहानियाँ, आध्यात्मिक सीख और 1:1 सेशन।')}</p>
      </div>
      <div><h4>${L('Explore', 'देखें')}</h4><ul>${NAV.map(([h, en, hi]) => `<li><a href="${h}">${L(en, hi)}</a></li>`).join('')}</ul></div>
      <div><h4>${L('Contact', 'संपर्क')}</h4><ul>
        <li><a href="tel:${SITE.phone.replace(/\s/g, '')}">${SITE.phone}</a></li>
        <li><a href="https://wa.me/${SITE.wa}" target="_blank" rel="noopener">WhatsApp</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li>${L('Dehradun, India', 'देहरादून, भारत')}</li>
        <li><a href="book.html">${L('Book a Session', 'सेशन बुक करें')}</a></li>
      </ul></div>
      <div><h4>${L('Follow', 'फ़ॉलो करें')}</h4><ul>${social}</ul></div>
    </div>
    <div class="ftr-bottom">
      <span>© ${new Date().getFullYear()} Heart Touching Story's · ${L('All stories are original writing. Please do not copy.', 'सभी कहानियाँ मौलिक लेखन हैं। कृपया कॉपी न करें।')}</span>
      <a href="therapy.html#disclaimer">${L('Disclaimer', 'अस्वीकरण')}</a>
    </div>
  </div></footer>`;
}

/* ---------- Language ---------- */
function applyLang(l) {
  const h = document.documentElement;
  h.lang = l;
  store.set('lang', l);
  $$('[data-en]').forEach(e => { e.textContent = e.dataset[l] ?? e.dataset.en; });
  $$('[data-ph-en]').forEach(e => { e.placeholder = l === 'hi' ? e.dataset.phHi : e.dataset.phEn; });
  $$('[data-set-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.setLang === l));
  document.title = (l === 'hi' && h.dataset.titleHi) || h.dataset.titleEn;
}

document.addEventListener('click', e => {
  const b = e.target.closest('[data-set-lang]');
  if (!b || b.dataset.setLang === lang()) return;
  if (reduced) return applyLang(b.dataset.setLang);
  document.body.classList.add('swap');
  setTimeout(() => { applyLang(b.dataset.setLang); document.body.classList.remove('swap'); }, 180);
});

/* ---------- Motion ---------- */
const io = 'IntersectionObserver' in window && new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
}), { rootMargin: '0px 0px -8% 0px' });
const reveal = (root = document) => $$('.rv:not(.in), .eds:not(.in)', root).forEach(el => (io ? io.observe(el) : el.classList.add('in')));

function parallax() {
  const layers = $$('[data-depth]');
  if (!layers.length || reduced) return;
  let raf = 0;
  addEventListener('scroll', () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      if (scrollY < 1400) layers.forEach(el => { el.style.transform = `translateY(${scrollY * el.dataset.depth}px)`; });
    });
  }, { passive: true });
}

/* ---------- Shared pieces ---------- */
const storyCard = (s, i = 0) => `<a class="card story-card rv" style="--i:${i}" href="story.html?id=${s.id}">
  <div class="cover" data-tint="${s.cat}" aria-hidden="true">${t({ en: s.title.en && firstChar(s.title.en), hi: s.title.hi && firstChar(s.title.hi) })}</div>
  <div class="card-b">
    <p class="meta">${t(CATS[s.cat])} · ${L(`${s.mins} min read`, `${s.mins} मिनट पढ़ें`)}</p>
    <h3>${t(s.title)}</h3>
    <p class="ex">${t(s.sub)}</p>
    <span class="more">${s.type === 'blog' ? L('Read article →', 'लेख पढ़ें →') : L('Read full story →', 'पूरी कहानी पढ़ें →')}</span>
  </div></a>`;

function chips(el, active, onPick) {
  el.innerHTML = [['all', { en: 'All', hi: 'सभी' }], ...Object.entries(CATS)]
    .map(([k, v]) => `<button type="button" class="chip" data-cat="${k}" aria-pressed="${k === active}">${t(v)}</button>`).join('');
  el.addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    $$('.chip', el).forEach(c => c.setAttribute('aria-pressed', c === b));
    onPick(b.dataset.cat);
  });
}

const readSet = () => { try { return new Set(JSON.parse(store.get('seekh-read') || '[]')); } catch { return new Set(); } };
function edTiles(order = 'asc') {
  const read = readSet();
  const nums = Array.from({ length: SEEKH.total }, (_, i) => i + 1);
  if (order === 'desc') nums.reverse();
  return nums.map((n, i) => {
    const isNew = n === SEEKH.total;
    return `<a class="ed${isNew ? ' new' : ''}" style="--i:${i}" href="edition.html?n=${n}">
      <span class="sr">${L('Day', 'दिन')}</span>${num(n)}${isNew ? `<em>${L('New', 'नया')}</em>` : ''}${read.has(n) ? `<i title="Read">${icon('check')}</i>` : ''}</a>`;
  }).join('');
}

const coachCard = (c, i) => `<article class="card coach rv" style="--i:${i}" id="${c.id}">
  <h3>${t(c.name)}</h3>
  <p>${t(c.who)}</p>
  <ul class="ticks">${c.points.en.map((p, k) => `<li>${icon('check')}<span>${L(p, c.points.hi[k])}</span></li>`).join('')}</ul>
  <dl class="facts">
    <div><dt>${L('Format', 'तरीका')}</dt><dd>${t(COACHING_FACTS.format)}</dd></div>
    <div><dt>${L('Sessions', 'सेशन')}</dt><dd>${t(COACHING_FACTS.sessions)}</dd></div>
    <div><dt>${L('Price', 'शुल्क')}</dt><dd>${t(COACHING_FACTS.price)}</dd></div>
  </dl>
  <a class="btn btn-p" href="book.html?type=coach-${c.id}">${L('Book', 'बुक करें')}</a>
</article>`;

const therapyType = (x, i) => `<div class="card type rv" style="--i:${i}"><span class="ic-wrap">${icon(x.icon)}</span>
  <div><h3>${t(x.name)}</h3><p>${t(x.desc)}</p><small>${t(x.len)}</small></div></div>`;

function todaysThought() {
  const today = new Date().toLocaleDateString('en-CA');
  const pool = THOUGHTS.filter(x => !x.date);
  return THOUGHTS.find(x => x.date === today) || pool[Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5) % pool.length];
}

/* ---------- Pages ---------- */
const pages = {
  home() {
    $('#stats').innerHTML = SITE.stats.map(s => `<div class="stat"><b>${t(s.value)}</b><span>${L(s.en, s.hi)}</span></div>`).join('');

    const q = todaysThought();
    $('#thought-q').innerHTML = t(q);
    $('#wa-share').onclick = () => window.open(waShare(`“${pick(q)}” — ${lang() === 'hi' ? 'विजय भंडारी' : 'Vijay Bhandari'}\n${location.href.split('?')[0]}`), '_blank', 'noopener');

    const stories = STORIES.filter(s => s.type === 'story').sort(byDate);
    const grid = $('#latest-grid');
    const show = cat => {
      grid.innerHTML = stories.filter(s => cat === 'all' || s.cat === cat).slice(0, 4).map(storyCard).join('');
      reveal(grid);
    };
    chips($('#latest-chips'), 'all', show);
    show('all');

    $('#home-eds').innerHTML = edTiles();
    $('#coach-cards').innerHTML = COACHING.map(coachCard).join('');
    $('#therapy-types').innerHTML = THERAPY.map(therapyType).join('');
    $('#reels').innerHTML = REELS.map((r, i) => `<a class="reel rv" style="--i:${i}" href="${r.url}" target="_blank" rel="noopener">
      <small>${L('Reel', 'रील')} ${num(i + 1)}</small><span class="play">${icon('play')}</span>
      <span><b>${t(fmtViews(r.views))}</b><br><small>${L('views · Watch on Facebook', 'व्यूज़ · फेसबुक पर देखें')}</small></span></a>`).join('');
    $('#blog-cards').innerHTML = STORIES.filter(s => s.type === 'blog').sort(byDate).slice(0, 3).map(storyCard).join('');
    if (TESTIMONIALS.length) {
      $('#kind').hidden = false;
      $('#kind-grid').innerHTML = TESTIMONIALS.map((x, i) => `<figure class="card rv" style="--i:${i};padding:28px;margin:0"><blockquote style="margin:0 0 12px;font:400 21px/1.5 var(--serif)">${t(x.quote)}</blockquote><figcaption class="muted">— ${t(x.name)}</figcaption></figure>`).join('');
    }
    $('#join-wa').href = waTo('Namaste Vijay ji, please add me to the daily story list. / कृपया मुझे रोज़ की कहानी सूची में जोड़ें।');
  },

  stories() {
    const type = params.get('type') === 'blog' ? 'blog' : 'story';
    if (type === 'blog') {
      $('#list-label').innerHTML = L('Blog', 'ब्लॉग');
      $('#list-title').innerHTML = L('Articles & Thoughts', 'लेख और विचार');
      $('#list-intro').innerHTML = L('Short reflections on life, family and finding peace.', 'जीवन, परिवार और मन की शांति पर छोटे-छोटे विचार।');
      document.documentElement.dataset.titleEn = "Blog · Heart Touching Story's";
      document.documentElement.dataset.titleHi = "ब्लॉग · Heart Touching Story's";
    }
    const list = STORIES.filter(s => s.type === type).sort(byDate);
    const grid = $('#list-grid');
    let cat = CATS[params.get('cat')] ? params.get('cat') : 'all';
    let q = '';
    const draw = () => {
      const needle = q.trim().toLowerCase();
      const res = list.filter(s => (cat === 'all' || s.cat === cat) && (!needle || JSON.stringify([s.title, s.sub, s.body]).toLowerCase().includes(needle)));
      grid.innerHTML = res.map(storyCard).join('');
      $('#list-empty').hidden = res.length > 0;
      reveal(grid);
    };
    chips($('#list-chips'), cat, c => { cat = c; draw(); });
    $('#search').addEventListener('input', e => { q = e.target.value; draw(); });
    draw();
  },

  story() {
    const s = STORIES.find(x => x.id === params.get('id'));
    const root = $('#story');
    if (!s) {
      root.innerHTML = `<div class="wrap page-head"><h1>${L('Story not found', 'कहानी नहीं मिली')}</h1><p><a class="link-arrow" href="stories.html">${L('See all stories →', 'सभी कहानियाँ देखें →')}</a></p></div>`;
      return;
    }
    const isBlog = s.type === 'blog';
    const h = document.documentElement;
    h.dataset.titleEn = `${s.title.en || s.title.hi} · Heart Touching Story's`;
    h.dataset.titleHi = `${s.title.hi || s.title.en} · Heart Touching Story's`;
    const sameType = STORIES.filter(x => x.type === s.type).sort(byDate);
    const idx = sameType.indexOf(s);
    const newer = sameType[idx - 1], older = sameType[idx + 1];
    const related = [...sameType.filter(x => x !== s && x.cat === s.cat), ...sameType.filter(x => x !== s && x.cat !== s.cat)].slice(0, 3);
    const langs = ['en', 'hi'].filter(l => s.body[l]);
    const prose = langs.map(l => `<div lang="${l}"${langs.length === 1 ? ' class="keep"' : ''}>${s.body[l].map((p, k) =>
      `<p>${p}</p>${k === s.pullAfter && s.pull?.[l] ? `<blockquote class="pull">${s.pull[l]}</blockquote>` : ''}`).join('')}</div>`).join('');
    // Shown only in the language that's missing (CSS hides the other)
    const note = !s.body.en ? `<p class="lang-note" lang="en">Available in Hindi only</p>` : !s.body.hi ? `<p class="lang-note" lang="hi">केवल अंग्रेज़ी में उपलब्ध</p>` : '';
    const listUrl = isBlog ? 'stories.html?type=blog' : 'stories.html';
    const date = d => L(new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }), new Date(d).toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }));
    const pnLink = (x, dir) => x ? `<a class="card" href="story.html?id=${x.id}"><small>${dir === 'prev' ? L('← Previous', '← पिछली') : L('Next →', 'अगली →')}</small><b>${t(x.title)}</b></a>` : '<span class="ghost"></span>';

    root.innerHTML = `<div class="progress" id="progress"></div>
    <article>
      <header class="wrap story-head">
        <nav class="crumb" aria-label="Breadcrumb"><a href="index.html">${L('Home', 'होम')}</a> / <a href="${listUrl}">${isBlog ? L('Blog', 'ब्लॉग') : L('Stories', 'कहानियाँ')}</a> / ${t(CATS[s.cat])}</nav>
        <span class="label">${t(CATS[s.cat])}</span>
        <h1 class="story-title">${t(s.title)}</h1>
        <p class="story-sub">${t(s.sub)}</p>
        <div class="author-row"><span class="avatar" aria-hidden="true">${L('V', 'वि')}</span><span><b>${L('Vijay Bhandari', 'विजय भंडारी')}</b>
          <small>${date(s.date)} · ${L(`${s.mins} min read`, `${s.mins} मिनट पढ़ें`)}${s.audio ? ` · ${L(`${s.listen} min listen`, `${s.listen} मिनट सुनें`)}` : ''}</small></span></div>
        <div class="tools">
          <button type="button" class="tool" data-fs="-1" aria-label="Smaller text / छोटा अक्षर">${L('A−', 'अ−')}</button>
          <button type="button" class="tool" data-fs="1" aria-label="Larger text / बड़ा अक्षर">${L('A+', 'अ+')}</button>
          ${langs.length === 2 ? `<button type="button" class="tool" id="tr-toggle">${icon('book')}${L('हिंदी में पढ़ें (देवनागरी)', 'Read in English')}</button>` : ''}
          ${s.audio ? `<span class="tool" style="cursor:default">${icon('play')}${L('Listen to the story', 'कहानी सुनें')}</span><audio controls preload="none" src="${s.audio}"></audio>` : ''}
        </div>
      </header>
      <div class="wrap">
        ${note}
        ${s.pdf ? ((p = s.pdf.pages[0]) => `<figure class="poster">
          <a href="${s.pdf.img(p)}" target="_blank" rel="noopener"><img src="${s.pdf.img(p)}" alt="Poster · PDF page ${p}" loading="lazy" decoding="async"></a>
        </figure>`)() + '<div style="height:40px"></div>'
          : `<div class="cover-wide" data-tint="${s.cat}" aria-hidden="true">${t({ en: s.title.en && firstChar(s.title.en), hi: s.title.hi && firstChar(s.title.hi) })}</div>`}
        <div class="prose" id="prose">${prose}</div>
        <aside class="lesson rv" aria-label="Lesson"><span class="label">${L('Lesson of the story', 'कहानी की सीख')}</span><p>${t(s.lesson)}</p></aside>
        <div class="story-foot">
          <div class="tags">${s.tags.map(x => `<span>#${x}</span>`).join('')}</div>
          <div class="share"><span>${L('Share', 'शेयर करें')}</span>
            <a class="btn btn-s" id="sh-wa" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a>
            <a class="btn btn-s" id="sh-fb" target="_blank" rel="noopener">Facebook</a>
            <button type="button" class="btn btn-s" id="sh-copy">${icon('link')}<span id="copy-label">${L('Copy link', 'लिंक कॉपी करें')}</span></button>
          </div>
          <p class="notice">${L('Original writing by Vijay Bhandari — please do not copy. Share the link instead.', 'विजय भंडारी का मौलिक लेखन — कृपया कॉपी न करें, लिंक शेयर करें।')}</p>
        </div>
        <div class="author-card"><span class="avatar" aria-hidden="true">${L('V', 'वि')}</span>
          <div><b>${L('Vijay Bhandari', 'विजय भंडारी')}</b><p>${L('Writer · Life Coach · Digital Creator · Dehradun', 'लेखक · लाइफ़ कोच · डिजिटल क्रिएटर · देहरादून')}</p></div>
          <a class="btn btn-p" href="book.html">${L('Talk 1:1', '1:1 बात करें')}</a></div>
        <nav class="pn" aria-label="More stories">${pnLink(older, 'prev')}${pnLink(newer, 'next')}</nav>
      </div>
      <section class="sec"><div class="wrap">
        <div class="sec-head"><span class="label">${L('Keep reading', 'और पढ़ें')}</span><h2>${isBlog ? L('More articles', 'और लेख') : L('Related stories', 'मिलती-जुलती कहानियाँ')}</h2></div>
        <div class="grid g4 scroll-m">${related.map(storyCard).join('')}</div>
      </div></section>
    </article>`;

    $('#tr-toggle')?.addEventListener('click', () => applyLang(lang() === 'hi' ? 'en' : 'hi'));
    const url = location.href;
    $('#sh-wa').href = waShare(`${pick(s.title)} — ${url}`);
    $('#sh-fb').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    $('#sh-copy').onclick = async () => {
      try { await navigator.clipboard.writeText(url); } catch { return; }
      const lab = $('#copy-label'), old = lab.innerHTML;
      lab.innerHTML = L('Link copied', 'लिंक कॉपी हुआ');
      setTimeout(() => { lab.innerHTML = old; }, 2000);
    };

    const box = $('#prose');
    const saved = store.get('fs');
    if (saved) box.style.setProperty('--fs', `${saved}px`);
    $$('[data-fs]').forEach(b => b.addEventListener('click', () => {
      const v = Math.min(28, Math.max(16, parseFloat(getComputedStyle(box).fontSize) + 2 * b.dataset.fs));
      box.style.setProperty('--fs', `${v}px`);
      store.set('fs', v);
    }));

    const bar = $('#progress');
    const onScroll = () => {
      const r = box.getBoundingClientRect();
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, -r.top / (r.height - innerHeight * .6)))})`;
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  },

  seekh() {
    const grid = $('#seekh-grid');
    const draw = order => { grid.classList.remove('in'); grid.innerHTML = edTiles(order); reveal(grid.parentNode); };
    $('#order').addEventListener('click', e => {
      const b = e.target.closest('.chip');
      if (!b) return;
      $$('.chip', e.currentTarget).forEach(c => c.setAttribute('aria-pressed', c === b));
      draw(b.dataset.order);
    });
    draw('asc');
    const n = readSet().size;
    $('#seekh-progress').innerHTML = L(`${n} of ${SEEKH.total} days read`, `${hiNum(SEEKH.total)} में से ${hiNum(n)} दिन पढ़े`);
    $('#seekh-bar').style.width = `${(n / SEEKH.total) * 100}%`;
  },

  edition() {
    const total = SEEKH.total;
    const n = Math.min(total, Math.max(1, parseInt(params.get('n'), 10) || 1));
    const ed = SEEKH.editions[n] || {};
    const read = readSet();
    read.add(n);
    store.set('seekh-read', JSON.stringify([...read]));
    const h = document.documentElement;
    h.dataset.titleEn = `Day ${n} · Guru Gorakhnath Ji Ki Seekh`;
    h.dataset.titleHi = `दिन ${hiNum(n)} · गुरु गोरखनाथ जी की सीख`;
    // Day n = page n of the first PDF (days 1–45), then page n−45 of the second (days 46–56).
    const [pdf, page] = n <= 45 ? ['Guru Gorakhnath Ji.pdf', n] : ['1000734454.pdf', n - 45];
    const img = `public/seekh/pages/day-${String(n).padStart(2, '0')}.jpg`;
    const langs = ['en', 'hi'].filter(l => ed.body?.[l]);
    const body = langs.length
      ? langs.map(l => `<div lang="${l}"${langs.length === 1 ? ' class="keep"' : ''}>${ed.body[l].map(p => `<p>${p}</p>`).join('')}</div>`).join('')
      : `<p class="placeholder">${L('The text of this day will appear here.', 'इस दिन का पाठ यहाँ आएगा।')}</p>`;
    const pn = (k, dir) => k >= 1 && k <= total
      ? `<a class="card" href="edition.html?n=${k}"><small>${dir === 'prev' ? L('← Previous day', '← पिछला दिन') : L('Next day →', 'अगला दिन →')}</small><b>${L(`Day ${k}`, `दिन ${hiNum(k)}`)}</b></a>`
      : '<span class="ghost"></span>';
    $('#edition').innerHTML = `<header class="wrap story-head">
        <nav class="crumb" aria-label="Breadcrumb"><a href="index.html">${L('Home', 'होम')}</a> / <a href="seekh.html">${L('Guru Gorakhnath Ji Ki Seekh', 'गुरु गोरखनाथ जी की सीख')}</a></nav>
        <span class="label">${L(`Day ${n} of ${total}`, `दिन ${hiNum(n)} / ${hiNum(total)}`)}</span>
        <h1 class="story-title">${ed.title ? t(ed.title) : L(`Day ${n}`, `दिन ${hiNum(n)}`)}</h1>
        <p class="badge" style="color:var(--saffron-d);border-color:var(--sand)">${icon('diya')}${L('Original writing — please do not copy', 'मौलिक लेखन — कॉपी करना वर्जित है')}</p>
        <div class="tools"><button type="button" class="tool" id="tr-toggle">${icon('book')}${L('हिंदी में पढ़ें (देवनागरी)', 'Read in English')}</button></div>
      </header>
      <div class="wrap">
        <div class="ed-progress"><small class="muted">${L(`${read.size} of ${total} read`, `${hiNum(total)} में से ${hiNum(read.size)} पढ़े`)}</small><div class="bar"><i style="width:${(read.size / total) * 100}%"></i></div></div>
        <figure class="poster">
          <a href="${img}" target="_blank" rel="noopener"><img src="${img}" alt="Day ${n} poster · दिन ${hiNum(n)} का पोस्टर" loading="lazy" decoding="async"></a>
        </figure>
        <div class="prose" style="margin-top:40px">${body}</div>
        <aside class="lesson rv"><span class="label">${L('Lesson of the day', 'आज की सीख')}</span><p>${ed.lesson ? t(ed.lesson) : L('The lesson of this day will appear here.', 'इस दिन की सीख यहाँ आएगी।')}</p></aside>
        <nav class="pn" aria-label="Days">${pn(n - 1, 'prev')}${pn(n + 1, 'next')}</nav>
        <p class="closing">${L('Alakh Niranjan · Jai Guru Gorakhnath', 'अलख निरंजन · जय गुरु गोरखनाथ')}</p>
      </div>`;
    $('#tr-toggle').addEventListener('click', () => applyLang(lang() === 'hi' ? 'en' : 'hi'));
  },

  thoughts() {
    const today = todaysThought();
    const sig = () => (lang() === 'hi' ? 'विजय भंडारी' : 'Vijay Bhandari');
    const list = [today, ...THOUGHTS.filter(x => x !== today)];
    const grid = $('#thoughts-grid');
    grid.innerHTML = list.map((x, i) => `<figure class="card thought rv${i ? '' : ' today'}" style="--i:${i % 3}">
      ${i ? '' : `<span class="label">${L('Today', 'आज')}</span>`}
      <blockquote>${t(x)}</blockquote>
      <figcaption class="sig">— ${L('Vijay Bhandari', 'विजय भंडारी')}</figcaption>
      <button type="button" class="btn btn-s" data-i="${i}">${icon('wa')}${L('Send on WhatsApp', 'WhatsApp पर भेजें')}</button>
    </figure>`).join('');
    grid.addEventListener('click', e => {
      const b = e.target.closest('[data-i]');
      if (b) window.open(waShare(`“${pick(list[b.dataset.i])}” — ${sig()}\n${location.href.split('?')[0]}`), '_blank', 'noopener');
    });
  },

  coaching() {
    $('#coach-cards').innerHTML = COACHING.map(coachCard).join('');
    $('#faq').innerHTML = FAQ.map(f => `<details><summary>${t(f.q)}</summary><p>${t(f.a)}</p></details>`).join('');
  },

  therapy() {
    $('#therapy-types').innerHTML = THERAPY.map(therapyType).join('');
    $('#faq').innerHTML = FAQ.map(f => `<details><summary>${t(f.q)}</summary><p>${t(f.a)}</p></details>`).join('');
  },

  book() {
    const sel = $('#f-type');
    const opts = [
      ...THERAPY.map(x => ({ id: `therapy-${x.id}`, en: `Therapy · ${x.name.en}`, hi: `थेरेपी · ${x.name.hi}` })),
      ...COACHING.map(x => ({ id: `coach-${x.id}`, en: x.name.en, hi: x.name.hi })),
    ];
    sel.insertAdjacentHTML('beforeend', opts.map(o => `<option value="${o.id}" data-en="${o.en}" data-hi="${o.hi}">${o.en}</option>`).join(''));
    if (opts.some(o => o.id === params.get('type'))) sel.value = params.get('type');
    $('#f-date').min = new Date().toLocaleDateString('en-CA');

    const form = $('#book-form');
    const message = () => {
      const hi = lang() === 'hi';
      const txt = id => { const el = $(id); return el.tagName === 'SELECT' ? el.selectedOptions[0].textContent : el.value.trim(); };
      return [
        hi ? 'नमस्ते विजय जी, मैं एक सेशन बुक करना चाहता/चाहती हूँ।' : 'Namaste Vijay ji, I would like to book a session.',
        `${hi ? 'नाम' : 'Name'}: ${txt('#f-name')}`,
        `${hi ? 'सेशन' : 'Session'}: ${txt('#f-type')}`,
        `${hi ? 'तरीका' : 'Mode'}: ${txt('#f-mode')}`,
        `${hi ? 'पसंदीदा तारीख' : 'Preferred date'}: ${txt('#f-date')}`,
        `${hi ? 'समय' : 'Time'}: ${txt('#f-time')}`,
        `${hi ? 'भाषा' : 'Language'}: ${txt('#f-lang')}`,
        txt('#f-msg') && `${hi ? 'संदेश' : 'Message'}: ${txt('#f-msg')}`,
      ].filter(Boolean).join('\n');
    };
    form.addEventListener('submit', e => {
      e.preventDefault();
      window.open(waTo(message()), '_blank', 'noopener');
    });
    $('#by-email').addEventListener('click', () => {
      if (!form.reportValidity()) return;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Session request / सेशन अनुरोध')}&body=${encodeURIComponent(message())}`;
    });
  },
};

/* ---------- Boot ---------- */
(function init() {
  const h = document.documentElement;
  h.dataset.titleEn ||= document.title;
  document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${Object.entries(ICONS).map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join('')}</svg>`);
  $('#hdr').outerHTML = header();
  $('#ftr').outerHTML = footer();
  pages[document.body.dataset.page]?.();
  applyLang(lang());
  reveal();
  parallax();

  const btn = $('.menu-btn'), nav = $('#nav');
  btn.addEventListener('click', () => {
    const open = !document.body.classList.contains('menu-open');
    nav.style.setProperty('--nav-top', `${$('.hdr').getBoundingClientRect().bottom}px`);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open);
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) btn.click(); });
})();
