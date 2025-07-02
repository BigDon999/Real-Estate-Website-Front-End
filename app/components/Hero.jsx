"use client";
import React from "react";
import Link from "next/link";
import AnimatedElement from "./AnimatedElement";

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/assets/homehero.png')", // replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1rem",
        position: "relative",
      }}
    >
      {/* Optional white fade at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: "80px",
          width: "100%",
          background: "linear-gradient(to top, #fff, transparent)",
        }}
      ></div>

      {/* Content */}
      <AnimatedElement delay={0} duration={1000}>
        <div style={{ zIndex: 2 }}>
          <h1
            style={{
              fontSize: "3rem",
              color: "#fff",
              marginBottom: "1rem",
              maxWidth: "800px",
            }}
          >
            Discover Your Perfect Home
          </h1>
          <p
            style={{
              color: "#f0f0f0",
              fontSize: "1.2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem auto",
            }}
          >
            Explore luxury listings, trusted agents, and insights to help you find the right home for your future.
          </p>
          <Link href="/Contact" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                padding: isMobile ? "0.5rem 1.2rem" : "0.8rem 2rem",
                borderRadius: "30px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: isMobile ? "0.95rem" : "1rem",
                minWidth: isMobile ? "110px" : "140px",
                boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.06)" : "0 4px 12px rgba(0,0,0,0.08)",
                transition: "all 0.2s"
              }}
            >
              Get Started →
            </button>
          </Link>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default Hero;
