"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import { gsap } from "gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = new Swiper(".hero-swiper", {
      modules: [Navigation, Pagination, Autoplay, Parallax],
      speed: 1200,
      parallax: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          let next = current < total ? current + 1 : 1;
          return `<span class="current-slide">0${current}</span><span class="slide-progress"></span><span class="total-slides">0${next}</span>`;
        },
      },
      navigation: {
        nextEl: ".hero-swiper-next",
        prevEl: ".hero-swiper-prev",
      },

      on: {
        slideChangeTransitionStart: function (swiper: Swiper) {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const img = activeSlide.querySelector(".slide-img");

          gsap.fromTo(
            activeSlide.querySelectorAll(".slide-content h3, .slide-content h2, .slide-content h1, .slide-content p, .slide-content .btn"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.3 }
          );

          if (img) {
            gsap.fromTo(img,
              { scale: 1.2 },
              { scale: 1, duration: 2, ease: "power2.out" }
            );
          }
        },
      },
    });

    swiperRef.current = swiper;

    return () => {
      if (swiperRef.current) swiperRef.current.destroy();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="swiper hero-swiper">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="slide-bg" data-swiper-parallax="50%">
              <Image src="/images/bedsheet_luxury.png" alt="Premium Bedsheets" className="slide-img" fill priority />
            </div>
            <div className="slide-content" data-swiper-parallax="-300">
              <h3 className="main-heading">Premium Home<br />Textile Solutions</h3>
              <h2 className="sub-heading">High-quality bedsheets, curtains, and sofa covers designed for comfort, elegance, and durability.</h2>
              <Link href="/collection" className="btn" style={{ marginTop: "2rem" }}>
                Explore Products <i className="fa-solid fa-arrow-right offset-arrow"></i>
              </Link>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="slide-bg" data-swiper-parallax="50%">
              <Image src="/images/curtain_modern.png" alt="Modern Curtains" className="slide-img" fill />
            </div>
            <div className="slide-content" data-swiper-parallax="-300">
              <h3 className="main-heading">Crafted for<br />Global Standards</h3>
              <h2 className="sub-heading">Sourced from trusted textile mills and developed with precision to ensure consistent quality and performance worldwide.</h2>
              <Link href="/collection" className="btn" style={{ marginTop: "2rem" }}>
                View Collection <i className="fa-solid fa-arrow-right offset-arrow"></i>
              </Link>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="slide-bg" data-swiper-parallax="50%">
              <Image src="/images/sofa_cover_luxury.png" alt="Luxury Sofa Covers" className="slide-img" fill />
            </div>
            <div className="slide-content" data-swiper-parallax="-300">
              <h3 className="main-heading">Grow Your Business<br />with Velciano</h3>
              <h2 className="sub-heading">Join our dealer network and unlock exclusive designs, better margins, and complete business support.</h2>
              <Link href="/about" className="btn" style={{ marginTop: "2rem" }}>
                Become a Partner <i className="fa-solid fa-arrow-right offset-arrow"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-nav-wrapper">
          <div className="hero-swiper-prev hero-nav-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="hero-swiper-next hero-nav-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>        {/* Swiper Custom UI */}
        <div className="hero-bottom-ui">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
