"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedElement from "../components/AnimatedElement";
import styles from "./listing.module.css";

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
  return (
    <section className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>All Listings</h1>
          <p className={styles.subtitle}>
            Explore our wide range of properties
          </p>
        </div>

        <div className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured Listing</h2>
          <Link href={`/Listing/${listingsData[0].id}`} className={styles.featuredCardLink}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image
                  src={listingsData[0].image}
                  alt={listingsData[0].title}
                  fill
                  priority
                  className={styles.featuredImage}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className={styles.featuredContent}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <span className={styles.badge}>
                    {listingsData[0].title}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  {listingsData[0].title}
                </h3>
                <p className={styles.cardDescription}>
                  {listingsData[0].description}
                </p>
                <p className={styles.price}>
                  {listingsData[0].price}
                </p>
              </div>
            </div>
          </Link>
        </div>

        <AnimatedElement delay={400} duration={1000}>
          <div className={styles.gridSection}>
            <h2 className={styles.sectionTitle}>All Listings</h2>
            <div className={styles.grid}>
              {listingsData.slice(1).map((listing, index) => (
                <Link
                  key={listing.id}
                  href={`/Listing/${listing.id}`}
                  className={styles.listingCardLink}
                >
                  <div className={styles.listingCard}>
                    <div className={styles.listingImageWrapper}>
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        fill
                        className={styles.listingImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2}
                      />
                    </div>
                    <div className={styles.listingContent}>
                      <h3 className={styles.listingTitle}>
                        {listing.title}
                      </h3>
                      <p className={styles.listingDescription}>
                        {listing.description}
                      </p>
                      <p className={styles.price}>
                        {listing.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}