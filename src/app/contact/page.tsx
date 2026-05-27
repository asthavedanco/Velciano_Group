"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".sub-hero",
        start: "top 80%",
      }
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "-Select-",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        setFormData({ name: "", email: "", phone: "", subject: "-Select-", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.message);
      }
    } catch (error) {
      setStatus("error");
      setResponseMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="sub-page bg-cream" style={{ backgroundColor: 'var(--bg-cream)' }}>
      <section className="sub-hero">
        <div className="hero-bg">
          <Image 
            src="/images/sofa_cover_luxury.png" 
            alt="Contact Us" 
            fill 
            className="object-cover"
            priority
          />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb reveal">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <span className="current">CONTACT</span>
          </div>
          <h1 className="hero-title reveal">Contact Us</h1>
          <p className="hero-subtitle reveal">Get in touch with our team for inquiries and support.</p>
        </div>
      </section>

      {/* Connect Info */}
      <section className="connect-info-section">
        <div className="connect-container">
          <div className="connect-left">
            <h1 className="connect-huge-title">Let's<br />Connect</h1>
          </div>
          <div className="connect-right">
            <div className="connect-block">
              <div className="cb-meta">
                <span>01</span>
                <span className="line"></span>
                <span>Velciano Group</span>
              </div>
              <h3>Reach Us</h3>
              <p>Office No 104, Wing A, Surya Nagar, Nagpur,</p>
              <p>Maharashtra, India (PIN Code: 440008)</p>
            </div>
            <div className="connect-block">
              <div className="cb-meta">
                <span>02</span>
                <span className="line"></span>
                <span>Velciano Group</span>
              </div>
              <h3>Contact Us</h3>
              <p>Contact Number : <a href="tel:+918609373737" style={{ color: '#000', textDecoration: 'none' }} className="hover:text-primary transition-colors">+91 8609373737</a></p>
              <p>Email Address : <a href="mailto:export@velciano.com" style={{ color: '#000', textDecoration: 'none' }} className="hover:text-primary transition-colors">export@velciano.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="inquiry-new" id="contact" style={{ padding: "5rem 6% 4rem" }}>
        <div className="inquiry-container" style={{ alignItems: "stretch" }}>
          <div className="inquiry-left" style={{ position: "relative", minHeight: "clamp(300px, 45vh, 400px)" }}>
            <Image src="/images/contact_illustration.png" alt="Contact Illustration" fill style={{ objectFit: 'contain', mixBlendMode: 'multiply', transform: 'scale(1.1)', transformOrigin: 'center' }} />
          </div>
          <div className="inquiry-right">
            <h2 className="form-heading" style={{ fontSize: "1.3rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "1.5rem" }}>SEND A MESSAGE</h2>
            <p style={{ marginBottom: "2rem", color: "#555", fontSize: "0.95rem", lineHeight: "1.5" }}>
              All queries and messages submitted through this form will be sent directly to our email address: <a href="mailto:export@velciano.com" style={{ color: "var(--primary)", fontWeight: "700", textDecoration: "none" }}>export@velciano.com</a>.
            </p>
            <form className="inquiry-form-new" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name:<span>*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email:<span>*</span></label>
                  <input 
                    type="email" 
                    placeholder="Enter Email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone/WhatsApp:<span>*</span></label>
                  <input 
                    type="text" 
                    placeholder="Mobile Number" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Subject:<span>*</span></label>
                  <select 
                    value={formData.subject}
                    required
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
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
                <textarea 
                  placeholder="Enter Your Requirements"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="inquiry-submit-btn" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>
              {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>{responseMsg}</p>}
              {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>{responseMsg}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section" style={{ width: "100%", height: "clamp(300px, 50vh, 500px)", position: "relative" }}>
        <iframe 
          src="https://maps.google.com/maps?q=Surya+Nagar,+Nagpur,+Maharashtra+440008&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          style={{ border: 0, width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
