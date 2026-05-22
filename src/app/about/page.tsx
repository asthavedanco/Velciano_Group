"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="sub-hero">
        <div className="hero-bg">
          <Image
            src="/images/bedsheet_luxury.png"
            alt="About Velciano"
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
            <span className="current">ABOUT</span>
          </div>
          <h1 className="hero-title reveal">About Us</h1>
          <p className="hero-subtitle reveal">Premium home textiles. Global standards. Trusted quality.</p>
        </div>
      </section>

      {/* Mosaic About Section */}
      <section className="mosaic-about" id="about">
        <div className="mosaic-header">
          <span className="section-label">About Us</span>
          <h2 className="mosaic-title">We Craft <br /> Premium Home</h2>
        </div>

        <div className="mosaic-grid">
          <div className="mosaic-left">
            <div className="mosaic-img-large">
              <Image src="/images/bedsheet_floral.png" alt="Home Textile" width={600} height={800} />
            </div>
          </div>
          <div className="mosaic-right">
            <p className="mosaic-text">
              Velciano Group is a trusted manufacturer and exporter of premium home textile products, including bedsheets, curtains, and sofa covers designed for modern living.
              <br /><br />
              Our products are crafted using high-quality fabrics and advanced techniques, ensuring durability, elegance, and comfort, while we focus on long-term relationships through reliability and customer satisfaction.
            </p>

            <div className="mosaic-bottom">
              <Link href="/contact" className="circular-cta">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Contact us</span>
                <div className="scroll-dot"></div>
              </Link>

              <div className="mosaic-img-small">
                <Image src="/images/curtain_modern.png" alt="Premium Quality" width={300} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="promise-section py-32 bg-cream">
        <div className="container">
          <div className="promise-header text-center mb-24 reveal">
            <span className="section-label-gold">OUR PROMISE</span>
            <h2 className="promise-title">
              We ensure top-quality home textiles with dedication, <br className="hidden md:block" />
              innovation, and customer satisfaction.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="promise-card reveal text-center">
              <div className="promise-icon mb-8 flex justify-center">
                <i className="fa-solid fa-bullseye text-6xl text-primary"></i>
              </div>
              <h3 className="promise-card-title" >Our Mission</h3>
              <p className="promise-card-text" >
                To deliver high-quality bedsheets, curtains, and sofa covers with consistency and excellence, while supporting partners and promoting sustainable textile practices.
              </p>
            </div>

            <div className="promise-card reveal text-center">
              <div className="promise-icon mb-8 flex justify-center">
                <i className="fa-solid fa-eye text-6xl text-primary"></i>
              </div>
              <h3 className="promise-card-title" >Our Vision</h3>
              <p className="promise-card-text" >
                To become a globally trusted name in home textiles, recognized for premium quality, innovative designs, and dependable service.
              </p>
            </div>

            <div className="promise-card reveal text-center">
              <div className="promise-icon mb-8 flex justify-center">
                <i className="fa-solid fa-gem text-6xl text-primary"></i>
              </div>
              <h3 className="promise-card-title" >Core Value</h3>
              <p className="promise-card-text" >
                At Velciano Group, we focus on quality, reliability, and innovation to deliver premium home textile products while ensuring complete customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section pb-32 pt-0 bg-black">
        <div className="container">
          <div className="team-card reveal">
            <div className="team-header text-center mb-20">
              <h2 className="team-main-title">Executive Team</h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
            </div>

            <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20">
              <div className="team-member text-center">
                <div className="member-img-wrap mb-10 mx-auto">
                  <Image src="/images/amit.png" alt="Amit Chug" width={200} height={200} className="rounded-full object-cover object-top transition-all duration-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2" >Amit Chug</h3>
                <p className="text-gray-500 font-medium mt-2">Founder</p>
              </div>

              <div className="team-member text-center">
                <div className="member-img-wrap mb-10">
                  <Image src="/images/nachiket.png" alt="Nachiket Patel" width={200} height={200} className="rounded-full object-cover object-top transition-all duration-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2" >Nachiket Patel</h3>
                <p className="text-gray-500 font-medium mt-2">Co-Founder</p>
              </div>

              <div className="team-member text-center">
                <div className="member-img-wrap mb-10 mx-auto">
                  <Image src="/images/vansh.png" alt="Vansh Chug" width={200} height={200} className="rounded-full object-cover object-top transition-all duration-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2" >Vansh Chug</h3>
                <p className="text-gray-500 font-medium mt-2">Global Business Head</p>
              </div>

              <div className="team-member text-center">
                <div className="member-img-wrap mb-10 mx-auto">
                  <Image src="/images/Khush.png" alt="Khush Patel" width={200} height={200} className="rounded-full object-cover object-top transition-all duration-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2" >Khush Patel</h3>
                <p className="text-gray-500 font-medium mt-2">Regional Business & R&D Head</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Section */}
      <section className="explore-section py-32 bg-cream">
        <div className="container">
          <div className="explore-header mb-32 reveal">
            <span className="section-label-gold">EXPLORE MORE</span>
            <h2 className="explore-title">
              Get to <br /> Know Us Better
            </h2>
          </div>

          <div className="explore-list" style={{ borderTop: '1px solid #e5e7eb' }}>
            {/* manufacturing */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >Manufacturing</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  Our manufacturing units are equipped with advanced technology and located in key textile hubs, ensuring high-quality production, efficiency, and consistency.
                </p>
              </div>
              <div >
                <Link href="/about/manufacturing" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Testimonials */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >Testimonials</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  Our global clients trust Velciano Group for reliable quality, timely delivery, and long-term business relationships.
                </p>
              </div>
              <div >
                <Link href="/about/testimonials" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Dealership */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >Dealership</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  Join our dealer network to unlock better margins, exclusive designs, and complete business support for growth.
                </p>
              </div>
              <div >
                <Link href="/about/dealership" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Why Us */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >Why Us</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  We deliver premium home textile products with quality assurance, reliable service, and global standards.
                </p>
              </div>
              <div >
                <Link href="/about/why-us" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Global Demand */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >Global Demand</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  Indian home textiles are in high global demand, creating strong opportunities for growth and export partnerships.
                </p>
              </div>
              <div >
                <Link href="/about/global-demand" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* CSR Activity */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >CSR Activity</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  We support community development and sustainable practices, contributing positively to society and the environment.
                </p>
              </div>
              <div >
                <Link href="/about/csr" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Certifications */}
            <div className="explore-row-grid" >
              <div>
                <h3 className="text-3xl font-bold" >Certifications</h3>
              </div>
              <div>
                <p className="text-lg leading-relaxed" >
                  We are certified and compliant with global standards, ensuring trust, quality, and reliability in every product.
                </p>
              </div>
              <div >
                <Link href="/about/certification" className="explore-btn-badge shadow-sm">
                  <span>Explore <br /> More</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
