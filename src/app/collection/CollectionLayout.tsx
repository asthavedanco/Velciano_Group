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

      {/* Intro Section */}
      <section className="container py-20 text-center" style={{ padding: '5rem 0' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-white)' }}>
          {introTitle}
        </h2>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          {introText}
        </p>
      </section>

      {/* Features Grid */}
      <section className="container py-12" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {features.map((f: any, i: number) => (
            <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'var(--glass)' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.5rem' }}>{f.title}</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-20" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', color: 'var(--text-white)' }}>
          {title} Options
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {products.map((p: any, i: number) => (
            <Link key={i} href="/contact" className="group cursor-pointer block" style={{ textDecoration: 'none' }}>
              <div style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
                <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="group-hover:text-primary transition-colors duration-300" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-white)', textDecoration: 'none' }}>{p.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>Enquire Now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section style={{ backgroundColor: 'var(--glass)', padding: '5rem 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', color: 'var(--text-white)', textAlign: 'center' }}>Discover the Possibilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {applications.map((app: string, i: number) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--glass)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                <i className="fa-solid fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.5rem' }}></i>
                <span style={{ fontSize: '1.125rem', color: 'var(--text-white)', fontWeight: 500 }}>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container" style={{ padding: '5rem 0' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', color: 'var(--text-white)', textAlign: 'center' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq: any, i: number) => (
            <FAQItem 
              key={i} 
              faq={faq} 
              isOpen={openFaqIndex === i}
              onClick={() => toggleFaq(i)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

const FAQItem = ({ faq, isOpen, onClick }: { faq: any; isOpen: boolean; onClick: () => void }) => {
  return (
    <div 
      style={{ 
        background: 'var(--glass)', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid var(--glass-border)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onClick={onClick}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-white)' }}>{faq.q}</h4>
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`} style={{ color: 'var(--primary)', transition: 'transform 0.3s ease' }}></i>
      </div>
      {isOpen && (
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1rem', animation: 'fadeIn 0.3s ease-in-out' }}>
          {faq.a}
        </p>
      )}
    </div>
  );
};
