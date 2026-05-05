"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const certifications = [
  {
    img: "/images/ISO_9001-2015.svg.png",
    title: "ISO 9001:2015",
  },
  {
    img: "/images/msme.png",
    title: "MSME",
  },
  {
    img: "/images/fieo.png",
    title: "FIEO",
  },
  {
    img: "/images/GST_India.png",
    title: "GST",
  },
  {
    img: "/images/iiiem.png",
    title: "iiiEM",
  },
  {
    img: "/images/svc.png",
    title: "SVC BANK",
  },
  {
    img: "/images/Icegate.png",
    title: "ICE GATE",
  },
  {
    img: "/images/dgft.jfif",
    title: "DGFT",
  },
  {
    img: "/images/ecgc.png",
    title: "ECGC",
  },
  {
    img: "/images/icc.jfif",
    title: "ICC",
  },
  {
    img: "/images/aadhar.png",
    title: "AADHAR",
  },
  {
    img: "/images/gstn.png",
    title: "GSTN",
  },
  {
    img: "/images/logo-msc.png",
    title: "MSC",
  },
  {
    img: "/images/gacl.png",
    title: "GACL",
  },
];

export default function CertificationPage() {
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
            src="/images/bedsheet_luxury.png"
            alt="Accreditations and Standards"
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
            <span className="current">CERTIFICATION</span>
          </div>
          <h1 className="hero-title reveal">Accreditations and Standards</h1>
          <p className="hero-subtitle reveal">We proudly meet and exceed industry standards.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ background: 'var(--bg-cream)', padding: '6rem 6%' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div className="reveal">
              <span style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Commitment to Excellence</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: 700, margin: '1.5rem 0', color: '#000', lineHeight: 1.2 }}>The Benchmark of Quality</h2>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
                At Velciano Group, we pride ourselves on adhering to the highest standards of quality and excellence. Our operations are certified and recognized by leading international and domestic bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid Section */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container">
          <div className="text-center mb-20 reveal">
            <span className="section-label text-primary uppercase tracking-[4px] font-bold text-sm block mb-4">OUR CERTIFICATIONS</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Standards We Uphold</h2>
          </div>

          <div className="cert-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card" style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}>
                <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                  {cert.img ? (
                    <Image src={cert.img} width={100} height={100} alt={cert.title} style={{ objectFit: 'contain' }} />
                  ) : (
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(177,125,38,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                      <i className="fa-solid fa-award"></i>
                    </div>
                  )}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
