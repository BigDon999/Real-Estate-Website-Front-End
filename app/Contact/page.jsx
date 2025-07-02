"use client";
import React, { useState } from "react";
import AnimatedElement from "../components/AnimatedElement";

const Contact = () => {
  const [formData, setFormData] = useState({
    service: "",
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can connect to backend or Firebase here
  };

  return (
    <section style={{ padding: "5rem 2rem", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <AnimatedElement delay={0} duration={1000}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Get in Touch</h2>
        </AnimatedElement>
        
        <AnimatedElement delay={200} duration={1000}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            {/* Dropdown */}
            <AnimatedElement delay={400} duration={800}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Service Needed</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select an option</option>
                  <option value="buy">Buy House</option>
                  <option value="consult">Consulting</option>
                  <option value="sell">Sell Property</option>
                </select>
              </div>
            </AnimatedElement>

            {/* Full Name and Phone on same row */}
            <AnimatedElement delay={600} duration={800}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
            </AnimatedElement>

            {/* Email */}
            <AnimatedElement delay={800} duration={800}>
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
            </AnimatedElement>

            {/* Message */}
            <AnimatedElement delay={1000} duration={800}>
              <div style={{ marginBottom: "2rem" }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            </AnimatedElement>

            {/* Submit */}
            <AnimatedElement delay={1200} duration={800}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Submit
              </button>
            </AnimatedElement>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "500",
  fontSize: "0.95rem",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  fontSize: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  outline: "none",
  boxSizing: "border-box",
};

export default Contact;
