"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navPrimary, navSecondary } from "@/lib/site-data";

function NavLink({ href, label, className="" }) {
  return (
    <a href={href} className={`group relative inline-flex items-center transition-colors duration-300 ${className}`}>
      <span className="relative">
        {label}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
          style={{ background: `linear-gradient(90deg, #C6A75E, ${brand.colors.secondary})` }}
        />
      </span>
    </a>
  );
}

export default function SiteShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialNow = (e) => {
    try { e?.preventDefault?.(); } catch {}
    window.location.href = brand.phoneHref;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.colors.light }}>
      <header
        className="sticky top-0 z-50 border-b border-white/10 shadow-lg backdrop-blur"
        style={{
          background: "linear-gradient(135deg, rgba(11,19,32,0.92) 0%, rgba(17,27,46,0.88) 100%)",
        }}
      >
        <div className="hidden md:block">
          <div className="mx-auto max-w-6xl px-4 py-2 md:px-6" />
          <div
            className="h-px w-full"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent, ${brand.colors.secondary}55, ${brand.colors.primary}55, transparent)`,
            }}
          />
        </div>

        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-5 md:px-6">
          <a href="/" className="group shrink-0">
            <img src={brand.logo1x} alt={brand.name} className="h-36 w-auto sm:h-34 md:h-48 transition-transform duration-300 group-hover:scale-105" />
          </a>

          <nav aria-label="Primary" className="relative hidden flex-1 items-center justify-start md:flex ml-2 mr-auto">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 shadow-sm backdrop-blur">
              {[...navPrimary, ...navSecondary].map((n, i, arr) => (
                <React.Fragment key={n.href}>
                  <NavLink
                    href={n.href}
                    label={n.label}
                    className="rounded-full px-3 py-2 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
                  />
                  {i < arr.length - 1 && (
                    <span
                      className="mx-2 h-5 w-px"
                      style={{
                        background: `linear-gradient(to bottom, transparent, #C6A75E, ${brand.colors.secondary}, transparent)`,
                        opacity: 0.6,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
              <a href={brand.phoneHref} onClick={dialNow}>
                <Phone className="mr-2 size-4" /> Call
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full text-white shadow-sm"
              style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}
            >
              <a href="/contact">Request a Consult</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button asChild variant="outline" className="mr-2 rounded-full border-white/15 bg-white/5 text-white">
              <a href={brand.phoneHref} onClick={dialNow}>
                <Phone className="mr-2 size-4" /> Call
              </a>
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-white"
              onClick={() => setMobileOpen(v => !v)}
            >
              Menu
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col gap-3">
                {[...navPrimary, ...navSecondary].map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85"
                  >
                    {n.label}
                  </a>
                ))}
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <Button
                    asChild
                    className="w-full rounded-2xl"
                    style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}
                  >
                    <a href="/contact">Get started</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-2xl border-white/15 bg-white/5 text-white">
                    <a href={brand.phoneHref} onClick={dialNow}>Call now</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className="h-px w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, #C6A75E66, ${brand.colors.secondary}55, transparent)`,
          }}
        />
      </header>

      <main>{children}</main>

      <footer className="border-t text-white" style={{ background: "linear-gradient(135deg, #0B1320 0%, #111B2E 100%)" }}>
        <div
          className="h-px w-full"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${brand.colors.secondary}66, ${brand.colors.primary}66, transparent)`,
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 shadow-sm backdrop-blur">
                  <img src={brand.logo1x} alt={brand.name} className="h-20 w-auto" />
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wide text-white">{brand.name}</div>
                  <div className="mt-0.5 text-xs text-white/70">Private Home Care • Vinings, GA</div>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-white/70">{brand.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Nursing", "Personal Care", "Companion / Sitter", "Respite Support"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm font-semibold text-white">Explore</div>
              <div className="mt-3 flex flex-col gap-2">
                {[...navPrimary, ...navSecondary].map((n) => (
                  <a key={n.href} href={n.href} className="text-sm text-white/70 hover:text-white">
                    {n.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="text-sm font-semibold text-white">Contact</div>
              <div className="mt-3 space-y-2 text-sm">
                <a className="flex items-center gap-2 text-white/75 hover:text-white" href={brand.phoneHref}>
                  <Phone className="size-4" /> {brand.phoneDisplay}
                </a>
                <a className="flex items-center gap-2 text-white/75 hover:text-white" href={brand.emailHref}>
                  <Mail className="size-4" /> {brand.emailDisplay}
                </a>
                <div className="flex items-start gap-2 text-white/75">
                  <MapPin className="mt-0.5 size-4" />
                  <div>
                    <div>{brand.addressLine}</div>
                    <div className="mt-1 text-xs text-white/60">{brand.serviceArea}</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-xs text-white/70 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-white">Disclaimer</div>
                <p className="mt-2">
                  This site is for informational purposes and does not provide medical advice.
                  Services described are private home care.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src={brand.logo1x} alt="" aria-hidden="true" className="h-20 w-auto opacity-50" />
              <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="grid grid-cols-3 overflow-hidden rounded-2xl bg-white/80 shadow-lg backdrop-blur">
          <a href={brand.phoneHref} className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold" style={{ color: brand.colors.primary }}>
            <Phone className="size-4" /> Call
          </a>
          <a href={brand.smsHref} className="flex items-center justify-center gap-2 border-x px-3 py-3 text-sm font-semibold" style={{ color: brand.colors.secondary }}>
            <MessageSquare className="size-4" /> Text
          </a>
          <a href="/contact" className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-white" style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}>
            <ArrowRight className="size-4" /> Quote
          </a>
        </div>
      </div>
    </div>
  );
}
