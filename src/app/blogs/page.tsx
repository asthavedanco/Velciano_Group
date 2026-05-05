"use client";

import Image from "next/image";

const blogs = [
  {
    category: "Design",
    date: "2024",
    title: "How to Choose the Perfect Curtains for Your Living Room.",
    img: "/images/curtain_geometric.png",
  },
  {
    category: "Material",
    date: "2024",
    title: "Cotton vs. Microfiber: Which Bedsheet is Best for You?",
    img: "/images/bedsheet_luxury.png",
  },
  {
    category: "Decor",
    date: "2024",
    title: "Styling Your Sofa with Decorative Pillow Covers.",
    img: "/images/pillow_cover_decorative.png",
  },
  {
    category: "Maintenance",
    date: "2024",
    title: "Essential Tips for Washing and Maintaining Your Fine Linens.",
    img: "/images/bedsheet_floral.png",
  },
  {
    category: "Trends",
    date: "2024",
    title: "Top 5 Interior Design Trends for Home Textiles in 2024.",
    img: "/images/curtain_modern.png",
  },
  {
    category: "Comfort",
    date: "2024",
    title: "The Science of a Good Night's Sleep: It Starts with the Sheets.",
    img: "/images/bedsheet_luxury.png",
  },
];

export default function BlogsPage() {
  return (
    <main style={{ paddingTop: "100px" }}>
      <section className="news" id="news" style={{ padding: "6rem 6% 10rem" }}>
        <span className="section-label">Latest Insights</span>
        <h2 className="section-title">Our Blog</h2>
        
        <div className="blog-grid">
          {blogs.map((blog, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-img">
                <Image src={blog.img} alt={blog.title} width={400} height={250} />
              </div>
              <span>{blog.category} ∙ {blog.date}</span>
              <h3>{blog.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
