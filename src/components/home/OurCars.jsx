export default function OurCars() {
  const cars = [
    {
      name: "Innova Crysta",
      image: "/images/cars/innova.jpg"
    },
    {
      name: "Ertiga",
      image: "/images/cars/ertiga.jpg"
    },
    {
      name: "Swift Dzire",
      image: "/images/cars/dzire.jpg"
    },
    {
      name: "Maharaja Tempo Traveller",
      image: "/images/cars/tempo.jpg"
    }
  ];

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 30
      }}
    >
      {cars.map((car, index) => (
        <div
          key={index}
          className="car-card"
          data-aos="fade-up"
        >
          <img
            src={car.image}
            alt={car.name}
            className="car-image"
          />
          <h3>{car.name}</h3>
        </div>
      ))}
    </div>
  );
}
