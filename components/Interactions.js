'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Interactions() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];
    const on = (el, ev, fn, opts) => { el.addEventListener(ev, fn, opts); cleanups.push(() => el.removeEventListener(ev, fn, opts)); };
    // Touch devices skip the cursor, 3D tilt and parallax — keeps scrolling smooth on mobile.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    /* MOBILE MENU */
    const burger = document.getElementById('nburger');
    const mmenu = document.getElementById('mmenu');
    if (burger && mmenu) {
      const setOpen = (open) => {
        mmenu.classList.toggle('open', open);
        burger.classList.toggle('open', open);
        document.body.classList.toggle('mlock', open);
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      };
      on(burger, 'click', () => setOpen(!mmenu.classList.contains('open')));
      mmenu.querySelectorAll('a').forEach((el) => on(el, 'click', () => setOpen(false)));
      cleanups.push(() => setOpen(false));
    }

    /* CURSOR */
    const cur = document.getElementById('cur');
    const ring = document.getElementById('ring');
    let raf;
    if (fine && cur && ring) {
      let mx = 0, my = 0, rx = 0, ry = 0;
      on(document, 'mousemove', (e) => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
      const anim = () => { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; raf = requestAnimationFrame(anim); };
      anim();
      cleanups.push(() => cancelAnimationFrame(raf));
      document.querySelectorAll('a,button,.tpill,.csvc,.pcard,.mcard,.tcard,.svc-fcard,.svc-rcard').forEach((el) => {
        const enter = () => { ring.style.transform = 'translate(-50%,-50%) scale(1.7)'; ring.style.borderColor = 'rgba(30,182,168,0.75)'; };
        const leave = () => { ring.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.borderColor = 'rgba(30,182,168,0.45)'; };
        on(el, 'mouseenter', enter); on(el, 'mouseleave', leave);
      });
    }

    /* NAV scroll state (only when not forced solid) */
    const nav = document.getElementById('nav');
    if (nav && !nav.classList.contains('solid')) {
      const fn = () => nav.classList.toggle('s', window.scrollY > 60);
      on(window, 'scroll', fn, { passive: true });
      fn();
    }

    /* PARTICLES */
    const ptcl = document.getElementById('ptcl');
    if (ptcl && !ptcl.childElementCount) {
      for (let i = 0; i < (fine ? 24 : 10); i++) {
        const p = document.createElement('div');
        p.className = 'pt';
        const s = Math.random() * 6 + 3;
        const z = Math.random() * 600 - 300;
        p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;background:${Math.random() > 0.5 ? 'rgba(30,182,168,0.6)' : 'rgba(255,255,255,0.4)'};animation-duration:${Math.random() * 14 + 9}s;animation-delay:${Math.random() * 9}s;--z:${z}px`;
        ptcl.appendChild(p);
      }
    }

    /* 3D TILT (desktop pointers only) */
    if (fine) document.querySelectorAll('.hcard, .hstat, .csvc, .pstep, .pcard, .mcard, .tcard, .bcard, .apoint').forEach((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -12;
        const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 12;
        el.style.transition = 'transform 0.1s ease-out';
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
      };
      const leave = () => { el.style.transition = 'transform 0.5s var(--ease)'; el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'; };
      on(el, 'mousemove', move); on(el, 'mouseleave', leave);
    });

    /* HERO 3D PARALLAX (desktop pointers only) */
    const heroSection = document.getElementById('home');
    if (fine && heroSection) {
      const heroLeft = document.querySelector('.hero-inner > div:first-child');
      const heroRight = document.getElementById('hright');
      const hi = document.getElementById('heroImg');
      const fn = (e) => {
        if (window.scrollY > heroSection.offsetHeight) return;
        const rx = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2) * -5;
        const ry = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2) * 5;
        if (heroLeft) { heroLeft.style.transition = 'transform 0.1s ease-out'; heroLeft.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`; }
        if (heroRight) { heroRight.style.transition = 'transform 0.1s ease-out'; heroRight.style.transform = `perspective(1200px) rotateX(${rx * 0.5}deg) rotateY(${ry * 0.5}deg) translateZ(10px)`; }
        if (hi) { hi.style.transition = 'transform 0.1s ease-out'; hi.style.transform = `scale(1.08) translate3d(${ry * -3}px, calc(${rx * -3}px + ${window.scrollY * 0.22}px), 0)`; }
      };
      on(document, 'mousemove', fn);
    }

    /* HERO ENTRANCE */
    [['hbadge', 150], ['hh1', 380], ['hdesc', 620], ['hctas', 840], ['hloc', 1000], ['hc1', 900], ['hstat', 1060]].forEach(([id, delay]) => {
      const el = document.getElementById(id);
      if (!el) return;
      const t = setTimeout(() => { el.style.transition = 'all 0.95s cubic-bezier(0.16,1,0.3,1)'; el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, delay);
      cleanups.push(() => clearTimeout(t));
    });

    /* REVEAL */
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.rv,.rl,.rr').forEach((el) => obs.observe(el));
    cleanups.push(() => obs.disconnect());

    /* COUNT UP (.count[data-t]) */
    const cobs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !e.target.dataset.done) {
          e.target.dataset.done = '1';
          const t = +e.target.dataset.t, dur = 1900; let s = null;
          const step = (ts) => { if (!s) s = ts; const p = Math.min((ts - s) / dur, 1), ease = 1 - Math.pow(1 - p, 4); e.target.textContent = Math.round(ease * t); if (p < 1) requestAnimationFrame(step); };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.count').forEach((el) => cobs.observe(el));
    cleanups.push(() => cobs.disconnect());

    /* HERO STAT COUNT ([data-target]) */
    document.querySelectorAll('[data-target]').forEach((el) => {
      const t = +el.dataset.target, dur = 1600; let s = null;
      const to = setTimeout(() => {
        const step = (ts) => { if (!s) s = ts; const p = Math.min((ts - s) / dur, 1), ease = 1 - Math.pow(1 - p, 4); el.textContent = Math.round(ease * t); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }, 1200);
      cleanups.push(() => clearTimeout(to));
    });

    /* FAQ ACCORDION */
    document.querySelectorAll('.faq-question').forEach((q) => {
      const fn = () => {
        const item = q.parentElement;
        const active = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('active'));
        if (!active) item.classList.add('active');
      };
      on(q, 'click', fn);
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
