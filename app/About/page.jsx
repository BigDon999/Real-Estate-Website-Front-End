"use client";
import React from "react";
import AnimatedElement from "../components/AnimatedElement";

const About = () => {
  return (
    <main style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto", marginTop: "4rem" }}>
      {/* Hero Section */}
      <AnimatedElement delay={0} duration={1000}>
        <section style={{ marginBottom: "4rem",  }}>
          <span style={{ 
            backgroundColor:  "#ABC3CD", 
            color: "#000", 
            padding: "0.3rem 0.7rem", 
            borderRadius: "20px", 
            fontSize: "0.85rem", 
            fontWeight: "bold", 
            whiteSpace: "nowrap", 
            display: "inline-block" 
          }}>
            About
          </span>
          <h1 style={{ fontSize: "2.2rem", marginTop: "1rem" }}>Redefining the way you experience real estate</h1>
          <p style={{ color: "#555", maxWidth: "700px", margin: "0 auto" }}>
            At Realest, we are committed to making real estate transactions effortless.
          </p>
          <img
            src="/assets/homehero.png"
            alt="Modern Home"
            style={{ 
              width: "100%", 
              borderRadius: "16px", 
              marginTop: "2rem" 
            }}
          />
        </section>
      </AnimatedElement>

      {/* Services Section */}
      <AnimatedElement delay={200} duration={1000}>
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            gap: "2rem" 
          }}>
            {[
              { title: "Wide property selection", desc: "Diverse residential and commercial listings", icon: "🏠" },
              { title: "Market expertise", desc: "Data-driven insights to guide smart buying", icon: "📈" },
              { title: "Hassle-free transactions", desc: "Smooth processes from evaluation to closing", icon: "🤝" },
            ].map((item, i) => (
              <AnimatedElement key={i} delay={i * 200} duration={800}>
                <div style={{ 
                  flex: "1 1 280px", 
                  textAlign: "center" 
                }}>
                  <div style={{ fontSize: "2rem" }}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p style={{ color: "#555" }}>{item.desc}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </section>
      </AnimatedElement>

      {/* Testimonials Section */}
      <section style={{ marginBottom: "4rem",}}>
        <span style={{ backgroundColor:  "#ABC3CD", color: "#000", padding: "0.3rem 0.7rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "bold", whiteSpace: "nowrap" }}>
          Testimonials
        </span>
        <h2 style={{ fontSize: "1.8rem", marginTop: "1rem" }}>In our clients' words, real estate done right</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", marginTop: "2rem" }}>
          {[
            { name: "Ryan Mitchell", role: "Architect", text: "Incredible service from start to finish.", image: "/assets/test1.jpg" },
            { name: "Brandon Lewis", role: "Attorney", text: "They made selling my home effortless.", image: "/assets/test2.jpg" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "1rem", flex: "1 1 280px", maxWidth: "340px" }}>
              <p>"{item.text}"</p>
              <img src={item.image} alt={item.name} style={{ width: "100%", height: "auto", borderRadius: "12px", margin: "1rem 0", objectFit: "cover" }} />
              <strong>{item.name}</strong>
              <p style={{ fontSize: "0.85rem", color: "#777" }}>{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}>Meet Our Team</h2>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "2rem", 
          justifyContent: "center" 
        }}>
          {[
            { name: "Chinwe Okafor", role: "CEO", image: "/assets/team1.webp" },
            { name: "David Adebayo", role: "CTO", image: "/assets/team2.webp" },
            { name: "Sarah Johnson", role: "CFO", image: "/assets/team3.webp" },
          ].map((member, i) => (
            <div key={i} style={{ 
              textAlign: "center", 
              flex: "1 1 200px" 
            }}>
              <img
                src={member.image}
                alt={member.name}
                style={{ 
                  width: "120px", 
                  height: "120px", 
                  borderRadius: "16px", 
                  objectFit: "cover", 
                  marginBottom: "1rem" 
                }}
              />
              <h3 style={{ marginBottom: "0.5rem" }}>{member.name}</h3>
              <p style={{ color: "#555" }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section style={{ marginBottom: "4rem", }}>
        <span style={{ backgroundColor:  "#ABC3CD", color: "#000", padding: "0.3rem 0.7rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "bold", whiteSpace: "nowrap" }}>
          Why us
        </span>
        <h2 style={{ fontSize: "1.8rem", marginTop: "1rem" }}>A smooth and stress-free journey</h2>
        <p style={{ color: "#555", maxWidth: "700px", marginBottom: "2rem", marginLeft: "auto", marginRight: "auto" }}>
          We handle every detail with care and expertise from beginning to end.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {[
            "Initial Consultation",
            "Market analysis & strategy",
            "Property Search or Listing",
            "Home preparation & staging",
            "Negotiation and Closing",
            "Post-sale support",
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              <h4 style={{ marginBottom: "0.5rem" }}>{item}</h4>
              <p style={{ color: "#666", fontSize: "0.95rem" }}>
                We offer tailored support and expert advice throughout each step of your real estate process.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ready to Get Started?</h2>
        <p style={{ color: "#555", marginBottom: "2rem" }}>
          Contact us today to learn more about our services and how we can help you.
        </p>
        <button style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1.1rem",
          fontWeight: "bold"
        }}>
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default About;
