"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CollectionLayout({ 
  title, 
  subtitle, 
  bgImage, 
  introTitle, 
  introText, 
  features, 
  products, 
  applications, 
  faqs 
}: any) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="sub-page">
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image src={bgImage} alt={title} fill className="object-cover" priority />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb reveal">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <Link href="/collection">COLLECTION</Link>
            <span className="sep">/</span>
            <span className="current" style={{ textTransform: 'uppercase' }}>{title}</span>
          </div>
          <h1 className="hero-title reveal">{title}</h1>
          <p className="hero-subtitle reveal">{subtitle}</p>
        </div>
      </section>

      {/* Intro & Features Section - Cream Theme */}
      <section className="bg-cream" style={{ backgroundColor: 'var(--bg-cream)', padding: '7rem 0 6rem' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1.5px', lineHeight: 1.2 }}>
            {introTitle}
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#444444', maxWidth: '850px', margin: '0 auto 4rem', fontWeight: 500 }}>
            {introText}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            {features.map((f: any, i: number) => (
              <div key={i} style={{ padding: '2rem', border: '1px solid #1a1a1a', borderRadius: '12px', background: 'var(--bg-cream)', boxShadow: 'none' }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111111', marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>{f.title}</h4>
                <p style={{ color: '#555555', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid - Black Theme */}
      <section style={{ backgroundColor: '#050505', padding: '7rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '4rem', textAlign: 'center', color: '#ffffff', letterSpacing: '-1.5px' }}>
            {title} Options
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {products.map((p: any, i: number) => (
              <Link key={i} href="/contact" className="group cursor-pointer block" style={{ textDecoration: 'none' }}>
                <div style={{ position: 'relative', height: '340px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h3 className="group-hover:text-primary transition-colors duration-300" style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff', textDecoration: 'none', letterSpacing: '-0.5px' }}>{p.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>Enquire Now</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Applications - Cream Theme */}
      <section className="bg-cream" style={{ backgroundColor: 'var(--bg-cream)', padding: '7rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '4rem', color: '#111111', textAlign: 'center', letterSpacing: '-1.5px' }}>Discover the Possibilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {applications.map((app: string, i: number) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', background: 'var(--bg-cream)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #1a1a1a', boxShadow: 'none' }}>
                <i className="fa-solid fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.6rem' }}></i>
                <span style={{ fontSize: '1.15rem', color: '#222222', fontWeight: 700, letterSpacing: '-0.3px' }}>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Black Theme */}
      <section style={{ backgroundColor: '#050505', padding: '7rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '4rem', color: '#ffffff', textAlign: 'center', letterSpacing: '-1.5px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '850px', margin: '0 auto' }}>
            {faqs.map((faq: any, i: number) => (
              <FAQItem 
                key={i} 
                faq={faq} 
                isOpen={openFaqIndex === i}
                onClick={() => toggleFaq(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const FAQItem = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <div 
      style={{ 
        background: 'rgba(255, 255, 255, 0.03)', 
        padding: '1.5rem 2rem', 
        borderRadius: '12px', 
        border: '1px solid rgba(255, 255, 255, 0.08)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0, color: '#ffffff', letterSpacing: '-0.3px' }}>{faq.q}</h4>
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`} style={{ color: 'var(--primary)', transition: 'transform 0.3s ease', fontSize: '1.1rem' }}></i>
      </div>
      {isOpen && (
        <p style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.7, marginTop: '1.2rem', animation: 'fadeIn 0.3s ease-in-out', fontWeight: 500, fontSize: '1.05rem', marginBottom: 0 }}>
          {faq.a}
        </p>
      )}
    </div>
  );
};
