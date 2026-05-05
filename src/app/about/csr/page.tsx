"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const initiatives = [
  {
    title: "Sustainable Development",
    icon: "fa-seedling",
    desc: "We integrate eco-friendly practices into our core manufacturing processes, ensuring that our growth contributes positively to the environment."
  },
  {
    title: "Community Empowerment",
    icon: "fa-users-rays",
    desc: "We actively engage in projects that empower local communities, fostering self-reliance and economic stability through various support programs."
  },
  {
    title: "Education for All",
    icon: "fa-book-open-reader",
    desc: "We believe in the power of knowledge. Our educational initiatives provide resources and infrastructure to local schools and underprivileged students."
  },
  {
    title: "Healthcare Initiatives",
    icon: "fa-heart-pulse",
    desc: "Promoting health and well-being is a key pillar of our CSR. We support local health centers and organize wellness camps for the community."
  }
];

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

      gsap.from(".init-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".init-grid",
          start: "top 80%",
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
    <main>
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

      {/* Intro Section */}
      <section style={{ background: 'var(--bg-cream)', padding: '8rem 6%' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div className="reveal">
              <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Responsibility</span>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '1.5rem 0', color: '#000', lineHeight: 1.1 }}>Caring for People and the Planet</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '2.5rem' }}>
                At Velciano Group, our Corporate Social Responsibility (CSR) initiatives focus on sustainable development and community empowerment. We actively engage in projects that promote environmental conservation, education, and healthcare.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666' }}>
                Our commitment to social responsibility drives us to create a positive impact on society, ensuring a better future for generations to come. We believe in giving back and making meaningful contributions to the communities we serve.
              </p>
            </div>
            <div className="reveal" style={{ position: 'relative', height: '550px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}>
              <Image src="/images/csr_textile_sustainability.png" alt="Caring for Community" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section style={{ background: '#fff', padding: '6rem 6%' }}>
        <div className="container">
          <div className="init-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {initiatives.map((init, i) => (
              <div key={i} className="init-card" style={{
                background: '#fcfcfc',
                padding: '3rem 2rem',
                borderRadius: '24px',
                border: '1px solid #eee',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', flexShrink: 0 }}>
                  <i className={`fa-solid ${init.icon}`} style={{ color: 'var(--primary)', fontSize: '1.5rem' }}></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#000', marginBottom: '1rem' }}>{init.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#666', marginTop: 'auto' }}>{init.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section style={{ background: 'var(--bg-cream)', padding: '8rem 6%' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gallery</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#000', marginTop: '1rem' }}>Our CSR Activities</h2>
          </div>
          
          <div className="gallery-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { src: "/images/csr_giving_ball.png", alt: "Supporting Local Youth", span: "row-span-2" },
              { src: "/images/csr_smiling_children.png", alt: "Community Smiles" },
              { src: "/images/csr_girl_reading.png", alt: "Empowering Education" },
              { src: "/images/csr_hands_grains.png", alt: "Nourishing Communities" }
            ].map((img, i) => (
              <div key={i} className="reveal" style={{ 
                position: 'relative', 
                height: '400px', 
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
