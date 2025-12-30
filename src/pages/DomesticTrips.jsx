export default function DomesticTrips() {
  document.title = "Domestic Trips | Tempo Travellers";

  const whatsappNumber = "919907545711";

  const trips = [
    {
      id: 1,
      title: "Ujjain – Omkareshwar",
      duration: "3 Days / 2 Night",
      highlights: ["Mahakaleshwar Temple","Maheshwar", "Omkareshwar Jyotirlinga", "Darshan & Sightseeing"]
    },
    {
      id: 2,
      title: "Indore – Mandu",
      duration: "1 Day Trip",
      highlights: ["Jahaz Mahal", "Rani Roopmati Pavilion", "Historic Forts"]
    },
    {
      id: 3,
      title: "Indore – Pachmarhi",
      duration: "3 Days / 2 Nights",
      highlights: ["Hill Station", "Waterfalls", "Caves & Viewpoints"]
    },
    {
      id: 4,
      title: "Indore – Khajuraho",
      duration: "4 Day / 3 Nights",
      highlights: ["Orchha Fort", "Panna Tiger Reserve","Kandariya Mahadeva Temple","Historic Forts"]
    },
  ];

  const getWhatsAppLink = (trip) => {
    const message = `I want to book the ${trip} trip`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section style={{ padding: "80px 20px", background: "#ffffff" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(28px, 4vw, 40px)",
          marginBottom: 60
        }}
      >
        Domestic Trips
      </h1>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 30
        }}
      >
        {trips.map((trip) => (
          <div
            key={trip.id}
            data-aos="fade-up"
            className="trip-card"
          >
            {/* Top section */}
            <div className="trip-header">
              <h3>{trip.title}</h3>
              <span className="trip-duration">{trip.duration}</span>
            </div>

            {/* Highlights */}
            <ul className="trip-highlights">
              {trip.highlights.map((point, i) => (
                <li key={i}>✓ {point}</li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={getWhatsAppLink(trip.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="trip-whatsapp"
            >
              💬 Book on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
