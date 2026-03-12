import PageHero from "@/components/page-hero";

const images = [
  "1140-nurse-wheelchair-home-care-health.jpg",
  "home-care-worker-1024x597.webp",
  "home-nurse-1-1024x665.jpeg",
  "vibrant-health-homecare.jpg"
];

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="A visual look at compassionate, supportive home care moments and daily assistance."
        image="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop"
        height={350}
      />

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-4 text-center">
  <p className="text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
    These images represent the compassion, dignity, and joy that guide our care every day.
    While some photos are illustrative, they reflect the meaningful connections and quality
    of life we work to bring to each client and family we serve.
  </p>
</section>
      
      <section className="section">
       <div className="gallery-grid">
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
