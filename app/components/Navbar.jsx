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

  const textColor = isHome && !isScrolled ? "#fff" : "#000";

  return (
    <nav
      className={`${styles.nav} ${
        isHome && !isScrolled ? styles.navTransparent : styles.navScrolled
      }`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className={styles.logo} style={{ color: textColor }}>
            Nestro
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.desktopMenu}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={styles.navLink} style={{ color: textColor }}>
                {item.label}
                <span className={styles.linkUnderline}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
              <span
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
