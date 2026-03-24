"use client";

import { MessageCircle } from "lucide-react";
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

      {/* WhatsApp - Icon Only */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "#25D366",
          color: "white",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        title="WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.94 1.25l-.355.192-.368-.06-1.397-.233 1.194 1.104.3.375-.071.358a9.901 9.901 0 002.959 6.02l.35.328.356.043 1.398.233-1.195-1.104-.299-.375.071-.358a9.9 9.9 0 00-2.959-6.02l-.35-.328zm8.487-1.379c1.579.408 2.964 1.226 4.052 2.314 1.089 1.089 1.906 2.474 2.314 4.052.409 1.579.409 3.257 0 4.836-.408 1.579-1.226 2.964-2.314 4.052-1.089 1.089-2.474 1.906-4.052 2.314-1.579.408-3.257.408-4.836 0-1.579-.408-2.964-1.226-4.052-2.314-1.089-1.089-1.906-2.474-2.314-4.052C2.408 15.257 2.408 13.579 2.816 11.999c.408-1.579 1.226-2.964 2.314-4.052 1.089-1.089 2.474-1.906 4.052-2.314 1.579-.408 3.257-.408 4.836 0z"/>
        </svg>
      </a>
    </div>
  );
}
