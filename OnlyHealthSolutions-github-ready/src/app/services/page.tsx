"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Users, Stethoscope, BedDouble, Brain, CalendarHeart, ArrowRight, Phone } from "lucide-react";

const services = [
  { 
    slug: "personal-care", 
    title: "Personal Care Assistance", 
    icon: HeartHandshake, 
    intro: "Respectful one-on-one support with daily activities.", 
    overview: "Hands-on support with everyday routines while remaining in the comfort of home.", 
    details: ["Bathing and grooming", "Dressing assistance", "Meal preparation", "Medication reminders", "Mobility and transfer support"] 
  },
  { 
    slug: "companion-care", 
    title: "Companion Care", 
    icon: Users, 
    intro: "Warm companionship that supports emotional wellness.", 
    overview: "Meaningful companionship, engagement, and routine support.", 
    details: ["Social engagement", "Meal companionship", "Light housekeeping", "Errands and shopping", "Conversation and activities"] 
  },
  { 
    slug: "post-hospital-care", 
    title: "Post-Hospital Support", 
    icon: Stethoscope, 
    intro: "Smooth transitions home after surgery or hospitalization.", 
    overview: "Recovery support that helps clients settle in safely at home.", 
    details: ["Recovery monitoring", "Medication management", "Wound care support", "Appointment coordination", "Rehabilitation assistance"] 
  },
  { 
    slug: "respite-care", 
    title: "Respite Care", 
    icon: CalendarHeart, 
    intro: "Flexible short-term relief for family caregivers.", 
    overview: "Trusted coverage so caregivers can rest and recharge.", 
    details: ["Flexible scheduling", "Full-day coverage", "Emergency backup", "Caregiver support", "Peace of mind"] 
  },
  { 
    slug: "nursing-care", 
    title: "Skilled Nursing Care", 
    icon: Stethoscope, 
    intro: "Professional nursing support delivered at home.", 
    overview: "Clinical oversight, monitoring, and medical assistance in the comfort of home.", 
    details: ["Clinical assessments", "Vital signs monitoring", "Medication management", "Catheter care", "Wound care"] 
  },
  { 
    slug: "dementia-care", 
    title: "Alzheimer's & Dementia Care", 
    icon: Brain, 
    intro: "Compassionate memory care focused on routine and safety.", 
    overview: "Calm, structured support for clients living with memory loss.", 
    details: ["Memory care specialists", "Safe environment setup", "Routine and structure", "Behavioral support", "Family guidance"] 
  },
  { 
    slug: "live-in-care", 
    title: "Live-In & Extended Care", 
    icon: BedDouble, 
    intro: "Higher-touch support with day-to-night continuity.", 
    overview: "Longer coverage and a dependable rhythm of support.", 
    details: ["24/7 coverage", "Overnight support", "Extended care plans", "Continuous monitoring", "Family peace of mind"] 
  }
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

interface Service {
  slug: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  intro: string;
  overview: string;
  details: string[];
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const activeService = selectedService ? services.find((s: Service) => s.slug === selectedService) : null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-slate-200">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-950 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive, compassionate home care solutions tailored to your unique needs. From daily assistance to specialized nursing care, we're here to support your health and independence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service: Service, idx: number) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedService(selectedService === service.slug ? null : service.slug)}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${
                    selectedService === service.slug
                      ? "border-cyan-400 bg-cyan-50 shadow-lg"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-3">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.intro}</p>
                  </div>
                  <div className="flex items-center text-cyan-600 font-medium text-sm">
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Service Details */}
      {activeService && (
        <section className="py-16 md:py-24 bg-white border-t border-slate-200">
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-6">
                    {activeService.icon && <activeService.icon size={32} className="text-white" />}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">
                    {activeService.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {activeService.overview}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:shadow-lg transition-all hover:scale-105">
                    <Phone size={18} />
                    Request This Service
                  </button>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {activeService.details.map((detail: string, idx: number) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <span className="text-slate-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-400 to-purple-500">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can support your health and independence at home.
            </p>
            <button className="px-8 py-4 rounded-full bg-white text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 font-semibold text-lg hover:shadow-lg transition-all hover:scale-105">
              Request Care Today
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
