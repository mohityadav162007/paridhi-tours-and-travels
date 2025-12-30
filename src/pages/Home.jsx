import Hero from "../components/home/Hero";
import OurCars from "../components/home/OurCars";
import { siteData } from "../data/siteData";

export default function Home() {
  document.title = `${siteData.business.name} | Home`;

  const phone = siteData.contact.phone;
  const whatsapp = siteData.contact.whatsapp;

  return (
    <>
      <Hero />

      <section className="section-light">
        <div className="section-heading">
          <h2>Premium Car Rental Services</h2>
          <p>
            Comfortable, clean, and well-maintained vehicles for every journey
          </p>
        </div>

        {/* SERVICES */}
        <section id="services" className="section-soft">
          <div className="section-heading">
            <h2>Our Services</h2>
            <p>Everything you need for a comfortable journey</p>
          </div>

          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 30,
            }}
          >
            {[
              "Local & Outstation Cabs",
              "Airport Pickup & Drop",
              "Corporate Travel",
              "Wedding & Event Travel",
            ].map((service, i) => (
              <div
                key={i}
                data-aos="fade-up"
                style={{
                  background: "#ffffff",
                  padding: 30,
                  borderRadius: 16,
                  boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                  textAlign: "center",
                }}
              >
                <h3>{service}</h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    color: "#64748b",
                  }}
                >
                  Reliable and well-maintained vehicles with professional
                  drivers
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="section-light">
          <div className="section-heading">
            <h2>Why Choose Us</h2>
            <p>Trusted by families, professionals, and travelers</p>
          </div>

          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 30,
            }}
          >
            {[
              "Clean & Sanitized Vehicles",
              "Experienced Drivers",
              "Transparent Pricing",
              "24/7 Customer Support",
            ].map((point, i) => (
              <div
                key={i}
                data-aos="fade-up"
                style={{
                  padding: 28,
                  borderRadius: 16,
                  background: "#f8fafc",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h3>{point}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark">
          <div className="section-heading">
            <h2>Ready to Book Your Ride?</h2>
            <p>Call or WhatsApp us now for instant booking</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href={`tel:${phone}`}
              style={{
                display: "inline-block",
                marginRight: 16,
                padding: "14px 30px",
                background: "#22c55e",
                borderRadius: 999,
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 30px",
                border: "1px solid #ffffff",
                borderRadius: 999,
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              WhatsApp
            </a>
          </div>
        </section>

        <OurCars />
      </section>
    </>
  );
}
