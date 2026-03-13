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
