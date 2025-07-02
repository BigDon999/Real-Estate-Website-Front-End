"use client";
import React, { useState } from "react";

const Features = () => {
  const features = [
    {
      title: "Verified Listings",
      content:
        "All properties are thoroughly verified to ensure accuracy and authenticity.",
    },
    {
      title: "Trusted Agents",
      content: "Work with certified agents who are experienced and reliable.",
    },
    {
      title: "Easy Communication",
      content:
        "Contact sellers or agents directly through our secure platform.",
    },
    {
      title: "Flexible Payment Plans",
      content:
        "We offer diverse payment options tailored to your financial needs.",
    },
    {
      title: "Neighborhood Insights",
      content:
        "Get real data and reviews about the areas you're interested in.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        padding: "5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: "1 1 500px" }}>
          <span
            style={{
              backgroundColor: "#ABC3CD", // Casper background
              color: "#000",
              padding: "0.4rem 1.2rem",
              borderRadius: "30px",
              fontWeight: "600",
              fontSize: "0.9rem",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            Features
          </span>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              marginBottom: "8.8rem",
            }}
          >
            Discover our features
          </h2>

          {features.map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "1rem 0",
                cursor: "pointer",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", margin: 0, color: "#333" }}>
                {item.title}
              </h3>
              {activeIndex === index && (
                <p
                  style={{
                    marginTop: "0.5rem",
                    color: "#666",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div style={{ flex: "1 1 400px" }}>
          <img
            src="/assets/featured.jpg"
            alt="Features"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
