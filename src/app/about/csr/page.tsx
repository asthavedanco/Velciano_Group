"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CSRPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".container",
          start: "top 90%",
        }
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
    <main className="sub-page">
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src="/images/bedsheet_floral.png" 
            alt="CSR Activities" 
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
            <span className="current">CSR ACTIVITIES</span>
          </div>
          <h1 className="hero-title reveal">CSR Activities</h1>
          <p className="hero-subtitle reveal">Committed to sustainable and impactful initiatives.</p>
        </div>
      </section>


      {/* Photo Gallery */}
      <section className="bg-cream" style={{ background: 'var(--bg-cream)', padding: '8rem 6%' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gallery</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#000', marginTop: '1rem' }}>Our CSR Activities</h2>
          </div>
          
          <div className="gallery-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gridAutoRows: 'minmax(250px, auto)',
            gap: '1.5rem' 
          }}>
            {[
              { src: "/images/CSR1.jpeg",alt: "CSR",span: "row-span-2" },
              { src: "/images/CSR2.jpeg",alt: "CSR" },
              { src: "/images/CSR3.jpeg",alt: "CSR" },
              { src: "/images/CSR4_fixed.jpeg",alt: "CSR" },
              { src: "/images/CSR5.jpeg",alt: "CSR" }
            ].map((img, i) => (
              <div key={i} className={`reveal ${img.span || ''}`} style={{ 
                position: 'relative', 
                height: img.span ? '100%' : '280px',
                minHeight: '280px',
                borderRadius: '20px', 
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
              }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 hover:scale-110" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="hover-overlay"></div>
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: '#fff', fontWeight: 600, fontSize: '1rem' }}>
                  {img.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section style={{ background: '#000', padding: '10rem 6%', textAlign: 'center' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <i className="fa-solid fa-quote-left" style={{ fontSize: '3rem', color: 'var(--primary)', opacity: 0.3, marginBottom: '2rem' }}></i>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#fff', fontWeight: 600, lineHeight: 1.4, fontStyle: 'italic' }}>
              "We believe that a business only truly thrives when the community around it thrives as well."
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--primary)', margin: '3rem auto' }}></div>
            <p style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Velciano Vision</p>
          </div>
        </div>
      </section>
    </main>
  );
}
