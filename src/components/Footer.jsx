import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        
        {/* Left: Business Info */}
        <div className="footer-col">
          <h3>{siteData.business.name}</h3>
          <p>
            {siteData.business.description}
          </p>

          <div className="footer-contact">
            <a href={`tel:${siteData.contact.phone}`}>
              📞 {siteData.contact.phone}
            </a>

            <a
              href={`https://wa.me/${siteData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Car Gallery</Link></li>
            <li><Link to="/domestic-trips">Domestic Trips</Link></li>
          </ul>
        </div>

        {/* Right: Map */}
        <div className="footer-col">
          <h4>Our Location</h4>

          <iframe
            src={siteData.contact.mapEmbed || ""}
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${siteData.business.name} Location`}
          />
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {siteData.business.name}. All rights reserved.
      </div>
    </footer>
  );
}
