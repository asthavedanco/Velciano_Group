"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const keyPoints = [
  { title: "High Global Demand", icon: "fa-earth-americas", desc: "Premium Indian textiles are sought after in luxury markets across Europe, USA, and the Middle East." },
  { title: "Rapid Market Growth", icon: "fa-chart-line", desc: "The home textile sector is witnessing unprecedented growth, with India at the forefront of innovation." },
  { title: "Strong Export Opportunity", icon: "fa-ship", desc: "Favorable trade policies and our robust logistics network make global distribution seamless." },
  { title: "Perfect for Dealers", icon: "fa-handshake", desc: "Our scalable manufacturing makes us the perfect partner for large-scale dealers and distributors worldwide." }
];

export default function GlobalDemandPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((elem: any) => {
        gsap.fromTo(elem,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 90%"
            }
          }
        );
      });

      gsap.utils.toArray(".point-card").forEach((elem: any) => {
        gsap.fromTo(elem,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image
            src="/images/global_demand_map_bg.png"
            alt="Global Demand"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container">
          <div className="breadcrumb reveal">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <Link href="/about">ABOUT</Link>
            <span className="sep">/</span>
            <span className="current">GLOBAL DEMAND</span>
          </div>
          <h1 className="hero-title reveal">Growing Global Demand</h1>
          <p className="hero-subtitle reveal">Indian bedsheets are in high demand worldwide, with India emerging as a fast-growing exporter.</p>
        </div>
      </section>

      {/* Stats/Intro Section */}
      <section style={{ background: 'var(--bg-cream)', padding: '8rem 6%' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(2rem, 6vw, 6rem)', alignItems: 'center' }}>
            <div className="reveal">
              <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Market Outlook</span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: 700, margin: '1.5rem 0', color: '#000', lineHeight: 1.2 }}>The Global Textile Renaissance</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '2rem' }}>
                The international appetite for authentic, high-thread-count Indian textiles is at an all-time high. India's rich heritage in weaving, combined with modern manufacturing excellence, has positioned the country as the premier destination for home decor sourcing.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(1.5rem, 5vw, 3rem)' }}>
                <div>
                  <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>40+</h4>
                  <p style={{ color: '#666', fontWeight: 500 }}>Countries Reached</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>25%</h4>
                  <p style={{ color: '#666', fontWeight: 500 }}>Annual Growth</p>
                </div>
              </div>
            </div>
            <div className="reveal" style={{ position: 'relative', height: 'clamp(300px, 50vh, 500px)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
              <Image src="/images/bedsheet_floral.png" alt="Global Export" fill className="object-cover" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem' }}>
                <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>Seamless Global Distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Grid */}
      <section style={{ background: '#000', padding: '8rem 6%' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: 700, color: '#fff' }}>Strategic Advantages</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem', fontSize: '1.1rem' }}>Why Velciano is the preferred choice for international partners.</p>
          </div>

          <div className="points-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2.5rem'
          }}>
            {keyPoints.map((point, i) => (
              <div key={i} className="point-card" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '3rem 2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <i className={`fa-solid ${point.icon}`} style={{ color: '#fff', fontSize: '1.2rem' }}></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>{point.title}</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1rem', lineHeight: 1.7 }}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer Opportunity Section */}
      <section style={{ background: 'var(--bg-cream)', padding: '8rem 6%' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 700, color: '#000', marginBottom: '2rem' }}>Perfect for Dealers & Distributors</h2>
          <p className="reveal" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333', marginBottom: '3rem' }}>
            We provide the scale, quality consistency, and export documentation support needed to dominate your local market. Partner with us to tap into the booming demand for premium Indian home textiles.
          </p>
          <div className="reveal">
            <Link href="/about/dealership" className="btn-gold" style={{ display: 'inline-block', padding: '1.2rem 3.5rem', background: '#000', color: '#fff', textDecoration: 'none', fontWeight: 700, borderRadius: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Apply for Dealership
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
