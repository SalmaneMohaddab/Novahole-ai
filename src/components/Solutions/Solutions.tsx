"use client";

import { useEffect, useRef } from "react";
import styles from "./Solutions.module.css";

const solutions = [
  {
    category: "Natural Language",
    title: "Conversational AI",
    description: "Deploy intelligent chatbots and virtual assistants that understand context, sentiment, and intent with human-like precision.",
    metrics: ["95% Resolution Rate", "< 2s Response Time"],
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    category: "Computer Vision",
    title: "Visual Intelligence",
    description: "Analyze images and video in real-time. Object detection, facial recognition, scene understanding, and defect detection at scale.",
    metrics: ["99.2% Accuracy", "30fps Processing"],
    gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
  },
  {
    category: "Predictive Analytics",
    title: "Forecasting Engine",
    description: "Make data-driven decisions with AI that predicts market trends, customer behavior, and operational risks weeks in advance.",
    metrics: ["87% Forecast Accuracy", "6-Week Horizon"],
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
  },
  {
    category: "Document Intelligence",
    title: "Smart Document Processing",
    description: "Extract, classify, and process documents automatically. From invoices to contracts — handle any format with intelligent extraction.",
    metrics: ["99.5% Extraction Rate", "500+ Doc Types"],
    gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
  },
];

export default function Solutions() {
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
    <section className={styles.solutions} id="solutions" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} animate-on-scroll`}>
          <span className="section-badge">Solutions</span>
          <h2 className="section-title">
            AI Solutions for <br />
            <span className="gradient-text-static">Every Challenge</span>
          </h2>
          <p className="section-subtitle">
            Purpose-built AI modules that solve real business problems,
            backed by industry-leading accuracy and speed.
          </p>
        </div>

        <div className={styles.grid}>
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${styles.card} animate-on-scroll stagger-${index + 1}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardCategory} style={{ background: solution.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {solution.category}
                </span>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
              </div>
              <p className={styles.cardDescription}>{solution.description}</p>
              <div className={styles.cardMetrics}>
                {solution.metrics.map((metric, i) => (
                  <span key={i} className={styles.metric}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {metric}
                  </span>
                ))}
              </div>
              <button className={styles.cardLink}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <div className={styles.cardAccent} style={{ background: solution.gradient }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
