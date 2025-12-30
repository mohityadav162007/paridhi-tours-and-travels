import { siteData } from "../../data/siteData";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/home/hero-bg.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          {siteData.business.name.split(" ")[0]} <br />
          {siteData.business.name.split(" ").slice(1).join(" ")}
        </h1>

        <p>{siteData.business.tagline}</p>

        <div className="hero-buttons">
          <a href={`tel:${siteData.contact.phone}`}>Call Now</a>

          <a
            href={`https://wa.me/${siteData.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
