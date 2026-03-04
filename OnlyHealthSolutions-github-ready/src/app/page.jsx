"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Stethoscope,
  Users,
  HandHeart,
  Star,
  FileText,  Calendar,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Single-file marketing site for Only Health Solutions (private home care provider).
 */

const brand = {
  name: "Only Health Solutions",
  tagline: "Private, compassionate home care—tailored to your loved one.",
  phoneDisplay: "(770) 439-7666",
  phoneHref: "tel:+17704397666",
  smsDisplay: "Text us",
  smsHref: "sms:+17704397666",
  emailDisplay: "care@onlyhealthsolutions.com",
  emailHref: "mailto:care@onlyhealthsolutions.com",
  serviceArea: "Serving Cobb, Cherokee, Fulton, Douglas, Bartow, Paulding, Gwinnett, DeKalb, Coweta & Forsyth Counties, GA",
  addressLine: "[Street Address], [City], [State] [ZIP]",
  colors: {
    primary: "#6A3FB5",
    secondary: "#1FA6A0",
    light: "#F4F6F8",
  },
  logo1x: "/logo.png",
  logo2x: "/logo@2x.png",
  favicon: "/favicon.ico",
  googleReviewsUrl: "#",
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Section = ({ id, eyebrow, title, subtitle, children, className }) => (
  <section id={id} className={cn("scroll-mt-24 py-16 md:py-20", className)}>
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      {String(className || "").includes("with-divider") ? (
        <div
          className="mb-10 h-px w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${brand.colors.secondary}55, ${brand.colors.primary}55, transparent)`,
          }}
        />
      ) : null}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        {eyebrow ? (
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium">
              {eyebrow}
            </span>
          </div>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </motion.div>
      {children}
    </div>
  </section>
);

const NavLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm text-muted-foreground transition hover:text-foreground"
  >
    {label}
  </a>
);

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
        <div className="truncate text-sm text-muted-foreground">{label}</div>
        <div className="truncate text-base font-semibold">{value}</div>
      </div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, bullets }) {
  return (
    <Card className="group h-full rounded-2xl border/60 bg-background/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader>
        <div className="mb-3 flex items-center gap-3">
          <div
            className="grid size-10 place-items-center rounded-2xl text-white shadow-sm"
            style={{
              backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
            }}
          >
            <Icon className="size-5" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Testimonial({ name, role, quote }) {
  return (
    <Card className="rounded-2xl border/60 bg-background/80 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center gap-1" style={{ color: brand.colors.primary }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4" />
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">“{quote}”</p>
        <div className="mt-4">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function MobileSwipeCarousel({ items }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children);
      const mid = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      children.forEach((c, idx) => {
        const cMid = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cMid - mid);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = idx;
        }
      });
      setActive(bestIdx);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx) => {
    const el = ref.current;
    if (!el) return;
    const child = el.children[idx];
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className="md:hidden">
      <div
        ref={ref}
        className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>
        {items.map((item, index) => (
          <div
            key={index}
            className="relative min-w-[85%] snap-center overflow-hidden rounded-3xl border/60 bg-background/70 shadow-sm backdrop-blur"
            style={{ scrollSnapAlign: "center" }}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="h-64 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.58) 100%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-sm font-semibold text-white drop-shadow">
                {item.caption}
              </div>
              <div className="mt-1 text-xs text-white/80">Only Health Solutions</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="h-2 w-2 rounded-full border"
            style={{
              backgroundColor: idx === active ? brand.colors.primary : "transparent",
              borderColor: `${brand.colors.primary}66`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function OnlyHealthSolutionsSite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const dialNow = (e) => {
    try { e?.preventDefault?.(); } catch {}
    if (typeof window === "undefined") return;
    window.location.href = brand.phoneHref;
    try { window.open(brand.phoneHref, "_self"); } catch {}
  };

  useEffect(() => {
    if (typeof document === "undefined") return;
    let link = document.querySelector('link[rel~="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "icon");
      document.head.appendChild(link);
    }
    link.setAttribute("href", brand.favicon);
  }, []);

  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const personalCareImages = [
    { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop", caption: "Gentle support with daily routines" },
    { src: "https://images.unsplash.com/photo-1576765607924-3f5c5f94c8c7?q=80&w=1600&auto=format&fit=crop", caption: "Companionship that feels like family" },
    { src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1600&auto=format&fit=crop", caption: "Dignity-first personal care at home" },
  ];

  const galleryImages = [
    ...personalCareImages,
    { src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop", caption: "Medication reminders & wellness check-ins" },
    { src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1600&auto=format&fit=crop", caption: "Safe mobility & fall-prevention support" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop", caption: "Comfort-focused respite care" },
    { src: "https://images.unsplash.com/photo-1581595220921-03c6d0483a1a?q=80&w=1600&auto=format&fit=crop", caption: "Post-hospital support and recovery" },
    { src: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop", caption: "Meal prep & hydration encouragement" },
    { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop", caption: "Warm, attentive caregiving" },
  ];

  const services = useMemo(
    () => [
      {
        icon: Stethoscope,
        title: "Nursing",
        bullets: [
          "Skilled nursing care provided by licensed professionals",
          "Medication administration and management",
          "Wound care and chronic condition monitoring",
          "Health assessments and care coordination with physicians",
        ],
      },
      {
        icon: HandHeart,
        title: "Personal Care",
        bullets: [
          "Assistance with bathing, grooming, and dressing",
          "Mobility support and safe transfers",
          "Toileting and incontinence care",
          "Support with daily hygiene while maintaining dignity",
        ],
      },
      {
        icon: Users,
        title: "Companion or Sitter",
        bullets: [
          "Companionship and meaningful conversation",
          "Supervision for safety and fall prevention",
          "Light housekeeping and meal preparation",
          "Respite support for family caregivers",
        ],
      },
    ],
    []
  );

  const steps = useMemo(
    () => [
      { icon: Phone, title: "Call for a quick consult", text: "Tell us what you need. We’ll ask a few questions and recommend next steps." },
      { icon: FileText, title: "Personalized care plan", text: "We match caregivers and outline routines, preferences, and safety considerations." },
      { icon: Calendar, title: "Start care—often within days", text: "We coordinate schedules and keep communication clear with you and your family." },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      { q: "Do you offer hourly, overnight, and 24/7 care?", a: "Yes. We offer flexible scheduling—hourly visits, overnight monitoring, and around-the-clock care depending on your needs and caregiver availability." },
      { q: "Can you help after a hospital stay?", a: "We can provide non-medical post-hospital support like mobility assistance, meal prep, medication reminders, and companionship while you recover." },
      { q: "How do you match caregivers?", a: "We match based on care needs, personality fit, schedule, and any specialized experience requested (e.g., dementia-friendly support)." },
      { q: "Are your caregivers screened?", a: "We use a structured screening and onboarding process. Add your exact policies here (background checks, references, training, etc.)." },
      { q: "Is this medical home health?", a: "We provide private, non-medical home care services. If you need skilled nursing or therapy, we can coordinate with licensed providers as appropriate." },
    ],
    []
  );

  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Care inquiry — ${brand.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
  }

  const nav = [
    { href: "#services", label: "Services" },
    { href: "#how", label: "How it works" },
    { href: "#faq", label: "FAQ" },
    { href: "#gallery", label: "Gallery" },
  ];

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: brand.colors.light }}>
      <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <img src={brand.logo1x} srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`} alt={`${brand.name} logo`} className="h-10 sm:h-12 md:h-14 w-auto" />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-semibold" style={{ color: brand.colors.primary }}>{brand.name}</div>
              <div className="text-xs text-muted-foreground">Private Home Care</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => <NavLink key={n.href} href={n.href} label={n.label} />)}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="outline" className="rounded-2xl">
              <a href={brand.phoneHref} onClick={dialNow}><Phone className="mr-2 size-4" />Call</a>
            </Button>
            <Button asChild className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
              style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}>
              <a href="#gallery">View Gallery <ArrowRight className="ml-2 size-4" /></a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button asChild variant="outline" className="mr-2 rounded-2xl">
              <a href={brand.phoneHref} onClick={dialNow} aria-label={`Call ${brand.name}`}>
                <Phone className="mr-2 size-4" /> Call
              </a>
            </Button>
            <Button variant="outline" className="rounded-2xl" onClick={() => setMobileOpen((v) => !v)} aria-expanded={mobileOpen} aria-controls="mobile-nav">
              Menu
            </Button>
          </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-nav" className="border-t md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex flex-col gap-3">
                {nav.map((n) => (
                  <NavLink key={n.href} href={n.href} label={n.label} onClick={() => setMobileOpen(false)} />
                ))}
                <div className="mt-2 flex gap-2">
                  <Button asChild variant="outline" className="w-full rounded-2xl">
                    <a href={brand.phoneHref} onClick={dialNow}><Phone className="mr-2 size-4" />Call</a>
                  </Button>
                  <Button asChild className="w-full rounded-2xl">
                    <a href="#services" onClick={() => setMobileOpen(false)}>Get started</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${brand.colors.light} 0%, #ffffff 40%, ${brand.colors.light} 100%)` }}>
          <div className="pointer-events-none absolute inset-0">
            <img src={brand.logo1x} srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`} alt="" aria-hidden="true"
              className="absolute right-[-10%] top-1/2 w-[560px] -translate-y-1/2 rotate-6 opacity-[0.08] blur-[0.2px] md:w-[740px]" />
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 md:px-6 md:py-20">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-full text-white" style={{ backgroundColor: brand.colors.secondary }}>
                  Serving Metro Atlanta
                </Badge>
                <Chip>{brand.serviceArea}</Chip>
                <Chip>Flexible scheduling</Chip>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl" style={{ color: brand.colors.primary }}>
                Care at home that feels <span className="underline">human</span>.
              </h1>

              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                {brand.tagline} From companionship to personal care, we support independence, comfort, and peace of mind.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#services">Explore services <ArrowRight className="ml-2 size-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl">
                  <a href={brand.phoneHref} onClick={dialNow}><Phone className="mr-2 size-4" />{brand.phoneDisplay}</a>
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <Stat icon={Clock} label="Response" value="Same-day call back" />
                <Stat icon={ShieldCheck} label="Focus" value="Safety + dignity" />
                <Stat icon={HeartPulse} label="Care" value="Family-centered" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.05 }} className="md:col-span-5">
              <Card className="rounded-3xl border/60 bg-background/80 shadow-sm backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl">Quick quote request</CardTitle>
                  <p className="text-sm text-muted-foreground">Tell us a bit about your needs. We’ll respond promptly.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={onSubmit} className="space-y-3">
                    <Input placeholder="Your name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required />
                    <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
                    <Input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} required />
                    <Textarea placeholder="What kind of care are you looking for? (schedule, needs, location)" value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} rows={5} required />
                    <Button type="submit" className="w-full rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                      style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}>
                      Send request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <Section id="services" eyebrow="Services" title="Support that adapts to your needs"
          subtitle="Choose the level of care you need today—adjust as life changes. We provide private, non-medical home care.">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45 }}>
                <ServiceCard icon={s.icon} title={s.title} bullets={s.bullets} />
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="gallery" eyebrow="Gallery" title="Care moments, beautifully captured" subtitle="Swipe on mobile. Replace these with your own team photos anytime." className="with-divider">
          <MobileSwipeCarousel items={galleryImages} />
          <div className="mt-6 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, idx) => (
              <div key={`${img.src}-${idx}`} className="group relative overflow-hidden rounded-3xl border/60 bg-background/70 shadow-sm backdrop-blur">
                <img src={img.src} alt={img.caption} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64" loading="lazy" decoding="async" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.58) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-sm font-semibold text-white drop-shadow">{img.caption}</div>
                  <div className="mt-1 text-xs text-white/80">Only Health Solutions</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" eyebrow="FAQ" title="Questions, answered" subtitle="If you don’t see your question here, call or text us." className="with-divider">
          <Card className="rounded-3xl">
            <CardContent className="p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx}`}>
                    <AccordionTrigger className="px-2 text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="px-2 text-sm text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </Section>

        <footer className="border-t text-white" style={{ backgroundColor: brand.colors.secondary }}>
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
            <div className="mt-2 text-sm text-white/90">{brand.serviceArea}</div>
            <div className="mt-6 text-xs text-white/75">© {new Date().getFullYear()} {brand.name}. All rights reserved.</div>
            <div className="mt-2 text-xs text-white/70">Phone: {brand.phoneDisplay} • Email: {brand.emailDisplay}</div>
            <div className="mt-6 flex items-center gap-3">
              <img src={brand.logo1x} srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`} alt="" aria-hidden="true" className="h-6 w-auto opacity-50" />
              <span className="text-xs text-white/70">Subtle footer logo watermark</span>
            </div>
          </div>
        </footer>

        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border/60 bg-background/75 shadow-lg backdrop-blur">
            <a href={brand.phoneHref} onClick={dialNow} className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold" style={{ color: brand.colors.primary }}>
              <Phone className="size-4" /> Call
            </a>
            <a href={brand.smsHref} className="flex items-center justify-center gap-2 border-x px-3 py-3 text-sm font-semibold" style={{ color: brand.colors.secondary }}>
              <MessageSquare className="size-4" /> Text
            </a>
            <a href="#services" className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-white"
              style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}>
              <ArrowRight className="size-4" /> Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
