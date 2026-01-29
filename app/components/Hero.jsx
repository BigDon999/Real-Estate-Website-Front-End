"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedElement from "./AnimatedElement";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/assets/homehero.png"
        alt="Hero Background"
        fill
        priority
        className={styles.heroBackground}
        quality={90}
      />
      
      {/* Optional white fade at bottom */}
      <div className={styles.fadeBottom}></div>

      {/* Content */}
      <AnimatedElement delay={0} duration={1000} className={styles.contentWrapper}>
        <div>
          <h1 className={styles.title}>
            Discover Your Perfect Home
          </h1>
          <p className={styles.subtitle}>
            Explore luxury listings, trusted agents, and insights to help you find the right home for your future.
          </p>
          <Link href="/Contact" style={{ textDecoration: "none" }}>
            <button className={styles.ctaButton}>
              Get Started →
            </button>
          </Link>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default Hero;
