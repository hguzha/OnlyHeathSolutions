import PageHero from "@/components/page-hero";

const images = [
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576765607924-3f5c5f94c8c7?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop"
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="A visual look at compassionate, supportive home care moments and daily assistance."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop"
        height={540}
      />

      <section className="section">
        <div className="container gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-card">
              <img src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
