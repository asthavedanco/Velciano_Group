"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

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
            src="/images/global_export_hero_bg.png" 
            alt="Global Export" 
            fill 
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
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
      <section className="content-section bg-cream" style={{ padding: "8rem 6%" }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'stretch' }}>
            {/* Left Column - Image */}
            <div className="fade-up" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '350px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' }}>
               <Image src="/images/curtain_modern.png" alt="Export Logistics" fill className="object-cover" />
            </div>

            {/* Right Column - Text */}
            <div className="fade-up">
              <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '2rem' }}>
                Supplying high-quality home textiles worldwide
              </h2>
              <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The demand for high-quality, sustainable home textiles is on a steady rise across the globe, driven by a desire for luxurious, comfortable, and eco-friendly living spaces.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                At Velciano, we proudly cater to this growing need, exporting premium bedsheets, curtains, pillow covers, and sofa covers to some of the world's leading economies, including the United States, Germany, Canada, the UK, France, and the Netherlands. Our products have earned the trust of global markets due to their unmatched craftsmanship and quality.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href="/about" className="btn-gold" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Read more About
                </Link>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'underline' }}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Stats Section */}
      <section className="fade-up bg-dark" style={{ padding: '8rem 6%', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300, maxWidth: '900px', margin: '0 auto', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
            Exporting to over <span style={{ color: 'var(--primary)', fontWeight: 700 }}>20+ countries</span> worldwide, ensuring uncompromising quality and reliability.
          </h2>
        </div>
      </section>

      {/* Global Presence Map Section */}
      <section className="fade-up bg-cream" style={{ padding: '8rem 6%', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>
            Velciano Global Reach
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.7 }}>
            Our bespoke luxury bedsheets, curtains, and fine home textiles are exported to some of the world's most sophisticated markets. Hover over highlighted countries to discover our premium presence.
          </p>
          <WorldMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="fade-up bg-dark" style={{ padding: '8rem 6%', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Let's build the next big thing together
          </h2>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '4rem' }}>
            Partner with Velciano to bring luxurious textiles to your market.
          </p>
          <Link href="/contact" className="explore-btn-badge" style={{ margin: '0 auto' }}>
            Keep<br/>In<br/>Touch
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

    </main>
  );
}
