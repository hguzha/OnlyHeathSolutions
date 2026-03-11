import { Stethoscope, HandHeart, Users } from "lucide-react";

export const brand = {
  name: "Only Health Solutions",
  phoneDisplay: "(770) 439-7666",
  phoneHref: "tel:+17704397666",
  emailDisplay: "care@onlyhealthsolutions.com",
  emailHref: "mailto:care@onlyhealthsolutions.com",
  addressLine: "Vinings, GA 30339",
  serviceArea:
    "Serving Cobb, Cherokee, Fulton, Douglas, Bartow, Paulding, Gwinnett, DeKalb, Coweta & Forsyth Counties, GA",
  logo: "/logo2.png",
  logo1x: "/logo2.png",
  tagline: "Care at home that feels human.",
  smsHref: "sms:+17704397666",
  colors: {
    primary: "#C6A75E",      // Gold/tan accent color
    secondary: "#6B7280",    // Gray accent color
    light: "#0B1320",        // Dark background
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
];

export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export const navSecondary = [
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/how-it-works", label: "How It Works" },
];

export const homeCards = [
  {
    title: "Services",
    text: "View nursing, personal care, and companion support designed around comfort, dignity, and safety at home.",
    href: "/services",
  },
  {
    title: "About",
    text: "Learn more about Only Health Solutions, our mission, and why families trust us for private home care.",
    href: "/about",
  },
  {
    title: "Careers",
    text: "Explore opportunities for compassionate caregivers and professionals who want to make a difference.",
    href: "/careers",
  },
  {
    title: "Reviews",
    text: "Read what families appreciate most about our care experience, professionalism, and support.",
    href: "/reviews",
  },
  {
    title: "Contact",
    text: "Connect with our team to ask questions, request care, or start building a plan for your loved one.",
    href: "/contact",
  },
  {
    title: "How It Works",
    text: "See our step-by-step process from first call to caregiver matching and ongoing communication.",
    href: "/how-it-works",
  },
  {
    title: "FAQ",
    text: "Find quick answers to common questions about scheduling, care options, and getting started.",
    href: "/faq",
  },
];

export const services = [
  {
    icon: Stethoscope,
    title: "Nursing",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Skilled nursing care provided by licensed professionals",
      "Medication administration and management",
      "Wound care and chronic condition monitoring",
      "Health assessments and care coordination with physicians"
    ]
  },
  {
    icon: HandHeart,
    title: "Personal Care",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Assistance with bathing, grooming, and dressing",
      "Mobility support and safe transfers",
      "Toileting and hygiene support",
      "Daily routines delivered with dignity"
    ]
  },
  {
    icon: Users,
    title: "Companion / Sitter",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop",
    bullets: [
      "Companionship and conversation",
      "Safety supervision and fall prevention",
      "Light housekeeping and meal preparation",
      "Respite support for family caregivers"
    ]
  }
];

export const reviews = [
  {
    name: "A. Johnson",
    role: "Daughter of client",
    quote:
      "The caregiver was kind, punctual, and truly attentive. We finally felt supported and informed.",
  },
  {
    name: "M. Rivera",
    role: "Client",
    quote:
      "They listened to my routine and respected my independence. It made a big difference.",
  },
  {
    name: "S. Patel",
    role: "Family caregiver",
    quote:
      "Respite care helped me recharge. Communication was easy and the team was responsive.",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576765607924-3f5c5f94c8c7?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop"
];

export const faqItems = [
  {
    q: "Do you offer hourly, overnight, and 24/7 care?",
    a: "Yes. We offer flexible scheduling based on your family’s needs.",
  },
  {
    q: "Can you help after a hospital stay?",
    a: "Yes. We can provide non-medical support after discharge, including mobility help, reminders, and companionship.",
  },
  {
    q: "How do you match caregivers?",
    a: "We match based on care needs, schedule, personality fit, and requested experience.",
  },
  {
    q: "Are your caregivers screened?",
    a: "We use a structured screening and onboarding process. You can customize this language to match your policies.",
  },
];
