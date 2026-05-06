"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></Link>
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
      <a href="/Velciano%20Catalouge.pdf" download="Velciano_Catalogue.pdf" className="download-badge" style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
        <div className="badge-inner">
          <i className="fa-solid fa-file-pdf"></i>
          <span>PROFILE<br />DOWNLOAD</span>
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
