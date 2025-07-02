"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Invest in Real Estate the Right Way",
    date: "June 27, 2025",
    author: "Chinwe Okafor",
    role: "Property Analyst",
    image: "/assets/blog1.webp",
    summary:
      "Discover key strategies for maximizing your returns in the real estate market.",
    readTime: "7 min read",
  },
  {
    id: 2,
    title: "Top Locations to Buy Property in 2025",
    date: "June 20, 2025",
    image: "/assets/blog2.jpeg",
  },
  {
    id: 3,
    title: "Real Estate Trends You Should Know",
    date: "June 15, 2025",
    image: "/assets/blog3.jpg",
  },
  {
    id: 4,
    title: "Is It Better to Rent or Buy?",
    date: "June 5, 2025",
    image: "/assets/blog4.avif",
  },
];

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            marginBottom: "3rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? "1rem" : 0,
          }}
        >
          <h2 style={{ fontSize: "2rem", margin: 0 }}>
            Explore Our Latest Blogs on Real Estate Insights
          </h2>
          <Link
            href="/Blog"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              cursor: "pointer",
              alignSelf: isMobile ? "flex-start" : "center",
              textDecoration: "none",
              display: "flex", // changed to flex for centering
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
            View All
          </Link>
        </div>

        {/* Main Featured Blog */}
        <Link href={`/Blog/${blogs[0].id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              marginBottom: "3rem",
              alignItems: "center",
              background: "#f0f0f0",
              borderRadius: "12px",
              padding: "1rem",
              cursor: "pointer",
              transition: "transform 0.1s",
            }}
          >
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <div style={{ flex: "1" }}>
              <p style={{ color: "#777", fontSize: "0.9rem" }}>
                {blogs[0].date} • {blogs[0].readTime}
              </p>
              <h3 style={{ fontSize: "1.6rem", margin: "0.5rem 0" }}>
                {blogs[0].title}
              </h3>
              <p style={{ color: "#444", marginBottom: "1rem" }}>
                {blogs[0].summary}
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <img
                  src="/assets/author1.webp"
                  alt="Author"
                  style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                />
                <div>
                  <strong style={{ display: "block" }}>{blogs[0].author}</strong>
                  <span style={{ fontSize: "0.85rem", color: "#777" }}>
                    {blogs[0].role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Other Blog Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {blogs.slice(1).map((blog) => (
            <Link key={blog.id} href={`/Blog/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  background: "#f0f0f0",
                  cursor: "pointer",
                  transition: "transform 0.1s",
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem 0" }}>
                    {blog.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#666" }}>
                    {blog.date}
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

export default Blog;
