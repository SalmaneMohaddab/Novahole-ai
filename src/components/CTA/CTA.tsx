"use client";

import { useEffect, useRef } from "react";
import styles from "./CTA.module.css";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cta} ref={sectionRef}>
      <div className={styles.bgGlow} />
      <div className={styles.bgGlow2} />
      <div className={`container ${styles.ctaContent} animate-on-scroll`}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaInner}>
            <span className="section-badge">Ready to Start?</span>
            <h2 className={styles.ctaTitle}>
              Start Building with
              <br />
              <span className="gradient-text">Novahole AI Today</span>
            </h2>
            <p className={styles.ctaDescription}>
              Join thousands of teams already using Novahole AI to build
              intelligent applications. Get started free — no credit card
              required.
            </p>
            <div className={styles.ctaButtons}>
              <button className="btn btn-primary btn-lg">
                Get Started Free
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="btn btn-secondary btn-lg">
                Talk to Sales
              </button>
            </div>
            <p className={styles.ctaNote}>
              Free forever for small projects · No credit card needed · Setup in 5 minutes
            </p>
          </div>
          {/* Decorative corners */}
          <div className={`${styles.corner} ${styles.cornerTL}`} />
          <div className={`${styles.corner} ${styles.cornerTR}`} />
          <div className={`${styles.corner} ${styles.cornerBL}`} />
          <div className={`${styles.corner} ${styles.cornerBR}`} />
        </div>
      </div>
    </section>
  );
}
