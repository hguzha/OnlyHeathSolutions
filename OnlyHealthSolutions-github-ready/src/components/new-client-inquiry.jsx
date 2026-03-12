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
        Tell us about your care needs and we’ll review your inquiry by email.
      </p>

      <form onSubmit={handleSubmit} className="inquiry-form">
        <div className="inquiry-two-col">
          <div className="inquiry-field">
            <label>First Name (required)</label>
            <input
              type="text"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div className="inquiry-field">
            <label>Last Name (required)</label>
            <input
              type="text"
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              style={inputStyle}
            />
          </div>
        </div>

        <div className="inquiry-field">
          <label>Email (required)</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div className="inquiry-field">
          <label>Phone (required)</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            style={inputStyle}
          />
        </div>

        <div className="inquiry-field">
          <label>How can we be of service?</label>
          <div className="inquiry-check-grid">
            {serviceOptions.map((item) => (
              <label key={item} className="inquiry-option" style={optionLabelStyle}>
                <input
                  type="checkbox"
                  checked={form.services.includes(item)}
                  onChange={() => toggleArrayValue("services", item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label>Where will services be provided?</label>
          <div className="inquiry-radio-grid">
            {[
              "At My Residence",
              "Relative's Home",
              "Assisted Living Community",
              "Other",
            ].map((item) => (
              <label key={item} className="inquiry-option" style={optionLabelStyle}>
                <input
                  type="radio"
                  name="location"
                  checked={form.location === item}
                  onChange={() => setForm({ ...form, location: item })}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label>What days do you need service?</label>
          <div className="inquiry-check-grid">
            {dayOptions.map((item) => (
              <label key={item} className="inquiry-option" style={optionLabelStyle}>
                <input
                  type="checkbox"
                  checked={form.days.includes(item)}
                  onChange={() => toggleArrayValue("days", item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label>How many hours of service do you need per day?</label>
          <div className="inquiry-check-grid">
            {hourOptions.map((item) => (
              <label key={item} className="inquiry-option" style={optionLabelStyle}>
                <input
                  type="checkbox"
                  checked={form.hours.includes(item)}
                  onChange={() => toggleArrayValue("hours", item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label>How soon would you like to start?</label>
          <div className="inquiry-radio-grid">
            {startOptions.map((item) => (
              <label key={item} className="inquiry-option" style={optionLabelStyle}>
                <input
                  type="radio"
                  name="startTimeframe"
                  checked={form.startTimeframe === item}
                  onChange={() => setForm({ ...form, startTimeframe: item })}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="inquiry-field">
          <label>Additional Comments</label>
          <textarea
            rows={5}
            value={form.comments}
            onChange={(e) => setForm({ ...form, comments: e.target.value })}
            style={inputStyle}
            placeholder="Enter any additional details here..."
          />
        </div>

        <button
          type="submit"
          style={{
            background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "14px",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "10px",
            width: "100%",
          }}
        >
          Submit Inquiry
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  marginTop: 8,
  borderRadius: 12,
  border: "1px solid #cbd5e1",
  background: "white",
};

const optionLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  color: "#334155",
};
