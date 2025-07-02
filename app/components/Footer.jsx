"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/assets/homehero.png')", // Make sure hero.jpg exists in /public/assets
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "5rem 2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <div style={{ flex: "1 1 250px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Nestro</h2>
          <p style={{ color: "#ddd", marginTop: "1rem", fontSize: "0.95rem" }}>
            Bringing you closer to your dream home with trust and ease.
          </p>
        </div>

        {/* Main Pages */}
        <div style={{ flex: "1 1 150px" }}>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Main Pages</h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#eee" }}>
            <li><Link href="/Listing" style={linkStyle}>Listings</Link></li>
            <li><Link href="/Blog" style={linkStyle}>Blog</Link></li>
            <li><Link href="/About" style={linkStyle}>About</Link></li>
            <li><Link href="/Contact" style={linkStyle}>Contact</Link></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div style={{ flex: "1 1 150px" }}>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Other Pages</h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#eee" }}>
            <li><Link href="/Agent" style={linkStyle}>Agent</Link></li>
            <li><Link href="/PrivacyPolicy" style={linkStyle}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div style={{ flex: "1 1 150px" }}>
          <h4 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Follow Us</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="https://facebook.com" target="_blank" style={linkStyle}>Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" style={linkStyle}>Instagram</a>
            </li>
            <li>
              <a href="https://wa.me/234XXXXXXXXXX" target="_blank" style={linkStyle}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{ textAlign: "center", marginTop: "4rem", color: "#ccc", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} Nestro. All rights reserved.
      </div>
    </footer>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#eee",
  display: "block",
  marginBottom: "0.5rem",
  fontSize: "0.95rem",
};

export default Footer;
