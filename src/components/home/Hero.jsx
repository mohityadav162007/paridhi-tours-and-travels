export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/images/home/hero-bg.jpg')"
      }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Maa Narmada Tour & Travels</h1>
        <p>Comfortable & Reliable Car Rentals for Every Journey</p>

        <div className="hero-buttons">
          <a href="tel:919907545711">📞 Call Now</a>
          <a href="https://wa.me/919907545711">💬 WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
