import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

interface Particle {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let nodes: Node[] = [];
    let particles: Particle[] = [];
    const MAX_DIST = 180;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      const count = Math.max(30, Math.floor((canvas.width * canvas.height) / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.5 + 0.25,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
      particles = Array.from({ length: 18 }, () => ({
        fromIdx: Math.floor(Math.random() * count),
        toIdx: Math.floor(Math.random() * count),
        progress: Math.random(),
        speed: Math.random() * 0.004 + 0.0015,
      }));
    };

    const drawPipeNetwork = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.save();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(0,208,132,0.10)";
      ctx.fillStyle = "rgba(0,208,132,0.25)";

      const drawSegment = (x1: number, y1: number, x2: number, y2: number) => {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      };

      const drawJoint = (x: number, y: number, r = 4) => {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      };

      // Left pipe tree
      const lx = w * 0.05;
      drawSegment(lx, h * 0.1, lx, h * 0.72);
      drawSegment(lx, h * 0.28, lx + w * 0.18, h * 0.28);
      drawSegment(lx + w * 0.18, h * 0.28, lx + w * 0.18, h * 0.55);
      drawSegment(lx + w * 0.18, h * 0.55, lx + w * 0.3, h * 0.55);
      drawSegment(lx, h * 0.52, lx + w * 0.1, h * 0.52);
      drawSegment(lx + w * 0.1, h * 0.52, lx + w * 0.1, h * 0.68);
      [
        [lx, h * 0.1], [lx, h * 0.28], [lx + w * 0.18, h * 0.28],
        [lx + w * 0.18, h * 0.55], [lx + w * 0.3, h * 0.55],
        [lx, h * 0.52], [lx + w * 0.1, h * 0.52], [lx + w * 0.1, h * 0.68],
        [lx, h * 0.72],
      ].forEach(([x, y]) => drawJoint(x, y));

      // Right pipe tree
      const rx = w * 0.95;
      drawSegment(rx, h * 0.15, rx, h * 0.75);
      drawSegment(rx, h * 0.35, rx - w * 0.18, h * 0.35);
      drawSegment(rx - w * 0.18, h * 0.35, rx - w * 0.18, h * 0.62);
      drawSegment(rx - w * 0.18, h * 0.62, rx - w * 0.3, h * 0.62);
      drawSegment(rx, h * 0.58, rx - w * 0.1, h * 0.58);
      drawSegment(rx - w * 0.1, h * 0.58, rx - w * 0.1, h * 0.45);
      [
        [rx, h * 0.15], [rx, h * 0.35], [rx - w * 0.18, h * 0.35],
        [rx - w * 0.18, h * 0.62], [rx - w * 0.3, h * 0.62],
        [rx, h * 0.58], [rx - w * 0.1, h * 0.58], [rx - w * 0.1, h * 0.45],
        [rx, h * 0.75],
      ].forEach(([x, y]) => drawJoint(x, y));

      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep obsidian background
      const bg = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.4, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.75
      );
      bg.addColorStop(0, "#1c1c1c");
      bg.addColorStop(0.5, "#141414");
      bg.addColorStop(1, "#0a0a0a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle emerald center glow
      const glow = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.45, 0,
        canvas.width * 0.5, canvas.height * 0.45, canvas.width * 0.35
      );
      glow.addColorStop(0, "rgba(0,208,132,0.04)");
      glow.addColorStop(1, "rgba(0,208,132,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawPipeNetwork();

      // Update nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += 0.018;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,208,132,${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.pulsePhase) * 0.4 + 0.6;
        const r = n.radius * (1 + Math.sin(n.pulsePhase) * 0.4);

        // Outer glow
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
        g.addColorStop(0, `rgba(0,208,132,${n.opacity * pulse * 0.5})`);
        g.addColorStop(1, "rgba(0,208,132,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,208,132,${n.opacity * pulse})`;
        ctx.fill();
      });

      // Particles
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.fromIdx = p.toIdx;
          // Pick a nearby node
          const from = nodes[p.fromIdx];
          let best = -1;
          let bestD = Infinity;
          nodes.forEach((n, i) => {
            if (i === p.fromIdx) return;
            const dx = n.x - from.x;
            const dy = n.y - from.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < MAX_DIST && d < bestD && Math.random() > 0.4) {
              bestD = d;
              best = i;
            }
          });
          p.toIdx = best >= 0 ? best : Math.floor(Math.random() * nodes.length);
        }

        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        if (!from || !to) return;

        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        // Trail
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(px, py);
        ctx.strokeStyle = "rgba(0,208,132,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Glowing particle
        const pg = ctx.createRadialGradient(px, py, 0, px, py, 7);
        pg.addColorStop(0, "rgba(0,255,160,1)");
        pg.addColorStop(0.4, "rgba(0,208,132,0.6)");
        pg.addColorStop(1, "rgba(0,208,132,0)");
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.fillStyle = pg;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.85 }}
    />
  );
}
