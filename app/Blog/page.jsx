"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnimatedElement from "../components/AnimatedElement";

const blogs = [
  {
    id: 1,
    title: "How to Invest in Real Estate the Right Way",
    date: "June 27, 2025",
    author: "Chinwe Okafor",
    authorImage: "/assets/author1.webp",
    role: "Property Analyst",
    image: "/assets/blog1.webp",
    summary: "Discover key strategies for maximizing your returns in the real estate market.",
    readTime: "7 min read",
    category: "Investment",
  },
  {
    id: 2,
    title: "Top Locations to Buy Property in 2025",
    date: "June 20, 2025",
    author: "David Adebayo",
    authorImage: "/assets/author2.jpg",
    role: "Market Researcher",
    image: "/assets/blog2.jpeg",
    summary: "Explore the most promising locations for property investment this year.",
    readTime: "5 min read",
    category: "Market Trends",
  },
  {
    id: 3,
    title: "Real Estate Trends You Should Know",
    date: "June 15, 2025",
    author: "Sarah Johnson",
    authorImage: "/assets/author3.jpg",
    role: "Real Estate Expert",
    image: "/assets/blog3.jpg",
    summary: "Stay ahead of the curve with these emerging real estate trends.",
    readTime: "6 min read",
    category: "Trends",
  },
  {
    id: 4,
    title: "Is It Better to Rent or Buy?",
    date: "June 5, 2025",
    author: "Michael Chen",
    authorImage: "/assets/author4.webp",
    role: "Financial Advisor",
    image: "/assets/blog4.avif",
    summary: "A comprehensive guide to help you decide between renting and buying.",
    readTime: "8 min read",
    category: "Advice",
  },
];

export default function BlogPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = ["All", ...new Set(blogs.map(blog => blog.category))];
  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <section style={{ padding: "6rem 2rem", marginTop: "4rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <AnimatedElement delay={0} duration={1000}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "2.5rem", margin: "0 0 1rem 0" }}>Real Estate Blog</h1>
            <p style={{ fontSize: "1.1rem", color: "#666", margin: "0 0 2rem 0" }}>
              Stay informed with the latest insights, trends, and advice from our experts
            </p>
            
            {/* Category Filter */}
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "0.5rem", 
              justifyContent: "center",
              marginBottom: "2rem"
            }}>
              {categories.map((category, index) => (
                <AnimatedElement key={category} delay={index * 100} duration={800}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      padding: "0.5rem 1rem",
                      border: "none",
                      borderRadius: "20px",
                      background: selectedCategory === category ? "#000" : "#f0f0f0",
                      color: selectedCategory === category ? "#fff" : "#333",
                      cursor: "pointer",
                      fontSize: "0.9rem",
                      transition: "all 0.2s"
                    }}
                  >
                    {category}
                  </button>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Featured Blog */}
        {selectedCategory === "All" && (
          <AnimatedElement delay={200} duration={1000}>
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Featured Article</h2>
              <Link href={`/Blog/${blogs[0].id}`} style={{ textDecoration: "none", color: "inherit" }}>
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
                    src={blogs[0].image}
                    alt={blogs[0].title}
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
                        {blogs[0].category}
                      </span>
                      <span style={{ color: "#666", fontSize: "0.9rem" }}>
                        {blogs[0].date} • {blogs[0].readTime}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.8rem", margin: "0 0 1rem 0" }}>
                      {blogs[0].title}
                    </h3>
                    <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                      {blogs[0].summary}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <img
                        src={blogs[0].authorImage}
                        alt={blogs[0].author}
                        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
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
            </div>
          </AnimatedElement>
        )}

        {/* Blog Grid */}
        <AnimatedElement delay={400} duration={1000}>
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "2rem"
            }}>
              {filteredBlogs.slice(selectedCategory === "All" ? 1 : 0).map((blog, index) => (
                <AnimatedElement key={blog.id} delay={index * 150} duration={800}>
                  <Link href={`/Blog/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{
                      background: "#f8f8f8",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      padding: "1.5rem"
                    }}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ 
                          width: "100%", 
                          height: "250px", 
                          objectFit: "cover",
                          borderRadius: "12px",
                          marginBottom: "1.5rem"
                        }}
                      />
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                          <span style={{ 
                            background: "#000", 
                            color: "#fff", 
                            padding: "0.3rem 0.8rem", 
                            borderRadius: "12px", 
                            fontSize: "0.8rem" 
                          }}>
                            {blog.category}
                          </span>
                          <span style={{ color: "#666", fontSize: "0.9rem" }}>
                            {blog.readTime}
                          </span>
                        </div>
                        <h3 style={{ fontSize: "1.6rem", margin: "0 0 1rem 0", lineHeight: 1.4 }}>
                          {blog.title}
                        </h3>
                        <p style={{ color: "#555", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                          {blog.summary}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span style={{ color: "#666", fontSize: "0.9rem" }}>{blog.date}</span>
                          {blog.author && blog.authorImage && (
                            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <img
                                src={blog.authorImage}
                                alt={blog.author}
                                style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                              />
                              <span style={{ color: "#666", fontSize: "0.9rem" }}>By {blog.author}</span>
                            </span>
                          )}
                        </div>
                      </div>
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