"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ProductContent({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || params.slug.replace(/-/g, " ");
  const image = searchParams.get("image") || "/images/bedsheet_luxury.png";
  const category = searchParams.get("category") || "Collection";

  // Provide some generic related photos based on the main image to make it look like a gallery.
  const galleryImages = [
    image, 
    "/images/bedsheet_floral.png",
    "/images/curtain_modern.png",
    "/images/pillow_cover_decorative.png",
    "/images/sofa_cover_luxury.png"
  ];

  return (
    <main className="sub-page bg-cream" style={{ backgroundColor: 'var(--bg-cream)' }}>
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover"
            priority
          />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb reveal">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <Link href="/collection">COLLECTION</Link>
            <span className="sep">/</span>
            <span className="current" style={{ textTransform: 'uppercase' }}>{name}</span>
          </div>
          <h1 className="hero-title reveal">{name}</h1>
          <p className="hero-subtitle reveal">{category} Collection</p>
        </div>
      </section>

      {/* Product Information */}
      <section style={{ padding: "5rem 6% 8rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))", gap: "4rem", alignItems: "start" }}>
          
          {/* Main Image View */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '120px' }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/4", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          </div>

          {/* Details */}
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{category}</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: "800", marginBottom: "1.5rem", marginTop: "0.5rem", color: "#111", lineHeight: "1.1" }}>{name}</h2>
            
            <p style={{ color: "#444", fontSize: "1.15rem", marginBottom: "3rem", lineHeight: "1.8" }}>
              The {name} represents the pinnacle of our {category} collection, blending uncompromising quality with sophisticated design. Crafted from premium materials, it is engineered to provide both exceptional durability and luxurious comfort, perfectly complementing any modern interior aesthetic.
            </p>

            {/* Specifications Grid */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "2rem", color: "#111", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "1rem" }}>Product Specifications</h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
              <div>
                <strong style={{ display: "block", color: "#111", marginBottom: "0.4rem", fontSize: "1.1rem" }}>Material</strong>
                <span style={{ color: "#555", lineHeight: "1.5", display: "block" }}>100% Premium Quality Blend</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "#111", marginBottom: "0.4rem", fontSize: "1.1rem" }}>Care Instructions</strong>
                <span style={{ color: "#555", lineHeight: "1.5", display: "block" }}>Machine washable, Tumble dry low</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "#111", marginBottom: "0.4rem", fontSize: "1.1rem" }}>Dimensions</strong>
                <span style={{ color: "#555", lineHeight: "1.5", display: "block" }}>Standard & Custom sizes available</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "#111", marginBottom: "0.4rem", fontSize: "1.1rem" }}>Color Fastness</strong>
                <span style={{ color: "#555", lineHeight: "1.5", display: "block" }}>High resistance to fading</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "#111", marginBottom: "0.4rem", fontSize: "1.1rem" }}>Texture</strong>
                <span style={{ color: "#555", lineHeight: "1.5", display: "block" }}>Ultra-soft and breathable</span>
              </div>
              <div>
                <strong style={{ display: "block", color: "#111", marginBottom: "0.4rem", fontSize: "1.1rem" }}>Warranty</strong>
                <span style={{ color: "#555", lineHeight: "1.5", display: "block" }}>1 Year Manufacturing Warranty</span>
              </div>
            </div>

            {/* Contact Action */}
            <div style={{ padding: "2.5rem", backgroundColor: "rgba(0,0,0,0.03)", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
              <h4 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "1rem", color: "#111" }}>Interested in Bulk Orders?</h4>
              <p style={{ color: "#555", marginBottom: "2rem", fontSize: "1.05rem", lineHeight: "1.6" }}>
                We provide custom sizing and competitive pricing for bulk exports. Contact our sales team to request a quote.
              </p>
              <Link href="/contact" className="btn-gold" style={{ display: "inline-block", padding: "1rem 2.5rem", fontWeight: "700" }}>
                Contact Sales Team
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Product Gallery Showcase */}
      <section style={{ padding: "0 6% 8rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", fontSize: "0.9rem" }}>Showcase</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: "800", color: "#111", marginTop: "0.5rem" }}>Product Gallery</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "1.5rem" }}>
            {galleryImages.slice(1).map((img, index) => (
              <div key={index} style={{ position: "relative", height: "400px", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.06)" }}>
                <Image src={img} alt={`${name} showcase ${index + 1}`} fill className="object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div style={{ padding: "10rem 0", textAlign: "center", color: "#555" }}>Loading product details...</div>}>
      <ProductContent params={params} />
    </Suspense>
  );
}
