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

      gsap.utils.toArray(".fade-up").forEach((elem: any) => {
        gsap.fromTo(elem,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%"
            }
          }
        );
      });

      gsap.fromTo(".testimonial-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-grid",
            start: "top 80%"
          }
        }
      );
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
    { screenshot: "/images/1.png" },
    { screenshot: "/images/2.png" },
    { screenshot: "/images/3.png" },
    { screenshot: "/images/4.png" },
    { screenshot: "/images/5.png" },
    { screenshot: "/images/6.png" }
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
      <section className="testimonials-intro bg-cream">
        <div className="container narrow-container text-center">
          <span className="reveal section-label-gold">Client Success</span>
          <h2 className="reveal testimonials-title">Real Stories from Real Customers</h2>
          <p className="reveal testimonials-subtitle">
            Discover why our clients trust Velciano Group. Read their testimonials and learn how our high-quality premium textiles have made a positive impact on their businesses and operations.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="testimonials-grid-section">
        <div className="container">
          <div className="text-center mb-20">
            <span className="reveal verified-label">
              <span className="label-line"></span>
              Verified Client Feedback
              <span className="label-line"></span>
            </span>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <img
                  src={t.screenshot}
                  alt={`Testimonial ${i + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driven by Success Section */}
      <section className="success-section bg-cream">
        <div className="container">
          <div className="success-grid">
            <div className="fade-up">
              <span className="section-label-gold">Success Driven</span>
              <h2 className="success-title">Driven by Success<br />Why Velciano Group</h2>
              <p className="success-text">
                Choose Velciano Group as your trusted partner for premium home textiles and a commitment to shared growth. With industry expertise and relentless innovation at our core, we provide the support, resources, and reliable luxury solutions to empower your business success.
              </p>
              <Link href="/about/why-us" className="btn-black">
                WHY VELCIANO
              </Link>
            </div>
            <div className="fade-up success-img-wrap">
              <Image src="/images/shaking_hands_business_cta_1776849464795.png" alt="Success Partnership" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
