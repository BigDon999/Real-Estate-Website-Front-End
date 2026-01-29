"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Features.module.css";

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
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <span className={styles.tag}>
            Features
          </span>
          <h2 className={styles.title}>
            Discover our features
          </h2>

          {features.map((item, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={styles.accordionItem}
            >
              <h3 className={styles.accordionTitle}>
                {item.title}
              </h3>
              {activeIndex === index && (
                <p className={styles.accordionContent}>
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className={styles.rightContent}>
          <div className={styles.featureImageWrapper}>
            <Image
              src="/assets/featured.jpg"
              alt="Features"
              fill
              className={styles.featureImage}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
