import Image from "next/image";

export default function BusinessHeadSection() {
  return (
    <section className="business-head-section">
      {/* Subtle blueprint draftsman grid overlay */}
      <div className="business-head-bg-grid"></div>

      <div className="business-head-container">
        {/* Left Column: Portrait */}
        <div className="business-head-left">
          <div className="portrait-container">
            <Image
              src="/images/vansh.png"
              alt="Velciano Global Business Head"
              width={480}
              height={520}
              className="portrait-image"
              priority
            />
          </div>
        </div>

        {/* Right Column: Copywriting & Interactive Blocks */}
        <div className="business-head-right">
          <span className="business-head-label">Let&apos;s Talk</span>

          <h2 className="business-head-title">
            <b>Connect with Our</b><br />
            <span>Global Business Head</span>
          </h2>

          <p className="business-head-desc">
            Velciano Group was established with a vision to provide premium home textile solutions that combine quality, comfort, and modern style. With a strong focus on innovation, durability, and customer satisfaction, we have built a trusted presence in global markets. Our commitment to excellence, reliable service, and high-quality products helps us create long-term relationships with clients while delivering elegant and comfortable textile solutions for homes worldwide.
          </p>

          <div className="business-head-buttons">
            {/* 3D LinkedIn isometric button block */}
            <a
              href="https://www.linkedin.com/in/vansh-chug-velciano-bedsheets-flatbedsheet-hotellinen-cottonbedsheets-printedbedsheets-duvetcover/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d linkedin-3d"
              aria-label="Connect with our Business Head on LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>in - Linkedin</span>
            </a>

            {/* 3D WhatsApp isometric button block */}
            <a
              href="https://wa.me/918609373737?text=Hi%20Velciano%20Group,%20I'm%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d whatsapp-3d"
              aria-label="Chat with our Business Head on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <span>- Whatsapp</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
