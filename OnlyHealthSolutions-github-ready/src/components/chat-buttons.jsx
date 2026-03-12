"use client";

import { MessageCircle, Phone } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function ChatButtons() {
  const textLink = `sms:${brand.phoneDisplay}`;
  const whatsappLink = `https://wa.me/${brand.phoneDisplay.replace(/\D/g, "")}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "22px",
        right: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        zIndex: 9999
      }}
    >
      {/* Text Button */}
      <a
        href={textLink}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          borderRadius: "999px",
          background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
          color: "white",
          fontWeight: 600,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }}
      >
        <MessageCircle size={18} />
        Text Us
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 16px",
          borderRadius: "999px",
          background: "#25D366",
          color: "white",
          fontWeight: 600,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }}
      >
        <Phone size={18} />
        WhatsApp
      </a>
    </div>
  );
}
