"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TestimonialsPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".sub-hero",
          start: "top 90%",
        }
      });

      gsap.from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
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

  const testimonials = [
    {
      name: "Global Export Partner",
      role: "Logistics Manager",
      text: "Velciano has been a game-changer for me. I can't stress enough how their timely deliveries have made my life easier. Every single order I've placed arrived right on schedule. Neatly packed and in pristine condition. It's hard to find such dependable and efficient service elsewhere!",
      image: "/images/business_head_portrait_1776839185116.png"
    },
    {
      name: "Retail Distributor",
      role: "Store Owner, India",
      text: "The Bedsheets arrived safely and everything looks great! The fabric quality is soft and premium, colour and exactly as shown and the stitching is excellent. My customers are already loving them. Thank you for the smooth export process and your support.",
      image: "/images/business_head_portrait_1776839185116.png"
    },
    {
      name: "Boutique Hotelier",
      role: "Operations Manager",
      text: "I can't say enough about the incredible customer support at Velciano Group. They're not just about selling products; they genuinely care about their customers. Wherever I've had any a question or an issue, their team has been there, quick to respond & always ready to help.",
      image: "/images/business_head_portrait_1776839185116.png"
    },
    {
      name: "Interior Solutions",
      role: "Senior Consultant",
      text: "Velciano's Big collection of bedding and multiple designs which attract my clients. The diversity in patterns and the quality of the material make it an easy choice for any interior project.",
      image: "/images/business_head_portrait_1776839185116.png"
    },
    {
      name: "Luxury Resort Guest House",
      role: "Hospitality Manager",
      text: "Velciano's Big collection of bedding and multiple designs which attract my clients. The diversity in patterns and quality make it an easy choice for any interior project.",
      image: "/images/business_head_portrait_1776839185116.png"
    },
    {
      name: "Hospitality Partner",
      role: "Hotel Manager",
      text: "Our guests love the comforters you supplied! Super soft, breathable, and give a premium feel. Thank you for helping us upgrade our rooms and elevate the guest experience.",
      image: "/images/business_head_portrait_1776839185116.png"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src="/images/bedsheet_floral.png" 
            alt="Testimonials" 
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
            <span className="current">TESTIMONIALS</span>
          </div>
          <h1 className="hero-title reveal">Testimonial</h1>
          <p className="hero-subtitle reveal">Hear what our satisfied clients have to say.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section" style={{ background: 'var(--bg-cream)', padding: '6rem 6%' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="reveal" style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Client Success</span>
          <h2 className="reveal" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, margin: '1.5rem 0', color: '#000', lineHeight: 1.2 }}>Real Stories from Real Customers</h2>
          <p className="reveal" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
            Discover why our clients trust Velciano Group. Read their testimonials and learn how our high-quality premium textiles have made a positive impact on their businesses and operations.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="testimonials-section" style={{ background: '#000', padding: '8rem 6%' }}>
        <div className="container">
          <div className="testimonials-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '3rem 2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
              }}>
                <div style={{ fontSize: '3rem', color: 'var(--primary)', opacity: 0.2, marginBottom: '1rem', fontFamily: 'serif' }}>“</div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic', marginBottom: '2.5rem' }}>
                  {t.text}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ position: 'relative', width: '54px', height: '54px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 600 }}>{t.name}</h4>
                    <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 500 }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driven by Success Section */}
      <section className="success-section" style={{ background: 'var(--bg-cream)', padding: '10rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div className="fade-up">
              <span className="section-label" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Success Driven</span>
              <h2 style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, color: '#000', marginBottom: '2rem' }}>Driven by Success<br />Why Velciano Group</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444', marginBottom: '3rem' }}>
                Choose Velciano Group as your trusted partner for premium home textiles and a commitment to shared growth. With industry expertise and relentless innovation at our core, we provide the support, resources, and reliable luxury solutions to empower your business success.
              </p>
              <Link href="/about/why-us" className="btn-gold" style={{ display: 'inline-block', padding: '1.2rem 3rem', background: '#000', color: '#fff', textDecoration: 'none', fontWeight: 600, borderRadius: '4px', transition: 'all 0.3s' }}>
                WHY VELCIANO
              </Link>
            </div>
            <div className="fade-up" style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
              <Image src="/images/shaking_hands_business_cta_1776849464795.png" alt="Success Partnership" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
