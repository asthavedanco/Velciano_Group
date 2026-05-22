"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    const badge = document.querySelector('.download-badge') as HTMLElement | null;
    if (!badge) return;

    const updateColor = () => {
      // Temporarily disable pointer events to read underneath the badge
      badge.style.pointerEvents = 'none';
      
      const rect = badge.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      let el = document.elementFromPoint(x, y) as HTMLElement | null;
      badge.style.pointerEvents = 'auto';

      if (!el) return;

      // Traverse up the DOM tree to find the nearest element with a background color
      let bgColor = 'rgba(0, 0, 0, 0)';
      let currentEl: HTMLElement | null = el;
      while (currentEl && currentEl !== document.documentElement) {
        const style = window.getComputedStyle(currentEl);
        const bg = style.backgroundColor;
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          bgColor = bg;
          break;
        }
        currentEl = currentEl.parentElement;
      }

      // If no valid background is detected, default to black (so text is white)
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        bgColor = 'rgb(0, 0, 0)';
      }

      // Parse RGB or RGBA values
      let r = 0, g = 0, b = 0;
      const rgbMatch = bgColor.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        r = parseInt(rgbMatch[0], 10);
        g = parseInt(rgbMatch[1], 10);
        b = parseInt(rgbMatch[2], 10);
      }

      // Compute luminance/brightness (standard BT.601 formula)
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

      // If background is light (like cream/white), use black text; otherwise white
      if (brightness > 170) {
        badge.classList.add('light-bg-detected');
        badge.classList.remove('dark-bg-detected');
      } else {
        badge.classList.add('dark-bg-detected');
        badge.classList.remove('light-bg-detected');
      }
    };

    window.addEventListener('scroll', updateColor, { passive: true });
    window.addEventListener('resize', updateColor);

    // Run immediately and after layout rendering
    updateColor();
    const timer1 = setTimeout(updateColor, 100);
    const timer2 = setTimeout(updateColor, 500);
    const timer3 = setTimeout(updateColor, 1500);

    return () => {
      window.removeEventListener('scroll', updateColor);
      window.removeEventListener('resize', updateColor);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <footer id="footer" className="new-footer">
      <div className="footer-top-newsletter">
        <div className="nl-text">
          <h2>Subscribe to our newsletter</h2>
          <p>Get Early Access to New Collections and Specials!</p>
        </div>
        <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>

      <div className="footer-middle">
        <div className="fm-col fm-links-col">
          <h3>Quick Links</h3>
          <div className="fm-links-grid">
            <ul>
              <li>
                <a 
                  href="/" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/";
                  }}
                >
                  Home
                </a>
              </li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="#">Testimonial</Link></li>
            </ul>
            <ul>
              <li><Link href="#">CSR Activities</Link></li>
              <li><Link href="#">Certificates</Link></li>
              <li><Link href="/e-catalogue">E-Catalogue</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="fm-col fm-center-col">
          <p>Velciano Group is a top manufacturer & exporter of premium home textile solutions. We are committed to quality, innovation, and customer satisfaction.</p>
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          >
            <Image 
              src="/images/Logo_Velciano.png" 
              alt="Velciano" 
              className="center-logo"
              width={150}
              height={50}
            />
          </a>
          <div className="f-socials">
            <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></Link>
            <Link href="https://www.instagram.com/velcianogroup" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></Link>
            <Link href="https://www.linkedin.com/in/vansh-chug-velciano-bedsheets-flatbedsheet-hotellinen-cottonbedsheets-printedbedsheets-duvetcover/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></Link>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></Link>
          </div>
        </div>
        <div className="fm-col fm-contact-col">
          <h3>Contact</h3>
          <p className="address">Office No 104, Wing A, Surya Nagar, Nagpur,<br />Maharashtra, India (PIN Code: 440008)</p>
          <p>P: <a href="tel:+918609373737" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary transition-colors">+91 8609373737</a></p>
          <p>E: <a href="mailto:export@velciano.com" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-primary transition-colors">export@velciano.com</a></p>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>2026 &copy; <strong>Velciano Group</strong> - All rights reserved</p>
        <p>Powered By Velciano IT Solutions</p>
      </div>

      {/* Download Badge */}
      <a href="/COMPANY%20PROFILE%20VELCIANO.pdf" download="COMPANY_PROFILE_VELCIANO.pdf" className="download-badge" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
        <div className="badge-inner">
          <Image 
            src="/images/memoji_thumbsup.png" 
            alt="Velciano Profile" 
            width={52} 
            height={52} 
            className="badge-memoji"
          />
        </div>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="37" fill="transparent" id="badgeCircle" />
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37, 37 0 1, 1 74, 0 a 37, 37 0 1, 1 -74, 0" />
          <text>
            <textPath href="#circlePath">PROFILE • DOWNLOAD • VELCIANO • </textPath>
          </text>
        </svg>
      </a>
    </footer>
  );
}
