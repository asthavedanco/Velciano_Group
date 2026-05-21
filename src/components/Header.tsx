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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".has-submenu") && !target.closest(".has-mega")) {
        setActiveSubMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const img = e.currentTarget.getAttribute("data-image");
    if (img) {
      setMegaImage("/" + img);
    }
  };

  const toggleSubMenu = (menu: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (activeSubMenu !== menu) {
      setActiveSubMenu(menu);
    } else {
      setActiveSubMenu(null);
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <header className={`${scrolled ? "scrolled" : "transparent-top"}`}>
      <Link 
        href="/" 
        className="logo"
        onClick={() => {
          setMobileMenuOpen(false);
          setActiveSubMenu(null);
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
      </Link>
      <nav>
        <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li className={`has-submenu ${activeSubMenu === "about" ? "mm-active" : ""}`}>
            <Link 
              href="/about" 
              className="menu-toggle"
              onClick={(e) => toggleSubMenu("about", e)}
            >
              ABOUT <i className="fa-solid fa-chevron-down mm-icon"></i>
            </Link>
            <ul className="submenu">
              <li><Link href="/about" onClick={closeMenu} style={{ fontWeight: '800', color: 'var(--primary)' }}>About Overview</Link></li>
              <li><Link href="/about/why-us" onClick={closeMenu}>Why Velciano</Link></li>
              <li><Link href="/about/manufacturing" onClick={closeMenu}>Velciano Workshop</Link></li>
              <li><Link href="/about/dealership" onClick={closeMenu}>Dealership</Link></li>
              <li><Link href="/about/csr" onClick={closeMenu}>CSR Activities</Link></li>
              <li><Link href="/about/testimonials" onClick={closeMenu}>Testimonials</Link></li>
              <li><Link href="/about/certification" onClick={closeMenu}>Certification</Link></li>
              <li><Link href="/about/global-demand" onClick={closeMenu}>Global Demand</Link></li>
            </ul>
          </li>
          <li className={`has-mega ${activeSubMenu === "collection" ? "mm-active" : ""}`}>
            <Link 
              href="/collection" 
              className="menu-toggle"
              onClick={(e) => toggleSubMenu("collection", e)}
            >
              COLLECTION <i className="fa-solid fa-chevron-down mm-icon"></i>
            </Link>
            <div className="mega-menu">
              <div className="mega-content">
                <div className="mega-links">
                  <span className="mega-label">OUR PRODUCTS</span>
                  <ul>
                    <li><Link href="/collection" onClick={closeMenu} style={{ fontWeight: '800', color: 'var(--primary)' }}>Collection Overview</Link></li>
                    <li><Link href="/collection/bedsheets" data-image="images/bedsheet_luxury.png" onMouseEnter={handleLinkHover} onClick={closeMenu}>BEDSHEETS</Link></li>
                    <li><Link href="/collection/curtains" data-image="images/curtain_modern.png" onMouseEnter={handleLinkHover} onClick={closeMenu}>CURTAINS</Link></li>
                    <li><Link href="/collection/sofa-covers" data-image="images/sofa_cover_luxury.png" onMouseEnter={handleLinkHover} onClick={closeMenu}>SOFA COVERS</Link></li>
                    <li><Link href="/collection/pillow-covers" data-image="images/pillow_cover_decorative.png" onMouseEnter={handleLinkHover} onClick={closeMenu}>PILLOW COVERS</Link></li>
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
          <li><Link href="/export" onClick={closeMenu}>EXPORT</Link></li>
          <li><Link href="/e-catalogue" onClick={closeMenu}>E-CATALOGUE</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>CONTACT</Link></li>
          <li className="mm-only mt-10">
            <Link href="/contact" className="btn-gold w-full" onClick={closeMenu}>ENQUIRE NOW</Link>
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
