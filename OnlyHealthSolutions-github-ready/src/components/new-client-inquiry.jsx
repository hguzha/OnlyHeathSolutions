"use client";

import { useState } from "react";
import { brand } from "@/lib/site-data";

const serviceOptions = [
  "Nursing",
  "Personal Care",
  "Companion / Sitter",
  "Respite Care",
  "Post-Hospital Support",
  "Dementia Support",
];

const dayOptions = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const hourOptions = ["4", "8", "12", "16", "24"];

const startOptions = [
  "ASAP",
  "1 week",
  "2 weeks",
  "1 month",
  "2 months",
  "3 months",
  "Undecided",
];

const inputStyle = {
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
};

export default function NewClientInquiry() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: [],
    location: "",
    days: [],
    hours: [],
    startTimeframe: "",
    comments: "",
  });

  function toggleArrayValue(field, value) {
    setForm((prev) => {
      const exists = prev[field].includes(value);
      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent("New Client Inquiry — Only Health Solutions");
    const body = encodeURIComponent(
      `First Name: ${form.firstName}
Last Name: ${form.lastName}
Email: ${form.email}
Phone: ${form.phone}

Services Needed: ${form.services.join(", ") || "N/A"}
Service Location: ${form.location || "N/A"}
Preferred Days: ${form.days.join(", ") || "N/A"}
Hours Per Day: ${form.hours.join(", ") || "N/A"}
Start Timeframe: ${form.startTimeframe || "N/A"}

Additional Comments:
${form.comments || "N/A"}`
    );

    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="new-client-inquiry"
      className="new-client-inquiry"
      style={{
        background: "linear-gradient(135deg, #e6fbfa 0%, #f3f0ff 100%)",
        padding: "50px 30px",
        borderRadius: "24px",
        border: "1px solid #e2e8f0",
        marginTop: "40px",
        scrollMarginTop: "120px",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: 800,
          background: "linear-gradient(90deg,#1fa6a0,#6a3fb5)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          margin: 0,
        }}
      >
        New Client Inquiry
      </h2>

      <p style={{ color: "#475569", marginTop: 12, marginBottom: 24 }}>
        Tell us about your care needs and we'll review your inquiry by email.
      </p>

      <form onSubmit={handleSubmit} className="inquiry-form" style={{ display: "grid", gap: 24 }}>
        <div className="inquiry-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="inquiry-field">
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>First Name (required)</label>
            <input
              type="text"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div className="inquiry-field">
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>Last Name (required)</label>
            <input
              type="text"
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              style={inputStyle}
            />
          </div>
        </div>

        <div className="inquiry-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="inquiry-field">
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>Email (required)</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div className="inquiry-field">
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>Phone (required)</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
            />
          </div>
        </div>

        <div className="inquiry-field">
          <label style={{ display: "block", marginBottom: 12, fontWeight: 600, fontSize: "14px" }}>What services do you need? (Select all that apply)</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {serviceOptions.map((option) => (
              <label key={option} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={form.services.includes(option)}
                  onChange={() => toggleArrayValue("services", option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>Service Location</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            style={inputStyle}
            placeholder="City or neighborhood"
          />
        </div>

        <div className="inquiry-field">
          <label style={{ display: "block", marginBottom: 12, fontWeight: 600, fontSize: "14px" }}>Preferred Days (Select all that apply)</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: 12 }}>
            {dayOptions.map((day) => (
              <label key={day} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={form.days.includes(day)}
                  onChange={() => toggleArrayValue("days", day)}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label style={{ display: "block", marginBottom: 12, fontWeight: 600, fontSize: "14px" }}>Hours Per Day (Select all that apply)</label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: 12 }}>
            {hourOptions.map((hours) => (
              <label key={hours} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={form.hours.includes(hours)}
                  onChange={() => toggleArrayValue("hours", hours)}
                />
                <span>{hours}h</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>When do you need care to start?</label>
          <select
            value={form.startTimeframe}
            onChange={(e) => setForm({ ...form, startTimeframe: e.target.value })}
            style={inputStyle}
          >
            <option value="">Select a timeframe</option>
            {startOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="inquiry-field">
          <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: "14px" }}>Additional Comments or Questions</label>
          <textarea
            value={form.comments}
            onChange={(e) => setForm({ ...form, comments: e.target.value })}
            style={{
              ...inputStyle,
              minHeight: "100px",
              resize: "vertical",
            }}
            placeholder="Tell us more about your specific care needs..."
          />
        </div>

        <button
          type="submit"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
            color: "white",
            border: "none",
            borderRadius: "9999px",
            fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            marginTop: "20px",
            width: "fit-content",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}
