"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "How do I list my property?",
    answer: "You can list your property by signing up and filling out the property listing form under your dashboard.",
  },
  {
    question: "Are your listings verified?",
    answer: "Yes, all our listings go through a thorough verification process before they go live.",
  },
  {
    question: "Can I schedule a visit?",
    answer: "Absolutely! Each listing has a 'Schedule Visit' button to help you set a time with the agent.",
  },
  {
    question: "Is there a fee for using the platform?",
    answer: "Browsing is completely free. Listing or premium services may involve a fee.",
  },
  {
    question: "How do I contact an agent?",
    answer: "Each listing includes contact details for the assigned agent. You can also message them through our platform.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: "5rem 2rem"}}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Left Column */}
        <div style={{ flex: "1 1 400px" }}>
          <span
            style={{
              backgroundColor: "#ABC3CD",
              color: "#000",
              padding: "0.3rem 1rem",
              borderRadius: "30px",
              fontWeight: "bold",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            FAQ
          </span>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Your Questions Answered</h2>
          <p style={{ fontSize: "1rem", color: "#555", marginBottom: "1.5rem" }}>
            Here are some of the most common questions we receive from clients and users.
          </p>
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1.2rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Right Column: FAQs */}
        <div style={{ flex: "1 1 600px", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "10px",
                padding: "1rem 1.2rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: openIndex === index ? "0 2px 6px rgba(0,0,0,0.1)" : "none",
              }}
              onClick={() => toggleFAQ(index)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "600",
                  fontSize: "1rem",
                  color: "#333",
                }}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && (
                <p style={{ marginTop: "0.7rem", color: "#555", fontSize: "0.95rem" }}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
