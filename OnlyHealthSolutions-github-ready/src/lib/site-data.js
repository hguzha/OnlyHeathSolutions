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
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/gallery", label: "Gallery" },
];

export const navPrimary = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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
      "Health assessments and care coordination with physicians",
    ],
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
      "Daily routines delivered with dignity",
    ],
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
      "Respite support for family caregivers",
    ],
  },
];

export const reviews = [
  {
    name: "Margaret S.",
    role: "Family Member",
    quote:
      "The compassion and professionalism shown by the team has been incredible. My mother feels safe and cared for.",
  },
  {
    name: "James T.",
    role: "Client",
    quote:
      "They respect my independence while providing the support I need. It's made a real difference in my life.",
  },
  {
    name: "Patricia G.",
    role: "Family Member",
    quote:
      "After trying other agencies, Only Health Solutions stands out for genuine care and reliability.",
  },
];

export const faqItems = [
  {
    q: "How do I get started?",
    a: "Call us for a free consultation. We'll discuss your needs, answer questions, and create a personalized care plan.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Cobb, Cherokee, Fulton, Douglas, Bartow, Paulding, Gwinnett, DeKalb, Coweta & Forsyth Counties, GA.",
  },
  {
    q: "Are your caregivers trained and vetted?",
    a: "Yes. All caregivers are background-checked, trained, and selected for compassion and professionalism.",
  },
  {
    q: "Do you offer flexible scheduling?",
    a: "Yes. We offer flexible scheduling to fit your loved one's routine, from a few hours per week to 24/7 care.",
  },
  {
    q: "What if we need care on short notice?",
    a: "Contact us as soon as possible. We work to accommodate urgent requests based on availability.",
  },
  {
    q: "How is quality ensured?",
    a: "We provide ongoing training, regular check-ins, family communication, and responsive support.",
  },
];
