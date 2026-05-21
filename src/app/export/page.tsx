"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExportPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sub-hero",
        start: "top 80%",
      }
    });

    gsap.from(".fade-up", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".content-section",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <main className="sub-page">
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src="/images/bedsheet_luxury.png" 
            alt="Global Export" 
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
            <span className="current">EXPORT</span>
          </div>
          <h1 className="hero-title reveal">Global Export</h1>
          <p className="hero-subtitle reveal">Products trusted worldwide for premium home textiles.</p>
        </div>
      </section>

      {/* Intro & Content Section */}
      <section className="content-section container" style={{ padding: "8rem 0" }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
          {/* Left Column - Image */}
          <div className="fade-up" style={{ position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
             <Image src="/images/curtain_modern.png" alt="Export Logistics" fill className="object-cover" />
          </div>

          {/* Right Column - Text */}
          <div className="fade-up">
            <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, color: 'var(--text-white)', marginBottom: '2rem' }}>
              Supplying high-quality home textiles worldwide, trusted for comfort and elegance.
            </h2>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              The demand for high-quality, sustainable home textiles is on a steady rise across the globe, driven by a desire for luxurious, comfortable, and eco-friendly living spaces.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              At Velciano, we proudly cater to this growing need, exporting premium bedsheets, curtains, pillow covers, and sofa covers to some of the world's leading economies, including the United States, Germany, Canada, the UK, France, and the Netherlands. Our products have earned the trust of global markets due to their unmatched craftsmanship and quality.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/about" className="btn-gold" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Read more About
              </Link>
              <Link href="/contact" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '1.1rem', textDecoration: 'underline' }}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Export Stats Section */}
      <section className="fade-up" style={{ background: 'var(--glass)', padding: '8rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 300, color: 'var(--text-white)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
            Exporting to over <span style={{ color: 'var(--primary)', fontWeight: 700 }}>20+ countries</span> worldwide, ensuring uncompromising quality and reliability.
          </h2>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="fade-up container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Let's build the next big thing together
        </h2>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
          Partner with Velciano to bring luxurious textiles to your market.
        </p>
        <Link href="/contact" className="explore-btn-badge" style={{ margin: '0 auto' }}>
          Keep<br/>In<br/>Touch
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </section>

    </main>
  );
}
