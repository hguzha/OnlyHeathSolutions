"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Users, BriefcaseMedical, HeartHandshake, Stethoscope, Mail, Upload, X } from "lucide-react";
import { brand } from "@/lib/site-data";

const roles = [
  {
    title: "Registered Nurse (RN)",
    icon: Stethoscope,
    text: "Provide advanced nursing care, clinical oversight, and coordination with physicians to ensure high-quality care for clients at home.",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    icon: BriefcaseMedical,
    text: "Provide skilled nursing support, monitoring, medication assistance, and hands-on care for clients.",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    icon: Users,
    text: "Support clients with personal care, mobility assistance, and daily routines in a respectful and compassionate manner.",
  },
  {
    title: "Companion / Sitter",
    icon: HeartHandshake,
    text: "Offer companionship, supervision, safety monitoring, and meaningful support that helps clients remain comfortable at home.",
  },
];

export default function CareersPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelationship: "",
    // Education
    highestDegree: "",
    school: "",
    graduationYear: "",
    // Certification & Licensing
    certifications: "",
    licensingNumbers: "",
    // Position & Availability
    positionApplying: "",
    availabilityStart: "",
    daysPerWeek: "",
    hoursPerDay: "",
    // Work Authorization
    citzenshipStatus: "",
    // Legal & Background
    backgroundCheck: false,
    agreeToBackgroundCheck: false,
    // Agreement
    agreeToTerms: false,
    signature: "",
    // Files
    resume: null,
    certDocuments: null,
    additionalDocuments: null,
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    resume: null,
    certDocuments: null,
    additionalDocuments: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles(prev => ({
        ...prev,
        [fieldName]: file.name
      }));
      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
    }
  };

  const removeFile = (fieldName) => {
    setUploadedFiles(prev => ({
      ...prev,
      [fieldName]: null
    }));
    setFormData(prev => ({
      ...prev,
      [fieldName]: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.agreeToTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }

    if (!formData.signature) {
      alert("Please enter your signature");
      return;
    }

    const subject = encodeURIComponent("Job Application — Only Health Solutions");
    const filesList = [
      uploadedFiles.resume && `Resume: ${uploadedFiles.resume}`,
      uploadedFiles.certDocuments && `Certifications: ${uploadedFiles.certDocuments}`,
      uploadedFiles.additionalDocuments && `Additional Documents: ${uploadedFiles.additionalDocuments}`
    ].filter(Boolean).join("\n");

    const body = encodeURIComponent(
      `PERSONAL INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}

EMERGENCY CONTACT:
Name: ${formData.emergencyName}
Phone: ${formData.emergencyPhone}
Relationship: ${formData.emergencyRelationship}

EDUCATION:
Highest Degree: ${formData.highestDegree}
School: ${formData.school}
Graduation Year: ${formData.graduationYear}

CERTIFICATION & LICENSING:
Certifications: ${formData.certifications}
Licensing Numbers: ${formData.licensingNumbers}

POSITION & AVAILABILITY:
Position Applying For: ${formData.positionApplying}
Start Date: ${formData.availabilityStart}
Days Per Week: ${formData.daysPerWeek}
Hours Per Day: ${formData.hoursPerDay}

WORK AUTHORIZATION:
Citizenship Status: ${formData.citzenshipStatus}

LEGAL & BACKGROUND:
Background Check Required: ${formData.backgroundCheck ? "Yes" : "No"}
Agree to Background Check: ${formData.agreeToBackgroundCheck ? "Yes" : "No"}

DOCUMENTS UPLOADED:
${filesList || "No documents uploaded"}

SIGNATURE:
${formData.signature}

Applicant Agrees to Terms: Yes`
    );

    // Open email client with pre-filled form
    window.location.href = `${brand.emailHref}?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #dbe2ea",
    fontSize: "14px",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#0f172a",
    fontSize: "14px",
  };

  return (
    <main>
      <PageHero
        subtitle="Join a team dedicated to compassionate care, professionalism, and meaningful service."
        height={460}
        images={[
          "1000251260.jpg",
          "1000251261.png",
          "1000251264.jpg",
        ]}
      />

      <section className="section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginTop: "30px",
          }}
          className="container"
        >
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="card"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      display: "grid",
                      placeItems: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 style={{ margin: 0 }}>{role.title}</h3>
                </div>

                <p style={{ color: "#64748b", lineHeight: 1.7, marginTop: 18 }}>
                  {role.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Application Form Toggle Button */}
        <div className="container" style={{ marginTop: 40, textAlign: "center" }}>
          <button
            onClick={() => setShowApplicationForm(!showApplicationForm)}
            style={{
              background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
              color: "white",
              padding: "14px 32px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "16px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            {showApplicationForm ? "Close Application Form" : "Apply Now"}
          </button>
        </div>

        {/* Application Form */}
        {showApplicationForm && (
          <div className="container" style={{ marginTop: 40 }}>
            <div className="card" style={{ padding: "40px" }}>
              <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginBottom: 32 }}>
                Job Application Form
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: 32 }}>
                {/* Personal Information */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Personal Information
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>First Name (required)</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name (required)</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email (required)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone (required)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        style={inputStyle}
                        required
                      />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={labelStyle}>Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street Address"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="State"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Zip Code</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Zip Code"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Emergency Contact
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        type="text"
                        name="emergencyName"
                        value={formData.emergencyName}
                        onChange={handleInputChange}
                        placeholder="Emergency Contact Name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="Emergency Contact Phone"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Relationship</label>
                      <input
                        type="text"
                        name="emergencyRelationship"
                        value={formData.emergencyRelationship}
                        onChange={handleInputChange}
                        placeholder="Relationship"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Education
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Highest Degree</label>
                      <input
                        type="text"
                        name="highestDegree"
                        value={formData.highestDegree}
                        onChange={handleInputChange}
                        placeholder="e.g., Bachelor's, Associate's, High School"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>School/University</label>
                      <input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleInputChange}
                        placeholder="School Name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Graduation Year</label>
                      <input
                        type="number"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleInputChange}
                        placeholder="Year"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Certification & Licensing */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Certification & Licensing
                  </h3>
                  <div style={{ display: "grid", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Certifications (comma separated)</label>
                      <textarea
                        name="certifications"
                        value={formData.certifications}
                        onChange={handleInputChange}
                        placeholder="e.g., CNA, RN, LPN, First Aid, CPR"
                        rows={3}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Licensing Numbers</label>
                      <textarea
                        name="licensingNumbers"
                        value={formData.licensingNumbers}
                        onChange={handleInputChange}
                        placeholder="License numbers and expiration dates"
                        rows={3}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Position & Availability */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Position & Availability
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Position Applying For (required)</label>
                      <select
                        name="positionApplying"
                        value={formData.positionApplying}
                        onChange={handleInputChange}
                        style={inputStyle}
                        required
                      >
                        <option value="">Select Position</option>
                        <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                        <option value="Licensed Practical Nurse (LPN)">Licensed Practical Nurse (LPN)</option>
                        <option value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</option>
                        <option value="Companion / Sitter">Companion / Sitter</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Available Start Date</label>
                      <input
                        type="date"
                        name="availabilityStart"
                        value={formData.availabilityStart}
                        onChange={handleInputChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Days Per Week Available</label>
                      <input
                        type="number"
                        name="daysPerWeek"
                        value={formData.daysPerWeek}
                        onChange={handleInputChange}
                        placeholder="e.g., 3, 4, 5"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Hours Per Day</label>
                      <input
                        type="text"
                        name="hoursPerDay"
                        value={formData.hoursPerDay}
                        onChange={handleInputChange}
                        placeholder="e.g., Full-time, Part-time, 4-8 hours"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* Work Authorization */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Work Authorization
                  </h3>
                  <div>
                    <label style={labelStyle}>Citizenship/Work Authorization Status</label>
                    <select
                      name="citzenshipStatus"
                      value={formData.citzenshipStatus}
                      onChange={handleInputChange}
                      style={inputStyle}
                    >
                      <option value="">Select Status</option>
                      <option value="U.S. Citizen">U.S. Citizen</option>
                      <option value="Permanent Resident">Permanent Resident (Green Card)</option>
                      <option value="Work Visa">Work Visa (H-1B, etc.)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Legal & Background */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Legal & Background
                  </h3>
                  <div style={{ display: "grid", gap: 16 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        name="agreeToBackgroundCheck"
                        checked={formData.agreeToBackgroundCheck}
                        onChange={handleInputChange}
                        style={{ width: "18px", height: "18px", cursor: "pointer" }}
                      />
                      <span style={{ color: "#0f172a", fontWeight: "500" }}>
                        I consent to a background check and fingerprinting
                      </span>
                    </label>
                  </div>
                </div>

                {/* File Uploads */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Document Upload
                  </h3>
                  <div style={{ display: "grid", gap: 20 }}>
                    {/* Resume */}
                    <div>
                      <label style={labelStyle}>Resume (PDF, DOC, DOCX)</label>
                      <div
                        style={{
                          border: "2px dashed #dbe2ea",
                          borderRadius: "12px",
                          padding: "20px",
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#1fa6a0";
                          e.currentTarget.style.background = "rgba(31, 166, 160, 0.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#dbe2ea";
                          e.currentTarget.style.background = "white";
                        }}
                      >
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "resume")}
                          style={{ display: "none" }}
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                        />
                        <label htmlFor="resume-upload" style={{ cursor: "pointer", display: "block" }}>
                          <Upload size={32} style={{ margin: "0 auto 8px", color: "#64748b" }} />
                          <p style={{ margin: 0, color: "#64748b", fontWeight: "500" }}>
                            Click to upload or drag and drop
                          </p>
                          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "12px" }}>
                            PDF, DOC, or DOCX (Max 10MB)
                          </p>
                        </label>
                      </div>
                      {uploadedFiles.resume && (
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "12px",
                            background: "#f1f5f9",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ color: "#0f172a", fontWeight: "500" }}>{uploadedFiles.resume}</span>
                          <button
                            type="button"
                            onClick={() => removeFile("resume")}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#64748b",
                            }}
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Certifications */}
                    <div>
                      <label style={labelStyle}>Certifications & Licenses (PDF, DOC, DOCX)</label>
                      <div
                        style={{
                          border: "2px dashed #dbe2ea",
                          borderRadius: "12px",
                          padding: "20px",
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#1fa6a0";
                          e.currentTarget.style.background = "rgba(31, 166, 160, 0.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#dbe2ea";
                          e.currentTarget.style.background = "white";
                        }}
                      >
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "certDocuments")}
                          style={{ display: "none" }}
                          id="cert-upload"
                          accept=".pdf,.doc,.docx"
                        />
                        <label htmlFor="cert-upload" style={{ cursor: "pointer", display: "block" }}>
                          <Upload size={32} style={{ margin: "0 auto 8px", color: "#64748b" }} />
                          <p style={{ margin: 0, color: "#64748b", fontWeight: "500" }}>
                            Click to upload or drag and drop
                          </p>
                          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "12px" }}>
                            PDF, DOC, or DOCX (Max 10MB)
                          </p>
                        </label>
                      </div>
                      {uploadedFiles.certDocuments && (
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "12px",
                            background: "#f1f5f9",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ color: "#0f172a", fontWeight: "500" }}>{uploadedFiles.certDocuments}</span>
                          <button
                            type="button"
                            onClick={() => removeFile("certDocuments")}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#64748b",
                            }}
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Additional Documents */}
                    <div>
                      <label style={labelStyle}>Additional Documents (Optional)</label>
                      <div
                        style={{
                          border: "2px dashed #dbe2ea",
                          borderRadius: "12px",
                          padding: "20px",
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#1fa6a0";
                          e.currentTarget.style.background = "rgba(31, 166, 160, 0.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#dbe2ea";
                          e.currentTarget.style.background = "white";
                        }}
                      >
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "additionalDocuments")}
                          style={{ display: "none" }}
                          id="additional-upload"
                          accept=".pdf,.doc,.docx,.jpg,.png"
                        />
                        <label htmlFor="additional-upload" style={{ cursor: "pointer", display: "block" }}>
                          <Upload size={32} style={{ margin: "0 auto 8px", color: "#64748b" }} />
                          <p style={{ margin: 0, color: "#64748b", fontWeight: "500" }}>
                            Click to upload or drag and drop
                          </p>
                          <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "12px" }}>
                            Any additional documents (Max 10MB)
                          </p>
                        </label>
                      </div>
                      {uploadedFiles.additionalDocuments && (
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "12px",
                            background: "#f1f5f9",
                            borderRadius: "8px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ color: "#0f172a", fontWeight: "500" }}>{uploadedFiles.additionalDocuments}</span>
                          <button
                            type="button"
                            onClick={() => removeFile("additionalDocuments")}
                            style={{
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              color: "#64748b",
                            }}
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Agreement & Signature */}
                <div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                    Agreement & Signature
                  </h3>
                  <div style={{ display: "grid", gap: 16 }}>
                    <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        style={{ width: "18px", height: "18px", cursor: "pointer", marginTop: "4px" }}
                        required
                      />
                      <span style={{ color: "#0f172a", lineHeight: "1.6" }}>
                        I certify that the information provided in this application is accurate and complete. I understand that any misrepresentation or omission may result in disqualification from employment or immediate termination if discovered after hire. I authorize Only Health Solutions to verify all information and conduct necessary background checks.
                      </span>
                    </label>

                    <div>
                      <label style={labelStyle}>Signature (required)</label>
                      <input
                        type="text"
                        name="signature"
                        value={formData.signature}
                        onChange={handleInputChange}
                        placeholder="Enter your full name as signature"
                        style={inputStyle}
                        required
                      />
                      <p style={{ margin: "8px 0 0", color: "#64748b", fontSize: "12px" }}>
                        By entering your name, you are providing your electronic signature
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg,#1fa6a0,#6a3fb5)",
                    color: "white",
                    padding: "16px",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: "700",
                    cursor: "pointer",
                    fontSize: "16px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
