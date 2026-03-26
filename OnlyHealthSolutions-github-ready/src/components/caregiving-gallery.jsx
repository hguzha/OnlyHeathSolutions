"use client";

export default function CargivingGallery() {
  const caregivingImages = [
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
      alt: "Caregiver assisting elderly client"
    },
    {
      src: "https://images.unsplash.com/photo-1631217314830-4580eec82f25?q=80&w=800&auto=format&fit=crop",
      alt: "Healthcare professional with patient"
    },
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5f400f6f4?q=80&w=800&auto=format&fit=crop",
      alt: "In-home care support"
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01d82979d485?q=80&w=800&auto=format&fit=crop",
      alt: "Compassionate care moment"
    },
  ];

  return (
    <section
      data-caregiving-gallery
      style={{
        background: "linear-gradient(135deg, rgba(31, 166, 160, 0.05), rgba(106, 63, 181, 0.05))",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <p style={{ color: "#64748b", marginBottom: "10px", fontWeight: "600", fontSize: "14px" }}>
            OUR CARE IN ACTION
          </p>
          <h2 style={{ fontSize: "42px", margin: "0", fontWeight: "800", color: "#0f172a" }}>
            Moments of Compassionate Care
          </h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "16px auto 0", lineHeight: "1.7" }}>
            See how our caregivers provide dignified, compassionate support to clients in the comfort of their own homes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {caregivingImages.map((image, index) => (
            <GalleryCard key={index} image={image} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [data-caregiving-gallery] {
            display: flex;
            flex-direction: column;
          }

          [data-caregiving-gallery] .container {
            order: 1;
            display: flex;
            flex-direction: column;
          }

          [data-caregiving-gallery] [style*="textAlign: center"] {
            order: 2;
          }

          [data-caregiving-gallery] div[style*="gridTemplateColumns"] {
            order: 1;
            padding-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

function GalleryCard({ image }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
