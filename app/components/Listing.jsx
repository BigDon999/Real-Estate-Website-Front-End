"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const listingsData = [
  {
    id: 1,
    title: "Modern Villa",
    description: "Spacious villa with garden and pool.",
    price: "₦150,000,000",
    image: "/assets/house2 (1).jpeg",
  },
  {
    id: 2,
    title: "Cozy Apartment",
    description: "Ideal for couples, near city center.",
    price: "₦45,000,000",
    image: "/assets/house3.jpeg",
  },
  {
    id: 3,
    title: "Luxury Duplex",
    description: "Fully furnished with smart tech.",
    price: "₦100,000,000",
    image: "/assets/house4.jpeg",
  },
  {
    id: 4,
    title: "Classic Family Home",
    description: "Perfect for growing families.",
    price: "₦60,000,000",
    image: "/assets/house5.png",
  },
  {
    id: 5,
    title: "Greenview Bungalow",
    description: "Quiet neighborhood with lots of green space.",
    price: "₦35,000,000",
    image: "/assets/house6.png",
  },
  {
    id: 6,
    title: "Lakeside Mansion",
    description: "Stunning view with private dock access.",
    price: "₦250,000,000",
    image: "/assets/lake.jpeg",
  },
];

const Listing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ padding: "6rem 2rem", marginTop: "4rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            marginBottom: "1.5rem",
            gap: isMobile ? "1rem" : 0,
          }}
        >
          <h2 style={{ fontSize: "2.5rem", margin: 0 }}>
            Explore Our Listings
          </h2>
          <Link
            href="/Listing"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: isMobile ? "0.35rem 0.9rem" : "0.4rem 1.2rem",
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              textDecoration: "none",
              display: "flex", // Changed from 'inline-block' to 'flex'
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              minWidth: isMobile ? "90px" : "120px",
              boxShadow: isMobile
                ? "0 2px 8px rgba(0,0,0,0.06)"
                : "0 4px 12px rgba(0,0,0,0.08)",
              transition: "all 0.2s",
            }}
          >
            View More
          </Link>
        </div>

        {/* Listings Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {listingsData.map((listing) => (
            <Link key={listing.id} href={`/Listing/${listing.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  background: "#fff",
                  cursor: "pointer",
                  transition: "transform 0.1s",
                }}
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontSize: "1.4rem", margin: "0 0 0.5rem 0" }}>
                    {listing.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#555" }}>
                    {listing.description}
                  </p>
                  <p style={{ fontWeight: "bold", marginTop: "0.8rem" }}>
                    {listing.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listing;
