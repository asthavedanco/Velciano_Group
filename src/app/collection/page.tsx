"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function CollectionPage() {
  useEffect(() => {
    gsap.from(".collection-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  const categories = [
    { 
      title: "Premium Bedsheets", 
      desc: "Luxury cotton and silk bedsheets designed for ultimate comfort and elegance.",
      img: "/images/bedsheet_luxury.png", 
      link: "/collection/bedsheets" 
    },
    { 
      title: "Elegant Curtains", 
      desc: "Sophisticated window treatments including modern sheer and velvet blackout options.",
      img: "/images/curtain_modern.png", 
      link: "/collection/curtains" 
    },
    { 
      title: "Luxury Sofa Covers", 
      desc: "High-quality textured fabrics to protect your furniture while adding style.",
      img: "/images/sofa_cover_luxury.png", 
      link: "/collection/sofa-covers" 
    },
    { 
      title: "Decorative Pillows", 
      desc: "Intricately designed pillow covers that add a touch of art to any room.",
      img: "/images/pillow_cover_decorative.png", 
      link: "/collection/pillow-covers" 
    },
  ];

  return (
    <main className="sub-page">
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src="/images/bedsheet_floral.png" 
            alt="Our Collection" 
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
            <span className="current">COLLECTION</span>
          </div>
          <h1 className="hero-title reveal">Our Collection</h1>
          <p className="hero-subtitle">Discover the finest range of premium home textiles.</p>
        </div>
      </section>

      <section className="bg-cream" style={{ backgroundColor: 'var(--bg-cream)', padding: '8rem 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.link} className="collection-card-wrap group block cursor-pointer">
                <div className="category-card !h-[450px] rounded-3xl overflow-hidden relative">
                  <Image 
                    src={cat.img} 
                    alt={cat.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="category-overlay !bg-black/40 group-hover:!bg-black/60 !bg-gradient-to-t !from-black/95 !via-black/40 !to-transparent flex flex-col justify-end p-10 transition-all duration-500">
                    <h3 className="text-3xl font-bold !text-white group-hover:!text-primary transition-colors duration-300 mb-3 relative z-10">{cat.title}</h3>
                    <p className="!text-white/90 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 relative z-10">{cat.desc}</p>
                    <div className="btn-link !text-primary !font-bold tracking-widest text-xs flex items-center gap-3 relative z-10">
                      VIEW DETAILS <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
