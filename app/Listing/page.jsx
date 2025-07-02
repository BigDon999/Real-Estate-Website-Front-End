"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedElement from "../components/AnimatedElement";

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
  {
    id: 7,
    title: "Urban Loft",
    description: "Trendy loft in the heart of downtown.",
    price: "₦80,000,000",
    image: "/assets/3.jpg",
  },
  {
    id: 8,
    title: "Penthouse Suite",
    description: "Top-floor penthouse with city views.",
    price: "₦300,000,000",
    image: "/assets/penth.jpg",
  },
  {
    id: 9,
    title: "Country Cottage",
    description: "Charming cottage surrounded by nature.",
    price: "₦40,000,000",
    image: "/assets/cottage.jpg",
  },
  {
    id: 10,
    title: "Beachfront Villa",
    description: "Wake up to the sound of waves every day.",
    price: "₦500,000,000",
    image: "/assets/featured.jpg",
  },
];

export default function ListingPage() {
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
        <AnimatedElement delay={0} duration={1000}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0" }}>All Listings</h1>
            <p style={{ fontSize: "1.1rem", color: "#666", margin: "0 0 2rem 0" }}>
              Explore our wide range of properties
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={200} duration={1000}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Featured Listing</h2>
            <Link href={`/Listing/${listingsData[0].id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: "2rem",
                background: "#f8f8f8",
                borderRadius: "16px",
                padding: "2rem",
                cursor: "pointer",
                transition: "transform 0.2s"
              }}>
                <img
                  src={listingsData[0].image}
                  alt={listingsData[0].title}
                  style={{
                    width: isMobile ? "100%" : "400px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <span style={{ 
                      background: "#000", 
                      color: "#fff", 
                      padding: "0.3rem 0.8rem", 
                      borderRadius: "12px", 
                      fontSize: "0.8rem" 
                    }}>
                      {listingsData[0].title}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.8rem", margin: "0 0 1rem 0" }}>
                    {listingsData[0].title}
                  </h3>
                  <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {listingsData[0].description}
                  </p>
                  <p style={{ fontWeight: "bold", marginTop: "0.8rem" }}>
                    {listingsData[0].price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={400} duration={1000}>
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>All Listings</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "2rem"
            }}>
              {listingsData.slice(1).map((listing, index) => (
                <AnimatedElement key={listing.id} delay={index * 150} duration={800}>
                  <Link
                    href={`/Listing/${listing.id}`}
                    style={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      background: "#fff",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "transform 0.2s",
                      display: "block"
                    }}
                  >
                    <img
                      src={listing.image}
                      alt={listing.title}
                      style={{ 
                        width: "100%", 
                        height: "250px", 
                        objectFit: "cover",
                        borderRadius: "12px",
                        marginBottom: "1.5rem"
                      }}
                    />
                    <div style={{ padding: "1rem" }}>
                      <h3 style={{ fontSize: "1.6rem", margin: "0 0 1rem 0", lineHeight: 1.4 }}>
                        {listing.title}
                      </h3>
                      <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                        {listing.description}
                      </p>
                      <p style={{ fontWeight: "bold", marginTop: "0.8rem" }}>
                        {listing.price}
                      </p>
                    </div>
                  </Link>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}