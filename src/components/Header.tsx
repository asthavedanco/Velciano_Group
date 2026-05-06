"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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

  const toggleSubMenu = (menu: string, e: React.MouseEvent) => {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      setActiveSubMenu(activeSubMenu === menu ? null : menu);
    }
  };

  return (
    <header className={`${scrolled ? "scrolled" : "transparent-top"}`}>
      <a 
        href="/" 
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        <Image 
          src="/images/Logo_Velciano.png" 
          alt="Velciano" 
          className="logo-img"
          width={150}
          height={70}
          priority
        />
      </a>
      <nav>
        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <a 
              href="/" 
              onClick={(e) => {
                if (window.innerWidth <= 991) {
                  setMobileMenuOpen(false);
                } else {
                  e.preventDefault();
                  window.location.href = "/";
                }
              }}
            >
              HOME
            </a>
          </li>
          <li className={`has-submenu ${activeSubMenu === "about" ? "mm-active" : ""}`}>
            <Link href="/about" onClick={(e) => toggleSubMenu("about", e)}>
              ABOUT <i className="fa-solid fa-chevron-down mm-icon"></i>
            </Link>
            <ul className="submenu">
              <li><Link href="/about/manufacturing" onClick={() => setMobileMenuOpen(false)}>Manufacturing</Link></li>
              <li><Link href="/about/dealership" onClick={() => setMobileMenuOpen(false)}>Dealership</Link></li>
              <li><Link href="/about/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link></li>
              <li><Link href="/about/why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</Link></li>
              <li><Link href="/about/global-demand" onClick={() => setMobileMenuOpen(false)}>Global Demand</Link></li>
              <li><Link href="/about/csr" onClick={() => setMobileMenuOpen(false)}>CSR</Link></li>
              <li><Link href="/about/certification" onClick={() => setMobileMenuOpen(false)}>Certification</Link></li>
            </ul>
          </li>
          <li className="has-mega">
            <Link href="/collection">COLLECTION</Link>
            <div className="mega-menu">
              <div className="mega-content">
                <div className="mega-links">
                  <span className="mega-label">OUR PRODUCTS</span>
                  <ul>
                    <li><Link href="/collection/bedsheets" data-image="images/bedsheet_luxury.png" onMouseEnter={handleLinkHover} onClick={() => setMobileMenuOpen(false)}>BEDSHEETS</Link></li>
                    <li><Link href="/collection/curtains" data-image="images/curtain_modern.png" onMouseEnter={handleLinkHover} onClick={() => setMobileMenuOpen(false)}>CURTAINS</Link></li>
                    <li><Link href="/collection/sofa-covers" data-image="images/sofa_cover_luxury.png" onMouseEnter={handleLinkHover} onClick={() => setMobileMenuOpen(false)}>SOFA COVERS</Link></li>
                    <li><Link href="/collection/pillow-covers" data-image="images/pillow_cover_decorative.png" onMouseEnter={handleLinkHover} onClick={() => setMobileMenuOpen(false)}>PILLOW COVERS</Link></li>
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
          <li><Link href="/export" onClick={() => setMobileMenuOpen(false)}>EXPORT</Link></li>
          <li><Link href="/e-catalogue" onClick={() => setMobileMenuOpen(false)}>E-CATALOGUE</Link></li>
          <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link></li>
          <li className="mm-only mt-10">
            <Link href="/contact" className="btn-gold w-full" onClick={() => setMobileMenuOpen(false)}>ENQUIRE NOW</Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <Link href="/contact" className="btn-gold">ENQUIRE NOW</Link>
        <div 
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            if (!mobileMenuOpen) setActiveSubMenu(null);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
