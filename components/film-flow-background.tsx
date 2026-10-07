"use client";

import { useEffect, useRef } from "react";

type Strip = { y: number; tilt: number; depth: number; speed: number; seed: number };

const STRIPS: Strip[] = [
  { y: 0.2, tilt: -0.07, depth: 0.35, speed: 20, seed: 3 },
  { y: 0.58, tilt: 0.05, depth: 0.65, speed: -28, seed: 7 },
  { y: 0.92, tilt: -0.035, depth: 0.95, speed: 18, seed: 11 },
];

const CURVES = [
  { pos: 0.4, ph: 0.6, peak: 0.4 },
  { pos: 0.76, ph: 2.4, peak: 0.3 },
];

const HIGHLIGHT_INTERVAL = 2.2;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const rand = (n: number, seed: number, k = 0) => {
  const s = Math.sin(n * 127.1 + seed * 311.7 + k * 57.3) * 43758.5453;
  return s - Math.floor(s);
};

function rr(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  if (typeof ctx.roundRect === "function") ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

/** 히어로 배경 장식용 캔버스: 필름 스트립 + 관심도 곡선. 부모(히어로)의 크기에 맞춘다. */
export default function FilmFlowBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let inView = true;
    let last = 0;
    let time = 0;
    let scrollY = 0;
    let prevScrollY = 0;
    let vel = 0;
    let energy = 0;
    let phase = 0;
    let mouse = 0;
    let mouseTarget = 0;
    const offsets = STRIPS.map(() => 0);
    let hl = { strip: 1, idx: 0, start: -100 };
    let nextHl = 0.8;

    const size = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrameArt = (x: number, y: number, fw: number, fh: number, n: number, seed: number) => {
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      const kind = ((n % 3) + 3) % 3;
      if (kind === 0) {
        const base = y + fh * 0.8;
        const p1 = 0.25 + rand(n, seed, 1) * 0.15;
        const p2 = 0.62 + rand(n, seed, 2) * 0.15;
        ctx.beginPath();
        ctx.moveTo(x + fw * 0.1, base);
        ctx.lineTo(x + fw * p1, y + fh * (0.28 + rand(n, seed, 3) * 0.12));
        ctx.lineTo(x + fw * 0.58, base);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x + fw * 0.4, base);
        ctx.lineTo(x + fw * p2, y + fh * (0.4 + rand(n, seed, 4) * 0.12));
        ctx.lineTo(x + fw * 0.92, base);
        ctx.closePath();
        ctx.fill();
      } else if (kind === 1) {
        ctx.beginPath();
        ctx.arc(x + fw * (0.3 + rand(n, seed, 5) * 0.4), y + fh * 0.36, fh * 0.12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(x + fw * 0.1, y + fh * 0.68, fw * 0.8, Math.max(1.5, fh * 0.035));
      } else {
        for (let k = 0; k < 3; k++) {
          const bw = fw * (0.4 + rand(n, seed, 6 + k) * 0.4);
          rr(ctx, x + fw * 0.12, y + fh * (0.24 + k * 0.2), bw, fh * 0.08, fh * 0.04);
          ctx.fill();
        }
      }
    };

    const drawStrip = (s: Strip, i: number, m: number) => {
      const fh = clamp(h * 0.1, 44, 78) * (0.78 + s.depth * 0.4);
      const fw = fh * 1.5;
      const pitch = fw * 1.14;
      const pad = fh * 0.22;
      const L = w * 0.85;
      const off = offsets[i];
      const cy = h * s.y - scrollY * (0.1 + s.depth * 0.32);

      ctx.save();
      ctx.translate(w / 2 + mouse * s.depth * 16, cy);
      ctx.rotate(s.tilt);

      ctx.fillStyle = `rgba(0,70,125,${0.07 * m})`;
      ctx.fillRect(-L, -fh / 2 - pad, L * 2, fh + pad * 2);

      // 필름 구멍
      const hp = pitch / 4;
      const hw = hp * 0.42;
      const hh = pad * 0.42;
      ctx.fillStyle = `rgba(0,58,102,${0.2 * m})`;
      for (let k = Math.floor((off - L) / hp); k <= Math.ceil((off + L) / hp); k++) {
        const hx = k * hp - off - hw / 2;
        rr(ctx, hx, -fh / 2 - pad / 2 - hh / 2, hw, hh, hh * 0.3);
        ctx.fill();
        rr(ctx, hx, fh / 2 + pad / 2 - hh / 2, hw, hh, hh * 0.3);
        ctx.fill();
      }

      // 프레임
      for (let n = Math.floor((off - L) / pitch); n <= Math.ceil((off + L) / pitch); n++) {
        const x = n * pitch - off - fw / 2;
        const y = -fh / 2;
        const v = rand(n, s.seed);
        const g = ctx.createLinearGradient(x, y, x + fw, y + fh);
        g.addColorStop(0, `rgba(0,100,171,${(0.13 + v * 0.05) * m})`);
        g.addColorStop(1, `rgba(34,190,201,${(0.13 + rand(n, s.seed, 9) * 0.07) * m})`);
        rr(ctx, x, y, fw, fh, 6);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(0,80,140,${0.2 * m})`;
        ctx.stroke();
        drawFrameArt(x, y, fw, fh, n, s.seed);

        if (hl.strip === i) {
          const age = (time - hl.start) / (HIGHLIGHT_INTERVAL * 1.2);
          if (n === hl.idx && age >= 0 && age <= 1) {
            const a = Math.sin(Math.PI * age);
            rr(ctx, x, y, fw, fh, 6);
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgba(18,170,185,${0.55 + 0.3 * a})`;
            ctx.globalAlpha = a;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      ctx.restore();
    };

    const curveY = (x: number, base: number, amp: number, ph: number) =>
      base + amp * (Math.sin(x * 0.0042 + phase + ph) * 0.62 + Math.sin(x * 0.0097 - phase * 1.3 + ph * 2) * 0.38);

    const drawCurve = (c: (typeof CURVES)[number], i: number, m: number) => {
      const base = h * c.pos - scrollY * 0.2;
      const amp = h * 0.06;
      const step = 8;
      const line = ctx.createLinearGradient(0, 0, w, 0);
      line.addColorStop(0, "rgba(18,150,185,0)");
      line.addColorStop(0.5, `rgba(18,150,185,${c.peak * m})`);
      line.addColorStop(1, "rgba(18,150,185,0)");

      ctx.beginPath();
      for (let x = -step; x <= w + step; x += step) {
        const y = curveY(x, base, amp, c.ph);
        if (x < 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = line;
      ctx.stroke();

      ctx.lineTo(w + step, base + amp * 2.6);
      ctx.lineTo(-step, base + amp * 2.6);
      ctx.closePath();
      const fill = ctx.createLinearGradient(0, base - amp, 0, base + amp * 2.6);
      fill.addColorStop(0, `rgba(34,190,201,${0.1 * m})`);
      fill.addColorStop(1, "rgba(34,190,201,0)");
      ctx.fillStyle = fill;
      ctx.fill();

      if (i === 0) {
        const dx = ((time * 0.06) % 1.2) * w - 0.1 * w;
        const dy = curveY(dx, base, amp, c.ph);
        const fade = clamp(Math.min(dx, w - dx) / (w * 0.1), 0, 1);
        const glow = ctx.createRadialGradient(dx, dy, 0, dx, dy, 16);
        glow.addColorStop(0, `rgba(34,190,201,${0.55 * fade})`);
        glow.addColorStop(1, "rgba(34,190,201,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(dx, dy, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(0,140,175,${0.85 * fade})`;
        ctx.beginPath();
        ctx.arc(dx, dy, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const m = 1 + energy * 0.5;
      CURVES.forEach((c, i) => drawCurve(c, i, m));
      STRIPS.forEach((s, i) => drawStrip(s, i, m));
    };

    const frame = (now: number) => {
      raf = 0;
      if (!running) return;
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      time += dt;

      const dScroll = scrollY - prevScrollY;
      const instVel = dScroll / dt;
      prevScrollY = scrollY;
      vel += (instVel - vel) * Math.min(1, dt * 6);
      energy += (clamp(Math.abs(vel) / 1500, 0, 1) - energy) * Math.min(1, dt * 5);
      phase += dt * 0.35 + dScroll * 0.004;
      mouse += (mouseTarget - mouse) * Math.min(1, dt * 4);

      STRIPS.forEach((s, i) => {
        offsets[i] += (s.speed + vel * 0.3 * s.depth * Math.sign(s.speed)) * dt;
      });

      if (time >= nextHl) {
        nextHl = time + HIGHLIGHT_INTERVAL;
        const strip = 1 + (Math.floor(time / HIGHLIGHT_INTERVAL) % 2);
        const s = STRIPS[strip];
        const pitch = clamp(h * 0.1, 44, 78) * (0.78 + s.depth * 0.4) * 1.5 * 1.14;
        const target = (0.2 + Math.random() * 0.6) * w - w / 2;
        hl = { strip, idx: Math.round((offsets[strip] + target) / pitch), start: time };
      }

      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduced || !inView || document.hidden) return;
      running = true;
      last = performance.now();
      prevScrollY = scrollY;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const readScroll = () => {
      scrollY = clamp(window.scrollY, 0, h * 1.2);
    };
    const onScroll = () => readScroll();
    const onPointer = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      mouseTarget = clamp(((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1, -1, 1);
    };
    const onLeave = () => {
      mouseTarget = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    size();
    readScroll();
    prevScrollY = scrollY;
    if (reduced) {
      // 정지 장면 한 컷
      offsets.forEach((_, i) => (offsets[i] = 40 + i * 70));
      hl = { strip: 2, idx: 1, start: 0 };
      time = HIGHLIGHT_INTERVAL * 0.6;
    }
    draw();
    canvas.classList.add("is-live");

    const ro = new ResizeObserver(() => {
      size();
      readScroll();
      if (!running) draw();
    });
    ro.observe(host);

    let io: IntersectionObserver | undefined;
    if (!reduced) {
      io = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      });
      io.observe(host);
      window.addEventListener("scroll", onScroll, { passive: true });
      host.addEventListener("pointermove", onPointer, { passive: true });
      host.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      start();
    }

    return () => {
      stop();
      ro.disconnect();
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      host.removeEventListener("pointermove", onPointer);
      host.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="film-flow" aria-hidden="true" />;
}
