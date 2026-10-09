"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Novahole AI reduced our data processing time by 90%. What used to take our team weeks now happens in real-time. It's been transformative for our operations.",
    name: "Sarah Chen",
    role: "CTO, TechFlow Systems",
    avatar: "SC",
    rating: 5,
  },
  {
    quote:
      "The accuracy of their predictive models is outstanding. We've improved our demand forecasting by 45% since implementing Novahole's analytics engine.",
    name: "Marcus Rodriguez",
    role: "VP of Data Science, RetailMax",
    avatar: "MR",
    rating: 5,
  },
  {
    quote:
      "Their developer experience is unmatched. We integrated the API in under 2 hours and had production-ready AI features shipped the same week. Incredible.",
    name: "Aisha Patel",
    role: "Lead Engineer, CloudBridge",
    avatar: "AP",
    rating: 5,
  },
  {
    quote:
      "As a startup, we needed enterprise-grade AI without enterprise-grade costs. Novahole's pricing is fair and their free tier let us validate our idea first.",
    name: "David Kim",
    role: "Founder & CEO, NexGen Labs",
    avatar: "DK",
    rating: 5,
  },
  {
    quote:
      "The security and compliance features gave us confidence to use AI in our healthcare platform. SOC 2 compliance out of the box was a game-changer.",
    name: "Dr. Emily Foster",
    role: "Chief Medical Officer, HealthAI",
    avatar: "EF",
    rating: 5,
  },
  {
    quote:
      "We replaced three different AI vendors with Novahole. One platform, one API, and better results across the board. The consolidation alone saved us $200k/year.",
    name: "James Thompson",
    role: "Director of Engineering, FinScale",
    avatar: "JT",
    rating: 5,
  },
];

export default function Testimonials() {
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
    <section className={styles.testimonials} id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} animate-on-scroll`}>
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            Loved by Teams <br />
            <span className="gradient-text-static">Around the World</span>
          </h2>
          <p className="section-subtitle">
            See why industry leaders trust Novahole AI to power their most
            critical applications.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.card} animate-on-scroll stagger-${index + 1}`}
            >
              <div className={styles.stars}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{testimonial.name}</span>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
