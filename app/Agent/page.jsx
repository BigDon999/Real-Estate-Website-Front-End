"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const agent = {
  name: "Nathan Sterling",
  username: "@Nathan Sterling",
  phone: "+0 000 000 00",
  email: "nathan@realest.com",
  location: "Boston, MA",
  image: "/assets/agent.jpg",
  bio: `Specializing in finding the perfect homes for his clients. With years of expertise in the real estate market, he offers personalized advice on property investments, home buying, and selling strategies. Alexander understands market trends and uses his deep knowledge to guide clients through the process, ensuring they make informed decisions. Whether it's finding a dream home or maximizing property value, Alexander is committed to delivering tailored solutions with professionalism and dedication.`,
  experience: `Has over 10 years of experience as a property consultant, specializing in residential and luxury real estate. He's known for his expertise in market trends, property valuation, and negotiations, helping clients make informed decisions and secure the best deals.`
};

export default function AgentPage() {
  return (
    <main style={{ fontFamily: "Inter, sans-serif", minHeight: "100vh", width: "100%", background: '#f7f7f7', overflowX: 'hidden' }}>
      {/* Main Card */}
      <section style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: 140, marginBottom: 0 }}>
        <div style={{
          background: "#fff",
          borderRadius: 24,
          boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
          padding: "3.5rem 2.5rem 2.5rem 2.5rem",
          maxWidth: 700,
          maxWidth: '100vw',
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "visible"
        }}>
          {/* Agent Image Bottom Left */}
          <img
            src={agent.image}
            alt={agent.name}
            style={{
              width: 130,
              height: 130,
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid #fff",
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              background: "#eaeaea",
              position: "absolute",
              left: 20,
              bottom: -30,
              zIndex: 2
            }}
          />
          <h1 style={{ fontSize: "2.3rem", fontWeight: 800, color: "#181818", margin: "70px 0 0 0", textAlign: "center", letterSpacing: "-1px" }}>{agent.name}</h1>
          <p style={{ color: "#757575", fontSize: "1.15rem", margin: "0.5rem 0 1.5rem 0", fontWeight: 400, textAlign: "center" }}>{agent.username}</p>
          {/* Social Icons */}
          <div style={{ display: "flex", gap: 18, margin: "0 0 0.5rem 0" }}>
            <a href="#" style={{ color: "#181818", fontSize: 22, background: "#f3f3f3", borderRadius: "50%", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}><FaXTwitter /></a>
            <a href="#" style={{ color: "#181818", fontSize: 22, background: "#f3f3f3", borderRadius: "50%", padding: 8, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}><FaLinkedinIn /></a>
          </div>
        </div>
      </section>

      {/* Contact + About/Experience Section */}
      <section style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: 40,
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 40
      }}>
        {/* Contact Card */}
        <div style={{
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          padding: "2.2rem 2rem 2rem 2rem",
          minWidth: 290,
          maxWidth: 340,
          flex: "1 1 320px",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}>
          <h3 style={{ color: "#181818", fontWeight: 700, fontSize: "1.13rem", marginBottom: 18 }}>Get in touch</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#222", fontSize: "1.08rem", marginBottom: 10 }}><FaPhoneAlt style={{ color: "#757575" }} /> {agent.phone}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#222", fontSize: "1.08rem", marginBottom: 10 }}><FaEnvelope style={{ color: "#757575" }} /> {agent.email}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#222", fontSize: "1.08rem", marginBottom: 18 }}><FaMapMarkerAlt style={{ color: "#757575" }} /> {agent.location}</div>
          <Link
            href="/Contact"
            style={{
              background: "#181818",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "0.9rem 0",
              fontWeight: 700,
              fontSize: "1.08rem",
              cursor: "pointer",
              width: "100%",
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            Contact now <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
          </Link>
        </div>
        {/* About & Experience */}
        <div style={{
          flex: "2 1 400px",
          minWidth: 320,
          display: "flex",
          flexDirection: "column",
          gap: 32
        }}>
          <div>
            <h2 style={{ color: "#181818", fontWeight: 700, fontSize: "1.13rem", marginBottom: 10 }}>About</h2>
            <p style={{ color: "#444", fontSize: "1.08rem", lineHeight: 1.7 }}>{agent.bio}</p>
          </div>
          <div>
            <h2 style={{ color: "#181818", fontWeight: 700, fontSize: "1.13rem", marginBottom: 10 }}>Experience</h2>
            <p style={{ color: "#444", fontSize: "1.08rem", lineHeight: 1.7 }}>{agent.experience}</p>
          </div>
        </div>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          section[style*='maxWidth: 1200'] {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 24px !important;
          }
          section[style*='maxWidth: 1200'] > div {
            max-width: 100% !important;
            min-width: 0 !important;
          }
        }
        @media (max-width: 600px) {
          section[style*='marginTop: 140'] {
            margin-top: 90px !important;
          }
          div[style*='maxWidth: 700'] {
            padding-top: 90px !important;
          }
          img[alt='Nathan Sterling'] {
            width: 90px !important;
            height: 90px !important;
            left: 10px !important;
            bottom: -18px !important;
          }
        }
      `}</style>
    </main>
  );
}
