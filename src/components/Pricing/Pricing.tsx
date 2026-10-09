"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects exploring AI capabilities.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "1,000 API calls/month",
      "2 AI models",
      "Community support",
      "Basic analytics dashboard",
      "Standard latency",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need production-grade AI with advanced features.",
    monthlyPrice: 79,
    yearlyPrice: 63,
    features: [
      "100,000 API calls/month",
      "Unlimited AI models",
      "Priority support (< 4h)",
      "Advanced analytics & monitoring",
      "Custom model fine-tuning",
      "Team collaboration (5 seats)",
      "99.9% uptime SLA",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring dedicated infrastructure and compliance.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited API calls",
      "Dedicated GPU clusters",
      "24/7 dedicated support",
      "Custom SLAs & compliance",
      "On-premise deployment",
      "SSO & advanced security",
      "Unlimited team members",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isYearly, setIsYearly] = useState(false);

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
    <section className={styles.pricing} id="pricing" ref={sectionRef}>
      <div className={styles.bgGlow} />
      <div className="container">
        <div className={`${styles.header} animate-on-scroll`}>
          <span className="section-badge">Pricing</span>
          <h2 className="section-title">
            Simple, Transparent <br />
            <span className="gradient-text-static">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className={styles.billingToggle}>
            <span className={!isYearly ? styles.activeToggle : ""}>Monthly</span>
            <button
              className={styles.toggle}
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle billing period"
            >
              <div className={`${styles.toggleKnob} ${isYearly ? styles.toggleActive : ""}`} />
            </button>
            <span className={isYearly ? styles.activeToggle : ""}>
              Yearly
              <span className={styles.saveBadge}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.popular ? styles.popular : ""} animate-on-scroll stagger-${index + 1}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <div className={styles.priceBlock}>
                {plan.monthlyPrice !== null ? (
                  <>
                    <span className={styles.currency}>$</span>
                    <span className={styles.price}>
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className={styles.period}>/mo</span>
                  </>
                ) : (
                  <span className={styles.customPrice}>Custom</span>
                )}
              </div>

              <button
                className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"} ${styles.planCta}`}
              >
                {plan.cta}
              </button>

              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
