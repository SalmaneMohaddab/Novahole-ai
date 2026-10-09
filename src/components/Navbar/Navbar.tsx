"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    // Determine active section
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i]);
          return;
        }
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="url(#logoGrad)" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="6" fill="url(#logoGrad)" />
              <path
                d="M16 2 L16 6 M16 26 L16 30 M2 16 L6 16 M26 16 L30 16"
                stroke="url(#logoGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>
            Nova<span className={styles.logoAccent}>hole</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href.replace("#", "") ? styles.active : ""
              }`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.navActions}>
          <button className={`btn btn-primary ${styles.ctaBtn}`}>
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileToggle} ${isMobileOpen ? styles.open : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileOpen : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={styles.mobileLink}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
