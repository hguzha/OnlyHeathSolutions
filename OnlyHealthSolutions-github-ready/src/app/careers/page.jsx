"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { ChevronDown, X, Upload, Check } from "lucide-react";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentRole: "",
    startDate: "",
    availabilityStatus: "",
    daysPerWeek: "",
    hoursPerDay: "",
    citzenshipStatus: "",
    agreeToBackgroundCheck: false,
    signature: "",
    agreeToTerms: false,
  });
  
  const [uploadedFiles, setUploadedFiles] = useState({
    resume: null,
    certDocuments: null,
    additionalDocuments: null,
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const careersData = [
    {
      title: "Certified Nursing Assistant (CNA)",
      intro: "Join our care team and make a direct impact on residents' health and wellbeing.",
      requirements: [
        "Current CNA certification",
        "Valid CPR/BLS certification",
        "High school diploma or equivalent",
        "Excellent communication skills",
      ],
      benefits: [
        "Competitive hourly wage",
        "Flexible scheduling",
        "Health insurance options",
        "Professional development opportunities",
      ],
    },
    {
      title: "Registered Nurse (RN)",
      intro: "Lead our clinical care operations with expertise, compassion, and leadership.",
      requirements: [
        "Bachelor's degree in Nursing (BSN) or Associate degree (ADN)",
        "Active RN license",
        "Minimum 2 years of home care experience preferred",
        "Strong clinical assessment skills",
      ],
      benefits: [
        "Competitive salary and benefits package",
        "Sign-on bonus available",
        "Flexible scheduling",
        "Continuing education support",
      ],
    },
    {
      title: "Home Health Aide",
      intro: "Provide essential support and companionship to clients in their homes.",
      requirements: [
        "High school diploma or equivalent",
        "Ability to pass background check",
        "Valid driver's license and reliable transportation",
        "Compassion and patient care experience",
      ],
      benefits: [
        "Flexible work schedule",
        "Paid training provided",
        "Competitive compensation",
        "Supportive team environment",
      ],
    },
    {
      title: "Care Coordinator",
      intro: "Manage client care operations and ensure seamless service delivery.",
      requirements: [
        "Bachelor's degree in Healthcare Administration or related field",
        "3+ years of healthcare coordination experience",
        "Strong organizational and leadership skills",
        "Proficiency with healthcare management software",
      ],
      benefits: [
        "Competitive salary",
        "Comprehensive benefits",
        "Professional growth opportunities",
        "Hybrid work options",
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = async (e, fieldName) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type and size
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    
    if (!allowedTypes.includes(file.type)) {
      setUploadError("Please upload a PDF or Word document");
      return;
    }

    if (file.size > maxSize) {
      setUploadError("File size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    try {
      // Create FormData to send file
      const formDataToSend = new FormData();
      formDataToSend.append("file", file);
      formDataToSend.append("fieldName", fieldName);

      // Upload to API endpoint
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      
      // Store file info in state
      setUploadedFiles((prev) => ({
        ...prev,
        [fieldName]: {
          name: file.name,
          url: data.url,
          size: file.size,
        },
      }));
    } catch (error) {
      setUploadError("Failed to upload file. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = (fieldName) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [fieldName]: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    try {
      const applicationData = {
        ...formData,
        resume: uploadedFiles.resume?.url,
        certDocuments: uploadedFiles.certDocuments?.url,
        additionalDocuments: uploadedFiles.additionalDocuments?.url,
        role: selectedRole?.title,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      alert("Application submitted successfully!");
      setShowApplicationModal(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currentRole: "",
        startDate: "",
        availabilityStatus: "",
        daysPerWeek: "",
        hoursPerDay: "",
        citzenshipStatus: "",
        agreeToBackgroundCheck: false,
        signature: "",
        agreeToTerms: false,
      });
      setUploadedFiles({
        resume: null,
        certDocuments: null,
        additionalDocuments: null,
      });
    } catch (error) {
      alert("Failed to submit application. Please try again.");
      console.error("Submission error:", error);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "600",
    fontSize: "14px",
    color: "#0f172a",
    marginBottom: "8px",
  };

  return (
    <main>
      <PageHero
        title="Join Our Team"
        subtitle="Be part of a mission to bring compassionate, dignified care to those who need it most."
        height={460}
        images={[
          "1000251260.jpg",
          "1000251261.png",
          "1000251264.jpg",
        ]}
      />

      {/* Careers Section */}
      <section style={{ background: "#ffffff", paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2
              style={{
                fontSize: "44px",
                fontWeight: 800,
                marginBottom: "16px",
                background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Open Positions
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              Explore career opportunities to make a meaningful impact in healthcare
            </p>
          </div>

          {selectedRole ? (
            <RoleDetailView
              role={selectedRole}
              onBack={() => setSelectedRole(null)}
              onApply={() => setShowApplicationModal(true)}
            />
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}>
              {careersData.map((role, index) => (
                <RoleCard
                  key={index}
                  role={role}
                  onSelect={() => setSelectedRole(role)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && (
        <ApplicationFormModal
          onClose={() => setShowApplicationModal(false)}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          uploadedFiles={uploadedFiles}
          handleSubmit={handleSubmit}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          isUploading={isUploading}
          uploadError={uploadError}
        />
      )}
    </main>
  );
}

// Role Card Component
function RoleCard({ role, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: "white",
        border: isHovered ? "2px solid #1fa6a0" : "2px solid rgba(31,166,160,0.15)",
        borderRadius: "20px",
        padding: "40px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 60px rgba(31,166,160,0.2)"
          : "0 10px 30px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#0b1320", marginBottom: "12px" }}>
        {role.title}
      </h3>
      <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "24px", fontSize: "15px" }}>
        {role.intro}
      </p>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", fontWeight: 700, color: "#1fa6a0", marginBottom: "12px", textTransform: "uppercase" }}>
          Key Requirements
        </p>
        {role.requirements.slice(0, 3).map((req, idx) => (
          <p key={idx} style={{ color: "#666", fontSize: "14px", margin: "8px 0" }}>
            • {req}
          </p>
        ))}
      </div>

      <button
        style={{
          display: "inline-block",
          padding: "12px 28px",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
          color: "white",
          border: "none",
          fontWeight: "700",
          fontSize: "14px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        View Details
      </button>
    </div>
  );
}

// Role Detail View Component
function RoleDetailView({ role, onBack, onApply }) {
  return (
    <div>
      <button
        onClick={onBack}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "14px",
          fontWeight: "600",
          color: "#475569",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          marginBottom: "32px",
        }}
      >
        ← Back to Positions
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "60px" }}>
        <div>
          <h2 style={{ fontSize: "40px", fontWeight: 800, color: "#0b1320", marginBottom: "24px" }}>
            {role.title}
          </h2>
          <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.8, marginBottom: "32px" }}>
            {role.intro}
          </p>

          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0b1320", marginBottom: "16px" }}>
            Key Requirements
          </h3>
          {role.requirements.map((req, idx) => (
            <p key={idx} style={{ color: "#666", fontSize: "15px", margin: "12px 0" }}>
              • {req}
            </p>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(31,166,160,0.1) 0%, rgba(106,63,181,0.1) 100%)",
            border: "2px solid rgba(31,166,160,0.2)",
            borderRadius: "24px",
            padding: "48px",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0b1320", marginBottom: "24px" }}>
            What We Offer
          </h3>
          {role.benefits.map((benefit, idx) => (
            <div key={idx} style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Check size={16} color="#ffffff" />
              </div>
              <p style={{ color: "#0b1320", fontSize: "15px", margin: "0", lineHeight: 1.6 }}>
                {benefit}
              </p>
            </div>
          ))}

          <button
            onClick={onApply}
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "32px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

// Application Form Modal Component
function ApplicationFormModal({
  onClose,
  formData,
  handleInputChange,
  handleFileChange,
  removeFile,
  uploadedFiles,
  handleSubmit,
  inputStyle,
  labelStyle,
  isUploading,
  uploadError,
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        backdropFilter: "blur(5px)",
        padding: "20px",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "48px",
          maxWidth: "800px",
          width: "100%",
          boxShadow: "0 50px 100px rgba(0,0,0,0.3)",
          animation: "slideUp 0.3s ease",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#f0e6ff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1fa6a0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#f0e6ff";
          }}
        >
          <X size={20} color="#1fa6a0" />
        </button>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            marginBottom: "8px",
            background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Job Application
        </h2>
        <p style={{ color: "#666", marginBottom: "32px" }}>
          Fill out the form below to apply for a position with Only Health Solutions
        </p>

        {uploadError && (
          <div style={{ background: "#fee", border: "1px solid #fcc", borderRadius: "8px", padding: "12px", marginBottom: "16px", color: "#c33", fontSize: "14px" }}>
            {uploadError}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Personal Information Section */}
          <FormSection title="Personal Information">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>
          </FormSection>

          {/* Experience Section */}
          <FormSection title="Experience">
            <div>
              <label style={labelStyle}>Current Role/Position *</label>
              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleInputChange}
                required
                placeholder="e.g., RN, CNA, Home Health Aide"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>Available Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Availability Status *</label>
                <select
                  name="availabilityStatus"
                  value={formData.availabilityStatus}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                >
                  <option value="">Select availability</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Flexible">Flexible/On-call</option>
                </select>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>Days Per Week *</label>
                <input
                  type="text"
                  name="daysPerWeek"
                  value={formData.daysPerWeek}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3-5"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Hours Per Day *</label>
                <input
                  type="text"
                  name="hoursPerDay"
                  value={formData.hoursPerDay}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 8"
                  style={inputStyle}
                />
              </div>
            </div>
          </FormSection>

          {/* Work Authorization Section */}
          <FormSection title="Work Authorization">
            <div>
              <label style={labelStyle}>Citizenship Status *</label>
              <select
                name="citzenshipStatus"
                value={formData.citzenshipStatus}
                onChange={handleInputChange}
                required
                style={inputStyle}
              >
                <option value="">Select status</option>
                <option value="US Citizen">US Citizen</option>
                <option value="Permanent Resident">Permanent Resident</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </FormSection>

          {/* Documents Section */}
          <FormSection title="Documents">
            <FileUploadField
              label="Resume (PDF or Word) *"
              fieldName="resume"
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              isUploading={isUploading}
            />
            <FileUploadField
              label="Certification Documents (PDF or Word)"
              fieldName="certDocuments"
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              isUploading={isUploading}
            />
            <FileUploadField
              label="Additional Documents (PDF or Word)"
              fieldName="additionalDocuments"
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
              isUploading={isUploading}
            />
          </FormSection>

          {/* Background Check & Agreement Section */}
          <FormSection title="Background Check & Agreement">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <input
                type="checkbox"
                name="agreeToBackgroundCheck"
                checked={formData.agreeToBackgroundCheck}
                onChange={handleInputChange}
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
              <label style={{ margin: "0", cursor: "pointer", fontWeight: 500 }}>
                I agree to a background check
              </label>
            </div>
            <div>
              <label style={labelStyle}>Signature *</label>
              <input
                type="text"
                name="signature"
                value={formData.signature}
                onChange={handleInputChange}
                required
                placeholder="Type your full name as signature"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                style={{ width: "18px", height: "18px", cursor: "pointer" }}
              />
              <label style={{ margin: "0", cursor: "pointer", fontWeight: 500 }}>
                I agree to the terms and conditions *
              </label>
            </div>
          </FormSection>

          <button
            type="submit"
            disabled={isUploading}
            style={{
              padding: "16px 32px",
              borderRadius: "9999px",
              background: isUploading ? "#ccc" : "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: isUploading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(31,166,160,0.2)",
            }}
            onMouseEnter={(e) => {
              if (!isUploading) {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(31,166,160,0.3)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isUploading) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(31,166,160,0.2)";
              }
            }}
          >
            {isUploading ? "Uploading..." : "Submit Application"}
          </button>
        </form>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Form Section Component
function FormSection({ title, children }) {
  return (
    <div style={{ borderTop: "2px solid #e2e8f0", paddingTop: "24px" }}>
      <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0b1320", marginBottom: "16px" }}>
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {children}
      </div>
    </div>
  );
}

// File Upload Field Component
function FileUploadField({ label, fieldName, uploadedFiles, handleFileChange, removeFile, isUploading }) {
  return (
    <div>
      <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#0f172a", fontSize: "14px" }}>
        {label}
      </label>
      {uploadedFiles[fieldName] ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", background: "#f0e6ff", borderRadius: "12px" }}>
          <Check size={20} color="#1fa6a0" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: "14px", color: "#0f172a", fontWeight: 500, flex: 1 }}>
            {uploadedFiles[fieldName].name}
          </span>
          <button
            type="button"
            onClick={() => removeFile(fieldName)}
            disabled={isUploading}
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              cursor: isUploading ? "not-allowed" : "pointer",
              fontSize: "12px",
              fontWeight: 600,
              color: "#1fa6a0",
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <div style={{ position: "relative" }}>
          <input
            type="file"
            onChange={(e) => handleFileChange(e, fieldName)}
            disabled={isUploading}
            accept=".pdf,.doc,.docx"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "12px",
              border: "2px dashed #dbe2ea",
              cursor: isUploading ? "not-allowed" : "pointer",
              opacity: isUploading ? 0.5 : 1,
            }}
          />
          <Upload size={18} style={{ position: "absolute", right: "12px", top: "12px", color: "#999", pointerEvents: "none" }} />
        </div>
      )}
    </div>
  );
}
