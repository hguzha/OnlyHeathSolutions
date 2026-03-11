import { Stethoscope, Users, HandHeart, Phone, FileText, Calendar } from "lucide-react";

export const brand = {
  name: "Only Health Solutions",
  tagline: "Private, compassionate home care—tailored to your loved one.",
  phoneDisplay: "(770) 439-7666",
  phoneHref: "tel:+17704397666",
  smsHref: "sms:+17704397666",
  emailDisplay: "care@onlyhealthsolutions.com",
  emailHref: "mailto:care@onlyhealthsolutions.com",
  serviceArea: "Serving Cobb, Cherokee, Fulton, Douglas, Bartow, Paulding, Gwinnett, DeKalb, Coweta & Forsyth Counties, GA",
  addressLine: "Vinings, GA 30339",
  colors: { primary: "#6A3FB5", secondary: "#1FA6A0", light: "#F4F6F8" },
  logo1x: "/logo2.png",
  logo2x: "/logo2.png",
  favicon: "/favicon.ico",
};

export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const navSecondary = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
];

export const services = [
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
];

export const steps = [
  { icon: Phone, title: "Call for a quick consult", text: "Tell us what you need. We’ll ask a few questions and recommend next steps." },
  { icon: FileText, title: "Personalized care plan", text: "We match caregivers and outline routines, preferences, and safety considerations." },
  { icon: Calendar, title: "Start care—often within days", text: "We coordinate schedules and keep communication clear with you and your family." },
];

export const faqs = [
  { q: "Do you offer hourly, overnight, and 24/7 care?", a: "Yes. We offer flexible scheduling—hourly visits, overnight monitoring, and around-the-clock care depending on your needs and caregiver availability." },
  { q: "Can you help after a hospital stay?", a: "We can provide non-medical post-hospital support like mobility assistance, meal prep, medication reminders, and companionship while you recover." },
  { q: "How do you match caregivers?", a: "We match based on care needs, personality fit, schedule, and any specialized experience requested." },
  { q: "Are your caregivers screened?", a: "We use a structured screening and onboarding process. Add your exact policies here." },
  { q: "Is this medical home health?", a: "We provide private, non-medical home care services. If you need skilled nursing or therapy, we can coordinate with licensed providers as appropriate." },
];

export const personalCareImages = [
  { src: "/home-care-worker-1024x597.webp", caption: "Caregiver supporting seniors at home with compassionate care" },
  { src: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop&cb=20260305", caption: "In-home nurse supporting a senior with daily care" },
  { src: "https://images.unsplash.com/photo-1576765607924-3f5c5f94c8c7?q=80&w=1600&auto=format&fit=crop&cb=20260305", caption: "Home health nurse and patient sharing a reassuring moment" },
];

export const galleryImages = [
  ...personalCareImages,
  { src: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1600&auto=format&fit=crop&cb=20260305", caption: "Professional nurse assisting a patient in a home setting" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop&cb=20260305", caption: "Supportive nurse helping a senior remain independent" },
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop&cb=20260305", caption: "Personalized home health support for seniors" },
  { src: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop&cb=20260305", caption: "Nurse and senior sharing a warm conversation at home" },
];
