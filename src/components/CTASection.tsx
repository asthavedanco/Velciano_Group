"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTASection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".cta-content > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section className="cta-section relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/shaking_hands_business_cta_1776849464795.png" 
          alt="Shaking Hands Business Collaboration" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="cta-content relative z-10 text-center container">
        <span className="text-white/80 uppercase tracking-[0.3em] text-sm mb-6 block">Collaborate for Good</span>
        <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-12">
          LET&apos;S BUILD <span className="font-light opacity-80">THE NEXT</span><br />
          BIG THING <span className="font-light opacity-80">TOGETHER</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="cta-pill">Keep</Link>
          <Link href="/contact" className="cta-pill">In</Link>
          <Link href="/contact" className="cta-pill vertical">Touch</Link>
        </div>
      </div>
    </section>
  );
}
