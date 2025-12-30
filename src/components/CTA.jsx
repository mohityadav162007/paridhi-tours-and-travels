import { siteData } from "../data/siteData";
const phone = siteData.contact.phone;
const whatsapp = siteData.contact.whatsapp;
export default function CTA() {
  return (
    <div className="floating-cta">
      <a
        href={`tel:${phone}`} 
        className="cta-btn call"
        aria-label="Call Now"
      >
        📞
        <span>Call Now</span>
      </a>

      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-btn whatsapp"
        aria-label="WhatsApp Now"
      >
        💬
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
