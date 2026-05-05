"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    label: "PREMIUM",
    title: "Bedsheets",
    desc: "Superior comfort and elegant aesthetics.",
    img: "/images/bedsheet_luxury.png",
    link: "/collection/bedsheets",
  },
  {
    label: "MODERN",
    title: "Curtains",
    desc: "Blending design with perfect functionality.",
    img: "/images/curtain_modern.png",
    link: "/collection/curtains",
  },
  {
    label: "LUXURY",
    title: "Sofa Covers",
    desc: "Protecting and elevating your living space.",
    img: "/images/sofa_cover_luxury.png",
    link: "/collection/sofa-covers",
  },
  {
    label: "DESIGNER",
    title: "Pillow Covers",
    desc: "Finely finished covers for modern interiors.",
    img: "/images/pillow_cover_decorative.png",
    link: "/collection/pillow-covers",
  },
  {
    label: "ARTISTIC",
    title: "Floral Prints",
    desc: "Fresh and airy bedroom designs.",
    img: "/images/bedsheet_floral.png",
    link: "/collection/bedsheets",
  },
];

export default function ProductSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;

      if (!track || !section) return;

      gsap.to(track, {
        x: () => {
          const scrollDistance = track.scrollWidth - window.innerWidth;
          return scrollDistance > 0 ? -scrollDistance - (window.innerWidth * 0.06) : 0;
        },
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="product-slider-wrapper" style={{ position: 'relative' }}>
      <section className="products-carousel" id="categories" ref={sectionRef}>
        <div className="collection-header">
          <span className="collection-sub">OUR COLLECTIONS</span>
          <h2 className="collection-title">Signature Textiles</h2>
        </div>
        
        <div className="product-slider-container">
          <div className="product-track" ref={trackRef}>
            {products.map((p, i) => (
              <div className="product-item" key={i}>
                <Link href={p.link} className="category-card">
                  <Image src={p.img} alt={p.title} width={380} height={480} className="product-img" />
                  <div className="category-overlay">
                    <span className="card-label">{p.label}</span>
                    <h3 className="card-title">{p.title}</h3>
                    <div className="card-explore">
                      <span>EXPLORE</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
