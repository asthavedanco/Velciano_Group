import Image from "next/image";
import Link from "next/link";

export default function CollaborateSection() {
  return (
    <section className="collaborate-cta">
      <div className="cta-bg">
        <Image 
          src="/images/bedsheet_floral.png" 
          alt="Home Textile Collection" 
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
