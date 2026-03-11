"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brand } from "@/lib/site-data";

export default function ContactForm({ compact=false }) {
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });
  function onSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Care inquiry — ${brand.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
  }
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <Input placeholder="Your name" value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} required />
      <Input placeholder="Phone" value={form.phone} onChange={(e)=>setForm(f=>({...f,phone:e.target.value}))} />
      <Input placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm(f=>({...f,email:e.target.value}))} required />
      <Textarea placeholder="What kind of care are you looking for? (schedule, needs, location)" value={form.message} onChange={(e)=>setForm(f=>({...f,message:e.target.value}))} rows={compact ? 5 : 6} required />
      <Button type="submit" className="w-full rounded-2xl text-white" style={{ backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})` }}>
        Send request
      </Button>
    </form>
  );
}
