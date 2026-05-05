"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ECataloguePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.parallax-cta', {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.collaborate-cta',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src="/images/curtain_modern.png" 
            alt="E-Catalogue" 
            fill 
            className="object-cover"
            priority
          />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container">
          <h1 className="hero-title reveal">E-Catalogue</h1>
          <p className="hero-subtitle reveal">Instant Access to Our Latest Products & Specifications.</p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-catalogue" data-theme="light">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-left">
              <div className="catalogue-book-wrap">
                <div className="book">
                  <div className="book-page-base">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', width: '100%', height: '100%', gap: '2px' }}>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image src="/images/bedsheet_luxury.png" alt="Bedsheets" fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image src="/images/curtain_modern.png" alt="Curtains" fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image src="/images/pillow_cover_decorative.png" alt="Pillow Covers" fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <Image src="/images/sofa_cover_luxury.png" alt="Sofa Covers" fill style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>
                  <div className="book-cover">
                    <Image src="/images/bedsheet_luxury.png" alt="Front Cover" width={400} height={600} />
                  </div>
                  <div className="book-cover">
                    <Image src="/images/curtain_modern.png" alt="Second Cover" width={400} height={600} />
                  </div>
                  <div className="book-cover">
                    <Image src="/images/bedsheet_floral.png" alt="Third Cover" width={400} height={600} />
                  </div>
                </div>
              </div>
            </div>
            <div className="featured-right">
              <h2 className="featured-title">Download<br /><span>Catalogue</span></h2>
              <p className="featured-desc">Download our comprehensive e-catalogue to explore our full range of high-quality home textile products. Find detailed information, specifications, and options to meet your needs.</p>
              
              <a href="/Velciano_Catalogue.pdf" download className="download-file-btn">
                <div className="btn-arrow"><i className="fa-solid fa-arrow-down"></i></div>
                <div className="btn-text">DOWNLOAD<br />FILE</div>
                <div className="btn-pdf-icon"><i className="fa-solid fa-file-pdf"></i></div>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Profile Section */}
      <section className="global-head-showcase">
        <div className="container">
          <div className="head-profile-card">
            <div className="head-image">
              <Image src="/images/business_head_portrait_1776839185116.png" alt="Global Business Head" width={400} height={500} />
            </div>
            <div className="head-content">
              <div className="head-talk-label">
                <span>Let's Talk</span>
              </div>
              <h2><b>Connect with Our</b> <span>Global Business Head</span></h2>
              <p>As a Global Business Director with over 10 years of experience, I specialize in helping home textile importers overcome challenges and achieve rapid business growth.</p>
              
              <div className="head-action-btns-3d">
                <a href="#" className="btn-33d li-btn">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>Linkedin</span>
                </a>
                <a href="#" className="btn-33d wa-btn">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Whatsapp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
