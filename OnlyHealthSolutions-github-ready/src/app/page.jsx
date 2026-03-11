import SiteShell from "@/components/site-shell";
import Section from "@/components/section";
import ContactForm from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/site-data";
import {
  HeartPulse,
  ShieldCheck,
  Clock,
  Phone,
  CheckCircle2,
  Stethoscope,
  Users,
  HandHeart,
  Star,
  FileText,
  ArrowRight,
  MapPin,
} from "lucide-react";

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border bg-background/70 p-4 shadow-sm backdrop-blur">
      <div
        className="grid size-10 place-items-center rounded-2xl text-white shadow-sm"
        style={{
          backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
        }}
      >
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm text-slate-500">{label}</div>
        <div className="truncate text-base font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default function Page() {
  const homeCards = [
    {
      title: "Services",
      text: "View our core care offerings including nursing, personal care, and companion or sitter support designed around comfort, dignity, and safety at home.",
      href: "/services",
      icon: Stethoscope,
    },
    {
      title: "About",
      text: "Learn more about Only Health Solutions, our mission, our care philosophy, and why families trust us for private home care.",
      href: "/about",
      icon: HeartPulse,
    },
    {
      title: "Careers",
      text: "Explore opportunities for compassionate caregivers, CNAs, LPNs, and companions who want to make a meaningful difference every day.",
      href: "/careers",
      icon: Users,
    },
    {
      title: "Reviews",
      text: "Read what families appreciate most about our care experience, responsiveness, professionalism, and ongoing support.",
      href: "/reviews",
      icon: Star,
    },
    {
      title: "Contact",
      text: "Connect with our team to ask questions, request care, discuss scheduling, or start building a care plan for your loved one.",
      href: "/contact",
      icon: Phone,
    },
    {
      title: "How it Works",
      text: "See our step-by-step process from the first call to caregiver matching, personalized care planning, and ongoing communication.",
      href: "/how-it-works",
      icon: FileText,
    },
    {
      title: "FAQ",
      text: "Find quick answers to common questions about schedules, care options, caregiver matching, and what to expect when starting services.",
      href: "/faq",
      icon: ShieldCheck,
    },
  ];

  return (
    <SiteShell>
      <section className="relative border-b overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/public/1140x655-home-health-aide.jpg"
            alt="Luxury home care"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(120deg, ${brand.colors.secondary}AA 0%, ${brand.colors.primary}88 55%, rgba(0,0,0,0.55) 100%)`,
              mixBlendMode: "multiply",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 25%, rgba(31,166,160,0.35), transparent 55%), radial-gradient(circle at 80% 75%, rgba(106,63,181,0.35), transparent 55%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-56 text-white md:px-6 md:py-72">
          <div className="max-w-2xl">
            <div className="text-3xl font-semibold">Only Health Solutions</div>
            <p className="mt-4 text-lg text-white/90">
              Compassionate in-home support including nursing, personal care, and companion services designed to help families feel confident and supported.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={brand.logo1x} alt="" aria-hidden="true" className="w-[1200px] max-w-none opacity-[0.18]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                `radial-gradient(circle at 30% 30%, ${brand.colors.secondary}22, transparent 55%), radial-gradient(circle at 70% 70%, ${brand.colors.primary}22, transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.9))`,
            }}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={brand.logo1x}
            alt=""
            aria-hidden="true"
            className="w-[900px] max-w-none rotate-[8deg] opacity-[0.14]"
          />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:justify-between md:px-6 md:py-20">
          <div className="max-w-lg rounded-3xl border border-white/20 bg-black/55 p-5 text-white shadow-lg backdrop-blur-xl md:-ml-8 md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full text-white" style={{ backgroundColor: brand.colors.secondary }}>
                Private Home Care
              </Badge>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                {brand.serviceArea}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Care at home that feels{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}
              >
                human
              </span>.
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              {brand.tagline} From companionship to personal care, we support independence,
              comfort, and peace of mind.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="/contact">
                  Request a free consult <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl">
                <a href={brand.phoneHref}>
                  <Phone className="mr-2 size-4" />
                  {brand.phoneDisplay}
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Stat icon={Clock} label="Response" value="Same-day call back" />
              <Stat icon={ShieldCheck} label="Focus" value="Safety + dignity" />
              <Stat icon={HeartPulse} label="Care" value="Family-centered" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                <CheckCircle2 className="size-4" />
                Transparent communication
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                <CheckCircle2 className="size-4" />
                Customized routines
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
                <CheckCircle2 className="size-4" />
                Respectful caregivers
              </span>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <Card className="rounded-3xl border bg-white/95 shadow-lg backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">Quick quote request</CardTitle>
                <p className="text-sm text-slate-500">
                  Tell us a bit about your needs. We’ll respond promptly.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm compact />
              </CardContent>
            </Card>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid size-10 place-items-center rounded-2xl"
                      style={{ backgroundColor: brand.colors.primary }}
                    >
                      <MapPin className="size-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Service Area</div>
                      <div className="text-xs text-slate-500">{brand.serviceArea}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid size-10 place-items-center rounded-2xl"
                      style={{ backgroundColor: brand.colors.secondary }}
                    >
                      <ShieldCheck className="size-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Care Standards</div>
                      <div className="text-xs text-slate-500">Screened caregivers (edit)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="home-overview"
        eyebrow="Explore"
        title="Everything you need, organized clearly"
        subtitle="This home page gives a quick overview of each main page so visitors can immediately understand what Only Health Solutions offers and go directly where they need to go."
        className="with-divider"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeCards.map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border bg-white/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div
                  className="mb-4 grid size-12 place-items-center rounded-3xl text-white shadow-sm"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                  }}
                >
                  <item.icon className="size-6" />
                </div>
                <div className="text-xl font-semibold">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                <Button
                  asChild
                  className="mt-5 rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                  }}
                >
                  <a href={item.href}>
                    Go to {item.title} <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 rounded-3xl border bg-white/80 shadow-sm backdrop-blur">
          <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">Ready to get started?</div>
              <p className="mt-1 text-sm text-slate-600">
                Whether you want to review services, ask a question, or request a consultation,
                each page above is designed to guide you quickly.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
              <Button
                asChild
                className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                }}
              >
                <a href="/contact">Request a Consult</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href="/services">View Services</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </SiteShell>
  );
}
