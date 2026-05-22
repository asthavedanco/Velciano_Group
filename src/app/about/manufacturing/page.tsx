"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const keyFeatures = [
  {
    icon: "fa-location-dot",
    title: "Strategic Location",
    desc: "Access to high-quality raw materials and cost-effective production from major textile hubs of India.",
  },
  {
    icon: "fa-industry",
    title: "Advanced Infrastructure",
    desc: "Modern machinery for weaving, stitching, dyeing, and finishing to meet global standards.",
  },
  {
    icon: "fa-leaf",
    title: "Sustainable Practices",
    desc: "Eco-friendly dyes, energy-efficient processes, and responsible waste management systems.",
  },
  {
    icon: "fa-box-open",
    title: "Customized Packaging",
    desc: "Bulk Export Cartons, Private Label Packaging, Barcode Labeling, and Custom Inserts — ensuring safe and professional global delivery.",
  },
];

export default function ManufacturingPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Small timeout to ensure Next.js transition is complete
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((elem: any) => {
        gsap.fromTo(elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%"
            }
          }
        );
      });

      gsap.fromTo(".feature-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 85%"
          }
        }
      );
    });

    // Refresh ScrollTrigger after a short delay
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="sub-page">
      {/* Hero */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image
            src="/images/bedsheet_floral.png"
            alt="Manufacturing"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="breadcrumb reveal">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <Link href="/about">ABOUT</Link>
            <span className="sep">/</span>
            <span className="current">MANUFACTURING</span>
          </div>
          <h1 className="hero-title reveal">Manufacturing &amp; Processing</h1>
          <p className="hero-subtitle reveal">
            Precision-crafted textiles from the heart of India's textile hubs.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mfg-content bg-cream" style={{ background: "var(--bg-cream)", padding: "7rem 6%" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "clamp(2rem, 6vw, 6rem)", alignItems: "center" }}>
            {/* Image */}
            <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px', height: 'clamp(320px, 50vh, 520px)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/bedsheet_luxury.png" alt="Bedsheets" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/curtain_geometric.png" alt="Curtains" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/pillow_cover_decorative.png" alt="Pillow Covers" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/sofa_cover_luxury.png" alt="Sofa Covers" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Text */}
            <div className="fade-up">
              <p className="primary-text" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Our Facilities
              </p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, color: "var(--text-dark)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Our Manufacturing &amp; Processing Facilities
              </h2>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "#555", marginBottom: "1rem" }}>
                At Velciano Group, our manufacturing units are located in major textile hubs of India, enabling direct sourcing of premium fabrics and efficient production cycles.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#666" }}>
                Our state-of-the-art infrastructure ensures every product meets rigorous international quality standards, while our commitment to sustainability drives continuous improvements in our processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ background: "#1a1a1a", padding: "7rem 6%" }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              What Sets Us Apart
            </p>
            <h2 style={{ fontSize: "clamp(2.2rem, 6vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
              Key Features
            </h2>
          </div>

          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "2rem" }}>
            {keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="feature-card"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--primary)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: "54px", height: "54px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <i className={`fa-solid ${feature.icon}`} style={{ color: "#fff", fontSize: "1.3rem" }}></i>
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section style={{ background: '#111', padding: '7rem 6%' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'center' }}>
            {/* Text */}
            <div className="fade-up">
              <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Zero Compromise
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Quality Control &amp; Assurance
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
                Every product that leaves our facility passes through rigorous multi-stage quality inspections, ensuring consistent excellence from raw material to finished textile.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { step: '01', title: 'Raw Material Inspection', desc: 'Fabric density, thread count, and dye quality verified before production.' },
                  { step: '02', title: 'In-Process Checks', desc: 'Continuous monitoring across weaving, stitching, and dyeing stages.' },
                  { step: '03', title: 'Final Inspection', desc: 'Dimensional accuracy, color fastness, and finish quality verified before dispatch.' },
                  { step: '04', title: 'International Standards', desc: 'Products certified for ISO, OEKO-TEX, and export-market compliance.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', minWidth: '40px', lineHeight: 1 }}>{item.step}</span>
                    <div>
                      <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem' }}>{item.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: 'clamp(320px, 50vh, 560px)' }}>
              <div style={{ position: 'relative', flex: 2, borderRadius: '12px', overflow: 'hidden' }}>
                <Image src="/images/curtain_geometric.png" alt="Quality Control" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="/images/bedsheet_luxury.png" alt="Fabric Quality" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                  <Image src="/images/pillow_cover_decorative.png" alt="Finishing" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Highlight */}
      <section className="bg-cream" style={{ background: "var(--bg-cream)", padding: "7rem 6%" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "clamp(2rem, 6vw, 6rem)", alignItems: "center" }}>
            <div className="fade-up">
              <p className="primary-text" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Packaging &amp; Delivery
              </p>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "var(--text-dark)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Customized Packaging
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.8, marginBottom: "2rem" }}>
                We offer a variety of packaging solutions designed for safe and professional global delivery:
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {["Bulk Export Cartons", "Private Label Packaging", "Barcode Labeling", "Custom Inserts"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "1.05rem", color: "#333" }}>
                    <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fa-solid fa-check" style={{ color: "#fff", fontSize: "0.8rem" }}></i>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up" style={{ position: 'relative', height: 'clamp(300px, 45vh, 480px)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
              <Image
                src="/images/sofa_cover_luxury.png"
                alt="Premium Packaging"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em' }}>Premium & Safe Global Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
