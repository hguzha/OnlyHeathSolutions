"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHero from "@/components/page-hero";
import { X, Heart, Maximize2 } from "lucide-react";

const galleryImages = [
  {
    src: "Consider-a-Career-as-a-Home-Care-Nursing-Assistant.png",
    alt: "Caregiver assisting elderly client with warmth and compassion",
    category: "Personal Care",
    title: "Daily Assistance with Dignity"
  },
  {
    src: "5.jpeg",
    alt: "Healthcare professional providing skilled nursing care",
    category: "Skilled Nursing",
    title: "Professional Health Support"
  },
  {
    src: "vibrant-health-homecare.jpg",
    alt: "In-home care support showing compassionate assistance",
    category: "Home Support",
    title: "Comfort at Home"
  },
  {
    src: "1140x655-home-health-aide.jpg",
    alt: "Compassionate care moment between caregiver and client",
    category: "Companion Care",
    title: "Meaningful Connection"
  },
  {
    src: "3.jpeg",
    alt: "Nurse providing patient care with professionalism",
    category: "Medical Care",
    title: "Expert Care"
  },
  {
    src: "1140-nurse-wheelchair-home-care-health.jpg",
    alt: "Senior care with happiness and engagement",
    category: "Quality of Life",
    title: "Happy Moments"
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");
  const router = useRouter();

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleScheduleConsultation = () => {
    router.push("/services?scroll=new-client-inquiry");
    setTimeout(() => {
      const element = document.getElementById("new-client-inquiry");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="Moments of compassionate care, dignity, and meaningful connections in home care."
        image="home-nurse-1-1024x665.jpeg"
        height={400}
      />

      {/* Introduction Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "80px",
          paddingBottom: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#64748b", marginBottom: "12px", fontWeight: "600", fontSize: "14px" }}>
            OUR CARE IN ACTION
          </p>
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 800,
              marginBottom: "16px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Moments of Compassionate Care
          </h2>
          <p style={{ color: "#666", lineHeight: 1.7, fontSize: "16px", margin: "0" }}>
            These images represent the warmth, professionalism, and dignity that guide our care every day. 
            We showcase real moments of connection, support, and quality of life.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "60px",
          paddingBottom: "40px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "20px",
                  border: "none",
                  background: filter === cat
                    ? "linear-gradient(135deg, #1fa6a0, #6a3fb5)"
                    : "rgba(31,166,160,0.1)",
                  color: filter === cat ? "#ffffff" : "#1fa6a0",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: filter === cat ? "0 10px 30px rgba(31,166,160,0.2)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.background = "rgba(31,166,160,0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.background = "rgba(31,166,160,0.1)";
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "40px",
          paddingBottom: "100px",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
              alignItems: "start",
            }}
          >
            {filteredImages.map((image, index) => (
              <GalleryCard
                key={index}
                image={image}
                onOpen={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => {
            const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
            const nextIndex = (currentIndex + 1) % filteredImages.length;
            setSelectedImage(filteredImages[nextIndex]);
          }}
          onPrev={() => {
            const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
            const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
            setSelectedImage(filteredImages[prevIndex]);
          }}
        />
      )}

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(31,166,160,0.95) 0%, rgba(106,63,181,0.95) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <Heart size={48} color="#ffffff" style={{ margin: "0 auto 24px", display: "block" }} />
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Experience Our Care
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.95)", marginBottom: "40px" }}>
            See firsthand how we bring compassion, dignity, and quality of life to every moment of care.
          </p>
          <button
            onClick={handleScheduleConsultation}
            style={{
              display: "inline-block",
              padding: "16px 40px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.95)",
              color: "#1fa6a0",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </main>
  );
}

// Gallery Card Component
function GalleryCard({ image, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "24px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#f5f1ff",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 30px 60px rgba(31,166,160,0.25)"
          : "0 15px 40px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Image - NO SIZE CONSTRAINTS - FULL PICTURE */}
      <img
        src={image.src}
        alt={image.alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isHovered
            ? "linear-gradient(135deg, rgba(31,166,160,0.7) 0%, rgba(106,63,181,0.7) 100%)"
            : "linear-gradient(135deg, rgba(31,166,160,0.3) 0%, rgba(106,63,181,0.3) 100%)",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          pointerEvents: "none",
        }}
      >
        {/* Content */}
        <div style={{ textAlign: "center", color: "#ffffff" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, margin: "0", opacity: 0.9, letterSpacing: "0.5px" }}>
            {image.category.toUpperCase()}
          </p>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 800,
              margin: "8px 0 0 0",
              opacity: isHovered ? 1 : 0.9,
            }}
          >
            {image.title}
          </h3>
        </div>

        {/* Icon */}
        <Maximize2
          size={28}
          color="#ffffff"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "scale(1)" : "scale(0.8)",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

// Lightbox Component
function Lightbox({ image, onClose, onNext, onPrev }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(5px)",
        animation: "fadeIn 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "90vh",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 50px 100px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={image.src}
          alt={image.alt}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "85vh",
            display: "block",
          }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.95)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <X size={24} color="#1fa6a0" />
        </button>

        {/* Image Info */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            padding: "40px 20px 20px",
            color: "white",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "12px", fontWeight: "700", margin: "0 0 8px 0", opacity: 0.9 }}>
            {image.category.toUpperCase()}
          </p>
          <h2 style={{ fontSize: "24px", fontWeight: 800, margin: "0" }}>
            {image.title}
          </h2>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,0.5)",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.3)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
          }}
        >
          ‹
        </button>

        <button
          onClick={onNext}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,0.5)",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.3)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
          }}
        >
          ›
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
