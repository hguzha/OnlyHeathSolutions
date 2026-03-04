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
 *
 * How to customize quickly:
 * - Replace placeholders in CONTACT + service area.
 * - Update Services list and pricing language.
 * - Replace testimonials with real quotes.
 * - Wire up the form to your backend/email provider.
 */

const brand = {
  name: "Only Health Solutions",
  tagline: "Private, compassionate home care—tailored to your loved one.",
  phoneDisplay: "(770) 439-7666",
  phoneHref: "tel:+17704397666",
  // Text/SMS CTA (works on mobile)
  smsDisplay: "Text us",
  smsHref: "sms:+17704397666",
  emailDisplay: "care@onlyhealthsolutions.com",
  emailHref: "mailto:care@onlyhealthsolutions.com",
  serviceArea: "Serving Cobb, Cherokee, Fulton, Douglas, Bartow, Paulding, Gwinnett, DeKalb, Coweta & Forsyth Counties, GA",
  addressLine: "Vinings, GA 30339",

  // 🔵 UPDATE THESE to match your official logo colors
  colors: {
    primary: "#6A3FB5",     // Purple from logo
    secondary: "#1FA6A0",   // Teal from logo
    light: "#F4F6F8",       // Soft light background
  },

  // Place your logo file in /public as logo.png (or update path below)
  // Logo file added from upload

  // ✅ Put these files in your production /public folder:
  // - /public/logo.png
  // - /public/logo@2x.png
  // - /public/favicon.ico
  // (I generated them for you—see chat downloads.)
  logo1x: "/logo.png",
  logo2x: "/logo@2x.png",
  favicon: "/favicon.ico",

  // Add your Google Business Profile reviews link here when ready
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

  // Dial helper: some in-app browsers/iframes behave better with a direct location change
  const dialNow = (e) => {
    try {
      e?.preventDefault?.();
    } catch {}
    if (typeof window === "undefined") return;

    // Primary: location change to tel:
    window.location.href = brand.phoneHref;

    // Fallback: try opening (some environments ignore location changes)
    try {
      window.open(brand.phoneHref, "_self");
    } catch {}
  };

  // ✅ Ensure favicon is set (works in most React setups)
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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Personal care stock images (replace with your own professional photos later)
  // Captions are written to match a luxury, reassuring tone.
  const personalCareImages = [
    {
      src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
      caption: "Gentle support with daily routines",
    },
    {
      src: "https://images.unsplash.com/photo-1576765607924-3f5c5f94c8c7?q=80&w=1600&auto=format&fit=crop",
      caption: "Companionship that feels like family",
    },
    {
      src: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=1600&auto=format&fit=crop",
      caption: "Dignity-first personal care at home",
    },
  ];

  // Full gallery set (for /gallery or #gallery)
  const galleryImages = [
    ...personalCareImages,
    {
      src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop",
      caption: "Medication reminders & wellness check-ins",
    },
    {
      src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1600&auto=format&fit=crop",
      caption: "Safe mobility & fall-prevention support",
    },
    {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
      caption: "Comfort-focused respite care",
    },
    {
      src: "https://images.unsplash.com/photo-1581595220921-03c6d0483a1a?q=80&w=1600&auto=format&fit=crop",
      caption: "Post-hospital support and recovery",
    },
    {
      src: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop",
      caption: "Meal prep & hydration encouragement",
    },
    {
      src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop",
      caption: "Warm, attentive caregiving",
    },
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
      {
        icon: Phone,
        title: "Call for a quick consult",
        text: "Tell us what you need. We’ll ask a few questions and recommend next steps.",
      },
      {
        icon: FileText,
        title: "Personalized care plan",
        text: "We match caregivers and outline routines, preferences, and safety considerations.",
      },
      {
        icon: Calendar,
        title: "Start care—often within days",
        text: "We coordinate schedules and keep communication clear with you and your family.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Do you offer hourly, overnight, and 24/7 care?",
        a: "Yes. We offer flexible scheduling—hourly visits, overnight monitoring, and around-the-clock care depending on your needs and caregiver availability.",
      },
      {
        q: "Can you help after a hospital stay?",
        a: "We can provide non-medical post-hospital support like mobility assistance, meal prep, medication reminders, and companionship while you recover.",
      },
      {
        q: "How do you match caregivers?",
        a: "We match based on care needs, personality fit, schedule, and any specialized experience requested (e.g., dementia-friendly support).",
      },
      {
        q: "Are your caregivers screened?",
        a: "We use a structured screening and onboarding process. Add your exact policies here (background checks, references, training, etc.).",
      },
      {
        q: "Is this medical home health?",
        a: "We provide private, non-medical home care services. If you need skilled nursing or therapy, we can coordinate with licensed providers as appropriate.",
      },
    ],
    []
  );

  function onSubmit(e) {
    e.preventDefault();
    // TODO: Wire to your backend/email provider (Formspree, Netlify Forms, custom API, etc.)
    // For now, we’ll just open the user’s email client with a prefilled message.
    const subject = encodeURIComponent(`Care inquiry — ${brand.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
  }

  const nav = [
    { href: "#services", label: "Services" },
    { href: "#how", label: "How it works" },
    { href: "#about", label: "About" },
    { href: "#careers", label: "Careers" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
    { href: "#gallery", label: "Gallery" },
  ];

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        backgroundColor: brand.colors.light,
        // Brand CSS variables for consistent styling
        "--brand-primary": brand.colors.primary,
        "--brand-secondary": brand.colors.secondary,
        "--brand-light": brand.colors.light,
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <img
                src={brand.logo1x}
                srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`}
                alt={`${brand.name} logo`}
                className="h-20 sm:h-24 md:h-28 w-auto"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="leading-tight">
              <div className="hidden sm:block">
                <div className="text-sm font-semibold" style={{ color: brand.colors.primary }}>
                  {brand.name}
                </div>
                <div className="text-xs text-muted-foreground">Private Home Care</div>
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} label={n.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="outline" className="rounded-2xl">
              <a href={brand.phoneHref} onClick={dialNow}>
                <Phone className="mr-2 size-4" />
                Call
              </a>
            </Button>
            <Button
              asChild
              className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
              style={{
                backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
              }}
            >
              <a href="#contact">
                Get a Care Plan <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              asChild
              variant="outline"
              className="mr-2 rounded-2xl"
            >
              <a href={brand.phoneHref} onClick={dialNow} aria-label={`Call ${brand.name}`}>
                <Phone className="mr-2 size-4" /> Call
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </Button>
          </div>
        </div>

        {mobileOpen ? (
          <div id="mobile-nav" className="border-t md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex flex-col gap-3">
                {nav.map((n) => (
                  <NavLink
                    key={n.href}
                    href={n.href}
                    label={n.label}
                    onClick={() => setMobileOpen(false)}
                  />
                ))}
                <div className="mt-2 flex gap-2">
                  <Button asChild variant="outline" className="w-full rounded-2xl">
                    <a href={brand.phoneHref} onClick={dialNow}>
                <Phone className="mr-2 size-4" />
                Call
              </a>
                  </Button>
                  <Button asChild className="w-full rounded-2xl">
                    <a href="#contact" onClick={() => setMobileOpen(false)}>
                      Get started
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <main>
        <section
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${brand.colors.light} 0%, #ffffff 40%, ${brand.colors.light} 100%)`,
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            {/* Watermark logo */}
            <div className="absolute inset-0">
              <img
                src={brand.logo1x}
                srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`}
                alt=""
                aria-hidden="true"
                className="absolute right-[-10%] top-1/2 w-[560px] -translate-y-1/2 rotate-6 opacity-[0.08] blur-[0.2px] md:w-[740px]"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="absolute -top-44 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(31,166,160,.28), transparent 55%), radial-gradient(circle at 70% 50%, rgba(106,63,181,.25), transparent 55%)",
              }}
            />
            <div
              className="absolute -bottom-44 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 60%, rgba(106,63,181,.20), transparent 55%), radial-gradient(circle at 70% 80%, rgba(31,166,160,.18), transparent 55%)",
              }}
            />
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-12 md:gap-8 md:px-6 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  className="rounded-full text-white"
                  style={{ backgroundColor: brand.colors.secondary }}
                >
                  Licensed/Insured? (Update)
                </Badge>
                <Chip>{brand.serviceArea}</Chip>
                <Chip>Flexible scheduling</Chip>
              </div>

              <h1
                className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
                style={{ color: brand.colors.primary }}
              >
                Care at home that feels <span style={{ color: brand.colors.primary }} className="underline">human</span>.
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                {brand.tagline} From companionship to personal care, we support
                independence, comfort, and peace of mind.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-2xl">
                  <a href="#contact">
                    Request a free consult <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-2xl"
                >
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

              <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                  <CheckCircle2 className="size-4" />
                  Transparent communication
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                  <CheckCircle2 className="size-4" />
                  Customized routines
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                  <CheckCircle2 className="size-4" />
                  Respectful caregivers
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="md:col-span-5"
            >
              <Card className="rounded-3xl border/60 bg-background/80 shadow-sm backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl">Quick quote request</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Tell us a bit about your needs. We’ll respond promptly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={onSubmit} className="space-y-3">
                    <Input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      required
                    />
                    <Input
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      required
                    />
                    <Textarea
                      placeholder="What kind of care are you looking for? (schedule, needs, location)"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      rows={5}
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                      }}
                    >
                      Send request
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      By submitting, you consent to be contacted about services.
                      (Add your privacy language.)
                    </p>
                  </form>
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
                        <div className="text-xs text-muted-foreground">
                          {brand.serviceArea}
                        </div>
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
                        <div className="text-xs text-muted-foreground">
                          Screened caregivers (edit)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Services"
          title="Support that adapts to your needs"
          subtitle="Choose the level of care you need today—adjust as life changes. We provide private, non-medical home care." 
        >
          {/* Personal Care Photo Strip */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {personalCareImages.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl border/60 bg-background/70 shadow-sm backdrop-blur"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Luxury gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.58) 100%)",
                  }}
                />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-sm font-semibold text-white drop-shadow">
                    {item.caption}
                  </div>
                  <div className="mt-1 text-xs text-white/80">Only Health Solutions</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Gallery Section */}
          <div id="gallery" className="mb-10 scroll-mt-24">
            <Card className="rounded-3xl border/60 bg-background/80 shadow-sm backdrop-blur">
              <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
                <div>
                  <div className="text-lg font-semibold">View Gallery</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Browse more personal care and companionship moments. (You can replace these stock photos with your real team photos anytime.)
                  </p>
                </div>
                <Button
                  asChild
                  className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                  }}
                >
                  <a href="#gallery">
                    View Gallery <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Gallery (mobile swipe carousel) */}
          <MobileSwipeCarousel items={galleryImages} />

          {/* Gallery grid (desktop/tablet) */}
          <div className="mb-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="group relative overflow-hidden rounded-3xl border/60 bg-background/70 shadow-sm backdrop-blur"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
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
                    {img.caption}
                  </div>
                  <div className="mt-1 text-xs text-white/80">Only Health Solutions</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <ServiceCard icon={s.icon} title={s.title} bullets={s.bullets} />
              </motion.div>
            ))}
          </div>

          <Card className="mt-6 rounded-3xl">
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div>
                <div className="text-lg font-semibold">
                  Not sure what you need?
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  We’ll recommend a care plan and schedule based on your goals and
                  safety needs.
                </p>
              </div>
              <div className="flex w-full gap-2 md:w-auto">
                <Button asChild className="w-full rounded-2xl md:w-auto">
                  <a href="#contact">Talk to us</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-2xl md:w-auto"
                >
                  <a href={brand.phoneHref}>Call now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* How it works */}
        <Section
          id="how"
          eyebrow="How it works"
          title="Simple steps to get started"
          subtitle="We keep the process clear and supportive—from first call to ongoing care." 
          className="with-divider"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
              >
                <Card className="h-full rounded-3xl">
                  <CardContent className="p-6">
                    <div
                      className="mb-4 grid size-12 place-items-center rounded-3xl text-white shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                      }}
                    >
                      <s.icon className="size-6" />
                    </div>
                    <div className="text-lg font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-12">
            <Card className="rounded-3xl md:col-span-7 border/60 bg-background/80 shadow-sm backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div
                    className="grid size-12 place-items-center rounded-3xl text-white shadow-sm"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                    }}
                  >
                    <ShieldCheck className="size-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">
                      Safety-first, dignity-always
                    </div>
                    <p className="text-sm text-muted-foreground">
                      We document preferences, routines, and home safety notes so
                      caregivers can provide consistent support.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-2xl border p-3">
                    <CheckCircle2 className="mt-0.5 size-4" />
                    <div>
                      <div className="text-sm font-medium">Care notes</div>
                      <div className="text-xs text-muted-foreground">
                        Daily updates (edit to match your process)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-2xl border p-3">
                    <CheckCircle2 className="mt-0.5 size-4" />
                    <div>
                      <div className="text-sm font-medium">Family check-ins</div>
                      <div className="text-xs text-muted-foreground">
                        Consistent communication
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl md:col-span-5 border/60 bg-background/80 shadow-sm backdrop-blur">
              <CardContent className="p-6">
                <div className="text-lg font-semibold">Typical schedules</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pick what fits—then we tailor.
                </p>
                <div className="mt-4 grid gap-2">
                  {["2–4 hrs / day", "Weekends", "Overnight", "24/7"].map((x) => (
                    <div
                      key={x}
                      className="flex items-center justify-between rounded-2xl border p-3"
                    >
                      <span className="text-sm">{x}</span>
                      <CheckCircle2 className="size-4" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* About */}
        <Section
          id="about"
          eyebrow="About"
          title={`Why families choose ${brand.name}`}
          subtitle="We believe great care is personal. Our goal is to help clients feel safe, respected, and supported—at home." 
          className="with-divider"
        >
          <div className="grid gap-4 md:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45 }}
              className="md:col-span-7"
            >
              <Card className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Chip>Client-centered</Chip>
                    <Chip>Reliable scheduling</Chip>
                    <Chip>Respect & dignity</Chip>
                    <Chip>Clear communication</Chip>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">
                    Replace this section with your story—how you started, your
                    mission, and what makes your caregivers different. Mention
                    years of experience, leadership background, and your hiring
                    and training approach.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-2xl border p-4">
                      <div className="flex items-center justify-center rounded-2xl border bg-white/5 p-2">
                    <img
                      src={brand.logo1x}
                      srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`}
                      alt=""
                      aria-hidden="true"
                      className="h-8 w-auto opacity-80"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                      <div>
                        <div className="text-sm font-semibold">Compassion</div>
                        <div className="text-xs text-muted-foreground">
                          We treat clients like family.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border p-4">
                      <div className="grid size-10 place-items-center rounded-2xl border">
                        <ShieldCheck className="size-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Trust</div>
                        <div className="text-xs text-muted-foreground">
                          Consistent care and accountability.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="md:col-span-5"
            >
              <Card className="rounded-3xl">
                <CardContent className="p-6">
                  <div className="text-lg font-semibold">What you can expect</div>
                  <div className="mt-4 space-y-3">
                    {["A matching call to understand needs", "A clear care plan and schedule", "Regular communication and updates", "A respectful caregiver relationship"].map((x) => (
                      <div key={x} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4" />
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <MapPin className="size-4" />
                      Service area
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {brand.serviceArea}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Section>

        {/* Careers */}
        <Section
          id="careers"
          eyebrow="Careers"
          title="Build a meaningful career in care"
          subtitle="Join a team that values compassion, professionalism, and growth. We’re always looking for dedicated caregivers and nurses." 
          className="with-divider"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Certified Nursing Assistant (CNA)",
                points: [
                  "Assist with daily living activities",
                  "Support mobility and safety",
                  "Provide respectful, dignity-first care",
                ],
              },
              {
                title: "Licensed Practical Nurse (LPN)",
                points: [
                  "Medication administration",
                  "Health monitoring and documentation",
                  "Coordinate with physicians and families",
                ],
              },
              {
                title: "Companion / Sitter",
                points: [
                  "Provide companionship and supervision",
                  "Assist with light housekeeping",
                  "Support family caregivers with respite",
                ],
              },
            ].map((role) => (
              <Card key={role.title} className="rounded-3xl border/60 bg-background/80 shadow-sm backdrop-blur">
                <CardContent className="p-6">
                  <div
                    className="mb-4 grid size-12 place-items-center rounded-3xl text-white shadow-sm"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                    }}
                  >
                    <Users className="size-6" />
                  </div>
                  <div className="text-lg font-semibold">{role.title}</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {role.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 rounded-3xl border/60 bg-background/80 shadow-sm backdrop-blur">
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div>
                <div className="text-lg font-semibold">Ready to apply?</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Send your resume and a short introduction. We’ll contact qualified applicants promptly.
                </p>
              </div>
              <Button
                asChild
                className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                }}
              >
                <a href={`mailto:${brand.emailDisplay}?subject=Career Application — ${brand.name}`}>
                  Apply Now <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </Section>

        {/* Testimonials */}
        <Section
          id="testimonials"
          eyebrow="Reviews"
          title="Trusted by families"
          subtitle="Swap these placeholders with real testimonials once you have permission to publish them." 
          className="with-divider"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <Testimonial
              name="A. Johnson"
              role="Daughter of client"
              quote="The caregiver was kind, punctual, and truly attentive. We finally felt supported and informed." 
            />
            <Testimonial
              name="M. Rivera"
              role="Client"
              quote="They listened to my routine and respected my independence. It made a big difference." 
            />
            <Testimonial
              name="S. Patel"
              role="Family caregiver"
              quote="Respite care helped me recharge. Communication was easy and the team was responsive." 
            />
          </div>

          {/* Google Reviews (add your link in brand.googleReviewsUrl) */}
          <Card className="mt-6 rounded-3xl border/60 bg-background/80 shadow-sm backdrop-blur">
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold">Google Reviews</div>
                  <span
                    className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: `${brand.colors.primary}55` }}
                  >
                    <Star className="size-4" style={{ color: brand.colors.primary }} />
                    <span className="font-medium">5.0</span>
                    <span className="text-muted-foreground">(Add count)</span>
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Add your Google reviews link and we’ll display your latest reviews here.
                </p>
              </div>
              <Button
                asChild
                className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                }}
              >
                <a href={brand.googleReviewsUrl} target="_blank" rel="noreferrer">
                  View on Google <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="If you don’t see your question here, call or message us—we’re happy to help." 
          className="with-divider"
        >
          <Card className="rounded-3xl">
            <CardContent className="p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx}`}>
                    <AccordionTrigger className="px-2 text-left">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-2 text-sm text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build a care plan"
          subtitle="Call, email, or send a message. We’ll respond promptly and help you choose next steps." 
          className="with-divider"
        >
          <div className="grid gap-4 md:grid-cols-12">
            <Card className="rounded-3xl md:col-span-5">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border p-4">
                    <div
                      className="grid size-10 place-items-center rounded-2xl text-white shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                      }}
                    >
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Phone</div>
                      <a
                        href={brand.phoneHref}
                        onClick={dialNow}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {brand.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border p-4">
                    <div
                      className="grid size-10 place-items-center rounded-2xl text-white shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                      }}
                    >
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Email</div>
                      <a
                        href={brand.emailHref}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {brand.emailDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border p-4">
                    <div
                      className="grid size-10 place-items-center rounded-2xl text-white shadow-sm"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                      }}
                    >
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Location</div>
                      <div className="text-sm text-muted-foreground">
                        {brand.addressLine}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold">Hours</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Mon–Fri: 9am–5pm (edit) • After-hours: on-call (edit)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl md:col-span-7">
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Share the location, schedule, and care needs. We’ll reach out
                  shortly.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="grid gap-3">
                  <div className="grid gap-3 md:grid-cols-2">
                    <Input
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      required
                    />
                    <Input
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                    />
                  </div>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                  />
                  <Textarea
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    rows={6}
                    required
                  />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      className="rounded-2xl text-white shadow-sm transition-all hover:shadow-md"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                      }}
                    >
                      Send message
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Emergency? Call 911. (Or update per your policy.)
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Footer */}
        <footer
          className="border-t text-white"
          style={{ backgroundColor: brand.colors.secondary }}
        >
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-2">
                  <div
                    className="grid size-10 place-items-center rounded-2xl text-white shadow-sm"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
                    }}
                  >
                    <HeartPulse className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{brand.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Private Home Care Provider
                    </div>
                  </div>
                </div>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">
                  {brand.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Companionship</Chip>
                  <Chip>Personal care</Chip>
                  <Chip>Respite</Chip>
                  <Chip>Post-hospital</Chip>
                </div>
              </div>

              <div className="grid gap-2 md:col-span-3">
                <div className="text-sm font-semibold">Explore</div>
                {nav.map((n) => (
                  <NavLink key={n.href} href={n.href} label={n.label} />
                ))}
              </div>

              <div className="md:col-span-4">
                <div className="text-sm font-semibold">Contact</div>
                <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <a className="flex items-center gap-2 hover:text-foreground" href={brand.phoneHref} onClick={dialNow}>
                    <Phone className="size-4" /> {brand.phoneDisplay}
                  </a>
                  <a className="flex items-center gap-2 hover:text-foreground" href={brand.emailHref}>
                    <Mail className="size-4" /> {brand.emailDisplay}
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" /> {brand.serviceArea}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border p-4 text-xs text-muted-foreground">
                  <div className="font-medium text-foreground">Disclaimer</div>
                  This site is for informational purposes and does not provide
                  medical advice. Services described are non-medical home care.
                  (Edit to match your licensure and scope.)
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={brand.logo1x}
                  srcSet={`${brand.logo1x} 1x, ${brand.logo2x} 2x`}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto opacity-50"
                  loading="lazy"
                  decoding="async"
                />
                <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-foreground">Privacy</a>
                <a href="#" className="hover:text-foreground">Terms</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Mobile sticky bottom nav: Call / Text / Quote */}
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <div
            className="grid grid-cols-3 overflow-hidden rounded-2xl border/60 bg-background/75 shadow-lg backdrop-blur"
            style={{
              borderColor: `${brand.colors.primary}22`,
            }}
          >
            <a
              href={brand.phoneHref}
              onClick={dialNow}
              className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold"
              style={{ color: brand.colors.primary }}
              aria-label={`Call ${brand.name}`}
            >
              <Phone className="size-4" /> Call
            </a>
            <a
              href={brand.smsHref}
              className="flex items-center justify-center gap-2 border-x px-3 py-3 text-sm font-semibold"
              style={{ color: brand.colors.secondary, borderColor: `${brand.colors.primary}22` }}
              aria-label={`Text ${brand.name}`}
            >
              <MessageSquare className="size-4" /> Text
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-white"
              style={{
                backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
              }}
              aria-label="Request a quote"
            >
              <ArrowRight className="size-4" /> Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
