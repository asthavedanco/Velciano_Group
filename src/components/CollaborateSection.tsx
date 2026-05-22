"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CollaborateSectionProps {
  forceRender?: boolean;
}

export default function CollaborateSection({ forceRender = false }: CollaborateSectionProps) {
  const pathname = usePathname();

  // If we are on the E-Catalogue page and this is being rendered in the global slot, bypass it.
  // This allows the page itself to render this CTA explicitly to order sections correctly.
  if (pathname === "/e-catalogue" && !forceRender) {
    return null;
  }

  return (
    <section className="collaborate-cta">
      <div className="cta-bg">
        <Image 
          src="/images/shaking_hands_business_cta_1776849464795.png" 
          alt="Shaking Hands Business Collaboration" 
          fill
          className="object-cover parallax-cta"
        />
        <div className="cta-overlay-dark"></div>
      </div>
      <div className="container-cta">
        <div className="cta-content-inner">
          <span className="cta-label-small">Collaborate for Good</span>
          <h2 className="cta-main-title">
            <b>Let&apos;s build</b> <span>the next</span><br />
            <b>big thing</b> <span>together</span>
          </h2>
          <div className="cta-pill-group">
            <div className="pill-set-horizontal">
              <Link href="/contact" className="cta-pill">Keep</Link>
              <Link href="/contact" className="cta-pill">In</Link>
            </div>
            <Link href="/contact" className="cta-pill pill-vertical">Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
