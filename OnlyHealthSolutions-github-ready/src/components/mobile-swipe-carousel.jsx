"use client";
import React, { useEffect, useRef, useState } from "react";
export default function MobileSwipeCarousel({ items }) {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children);
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0, dist = Infinity;
      children.forEach((c, idx) => {
        const cMid = c.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(cMid - mid);
        if (d < dist) { dist = d; best = idx; }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (idx) => {
    const el = ref.current; if (!el) return;
    const child = el.children[idx]; if (!child) return;
    el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };
  return (
    <div className="md:hidden">
      <div ref={ref} className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none]" style={{ scrollSnapType: "x mandatory" }}>
        {items.map((item, index) => (
          <div key={index} className="relative min-w-[85%] snap-center overflow-hidden rounded-3xl border bg-white/70 shadow-sm">
            <img src={item.src} alt={item.caption} className="h-72 w-full object-cover" loading="lazy" decoding="async" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.00) 35%, rgba(0,0,0,0.58) 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-sm font-semibold text-white drop-shadow">{item.caption}</div>
              <div className="mt-1 text-xs text-white/80">Only Health Solutions</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, idx) => <button key={idx} onClick={() => scrollTo(idx)} className={`h-2 w-2 rounded-full border ${idx===active ? "bg-slate-800" : "bg-transparent"}`} />)}
      </div>
    </div>
  );
}
