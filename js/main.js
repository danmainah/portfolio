(() => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Starfield ---------- */
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let stars = [];
  let shooting = null;
  let w = 0, h = 0, dpr = 1;

  function resizeStars() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = Math.floor(innerWidth * dpr);
    h = canvas.height = Math.floor(innerHeight * dpr);
    const count = Math.round((innerWidth * innerHeight) / 5000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: (Math.random() * 1.2 + 0.2) * dpr,
      phase: Math.random() * Math.PI,
      speed: Math.random() * 0.02 + 0.005,
      blue: Math.random() < 0.3,
    }));
  }

  function drawStars() {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      s.phase += s.speed;
      const alpha = 0.35 + Math.abs(Math.sin(s.phase)) * 0.65;
      ctx.fillStyle = s.blue ? `rgba(147,197,253,${alpha})` : `rgba(255,255,255,${alpha * 0.85})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function frame() {
    drawStars();
    if (!shooting && Math.random() < 0.004) {
      shooting = { x: w * (0.3 + Math.random() * 0.7), y: Math.random() * h * 0.4, len: (80 + Math.random() * 80) * dpr, life: 0 };
    }
    if (shooting) {
      // Head travels down-left; tail trails up-right
      const p = ++shooting.life / 50;
      const x = shooting.x - p * 300 * dpr;
      const y = shooting.y + p * 150 * dpr;
      const tx = x + shooting.len, ty = y - shooting.len / 2;
      const g = ctx.createLinearGradient(x, y, tx, ty);
      g.addColorStop(0, `rgba(186,230,253,${1 - p})`);
      g.addColorStop(1, 'rgba(186,230,253,0)');
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.5 * dpr;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(tx, ty);
      ctx.stroke();
      if (p >= 1) shooting = null;
    }
    requestAnimationFrame(frame);
  }

  resizeStars();
  if (reduceMotion) drawStars();
  else requestAnimationFrame(frame);
  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resizeStars(); if (reduceMotion) drawStars(); }, 200);
  });

  /* ---------- Nav: scrolled state, mobile menu, scroll spy ---------- */
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.menu-btn');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 20);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeMenu = () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  const navLinks = [...document.querySelectorAll('.nav-links a')];
  navLinks.forEach((a) => a.addEventListener('click', closeMenu));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach((a) => {
    const section = document.querySelector(a.getAttribute('href'));
    if (section) spy.observe(section);
  });

  /* ---------- Rotating role ---------- */
  const roleEl = document.getElementById('role');
  const roles = ['systems architect', 'solution builder', 'full-stack engineer', 'mobile engineer', 'microservices designer', 'AI integrator'];
  if (!reduceMotion) {
    let r = 0, i = roles[0].length, deleting = true;
    setTimeout(function tick() {
      i += deleting ? -1 : 1;
      roleEl.textContent = roles[r].slice(0, i);
      let delay = deleting ? 35 : 75;
      if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; }
      else if (!deleting && i === roles[r].length) { deleting = true; delay = 2000; }
      setTimeout(tick, delay);
    }, 2200);
  }

  /* ---------- Kenya local time ---------- */
  const clock = document.getElementById('clock');
  const timeFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'Africa/Nairobi', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const tickClock = () => { clock.textContent = `EAT ${timeFmt.format(new Date()).toLowerCase()}`; };
  tickClock();
  setInterval(tickClock, 1000);

  /* ---------- Scroll reveal ---------- */
  const revealer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => revealer.observe(el));

  /* ---------- Count-up stats ---------- */
  const counter = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const el = e.target;
      const end = Number(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      if (reduceMotion) return; // static markup already shows the final value
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / 1600, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US') + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));

  /* ---------- Architecture diagram ---------- */
  const diagram = document.querySelector('.diagram');
  const tabs = [...diagram.querySelectorAll('[role="tab"]')];
  const caption = diagram.querySelector('.diagram-caption');
  const captions = {
    mono: 'One deployable with clean module boundaries: the fastest way to get a product to market, and structured so modules can split into services later.',
    micro: 'Each service owns its data and scales on its own, while events keep everything in sync. Teams ship independently without stepping on each other.',
  };
  const setView = (view) => {
    diagram.dataset.view = view;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.view === view)));
    caption.textContent = captions[view];
  };
  let autoCycle = reduceMotion ? null : setInterval(() => setView(diagram.dataset.view === 'mono' ? 'micro' : 'mono'), 5000);
  tabs.forEach((t) => t.addEventListener('click', () => { clearInterval(autoCycle); setView(t.dataset.view); }));

  /* ---------- Filters (projects + skills) ---------- */
  function setupFilter(buttons, items, matches, onChange) {
    buttons.forEach((btn) => btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      items.forEach((item) => {
        const show = f === 'all' || matches(item, f);
        const wasHidden = item.hidden;
        item.hidden = !show;
        if (show && wasHidden && !reduceMotion) {
          item.animate([{ opacity: 0, transform: 'scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'ease-out' });
        }
      });
      onChange?.(f);
    }));
  }

  setupFilter(
    [...document.querySelectorAll('#projects .filters .filter')],
    [...document.querySelectorAll('.projects .card')],
    (card, f) => card.dataset.cats.split(' ').includes(f),
  );

  const skills = [...document.querySelectorAll('#skills-grid .skill')];
  const skillCount = document.getElementById('skill-count');
  const updateSkillCount = (f) => {
    const shown = skills.filter((s) => !s.hidden).length;
    skillCount.textContent = `Showing ${shown} of ${skills.length}${f === 'all' ? ' · select a category to explore' : ''}`;
  };
  setupFilter([...document.querySelectorAll('#skill-filters .filter')], skills, (s, f) => s.dataset.cat === f, updateSkillCount);
  updateSkillCount('all');

  /* ---------- Contact form → Formspree ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    status.dataset.state = '';
    status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) {
        form.reset();
        status.dataset.state = 'ok';
        status.textContent = "✓ Message sent. I'll get back to you soon.";
      } else {
        const data = await res.json().catch(() => ({}));
        status.dataset.state = 'err';
        status.textContent = (data.errors || []).map((er) => er.message).join(', ') || 'Something went wrong. Please try again.';
      }
    } catch {
      status.dataset.state = 'err';
      status.textContent = 'Network error. Please try again, or email me directly.';
    } finally {
      btn.disabled = false;
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
