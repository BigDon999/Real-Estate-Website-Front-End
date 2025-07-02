"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Invest in Real Estate the Right Way",
    date: "June 27, 2025",
    author: "Chinwe Okafor",
    role: "Property Analyst",
    image: "/assets/blog1.webp",
    summary: "Discover key strategies for maximizing your returns in the real estate market.",
    readTime: "7 min read",
    category: "Investment",
    content: `
      <p>Investing in real estate can be one of the most profitable ventures, but it requires careful planning and strategic thinking. In this comprehensive guide, we'll explore the essential strategies that successful real estate investors use to maximize their returns.</p>
      
      <h2>Understanding Market Fundamentals</h2>
      <p>Before diving into any investment, it's crucial to understand the fundamental factors that drive real estate markets. Location remains the most important factor - properties in growing areas with good infrastructure, schools, and amenities tend to appreciate faster.</p>
      
      <h2>Types of Real Estate Investments</h2>
      <p>There are several ways to invest in real estate, each with its own advantages and risks:</p>
      <ul>
        <li><strong>Residential Properties:</strong> Single-family homes, apartments, and condominiums</li>
        <li><strong>Commercial Properties:</strong> Office buildings, retail spaces, and warehouses</li>
        <li><strong>Land Investments:</strong> Undeveloped land with potential for development</li>
        <li><strong>Real Estate Investment Trusts (REITs):</strong> Publicly traded companies that own real estate</li>
      </ul>
      
      <h2>Financial Planning and Analysis</h2>
      <p>Successful real estate investment starts with thorough financial planning. Calculate all potential costs including:</p>
      <ul>
        <li>Purchase price and closing costs</li>
        <li>Property taxes and insurance</li>
        <li>Maintenance and repair expenses</li>
        <li>Property management fees</li>
        <li>Vacancy rates and potential income loss</li>
      </ul>
      
      <h2>Risk Management Strategies</h2>
      <p>Diversification is key to managing risk in real estate investment. Consider spreading your investments across different property types, locations, and market segments. This helps protect your portfolio from market fluctuations in any single area.</p>
      
      <h2>Long-term vs Short-term Investment</h2>
      <p>Real estate investment can be approached from both long-term and short-term perspectives. Long-term investors focus on property appreciation and steady rental income, while short-term investors (flippers) look for quick profits through renovation and resale.</p>
      
      <p>Remember, successful real estate investment requires patience, research, and a long-term perspective. Start small, learn from each investment, and gradually build your portfolio.</p>
    `
  },
  {
    id: 2,
    title: "Top Locations to Buy Property in 2025",
    date: "June 20, 2025",
    author: "Adebayo Okechukwu",
    role: "Market Researcher",
    image: "/assets/blog2.jpeg",
    summary: "Explore the most promising locations for property investment this year.",
    readTime: "5 min read",
    category: "Market Trends",
    content: `
      <p>As we move into 2025, certain locations are emerging as hotspots for property investment. These areas offer the perfect combination of growth potential, infrastructure development, and market stability.</p>
      
      <h2>Lekki, Lagos - The New Business Hub</h2>
      <p>Lekki continues to be one of the most promising areas for real estate investment in Nigeria. With the ongoing development of the Lekki Deep Sea Port and the Lekki-Epe Expressway, this area is experiencing unprecedented growth.</p>
      
      <h2>Victoria Island - Premium Investment Destination</h2>
      <p>Victoria Island remains a top choice for luxury real estate investment. The area's proximity to major business districts and its established infrastructure make it a safe bet for long-term investment.</p>
      
      <h2>Abuja - Government and Diplomatic Center</h2>
      <p>As Nigeria's capital, Abuja offers unique investment opportunities. Areas like Gwarinpa and Jabi are experiencing rapid development, making them attractive for both residential and commercial investments.</p>
      
      <h2>Port Harcourt - Oil and Gas Hub</h2>
      <p>The oil and gas industry continues to drive property demand in Port Harcourt. Areas like GRA and New GRA are particularly attractive for investors looking for stable rental income.</p>
      
      <h2>Factors to Consider When Choosing Location</h2>
      <ul>
        <li>Infrastructure development plans</li>
        <li>Employment opportunities</li>
        <li>Educational institutions</li>
        <li>Healthcare facilities</li>
        <li>Transportation networks</li>
        <li>Security and safety</li>
      </ul>
      
      <p>When investing in any of these locations, it's important to conduct thorough research and consider both current market conditions and future development plans.</p>
    `
  },
  {
    id: 3,
    title: "Real Estate Trends You Should Know",
    date: "June 15, 2025",
    author: "Kemi Adebayo",
    role: "Real Estate Expert",
    image: "/assets/blog3.jpg",
    summary: "Stay ahead of the curve with these emerging real estate trends.",
    readTime: "6 min read",
    category: "Trends",
    content: `
      <p>The real estate market is constantly evolving, and staying informed about current trends is crucial for making smart investment decisions. Here are the key trends shaping the industry in 2025.</p>
      
      <h2>Technology Integration in Real Estate</h2>
      <p>Smart home technology is becoming increasingly popular among buyers and renters. Properties equipped with smart security systems, automated lighting, and energy management systems are commanding premium prices.</p>
      
      <h2>Sustainable and Green Buildings</h2>
      <p>Environmental consciousness is driving demand for sustainable properties. Green buildings with energy-efficient features, solar panels, and eco-friendly materials are not only better for the environment but also offer long-term cost savings.</p>
      
      <h2>Remote Work Impact on Housing</h2>
      <p>The rise of remote work is changing housing preferences. People are moving away from city centers to suburban areas where they can get more space for their money. Home offices and flexible living spaces are now high on buyers' wish lists.</p>
      
      <h2>Co-living and Shared Spaces</h2>
      <p>Co-living arrangements are gaining popularity, especially among young professionals and students. This trend is creating new opportunities for investors in the rental market.</p>
      
      <h2>Digital Real Estate Platforms</h2>
      <p>Online platforms are revolutionizing how people buy, sell, and rent properties. Virtual tours, online transactions, and digital documentation are becoming standard practices in the industry.</p>
      
      <h2>Affordable Housing Solutions</h2>
      <p>With rising property prices, there's a growing demand for affordable housing solutions. Modular homes, tiny houses, and innovative financing options are emerging to address this need.</p>
      
      <p>Understanding these trends can help you make informed decisions about your real estate investments and stay competitive in the market.</p>
    `
  },
  {
    id: 4,
    title: "Is It Better to Rent or Buy?",
    date: "June 5, 2025",
    author: "Emeka Nwachukwu",
    role: "Financial Advisor",
    image: "/assets/blog4.avif",
    summary: "A comprehensive guide to help you decide between renting and buying.",
    readTime: "8 min read",
    category: "Advice",
    content: `
      <p>The decision to rent or buy a home is one of the most significant financial choices you'll make. Both options have their advantages and disadvantages, and the right choice depends on your personal circumstances and financial goals.</p>
      
      <h2>Advantages of Buying</h2>
      <ul>
        <li><strong>Building Equity:</strong> Each mortgage payment builds equity in your home</li>
        <li><strong>Tax Benefits:</strong> Mortgage interest and property taxes may be tax-deductible</li>
        <li><strong>Stability:</strong> Fixed monthly payments (with fixed-rate mortgages)</li>
        <li><strong>Freedom to Customize:</strong> You can renovate and modify your home as you wish</li>
        <li><strong>Potential Appreciation:</strong> Property values may increase over time</li>
      </ul>
      
      <h2>Advantages of Renting</h2>
      <ul>
        <li><strong>Lower Upfront Costs:</strong> No down payment or closing costs required</li>
        <li><strong>Flexibility:</strong> Easier to move for job opportunities or lifestyle changes</li>
        <li><strong>No Maintenance Costs:</strong> Landlord typically handles repairs and maintenance</li>
        <li><strong>Predictable Costs:</strong> Rent is usually fixed for the lease term</li>
        <li><strong>Investment Flexibility:</strong> Money saved can be invested elsewhere</li>
      </ul>
      
      <h2>Financial Considerations</h2>
      <p>When comparing renting vs buying, consider the total cost of ownership:</p>
      <ul>
        <li>Down payment and closing costs</li>
        <li>Monthly mortgage payments vs rent</li>
        <li>Property taxes and insurance</li>
        <li>Maintenance and repair costs</li>
        <li>Opportunity cost of the down payment</li>
      </ul>
      
      <h2>When to Buy</h2>
      <p>Consider buying if you:</p>
      <ul>
        <li>Plan to stay in the area for at least 5-7 years</li>
        <li>Have stable income and good credit</li>
        <li>Can afford the down payment and closing costs</li>
        <li>Want to build equity and wealth</li>
        <li>Desire the freedom to customize your living space</li>
      </ul>
      
      <h2>When to Rent</h2>
      <p>Consider renting if you:</p>
      <ul>
        <li>Need flexibility to move frequently</li>
        <li>Don't have enough savings for a down payment</li>
        <li>Want to avoid maintenance responsibilities</li>
        <li>Prefer to invest your money elsewhere</li>
        <li>Are unsure about your long-term plans</li>
      </ul>
      
      <p>Ultimately, the decision should be based on your financial situation, lifestyle preferences, and long-term goals. Consider consulting with a financial advisor to help you make the best choice for your circumstances.</p>
    `
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const id = parseInt(params.id, 10);
  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return (
      <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2>Blog Post Not Found</h2>
        <Link href="/Blog" style={{ color: "#0070f3", textDecoration: "underline" }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <section style={{ padding: "6rem 2rem", maxWidth: 800, margin: "0 auto" }}>
      <Link
        href="/Blog"
        style={{
          color: '#fff',
          background: '#181818',
          borderRadius: '50%',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          lineHeight: 1,
          marginBottom: 24,
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Back to Blog"
      >
        &#8592;
      </Link>
      
      <article style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        overflow: "hidden"
      }}>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />
        
        <div style={{ padding: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
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
              {blog.date} • {blog.readTime}
            </span>
          </div>
          
          <h1 style={{ fontSize: "2.5rem", margin: "0 0 1.5rem 0", lineHeight: 1.3 }}>
            {blog.title}
          </h1>
          
          <p style={{ 
            fontSize: "1.2rem", 
            color: "#555", 
            lineHeight: 1.6, 
            marginBottom: "2rem",
            fontStyle: "italic"
          }}>
            {blog.summary}
          </p>
          
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "1rem", 
            marginBottom: "2rem",
            padding: "1.5rem",
            background: "#f8f8f8",
            borderRadius: "12px"
          }}>
            <img
              src={blog.id === 1 ? "/assets/author1.webp" : 
                   blog.id === 2 ? "/assets/author2.jpg" :
                   blog.id === 3 ? "/assets/author3.jpg" :
                   blog.id === 4 ? "/assets/author4.webp" : "/assets/author1.webp"}
              alt="Author"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div>
              <strong style={{ display: "block", fontSize: "1.1rem" }}>{blog.author}</strong>
              <span style={{ fontSize: "0.9rem", color: "#777" }}>
                {blog.role}
              </span>
            </div>
          </div>
          
          <div 
            style={{ 
              fontSize: "1.1rem", 
              lineHeight: 1.8, 
              color: "#333"
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>
    </section>
  );
} 