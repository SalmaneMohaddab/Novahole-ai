"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = ["#7c3aed", "#a855f7", "#c084fc", "#06b6d4", "#10b981"];

    const createParticles = () => {
      particles = [];
      const count = Math.min(80, Math.floor(window.innerWidth / 15));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      {/* Particle Canvas */}
      <canvas ref={particlesRef} className={styles.particles} />

      {/* Background Glow */}
      <div className={styles.bgGlow} />
      <div className={styles.bgGlowSecondary} />

      {/* Grid Overlay */}
      <div className={styles.gridOverlay} />

      {/* Orbiting Elements */}
      <div className={styles.orbitContainer}>
        <div className={styles.orbit1}>
          <div className={styles.orbitDot} />
        </div>
        <div className={styles.orbit2}>
          <div className={styles.orbitDot} />
        </div>
      </div>

      <div className={`container ${styles.heroContent}`}>
        {/* Badge */}
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot} />
          <span>Introducing Novahole AI v2.0</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>Intelligence That</span>
          <span className={`${styles.heroTitleLine} gradient-text`}>
            Transforms Everything
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Harness the power of next-generation AI to automate workflows,
          generate insights, and build the future — all with a single,
          unified platform designed for teams that move fast.
        </p>

        {/* CTA Buttons */}
        <div className={styles.heroCtas}>
          <button className="btn btn-primary btn-lg">
            Start Building Free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn btn-secondary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>10M+</span>
            <span className={styles.statLabel}>API Calls Daily</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>Enterprise Clients</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className={styles.heroVisual}>
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.mockupTitle}>Novahole Dashboard</span>
              <div />
            </div>
            <div className={styles.mockupBody}>
              {/* Analytics Cards */}
              <div className={styles.mockupGrid}>
                <div className={styles.mockupCard}>
                  <div className={styles.mockupCardIcon} style={{ background: "rgba(124, 58, 237, 0.2)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <div className={styles.mockupCardInfo}>
                    <span className={styles.mockupCardLabel}>Processing</span>
                    <span className={styles.mockupCardValue}>2.4M req/s</span>
                  </div>
                </div>
                <div className={styles.mockupCard}>
                  <div className={styles.mockupCardIcon} style={{ background: "rgba(6, 182, 212, 0.2)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                      <path d="M12 20V10M18 20V4M6 20v-4" />
                    </svg>
                  </div>
                  <div className={styles.mockupCardInfo}>
                    <span className={styles.mockupCardLabel}>Accuracy</span>
                    <span className={styles.mockupCardValue}>99.7%</span>
                  </div>
                </div>
                <div className={styles.mockupCard}>
                  <div className={styles.mockupCardIcon} style={{ background: "rgba(16, 185, 129, 0.2)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className={styles.mockupCardInfo}>
                    <span className={styles.mockupCardLabel}>Models Active</span>
                    <span className={styles.mockupCardValue}>127</span>
                  </div>
                </div>
              </div>
              {/* Chart Area */}
              <div className={styles.chartArea}>
                <div className={styles.chartHeader}>
                  <span>Performance Analytics</span>
                  <span className={styles.chartLive}>● Live</span>
                </div>
                <div className={styles.chartBars}>
                  {[65, 80, 45, 90, 70, 85, 60, 95, 75, 88, 55, 92].map((h, i) => (
                    <div
                      key={i}
                      className={styles.chartBar}
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow behind mockup */}
          <div className={styles.mockupGlow} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
