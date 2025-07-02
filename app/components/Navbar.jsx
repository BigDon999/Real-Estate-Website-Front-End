"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Listings", href: "/Listing" },
    { label: "Blog", href: "/Blog" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isHome && !isScrolled ? "#fff" : "#000";

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        background:
          isHome && !isScrolled ? "transparent" : "rgba(255,255,255,0.8)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        padding: "1rem 2rem",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: textColor,
              cursor: "pointer",
            }}
          >
            Nestro
          </span>
        </Link>

        {/* Desktop Nav */}
        {!isMobile ? (
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((item, index) => (
              <li key={index} style={{ position: "relative" }}>
                <Link href={item.href}>
                  <span
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      color: textColor,
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                      paddingBottom: "4px",
                      display: "inline-block",
                    }}
                  >
                    {item.label}
                    <span
                      style={{
                        display: "block",
                        height: "2px",
                        backgroundColor: textColor,
                        transition: "width 0.3s ease-in-out",
                        width: hoveredIndex === index ? "100%" : "0%",
                      }}
                    ></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "1.5rem",
              backgroundColor: "#fff",
              border: "1px solid #000",
              borderRadius: "6px",
              padding: "6px 12px",
              color: "#000",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#fff",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
              <span
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#000",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
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
