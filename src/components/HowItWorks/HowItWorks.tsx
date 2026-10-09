"use client";

import { useEffect, useRef } from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    step: "01",
    title: "Connect Your Data",
    description:
      "Seamlessly integrate with 100+ data sources including databases, APIs, cloud storage, and real-time streams. Our universal connectors handle the complexity.",
    visual: (
      <div className={styles.visual1}>
        <div className={styles.connectNode}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
        <div className={styles.connectLine} />
        <div className={styles.connectNode}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          </svg>
        </div>
        <div className={styles.connectLine} />
        <div className={styles.connectNode}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Train & Customize",
    description:
      "Fine-tune pre-trained models with your domain data using our no-code training studio. Watch accuracy improve in real-time with live metrics dashboards.",
    visual: (
      <div className={styles.visual2}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "85%" }} />
          <span>85% Accuracy</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "92%", background: "linear-gradient(90deg, #06b6d4, #10b981)" }} />
          <span>92% Precision</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "97%", background: "linear-gradient(90deg, #10b981, #22c55e)" }} />
          <span>97% Uptime</span>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Deploy & Scale",
    description:
      "One-click deployment to our global edge network. Auto-scaling handles traffic spikes while maintaining sub-10ms latency worldwide.",
    visual: (
      <div className={styles.visual3}>
        <div className={styles.globeGrid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={styles.globeNode} style={{ animationDelay: `${i * 0.2}s` }}>
              <div className={styles.globePulse} />
            </div>
          ))}
        </div>
        <div className={styles.globeLabel}>12 Regions Active</div>
      </div>
    ),
  },
];

export default function HowItWorks() {
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
    <section className={styles.howItWorks} id="how-it-works" ref={sectionRef}>
      <div className={styles.bgLine} />
      <div className="container">
        <div className={`${styles.header} animate-on-scroll`}>
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">
            Three Steps to <br />
            <span className="gradient-text-static">AI-Powered Results</span>
          </h2>
          <p className="section-subtitle">
            From raw data to production-ready AI in minutes, not months.
            Our streamlined workflow eliminates complexity.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={`${styles.step} animate-on-scroll stagger-${index + 1}`}>
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.stepVisual}>{step.visual}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
