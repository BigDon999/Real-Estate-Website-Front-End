"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const agent = {
  name: "Nathan Sterling",
  username: "@NathanSterling",
  phone: "+0 000 000 00",
  email: "nathan@realest.com",
  location: "Boston, MA",
  image: "/assets/agent.jpg",
  bio: `Specializing in finding the perfect homes for clients. With a decade of expertise, Nathan offers data‑driven advice on buying, selling and investing, guiding each client with professionalism and care.`,
  experience: `10+ years in luxury and residential real‑estate. Skilled in market trends, valuation and negotiation, Nathan consistently secures the best deals for his clients.`
};

export default function AgentPage() {
  return (
    <main
      style={{
        fontFamily: "Inter, sans‑serif",
        minHeight: "100vh",
        width: "100%",
        background: "#f7f7f7",
        overflowX: "hidden",
        boxSizing: "border-box",
        padding: "0 1rem"
      }}
    >
      {/* Hero Card */}
      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 200
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
            padding: "5.5rem 2rem 2.5rem",
            maxWidth: 420,
            width: "100%",
            position: "relative",
            textAlign: "center"
          }}
        >
          <div style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #fff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            background: "#eaeaea"
          }}>
            <img
              src={agent.image}
              alt={agent.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </div>

          <div style={{ marginTop: 140 }}>
            <h1
              style={{
                fontSize: "2.1rem",
                fontWeight: 800,
                color: "#181818",
                marginTop: 0,
                letterSpacing: "-0.5px"
              }}
            >
              {agent.name}
            </h1>
            <p style={{ color: "#757575", fontSize: "1.05rem", margin: "0.4rem 0 1.4rem" }}>
              {agent.username}
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: 18, justifyContent: "center" }}>
              <a
                href="#"
                style={{
                  background: "#f1f1f1",
                  borderRadius: "50%",
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#181818"
                }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                style={{
                  background: "#f1f1f1",
                  borderRadius: "50%",
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  color: "#181818"
                }}
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + About */}
      <section
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "2rem auto 4rem",
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "center"
        }}
      >
        {/* Contact Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            padding: "2rem",
            flex: "1 1 340px",
            maxWidth: 360
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 18 }}>Get in touch</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <FaPhoneAlt style={{ color: "#757575" }} /> {agent.phone}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <FaEnvelope style={{ color: "#757575" }} /> {agent.email}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <FaMapMarkerAlt style={{ color: "#757575" }} /> {agent.location}
          </div>
          <Link
            href="/Contact"
            style={{
              background: "#181818",
              color: "#fff",
              padding: "0.9rem 0",
              borderRadius: 8,
              fontWeight: 700,
              textDecoration: "none",
              display: "block",
              textAlign: "center"
            }}
          >
            Contact now →
          </Link>
        </div>

        {/* About + Experience */}
        <div style={{ flex: "2 1 400px", minWidth: 320, display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <h2 style={{ fontSize: "1.13rem", fontWeight: 700, marginBottom: 10 }}>About</h2>
            <p style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#444" }}>{agent.bio}</p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.13rem", fontWeight: 700, marginBottom: 10 }}>Experience</h2>
            <p style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#444" }}>{agent.experience}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
