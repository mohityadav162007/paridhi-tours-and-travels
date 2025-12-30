export default function Gallery() {
  document.title = "All Car Gallery | Tempo Travellers";

  const whatsappNumber = "919826020849";

  /* 
    HOW IMAGES WORK:
    - Put images inside: public/images/cars/
    - Naming example:
        innova-1.jpg
        innova-2.jpg
        ertiga-1.jpg
        dzire-1.jpg
  */

 const carSections = [
  {
    carName: "Innova Crysta",
    images: [
      "innova-1.jpg",
      "innova-2.jpg",
      "innova-3.jpg",
      "innova-4.jpg",
      "innova-5.jpg",
    ]
  },
  {
    carName: "Ertiga",
    images: [
      "ertiga-1.jpg",
      "ertiga-2.jpg"
    ]
  },
  {
    carName: "Swift Dzire",
    images: [
      "dzire-1.jpg",
      "dzire-2.jpg",
      "dzire-3.jpg"
    ]
  },
  {
    carName: "Traveller",
    images: [
      "tempo-1.jpg",
      "tempo-2.jpg",
      "tempo-3.jpg",
      "tempo-4.jpg",
      "tempo-5.jpg",
      "tempo-6.jpg",
      "tempo-7.jpg",
      "tempo-8.jpg",
      "tempo-9.jpg",
      "tempo-10.jpg",
      "tempo-11.jpg",
      "tempo-12.jpg"
    ]
  },
  {
    carName: "Urbania 17 Seater",
    images: [
      "urbania-1.jpg",
      "urbania-2.jpg",
      "urbania-3.jpg",
      "urbania-4.jpg",
      "urbania-5.jpg",
      "urbania-6.jpg",
      "urbania-7.jpg",
      "urbania-8.jpg",
      "urbania-9.jpg",
      "urbania-10.jpg",
      "urbania-11.jpg",
      "urbania-12.jpg",
      "urbania-13.jpg",
      "urbania-14.jpg",
      "urbania-15.jpg",
      "urbania-16.jpg",
      "urbania-17.jpg",
      "urbania-18.jpg",
      "urbania-19.jpg",
      "urbania-20.jpg"
    ]
  }
];


  const getWhatsAppLink = (carName) => {
    const message = `Hello, I want to book ${carName}. Please share details.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="section-soft">
      <div className="section-heading">
        <h2>All Car Gallery</h2>
        <p>Choose from our wide range of comfortable and premium vehicles</p>
      </div>

      {carSections.map((section, index) => (
        <div key={index} style={{ marginBottom: 80 }}>
          {/* Car Section Title */}
          <h3
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              marginBottom: 30
            }}
          >
            {section.carName}
          </h3>

          {/* Image Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 30
            }}
          >
            {section.images.map((img, i) => (
              <div
                key={i}
                className="gallery-card"
                data-aos="fade-up"
              >
                {/* Image */}
                <div className="gallery-media">
                  <img
                    src={`/images/cars/${img}`}
                    alt={section.carName}
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="gallery-overlay" />

                {/* Title */}
                <div className="gallery-title">
                  <h4>{section.carName}</h4>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={getWhatsAppLink(section.carName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-whatsapp"
                >
                  💬 Book on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

