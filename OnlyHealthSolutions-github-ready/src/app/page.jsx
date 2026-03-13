import FixedBackgroundShell from "@/components/fixed-background-shell";
import PageHeroVideo from "@/components/page-hero-video";
import SignatureServices from "@/components/signature-services";
import WhyChooseUs from "@/components/why-choose-us";
import TestimonialStrip from "@/components/testimonial-strip";
import NewClientInquiry from "@/components/new-client-inquiry";
import PageHeroVideo from "@/components/page-hero-video";

export default function HomePage() {
  return (
    <FixedBackgroundShell>
      <PageHeroVideo />
      <SignatureServices />
      <WhyChooseUs />
      <TestimonialStrip />
      <section className="section">
        <div className="container">
          <NewClientInquiry />
          <PageHeroVideo />
        </div>
      </section>
    </FixedBackgroundShell>
  );
}
