export default function CTA() {
  return (
    <div className="floating-cta">
      <a
        href="tel:9907545711"
        className="cta-btn call"
        aria-label="Call Now"
      >
        📞
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/919907545711"
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
