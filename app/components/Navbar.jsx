"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Listings", href: "/Listing" },
    { label: "Blog", href: "/Blog" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const textColor = isHome && !isScrolled && !menuOpen ? "#fff" : "#000";
  const logoColor = menuOpen ? "#000" : textColor;
  const hamburgerColor = menuOpen ? "#000" : textColor;

  return (
    <>
      <nav
        className={`${styles.nav} ${
          isHome && !isScrolled ? styles.navTransparent : styles.navScrolled
        }`}
      >
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", zIndex: 1002 }}>
            <span className={styles.logo} style={{ color: logoColor }}>
              Nestro
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.desktopMenu}>
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={styles.navLink} style={{ color: textColor }}>
                  {item.label}
                  <span 
                    className={styles.linkUnderline} 
                    style={{ backgroundColor: textColor }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            className={styles.mobileButton}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={styles.hamburger}>
              <span 
                className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} 
                style={{ backgroundColor: hamburgerColor }}
              ></span>
              <span 
                className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} 
                style={{ backgroundColor: hamburgerColor }}
              ></span>
              <span 
                className={`${styles.bar} ${menuOpen ? styles.barOpen : ""}`} 
                style={{ backgroundColor: hamburgerColor }}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((item, index) => (
            <li key={index} className={styles.mobileLinkItem}>
              <Link 
                href={item.href} 
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
