"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [megaImage, setMegaImage] = useState("/images/bedsheet_luxury.png");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const img = e.currentTarget.getAttribute("data-image");
    if (img) {
      setMegaImage("/" + img);
    }
  };

  return (
    <header className={`${scrolled ? "scrolled" : "transparent-top"}`}>
      <Link href="/" className="logo">
        <Image 
          src="/images/Logo_Velciano.png" 
          alt="Velciano" 
          className="logo-img"
          width={150}
          height={70}
          priority
        />
      </Link>
      <nav>
        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li><Link href="/">HOME</Link></li>
          <li className="has-submenu">
            <Link href="/about">ABOUT</Link>
            <ul className="submenu">
              <li><Link href="/about/manufacturing">Manufacturing</Link></li>
              <li><Link href="/about/dealership">Dealership</Link></li>
              <li><Link href="/about/testimonials">Testimonials</Link></li>
              <li><Link href="/about/why-us">Why Us</Link></li>
              <li><Link href="/about/global-demand">Global Demand</Link></li>
              <li><Link href="/about/csr">CSR</Link></li>
              <li><Link href="/about/certification">Certification</Link></li>
            </ul>
          </li>
          <li className="has-mega">
            <Link href="/collection">COLLECTION</Link>
            <div className="mega-menu">
              <div className="mega-content">
                <div className="mega-links">
                  <span className="mega-label">OUR PRODUCTS</span>
                  <ul>
                    <li><Link href="/collection/bedsheets" data-image="images/bedsheet_luxury.png" onMouseEnter={handleLinkHover}>BEDSHEETS</Link></li>
                    <li><Link href="/collection/curtains" data-image="images/curtain_modern.png" onMouseEnter={handleLinkHover}>CURTAINS</Link></li>
                    <li><Link href="/collection/sofa-covers" data-image="images/sofa_cover_luxury.png" onMouseEnter={handleLinkHover}>SOFA COVERS</Link></li>
                    <li><Link href="/collection/pillow-covers" data-image="images/pillow_cover_decorative.png" onMouseEnter={handleLinkHover}>PILLOW COVERS</Link></li>
                  </ul>
                </div>
                <div className="mega-image">
                  <Image 
                    src={megaImage} 
                    id="megaImage" 
                    alt="Our Collection"
                    width={380}
                    height={260}
                    className="transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>
          </li>
          <li><Link href="/export">EXPORT</Link></li>
          <li><Link href="/e-catalogue">E-CATALOGUE</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <div className="header-actions">
        <Link href="/contact" className="btn-gold">ENQUIRE NOW</Link>
        <div 
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
