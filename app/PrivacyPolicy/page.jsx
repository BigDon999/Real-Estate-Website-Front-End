"use client";
import React from 'react';
import AnimatedElement from "../components/AnimatedElement";

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f7f7', padding: '60px 0', fontFamily: 'Inter, sans-serif' }}>
      <AnimatedElement delay={0} duration={1000}>
        <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#181818', margin: '60px 0 32px 0', textAlign: 'center', letterSpacing: '-1px' }}>
          Privacy Policy
        </h1>
      </AnimatedElement>
      
      <AnimatedElement delay={200} duration={1000}>
        <section className="privacy-card-section" style={{
          maxWidth: 700,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 4px 32px rgba(0,0,0,0.06)',
          padding: '3rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <div style={{ color: '#444', fontSize: '1.08rem', lineHeight: 1.7 }}>
            <AnimatedElement delay={400} duration={800}>
              <p>
                <strong>Effective Date:</strong> January 1, 2024
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={600} duration={800}>
              <p>
                We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={800} duration={800}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '1.5rem 0 0.5rem 0', color: '#181818' }}>Information We Collect</h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Usage data and cookies</li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={1000} duration={800}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '1.5rem 0 0.5rem 0', color: '#181818' }}>How We Use Your Information</h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li>To provide and maintain our services</li>
                <li>To improve user experience</li>
                <li>To communicate with you</li>
                <li>To comply with legal obligations</li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={1200} duration={800}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '1.5rem 0 0.5rem 0', color: '#181818' }}>Your Rights</h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={1400} duration={800}>
              <p>
                For any questions or requests regarding your privacy, please contact us at <a href="mailto:privacy@realest.com" style={{ color: '#1a2233', textDecoration: 'underline' }}>privacy@realest.com</a>.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={1600} duration={800}>
              <p style={{ color: '#888', fontSize: '0.98rem', marginTop: 32, textAlign: 'center' }}>
                &copy; {new Date().getFullYear()} Realest. All rights reserved.
              </p>
            </AnimatedElement>
          </div>
        </section>
      </AnimatedElement>
      
      <style>{`
        @media (max-width: 600px) {
          .privacy-card-section {
            max-width: 98vw !important;
            padding: 1.5rem 0.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}