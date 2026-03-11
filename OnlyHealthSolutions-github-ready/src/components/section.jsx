import { brand } from "@/lib/site-data";
export default function Section({ eyebrow, title, subtitle, children, className="" }) {
  return (
    <section className={`scroll-mt-24 py-16 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {className.includes("with-divider") ? (
          <div className="mb-10 h-px w-full" style={{ backgroundImage: `linear-gradient(90deg, transparent, ${brand.colors.secondary}55, ${brand.colors.primary}55, transparent)` }} />
        ) : null}
        {(title || eyebrow) && (
          <div className="mb-10">
            {eyebrow ? <div className="mb-3 inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium">{eyebrow}</div> : null}
            {title ? <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2> : null}
            {subtitle ? <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">{subtitle}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
