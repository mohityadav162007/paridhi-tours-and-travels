export default function CarCard({ name }) {
  return (
    <div
      data-aos="zoom-in"
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 30,
        boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
        textAlign: "center",
        transition: "transform 0.3s ease"
      }}
    >
      <div
        style={{
          height: 160,
          borderRadius: 12,
          background:
            "linear-gradient(135deg, #e5e7eb, #f1f5f9)",
          marginBottom: 20
        }}
      />

      <h3 style={{ fontSize: 20, fontWeight: 600 }}>{name}</h3>

      <p style={{ marginTop: 10, fontSize: 14, color: "#64748b" }}>
        Comfortable • Clean • Professional Driver
      </p>
    </div>
  );
}
