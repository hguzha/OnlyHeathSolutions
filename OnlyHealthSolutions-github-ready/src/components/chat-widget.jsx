"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const phone = "17704397666"; // your number without symbols

  return (
    <>
      {/* Chat Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
        }}
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "24px",
            width: "320px",
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            overflow: "hidden",
            zIndex: 9999
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
              color: "white",
              padding: "16px",
              fontWeight: 600
            }}
          >
            Only Health Solutions
            <div style={{ fontSize: "13px", opacity: 0.9 }}>
              Chat with our care team
            </div>
          </div>

          {/* Message */}
          <div style={{ padding: "18px", fontSize: "14px", color: "#334155" }}>
            Hello 👋  
            <br />
            How can we help you today?
          </div>

          {/* Actions */}
          <div style={{ padding: "16px", borderTop: "1px solid #e5e7eb" }}>
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px",
                borderRadius: "12px",
                background: "#25D366",
                color: "white",
                fontWeight: 600
              }}
            >
              Start WhatsApp Chat
            </a>

            <a
              href={`sms:${phone}`}
              style={{
                display: "block",
                textAlign: "center",
                marginTop: "10px",
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                color: "#0f172a",
                fontWeight: 600
              }}
            >
              Send Text Message
            </a>
          </div>
        </div>
      )}
    </>
  );
}
