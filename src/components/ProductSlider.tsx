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
];

export default function ProductSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const scrollDistance = track.scrollWidth - window.innerWidth + (window.innerWidth * 0.12);
    if (scrollDistance <= 0) return;

    const st = ScrollTrigger.getAll().find(instance => instance.trigger === section);
    if (!st) {
      // Fallback if ScrollTrigger is not ready/active
      const scrollAmount = 520;
      track.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
      return;
    }

    const progress = st.progress;
    const steps = products.length - 1;
    const currentStep = Math.round(progress * steps);

    let targetStep = currentStep;
    if (direction === 'next') {
      targetStep = Math.min(currentStep + 1, steps);
    } else {
      targetStep = Math.max(currentStep - 1, 0);
    }

    const startScroll = st.start;
    const targetProgress = targetStep / steps;
    const targetScroll = startScroll + targetProgress * scrollDistance + (targetStep > 0 ? 2 : 0);

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    let mm = gsap.matchMedia(sectionRef);

    mm.add("(min-width: 1025px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;

      if (!track || !section) return;

      // Calculate how much we need to scroll horizontally
      const getScrollDistance = () => track.scrollWidth - window.innerWidth + (window.innerWidth * 0.12);

      // Only apply scroll hijacking if the track is wider than the screen
      if (getScrollDistance() > 0) {
        gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          }
        });
      }
    });

    return () => {
      mm.revert();
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
          <button 
            className="slider-nav-btn prev-btn" 
            onClick={() => scrollSlider('prev')}
            aria-label="Previous categories"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <button 
            className="slider-nav-btn next-btn" 
            onClick={() => scrollSlider('next')}
            aria-label="Next categories"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="product-track" ref={trackRef}>
            {products.map((p, i) => (
              <div className="product-item" key={i}>
                <Link href={p.link} className="category-card">
                  <Image src={p.img} alt={p.title} width={500} height={350} className="product-img" />
                  <div className="category-overlay">
                    <div className="card-content-wrap">
                      <span className="card-label">{p.label}</span>
                      <h3 className="card-title">{p.title}</h3>
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
