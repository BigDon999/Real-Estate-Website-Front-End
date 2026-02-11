import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";

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
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Explore Our Latest Blogs on Real Estate Insights
          </h2>
          <Link href="/Blog" className={styles.viewAllBtn}>
            View All
          </Link>
        </div>

        {/* Main Featured Blog */}
        <Link href={`/Blog/${blogs[0].id}`} className={styles.featuredCardLink}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                className={styles.featuredImage}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
            <div className={styles.featuredContent}>
              <p className={styles.metaText}>
                {blogs[0].date} • {blogs[0].readTime}
              </p>
              <h3 className={styles.featuredTitle}>
                {blogs[0].title}
              </h3>
              <p className={styles.summaryText}>
                {blogs[0].summary}
              </p>
              <div className={styles.authorContainer}>
                <div className={styles.authorImageWrapper}>
                  <Image
                    src="/assets/author1.webp"
                    alt="Author"
                    fill
                    className={styles.authorImage}
                    priority
                    sizes="40px"
                  />
                </div>
                <div>
                  <strong className={styles.authorName}>{blogs[0].author}</strong>
                  <span className={styles.authorRole}>
                    {blogs[0].role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Other Blog Cards */}
        <div className={styles.grid}>
          {blogs.slice(1).map((blog) => (
            <Link key={blog.id} href={`/Blog/${blog.id}`} className={styles.blogCardLink}>
              <div className={styles.blogCard}>
                <div className={styles.blogImageWrapper}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className={styles.blogImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.blogTitle}>
                    {blog.title}
                  </h3>
                  <p className={styles.blogDate}>
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
