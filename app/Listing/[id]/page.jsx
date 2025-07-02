"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import AnimatedElement from "../../components/AnimatedElement";

const listingsData = [
  {
    id: 1,
    title: "Modern Villa",
    description: "Spacious villa with garden and pool.",
    price: "₦150,000,000",
    image: "/assets/house2 (1).jpeg",
    extraImage: "/assets/in1.jpg",
    location: "Lekki, Lagos",
    contact: "+234 800 000 0001",
    info: "A modern villa with a beautiful garden and private pool, perfect for families.",
    livingSpace: "450 sqm",
    completionYear: 2022,
    floors: 2,
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 2,
    title: "Cozy Apartment",
    description: "Ideal for couples, near city center.",
    price: "₦45,000,000",
    image: "/assets/house3.jpeg",
    extraImage: "/assets/in2.jpg",
    location: "Victoria Island, Lagos",
    contact: "+234 800 000 0002",
    info: "A cozy apartment close to all amenities and the city center.",
    livingSpace: "120 sqm",
    completionYear: 2020,
    floors: 1,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 3,
    title: "Luxury Duplex",
    description: "Fully furnished with smart tech.",
    price: "₦100,000,000",
    image: "/assets/house4.jpeg",
    extraImage: "/assets/in3.jpg",
    location: "Ikoyi, Lagos",
    contact: "+234 800 000 0003",
    info: "A luxury duplex with the latest smart home technology.",
    livingSpace: "350 sqm",
    completionYear: 2021,
    floors: 2,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 4,
    title: "Classic Family Home",
    description: "Perfect for growing families.",
    price: "₦60,000,000",
    image: "/assets/house5.png",
    extraImage: "/assets/in4.jpg",
    location: "Gwarinpa, Abuja",
    contact: "+234 800 000 0004",
    info: "A classic home in a family-friendly neighborhood.",
    livingSpace: "300 sqm",
    completionYear: 2018,
    floors: 2,
    bedrooms: 3,
    bathrooms: 3,
  },
  {
    id: 5,
    title: "Greenview Bungalow",
    description: "Quiet neighborhood with lots of green space.",
    price: "₦35,000,000",
    image: "/assets/house6.png",
    extraImage: "/assets/in5.jpg",
    location: "Enugu GRA, Enugu",
    contact: "+234 800 000 0005",
    info: "A peaceful bungalow surrounded by greenery.",
    livingSpace: "180 sqm",
    completionYear: 2015,
    floors: 1,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 6,
    title: "Lakeside Mansion",
    description: "Stunning view with private dock access.",
    price: "₦250,000,000",
    image: "/assets/lake.jpeg",
    extraImage: "/assets/in6.jpg",
    location: "Jabi Lake, Abuja",
    contact: "+234 800 000 0006",
    info: "A mansion with breathtaking lake views and private dock.",
    livingSpace: "800 sqm",
    completionYear: 2023,
    floors: 3,
    bedrooms: 7,
    bathrooms: 6,
  },
  {
    id: 7,
    title: "Urban Loft",
    description: "Trendy loft in the heart of downtown.",
    price: "₦80,000,000",
    image: "/assets/3.jpg",
    extraImage: "/assets/in7.jpg",
    location: "Yaba, Lagos",
    contact: "+234 800 000 0007",
    info: "A stylish loft for urban professionals.",
    livingSpace: "160 sqm",
    completionYear: 2019,
    floors: 1,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 8,
    title: "Penthouse Suite",
    description: "Top-floor penthouse with city views.",
    price: "₦300,000,000",
    image: "/assets/penth.jpg",
    extraImage: "/assets/test1.jpg",
    location: "Banana Island, Lagos",
    contact: "+234 800 000 0008",
    info: "A penthouse suite with panoramic city views.",
    livingSpace: "600 sqm",
    completionYear: 2022,
    floors: 2,
    bedrooms: 6,
    bathrooms: 5,
  },
  {
    id: 9,
    title: "Country Cottage",
    description: "Charming cottage surrounded by nature.",
    price: "₦40,000,000",
    image: "/assets/cottage.jpg",
    extraImage: "/assets/in7.jpg",
    location: "Abeokuta, Ogun State",
    contact: "+234 800 000 0009",
    info: "A charming cottage perfect for a quiet retreat.",
    livingSpace: "100 sqm",
    completionYear: 2016,
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 10,
    title: "Beachfront Villa",
    description: "Wake up to the sound of waves every day.",
    price: "₦500,000,000",
    image: "/assets/featured.jpg",
    extraImage: "/assets/flat.jpg",
    location: "Oniru Beach, Lagos",
    contact: "+234 800 000 0010",
    info: "A luxury villa right on the beach.",
    livingSpace: "900 sqm",
    completionYear: 2023,
    floors: 2,
    bedrooms: 8,
    bathrooms: 7,
  },
];

export default function ListingDetailPage() {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const listing = listingsData.find((item) => item.id === id);
  const [showImage, setShowImage] = useState(false);

  if (!listing) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2>Listing Not Found</h2>
        <Link href="/Listing" style={{ color: "#0070f3", textDecoration: "underline" }}>Back to Listings</Link>
      </div>
    );
  }

  return (
    <section style={{ padding: "6rem 2rem", maxWidth: 900, margin: "0 auto", position: "relative" }}>
      <style>{`
        @media (max-width: 700px) {
          .listing-detail-flex {
            flex-direction: column !important;
            gap: 18px !important;
            padding: 1rem !important;
          }
          .listing-detail-mainimg {
            max-height: 200px !important;
            margin-bottom: 16px !important;
          }
          .listing-detail-extraimg-desktop {
            display: none !important;
          }
          .listing-detail-extraimg {
            display: block !important;
            position: static !important;
            min-width: 100% !important;
            max-width: 100% !important;
            margin-top: 24px !important;
          }
          .listing-detail-extraimg img {
            width: 100% !important;
            height: 200px !important;
          }
          .listing-detail-backbtn {
            margin-bottom: 16px !important;
            width: 36px !important;
            height: 36px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
      <AnimatedElement delay={0} duration={800}>
        <Link
          href="/Listing"
          style={{
            color: '#fff',
            background: '#181818',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            lineHeight: 1,
            marginBottom: 24,
            boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          aria-label="Back to Listings"
        >
          &#8592;
        </Link>
      </AnimatedElement>
      
      <AnimatedElement delay={200} duration={1000}>
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 32,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          overflow: "hidden",
          padding: "2rem"
        }}>
          {/* Main Info + Main Image */}
          <div style={{ flex: 1 }}>
            <AnimatedElement delay={400} duration={800}>
              <img
                src={listing.image}
                alt={listing.title}
                style={{ width: "100%", maxHeight: 320, objectFit: "cover", borderRadius: 12, marginBottom: 24 }}
              />
            </AnimatedElement>
            
            <AnimatedElement delay={600} duration={800}>
              <h1 style={{ fontSize: "2.2rem", margin: 0 }}>{listing.title}</h1>
            </AnimatedElement>
            
            <AnimatedElement delay={800} duration={800}>
              <p style={{ fontSize: "1.1rem", color: "#555", margin: "1rem 0 0.5rem 0" }}>{listing.description}</p>
            </AnimatedElement>
            
            <AnimatedElement delay={1000} duration={800}>
              <p style={{ fontWeight: "bold", fontSize: "1.3rem", margin: "0.5rem 0" }}>{listing.price}</p>
            </AnimatedElement>
            
            <AnimatedElement delay={1200} duration={800}>
              <div style={{ margin: "1.5rem 0 1rem 0", color: "#444" }}>
                <div><strong>Location:</strong> {listing.location}</div>
                <div><strong>Contact:</strong> {listing.contact}</div>
                <div style={{ marginTop: 8 }}><strong>Info:</strong> {listing.info}</div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={1400} duration={800}>
              <div style={{ marginTop: 24 }}>
                <h3 style={{ marginBottom: 8 }}>Details</h3>
                <ul style={{ listStyle: "none", padding: 0, color: "#444", fontSize: "1.05rem" }}>
                  <li><strong>Living Space:</strong> {listing.livingSpace}</li>
                  <li><strong>Completion Year:</strong> {listing.completionYear}</li>
                  <li><strong>Floors:</strong> {listing.floors}</li>
                  <li><strong>Bedrooms:</strong> {listing.bedrooms}</li>
                  <li><strong>Bathrooms:</strong> {listing.bathrooms}</li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={1600} duration={800}>
              <Link href="/Contact" style={{
                display: 'inline-block',
                marginTop: 32,
                background: '#000',
                color: '#fff',
                padding: '0.8rem 2.2rem',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1.08rem',
                textDecoration: 'none',
                textAlign: 'center',
                letterSpacing: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                transition: 'background 0.2s',
                cursor: 'pointer'
              }}>
                Contact Agent
              </Link>
            </AnimatedElement>
          </div>
          
          {/* Extra Small Image at Right - Desktop Only */}
          <div className="listing-detail-extraimg-desktop" style={{ minWidth: 120, maxWidth: 140, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <AnimatedElement delay={1800} duration={800}>
              <img
                src={listing.extraImage || "/assets/file.svg"}
                alt={listing.title + " extra"}
                style={{ width: 120, height: 160, objectFit: "cover", borderRadius: 10, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}
                onClick={() => setShowImage(true)}
              />
            </AnimatedElement>
          </div>
        </div>
      </AnimatedElement>

      {/* Extra Image for Mobile - Outside Container */}
      <AnimatedElement delay={1800} duration={800}>
        <div className="listing-detail-extraimg" style={{ 
          display: "none",
          marginTop: "24px",
          width: "100%"
        }}>
          <img
            src={listing.extraImage || "/assets/file.svg"}
            alt={listing.title + " extra"}
            style={{ 
              width: "100%", 
              height: "200px", 
              objectFit: "cover", 
              borderRadius: 10, 
              cursor: "pointer", 
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)" 
            }}
            onClick={() => setShowImage(true)}
          />
        </div>
      </AnimatedElement>
      
      {/* Popup Image Modal */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer"
          }}
        >
          <img
            src={listing.extraImage || "/assets/file.svg"}
            alt={listing.title + " extra"}
            style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
          />
        </div>
      )}
    </section>
  );
} 