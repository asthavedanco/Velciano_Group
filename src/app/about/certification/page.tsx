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
    img: "/images/dgft.jpg",
    title: "DGFT",
  },
  {
    img: "/images/ecgc.png",
    title: "ECGC",
  },
  {
    img: "/images/icc.jpg",
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
    img: "/images/msc.png",
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
      <section className="bg-cream py-24">
        <div className="container">
          <div className="narrow-container text-center">
            <div className="reveal">
              <span className="section-label-gold">Commitment to Excellence</span>
              <h2 className="testimonials-title">The Benchmark of Quality</h2>
              <p className="testimonials-subtitle">
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
            <span className="section-label-gold">OUR CERTIFICATIONS</span>
            <h2 className="section-title text-white">Standards We Uphold</h2>
          </div>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card reveal">
                <div className="img-wrap">
                  {cert.img ? (
                    <Image src={cert.img} width={100} height={100} alt={cert.title} style={{ objectFit: 'contain' }} />
                  ) : (
                    <div className="award-icon">
                      <i className="fa-solid fa-award"></i>
                    </div>
                  )}
                </div>
                <h3>{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
