"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSlider from "@/components/HeroSlider";
import ProductSlider from "@/components/ProductSlider";
import StatsCounter from "@/components/StatsCounter";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade/Slide In Animations
      const animElements = document.querySelectorAll(
        ".category-card, .mosaic-header, .mosaic-text, .circular-cta, .section-title, .why-item-new, .why-new-left, .explore-circle, .built-content, .built-top-label, .inquiry-label-wrapper, .inquiry-title-bold, .inquiry-title-light, .inquiry-form-new, .product-item, .stat-item, .section-label"
      );

      animElements.forEach((el, index) => {
        gsap.fromTo(el,
          {
            opacity: 0,
            y: 30,
            scale: el.classList.contains("zoom-in") ? 0.98 : 1
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none"
            },
            delay: (index % 4) * 0.1
          }
        );
      });

      // Parallax effect for large images
      gsap.utils.toArray<HTMLElement>(".mosaic-img-large, .mosaic-img-small, .built-banner").forEach((img) => {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });

    // Header Color Change on Scroll
    const headerTrigger = ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        const header = document.querySelector('header');
        if (self.direction === 1) header?.classList.add('scrolled');
        else if (self.scroll() < 80) header?.classList.remove('scrolled');
      }
    });

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      headerTrigger.kill();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <HeroSlider />

      {/* Mosaic About Section */}
      <section className="mosaic-about" id="about">
        <div className="mosaic-header">
          <span className="section-label">About Us</span>
          <h2 className="mosaic-title">Delivering Premium <br /> Home Textile Solutions</h2>
        </div>

        <div className="mosaic-grid">
          <div className="mosaic-left">
            <div className="mosaic-img-large">
              <Image src="/images/bedsheet_floral.png" alt="Premium Textiles" width={600} height={800} />
            </div>
          </div>
          <div className="mosaic-right">
            <p className="mosaic-text">
              Velciano Group is a diversified textile and investment group focused on delivering premium home textile products globally. Our integrated structure combines sourcing, manufacturing, and export operations to ensure consistent quality and efficiency.
            </p>

            <div className="mosaic-bottom">
              <Link href="/about" className="circular-cta">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <span>About us</span>
                <div className="scroll-dot"></div>
              </Link>

              <div className="mosaic-img-small">
                <Image src="/images/curtain_geometric.png" alt="Modern Designs" width={300} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-new" id="why" data-theme="light">
        <div className="why-new-grid">
          <div className="why-new-left">
            <div className="why-header-combo">
              <h1 style={{ fontSize: "4rem", lineHeight: "0.8", marginBottom: "0" }}>Why</h1>
              <h2 style={{ fontSize: "4rem", fontWeight: "300", marginTop: "0", color: "#333" }}>Choose Us</h2>
            </div>
            <div className="why-long-text">
              <p>Explore the benefits of choosing Velciano Group for your home textile needs. With strong industry expertise and a commitment to quality, we deliver products that combine comfort, durability, and modern design.</p>
              <p>Trust Velciano Group for consistent quality, dependable service, and long-term business value.
              </p>
            </div>
          </div>

          <div className="why-new-right">
            <div className="why-item-new">
              <div className="why-icon-new"><i className="fa-solid fa-award"></i></div>
              <div className="why-info-new">
                <h3>Premium Quality Products</h3>
                <p>High-quality bedsheets, curtains, and sofa covers crafted with strict quality standards for durability and comfort.</p>
              </div>
            </div>
            <div className="why-item-new">
              <div className="why-icon-new"><i className="fa-solid fa-truck-fast"></i></div>
              <div className="why-info-new">
                <h3>Global Export Expertise</h3>
                <p>Smooth international trade operations with proper documentation, safe packaging, and timely worldwide delivery.</p>
              </div>
            </div>
            <div className="why-item-new">
              <div className="why-icon-new"><i className="fa-solid fa-box-open"></i></div>
              <div className="why-info-new">
                <h3>Custom Packaging & Reliable Delivery</h3>
                <p>Flexible packaging with private labeling and a strong logistics network ensuring secure and on-time delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-footer-action" style={{ textAlign: "center", marginTop: "5rem" }}>
          <Link href="/about" className="btn-gold" style={{ padding: "1.2rem 4rem" }}>
            Explore More
          </Link>
        </div>
      </section>

      <ProductSlider />

      {/* Built to Last Banner */}
      <section className="built-banner">
        <div className="built-overlay"></div>
        <div className="built-content">
          <div className="built-top-label">
            <i className="fa-solid fa-star-of-life"></i>
            <span>Excellence in crafting superior home textiles</span>
          </div>
          <h2>Crafted for Everyday Luxury</h2>
          <p>Blending modern design with long-lasting comfort to elevate every living space.</p>
          <Link href="/collection" className="btn yellow-btn">Explore Our Collection</Link>
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="inquiry-new" id="contact" data-theme="light">
        <div className="inquiry-container">
          <div className="inquiry-left">
            <div className="inquiry-label-wrapper">
              <span className="x-icon">✕</span>
              <span className="label-text">Let’s grow together with the Velciano Group</span>
            </div>
            <h2 className="inquiry-title-bold">Inquire Now</h2>
            <h2 className="inquiry-title-light">For Global Business Opportunities</h2>
          </div>

          <div className="inquiry-right">
            <form className="inquiry-form-new">
              <div className="form-row">
                <div className="form-group">
                  <label>Name:<span>*</span></label>
                  <input type="text" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                  <label>Email:<span>*</span></label>
                  <input type="email" placeholder="Enter Email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone/WhatsApp:<span>*</span></label>
                  <input type="text" placeholder="Mobile Number" />
                </div>
                <div className="form-group">
                  <label>Subject:<span>*</span></label>
                  <select>
                    <option>-Select-</option>
                    <option>Bedsheets</option>
                    <option>Curtains</option>
                    <option>Sofa Covers</option>
                    <option>Pillow Covers</option>
                    <option>Custom Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Message:<span>*</span></label>
                <textarea placeholder="Enter Your Requirements"></textarea>
              </div>
              <button type="submit" className="inquiry-submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
