"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brand } from "@/lib/site-data";

export default function ApplicationForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (!accessKey) {
        console.error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");
        setStatus("error");
        return;
      }

      const formData = new FormData(formRef.current);
      formData.append("access_key", accessKey);
      formData.append("subject", `New Application — ${brand.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="space-y-4 w-full max-w-lg mx-auto"
    >
      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700">
          Name <span className="text-red-500">*</span>
        </label>
        <Input type="text" name="name" required placeholder="Your full name" />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700">
          Email <span className="text-red-500">*</span>
        </label>
        <Input type="email" name="email" required placeholder="you@example.com" />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <Input type="tel" name="phone" required placeholder="(555) 000-0000" />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700">
          Message <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <Textarea
          name="message"
          rows={4}
          placeholder="Tell us a bit about yourself or your inquiry…"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm resize-none"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-slate-700">
          Upload Document <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="file"
          name="attachment"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-1 file:text-sm file:font-medium hover:file:bg-slate-200"
        />
        <p className="text-xs text-slate-400">PDF, DOC, DOCX, JPG, PNG accepted</p>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl text-white disabled:opacity-60"
        style={{
          backgroundImage: `linear-gradient(135deg, ${brand.colors.secondary}, ${brand.colors.primary})`,
        }}
      >
        {loading ? "Sending…" : "Submit Application"}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm font-semibold text-green-600">
          ✅ Application submitted successfully! We will contact you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-semibold text-red-600">
          ❌ Failed to submit. Please try again or call us at{" "}
          <a href={brand.phoneHref} className="underline">
            {brand.phoneDisplay}
          </a>
          .
        </p>
      )}
    </form>
  );
}
