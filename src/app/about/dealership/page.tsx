"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const benefits = [
  { icon: "fa-tag", title: "Annual Discount Opportunities", desc: "Access exclusive annual discounts and promotional offers designed to enhance your profitability and support your bottom line throughout the year." },
  { icon: "fa-users", title: "Local Workforce Support", desc: "Obtain financial assistance with the salaries of your local staff, helping reduce operational costs and build a strong, efficient team." },
  { icon: "fa-warehouse", title: "Godown Rent Paid by Us", desc: "Receive financial support for your warehouse rent. This assistance reduces your overhead costs while ensuring your storage needs are fully met." },
  { icon: "fa-paintbrush", title: "Custom Branding Support", desc: "Boost your dealership's visibility with personalized branding — custom stationery, promotional items, and gifts tailored to your identity." },
  { icon: "fa-bullhorn", title: "Tailored Marketing Solutions", desc: "Leverage our digital marketing expertise — targeted advertising, social media campaigns, and SEO to help you reach and engage customers." },
  { icon: "fa-map-location-dot", title: "Exclusive Territory Rights", desc: "Receive exclusive distribution rights in your designated area, making you the sole authorized distributor and maximizing your market potential." },
  { icon: "fa-chart-line", title: "Profit-Driven Pricing", desc: "Benefit from pricing models designed to enhance your profit margins, considering market conditions and your specific business requirements." },
  { icon: "fa-headset", title: "Dedicated Account Management", desc: "Enjoy personalized guidance from a dedicated relationship manager — regular check-ins, tailored advice, and prompt assistance when needed." },
  { icon: "fa-truck-fast", title: "Expedited Order Fulfillment", desc: "Priority processing and fast delivery of orders, ensuring you can meet customer demands and maintain smooth, uninterrupted operations." },
  { icon: "fa-star", title: "Early Access to New Products", desc: "Be the first to introduce our latest textile innovations to your market, gaining a competitive edge and staying ahead of competitors." },
  { icon: "fa-hand-holding-dollar", title: "No Advance Deposit Required", desc: "Start your dealership journey without any upfront deposit. We offer a completely hassle-free process to get you started immediately." },
];

const whyPartner = [
  { icon: "fa-gem", title: "Premium Quality Products", desc: "We take pride in manufacturing high-quality home textile products for diverse markets worldwide." },
  { icon: "fa-trophy", title: "Proven Success", desc: "Explore our track record of successful partnerships and the growth of our dealership network across India." },
  { icon: "fa-award", title: "Commitment to Excellence", desc: "Our commitment to quality, innovation, and customer satisfaction truly sets us apart from competitors." },
];

const steps = [
  { num: "01", title: "Submit Application", desc: "Complete our easy inquiry form with all required details. Our team will review your submission promptly for next steps." },
  { num: "02", title: "Review & Approval", desc: "Our team will evaluate your application based on set criteria. Expect timely feedback and updates on your application status." },
  { num: "03", title: "Onboarding & Training", desc: "Upon approval, receive comprehensive training and resources for a smooth integration into our dealership network." },
];

export default function DealershipPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", state: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((elem: any) => {
        gsap.fromTo(elem,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%"
            }
          }
        );
      });

      gsap.fromTo(".benefit-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".benefits-grid",
            start: "top 85%"
          }
        }
      );
    });

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", city: "", state: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <main className="sub-page">
      {/* Hero */}
      <section className="sub-hero">
        <div className="hero-bg">
          <Image src="/images/bedsheet_luxury.png" alt="Dealership" fill className="object-cover" priority />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="breadcrumb reveal">
            <Link href="/">HOME</Link>
            <span className="sep">/</span>
            <Link href="/about">ABOUT</Link>
            <span className="sep">/</span>
            <span className="current">DEALERSHIP</span>
          </div>
          <h1 className="hero-title reveal">Become a Velciano Dealer</h1>
          <p className="hero-subtitle reveal">Become a Velciano dealer and grow your business with confidence.</p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="dealer-content bg-cream py-32">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "6rem", alignItems: "center" }}>
            {/* Image */}
            <div className="fade-up" style={{ position: "relative", height: "560px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}>
              <Image src="/images/curtain_modern.png" alt="Partnership" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)" }}></div>
              <div className="image-overlay-content" style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem" }}>
                <p className="primary-text" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Trusted Partner Network</p>
                <h3 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 700, lineHeight: 1.3 }}>Join the Velciano dealer family and grow together</h3>
              </div>
            </div>

            {/* Text */}
            <div className="fade-up">
              <p className="primary-text" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>Grow with Us</p>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 700, lineHeight: 1.2, color: "var(--text-dark)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Why Partner With Velciano
              </h2>
              <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#555", marginBottom: "2.5rem" }}>
                Join the Velciano network as a dealer and grow your business with our premium home textile products. Enjoy competitive margins, strong support, and reliable supply. Partner with us to access quality-driven products and build long-term success in the textile industry.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {whyPartner.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                    <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={`fa-solid ${item.icon}`} style={{ color: "#fff", fontSize: "1.1rem" }}></i>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-dark)", marginBottom: "0.4rem" }}>{item.title}</h4>
                      <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-black py-32">
        <div className="container">
          <div className="fade-up text-center mb-20">
            <p className="primary-text" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>What You Get</p>
            <h2 style={{ fontSize: "3rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", maxWidth: "600px", margin: "0 auto" }}>
              Benefits of Partnering with Us
            </h2>
          </div>
          <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {benefits.map((b, i) => (
              <div
                key={i}
                className="benefit-card"
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ width: "46px", height: "46px", borderRadius: "10px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <i className={`fa-solid ${b.icon}`} style={{ color: "#fff", fontSize: "1.1rem" }}></i>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "0.6rem" }}>{b.title}</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255, 255, 255, 0.55)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-cream py-32">
        <div className="container">
          <div className="fade-up text-center mb-20">
            <p className="primary-text" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>How It Works</p>
            <h2 style={{ fontSize: "3rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.02em" }}>Application Process</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
            {steps.map((step, i) => (
              <div key={i} className="fade-up" style={{ background: "#fff", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
                <span style={{ position: "absolute", top: "1.5rem", right: "1.5rem", fontSize: "4rem", fontWeight: 900, color: "rgba(0,0,0,0.04)", lineHeight: 1 }}>{step.num}</span>
                <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-dark)", marginBottom: "0.75rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealership Application Form */}
      <section className="inquiry-new inquiry-dark" id="apply" style={{ padding: "6rem 6% 6rem", backgroundColor: "#000000" }}>
        <div className="inquiry-container fade-up" style={{ alignItems: "stretch" }}>
          <div className="inquiry-left" style={{ position: "relative", minHeight: "400px", background: "var(--primary)", borderRadius: "16px", padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ color: "#fff", fontSize: "2.8rem", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>Apply Now</h2>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: 1.6 }}>Take the first step towards a profitable partnership. Fill out the application form, and our team will get back to you shortly.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#fff", fontSize: "1.1rem" }}><i className="fa-solid fa-check-circle" style={{ color: "var(--bg-cream)", fontSize: "1.2rem" }}></i> Fast Approval Process</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#fff", fontSize: "1.1rem" }}><i className="fa-solid fa-check-circle" style={{ color: "var(--bg-cream)", fontSize: "1.2rem" }}></i> No Advance Deposit</li>
              <li style={{ display: "flex", alignItems: "center", gap: "1rem", color: "#fff", fontSize: "1.1rem" }}><i className="fa-solid fa-check-circle" style={{ color: "var(--bg-cream)", fontSize: "1.2rem" }}></i> Dedicated Support</li>
            </ul>
          </div>
          <div className="inquiry-right">
            <h2 className="form-heading" style={{ fontSize: "1.3rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "2.5rem" }}>DEALERSHIP APPLICATION</h2>
            <form className="inquiry-form-new" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name:<span>*</span></label>
                  <input type="text" placeholder="Enter Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email:<span>*</span></label>
                  <input type="email" placeholder="Enter Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="form-row three-col">
                <div className="form-group">
                  <label>Phone/WhatsApp:<span>*</span></label>
                  <input type="text" placeholder="Mobile Number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>City:<span>*</span></label>
                  <input type="text" placeholder="City" required value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>State:<span>*</span></label>
                  <input type="text" placeholder="State" required value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label>Message/Inquiry Details:</label>
                <textarea placeholder="Tell us about your current business and experience..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="inquiry-submit-btn" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : status === "success" ? "Submitted Successfully!" : "Submit Application"}
              </button>
              {status === "success" && <p style={{ color: "green", marginTop: "1rem", fontWeight: "500" }}>Thank you for your interest! We will contact you soon.</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Products Strip */}
      <section className="bg-cream py-24">
        <div className="container">
          <div className="fade-up" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "-0.02em" }}>Our Product Range</h2>
            <p style={{ fontSize: "1.05rem", color: "#666", marginTop: "1rem" }}>Explore the premium textile collection you will be distributing as a dealer.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { img: "/images/bedsheet_luxury.png", name: "Bedsheets", href: "/collection/bedsheets" },
              { img: "/images/curtain_modern.png", name: "Curtains", href: "/collection/curtains" },
              { img: "/images/pillow_cover_decorative.png", name: "Pillow Covers", href: "/collection/pillow-covers" },
              { img: "/images/sofa_cover_luxury.png", name: "Sofa Covers", href: "/collection/sofa-covers" },
            ].map((p, i) => (
              <Link href={p.href} key={i} style={{ position: "relative", height: "280px", borderRadius: "14px", overflow: "hidden", display: "block", textDecoration: "none" }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}></div>
                <span style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", color: "#fff", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.03em" }}>{p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
