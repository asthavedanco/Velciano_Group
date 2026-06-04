"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const advantages = [
  {
    title: "Quality Assurance",
    icon: "fa-check-double",
    desc: "We prioritize quality at every stage of production. Our stringent quality checks before, during, and after manufacturing ensure that our products meet international standards. As an ISO 9001:2015 certified company, our commitment to superior quality guarantees you consistently excellent products."
  },
  {
    title: "Unparalleled Selection",
    icon: "fa-swatchbook",
    desc: "At Velciano Group, we offer a wide range of premium textiles—bedsheets, curtains, pillow covers, and sofa covers. Our extensive collection of styles, colors, and finishes ensures that you will find exactly what you need to meet the unique tastes of your market."
  },
  {
    title: "Unmatched Production Capacity",
    icon: "fa-industry",
    desc: "Our strong in-house manufacturing network enables us to efficiently manage projects of any scale. This ensures faster turnaround times and a dependable supply chain, giving global partners confidence that their orders will be fulfilled promptly."
  },
  {
    title: "Affordable Premium Quality",
    icon: "fa-hand-holding-dollar",
    desc: "We believe high-quality products should be accessible. By leveraging efficient production techniques and economies of scale, we offer our top-tier products at highly competitive prices, ensuring the best value for your investment."
  }
];

const features = [
  { title: "Long-Term Vision", icon: "fa-eye", desc: "We focus on mutual growth and success, aiming to be your trusted partner for years." },
  { title: "Endless Variety", icon: "fa-layer-group", desc: "Continuous expansion of product lines to include the latest global trends." },
  { title: "Explore Before You Buy", icon: "fa-box-open", desc: "We offer free samples so you can experience our quality firsthand before deciding." },
  { title: "Confidence through Transparency", icon: "fa-user-check", desc: "We invite you to visit our facilities to see our quality commitment firsthand." },
  { title: "Custom Packaging", icon: "fa-box", desc: "Tailored solutions designed for safe, space-saving, and professional global delivery." },
  { title: "Quick Delivery", icon: "fa-truck-fast", desc: "Meticulous planning to ensure your project stays on track with on-time shipping." },
  { title: "Trending Developments", icon: "fa-chart-line", desc: "Drawing inspiration from global market insights to develop unique, modern products." },
  { title: "Seamless Experience", icon: "fa-cart-shopping", desc: "A world-class purchasing process with clear communication throughout the journey." },
  { title: "Exceptional Service", icon: "fa-headset", desc: "Dedicated after-sales support ready to address any questions or concerns." },
  { title: "Fast & Responsive", icon: "fa-bolt", desc: "Quick responses to every inquiry or complaint for a stress-free partnership." },
  { title: "Your Brand Labeling", icon: "fa-tag", desc: "Customized branding options on products and packaging to align with your identity." },
  { title: "Marketing Support", icon: "fa-bullhorn", desc: "Extensive branding and marketing resources to help you promote products effectively." },
  { title: "Exclusive Dealership", icon: "fa-award", desc: "Exclusive opportunities to be the sole representative of Velciano in your region." },
  { title: "Eco-Friendly Practices", icon: "fa-leaf", desc: "Sustainable manufacturing methods that contribute to a healthier planet." },
  { title: "Dedicated Managers", icon: "fa-user-tie", desc: "Personalized service with a single point of contact for all your needs." }
];

export default function WhyUsPage() {
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

      gsap.from(".feat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feat-grid",
          start: "top 85%",
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
            src="/images/premium_home_textiles_hero.png" 
            alt="Why Us" 
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
            <span className="current">WHY VELCIANO</span>
          </div>
          <h1 className="hero-title reveal">Why Velciano?</h1>
          <p className="hero-subtitle reveal">Discover what sets Velciano apart as a leader in premium home textiles.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ background: 'var(--bg-cream)', padding: '8rem 6%' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="reveal" style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Distinction</span>
            <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 700, margin: '2rem 0', color: '#000', lineHeight: 1.1 }}>Discover What Sets Velciano Apart from the Competition</h2>
            <p className="reveal" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#333' }}>
              We combine years of heritage with a relentless drive for innovation, creating a unique value proposition for partners who demand excellence in every fiber.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ background: '#111', padding: '8rem 6%' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: 700, color: '#fff' }}>The Velciano Advantage</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem', fontSize: '1.1rem' }}>Comprehensive support and quality at every touchpoint.</p>
          </div>
          
          <div className="feat-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', 
            gap: '1.5rem' 
          }}>
            {features.map((feat, i) => (
              <div key={i} className="feat-card" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'border-color 0.3s'
              }}>
                <i className={`fa-solid ${feat.icon}`} style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem', display: 'block' }}></i>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>{feat.title}</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.95rem', lineHeight: 1.6 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
