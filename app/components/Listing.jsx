import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Listing.module.css";

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
];

const Listing = () => {
  return (
    <section className={styles.listingSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Explore Our Listings
          </h2>
          <Link href="/Listing" className={styles.viewMoreBtn}>
            View More
          </Link>
        </div>

        {/* Listings Grid */}
        <div className={styles.grid}>
          {listingsData.map((listing) => (
            <Link key={listing.id} href={`/Listing/${listing.id}`} className={styles.cardLink}>
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className={styles.listingImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {listing.title}
                  </h3>
                  <p className={styles.cardDescription}>
                    {listing.description}
                  </p>
                  <p className={styles.cardPrice}>
                    {listing.price}
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

export default Listing;
