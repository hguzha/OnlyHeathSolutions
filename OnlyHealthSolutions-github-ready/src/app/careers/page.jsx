"use client";

import { useState } from "react";
import PageHero from "@/components/page-hero";
import { Heart, Users, Award, Clock, Briefcase, CheckCircle, Zap, Lightbulb, X } from "lucide-react";
import { brand } from "@/lib/site-data";

export default function CareersPage() {
  const [openRole, setOpenRole] = useState(null);
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

  const roles = [
    {
      title: "Registered Nurse (RN)",
      type: "Full-time / Part-time",
      description: "Provide skilled nursing care, medication management, and health monitoring",
      icon: Award,
      color: "#1fa6a0",
      requirements: ["RN License", "2+ years experience", "CPR Certified"],
      benefits: ["Competitive Pay", "Flexible Schedule", "Professional Growth"]
    },
    {
      title: "Certified Nursing Assistant (CNA)",
      type: "Full-time / Part-time",
      description: "Assist with personal care, hygiene, and daily activities",
      icon: Heart,
      color: "#6a3fb5",
      requirements: ["CNA Certification", "High School Diploma", "Background Check"],
      benefits: ["Hourly Rate", "Paid Training", "Supportive Team"]
    },
    {
      title: "Home Health Aide",
      type: "Part-time / Full-time",
      description: "Provide compassionate assistance with daily living activities",
      icon: Users,
      color: "#1fa6a0",
      requirements: ["HHA Training", "Reliable Transportation", "References"],
      benefits: ["Flexible Hours", "Community Impact", "Training Support"]
    },
    {
      title: "Care Coordinator",
      type: "Full-time",
      description: "Manage client care plans and coordinate with caregivers",
      icon: Briefcase,
      color: "#6a3fb5",
      requirements: ["Healthcare Background", "Strong Communication", "Organizational Skills"],
      benefits: ["Salary + Benefits", "Professional Development", "Team Environment"]
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Competitive Compensation",
      description: "Attractive pay rates with regular increases and bonuses"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Work schedules that fit your lifestyle and availability"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous training and career development opportunities"
    },
    {
      icon: Users,
      title: "Supportive Team",
      description: "Work with compassionate colleagues who care about quality care"
    },
    {
      icon: Lightbulb,
      title: "Meaningful Work",
      description: "Make a real difference in clients' lives every single day"
    },
    {
      icon: Zap,
      title: "Team Support",
      description: "24/7 backup support and administrative assistance available"
    },
  ];

  return (
    <main>
      <PageHero
        //title="Join Our Team"
        subtitle="Be part of a mission to bring compassionate, dignified care to those who need it most."
        height={460}
        images={[
          "1000251260.jpg",
          "1000251261.png",
          "1000251264.jpg",
        ]}
      />

      {/* About Working Here */}
      <section
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #f0e6ff 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
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
              Why Join Only Health Solutions?
            </h2>
            <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
              We're looking for dedicated professionals who share our commitment to compassionate care
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
            }}
          >
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "100px",
          paddingBottom: "100px",
          position: "relative",
        }}
      >
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
              Explore career opportunities that align with your skills and passion
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
            }}
          >
            {roles.map((role, index) => (
              <RoleCard
                key={index}
                role={role}
                isOpen={openRole === index}
                onToggle={() => setOpenRole(openRole === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b1320 0%, #1a2847 100%)",
          paddingTop: "100px",
          paddingBottom: "100px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(31,166,160,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left - Qualities */}
            <div>
              <h2
                style={{
                  fontSize: "40px",
                  fontWeight: 800,
                  marginBottom: "24px",
                  color: "#ffffff",
                }}
              >
                We're Looking For...
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <QualityItem title="Compassion" description="A genuine desire to help others and make a positive impact" />
                <QualityItem title="Professionalism" description="Commitment to high standards and quality care" />
                <QualityItem title="Reliability" description="Dependable and punctual in all responsibilities" />
                <QualityItem title="Communication" description="Strong interpersonal and listening skills" />
              </div>
            </div>

            {/* Right - Stats */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                padding: "48px",
                backdropFilter: "blur(10px)",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: "40px" }}>
                <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "8px", color: "#1fa6a0" }}>
                  100+
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
                  Happy Team Members
                </p>
              </div>
              <div style={{ marginBottom: "40px" }}>
                <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "8px", color: "#1fa6a0" }}>
                  500+
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
                  Clients Served
                </p>
              </div>
              <div>
                <div style={{ fontSize: "56px", fontWeight: 800, marginBottom: "8px", color: "#1fa6a0" }}>
                  8+
                </div>
                <p style={{ color: "rgba(255,255,255,0.8)", margin: "0" }}>
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(31,166,160,0.95) 0%, rgba(106,63,181,0.95) 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <Heart size={48} color="#ffffff" style={{ margin: "0 auto 24px", display: "block" }} />
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Ready to Make a Difference?
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.95)", marginBottom: "40px" }}>
            Join our team and become part of something meaningful. Apply today to start your journey with Only Health Solutions.
          </p>
          <button
            onClick={() => setShowApplicationForm(true)}
            style={{
              display: "inline-block",
              padding: "16px 40px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.95)",
              color: "#1fa6a0",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationFormModal
          onClose={() => setShowApplicationForm(false)}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          removeFile={removeFile}
          uploadedFiles={uploadedFiles}
          handleSubmit={handleSubmit}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
      )}
    </main>
  );
}

// Benefit Card Component
function BenefitCard({ benefit }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = benefit.icon;

  return (
    <div
      style={{
        background: "white",
        border: isHovered ? "2px solid #1fa6a0" : "2px solid rgba(31,166,160,0.15)",
        borderRadius: "20px",
        padding: "36px",
        textAlign: "center",
        transition: "all 0.3s ease",
        cursor: "default",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 25px 60px rgba(31,166,160,0.2)"
          : "0 10px 30px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          margin: "0 auto 20px",
          transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
          transition: "transform 0.3s ease",
          boxShadow: "0 10px 30px rgba(31,166,160,0.2)",
        }}
      >
        <Icon size={36} color="#ffffff" />
      </div>

      <h3
        style={{
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#0b1320",
        }}
      >
        {benefit.title}
      </h3>

      <p style={{ color: "#666", lineHeight: 1.7, margin: "0", fontSize: "15px" }}>
        {benefit.description}
      </p>
    </div>
  );
}

// Role Card Component
function RoleCard({ role, isOpen, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = role.icon;

  return (
    <div
      style={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(31,166,160,0.08) 0%, rgba(106,63,181,0.08) 100%)"
          : "#ffffff",
        border: isOpen
          ? "2px solid #1fa6a0"
          : isHovered
          ? "2px solid rgba(31,166,160,0.3)"
          : "2px solid rgba(31,166,160,0.15)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered || isOpen ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered || isOpen
          ? "0 25px 60px rgba(31,166,160,0.2)"
          : "0 10px 30px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      {/* Header */}
      <div style={{ padding: "32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: `linear-gradient(135deg, ${role.color}, rgba(106,63,181,0.8))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 10px 30px ${role.color}20`,
            }}
          >
            <Icon size={28} color="#ffffff" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#0b1320", margin: "0" }}>
              {role.title}
            </h3>
            <p style={{ color: "#666", fontSize: "14px", margin: "4px 0 0 0", fontWeight: 500 }}>
              {role.type}
            </p>
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${role.color}, rgba(106,63,181,0.8))`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <p style={{ color: "#666", margin: "0", fontSize: "15px", lineHeight: 1.6 }}>
          {role.description}
        </p>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(31,166,160,0.2)",
            padding: "32px",
            background: "rgba(255,255,255,0.5)",
            animation: "slideDown 0.3s ease",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0b1320", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Requirements
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                {role.requirements.map((req, idx) => (
                  <li key={idx} style={{ color: "#666", marginBottom: "8px", fontSize: "14px" }}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#0b1320", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                What You'll Get
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                {role.benefits.map((benefit, idx) => (
                  <li key={idx} style={{ color: "#666", marginBottom: "8px", fontSize: "14px" }}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Quality Item Component
function QualityItem({ title, description }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <CheckCircle size={24} color="#1fa6a0" style={{ flexShrink: 0, marginTop: "2px" }} />
      <div>
        <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
          {title}
        </h4>
        <p style={{ color: "rgba(255,255,255,0.8)", margin: "0", lineHeight: 1.6 }}>
          {description}
        </p>
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
            <div>
              <label style={labelStyle}>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>
          </FormSection>

          {/* Emergency Contact Section */}
          <FormSection title="Emergency Contact">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>Name *</label>
                <input
                  type="text"
                  name="emergencyName"
                  value={formData.emergencyName}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone *</label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Relationship *</label>
              <input
                type="text"
                name="emergencyRelationship"
                value={formData.emergencyRelationship}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
          </FormSection>

          {/* Education Section */}
          <FormSection title="Education">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>Highest Degree *</label>
                <input
                  type="text"
                  name="highestDegree"
                  value={formData.highestDegree}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>School *</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Graduation Year</label>
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                style={inputStyle}
              />
            </div>
          </FormSection>

          {/* Certification & Licensing Section */}
          <FormSection title="Certification & Licensing">
            <div>
              <label style={labelStyle}>Certifications *</label>
              <input
                type="text"
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                required
                placeholder="e.g., RN, CNA, HHA"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Licensing Numbers *</label>
              <input
                type="text"
                name="licensingNumbers"
                value={formData.licensingNumbers}
                onChange={handleInputChange}
                required
                style={inputStyle}
              />
            </div>
          </FormSection>

          {/* Position & Availability Section */}
          <FormSection title="Position & Availability">
            <div>
              <label style={labelStyle}>Position Applying For *</label>
              <select
                name="positionApplying"
                value={formData.positionApplying}
                onChange={handleInputChange}
                required
                style={inputStyle}
              >
                <option value="">Select a position</option>
                <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                <option value="Certified Nursing Assistant (CNA)">Certified Nursing Assistant (CNA)</option>
                <option value="Home Health Aide">Home Health Aide</option>
                <option value="Care Coordinator">Care Coordinator</option>
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
              <div>
                <label style={labelStyle}>Start Date *</label>
                <input
                  type="date"
                  name="availabilityStart"
                  value={formData.availabilityStart}
                  onChange={handleInputChange}
                  required
                  style={inputStyle}
                />
              </div>
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
              label="Resume"
              fieldName="resume"
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />
            <FileUploadField
              label="Certification Documents"
              fieldName="certDocuments"
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />
            <FileUploadField
              label="Additional Documents"
              fieldName="additionalDocuments"
              uploadedFiles={uploadedFiles}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
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

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "16px 32px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #1fa6a0, #6a3fb5)",
              color: "white",
              border: "none",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(31,166,160,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(31,166,160,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(31,166,160,0.2)";
            }}
          >
            Submit Application
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
function FileUploadField({ label, fieldName, uploadedFiles, handleFileChange, removeFile }) {
  return (
    <div>
      <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#0f172a", fontSize: "14px" }}>
        {label}
      </label>
      {uploadedFiles[fieldName] ? (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", background: "#f0e6ff", borderRadius: "12px" }}>
          <span style={{ fontSize: "14px", color: "#0f172a", fontWeight: 500, flex: 1 }}>
            ✓ {uploadedFiles[fieldName]}
          </span>
          <button
            type="button"
            onClick={() => removeFile(fieldName)}
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              cursor: "pointer",
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
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "12px",
              border: "2px dashed #dbe2ea",
              cursor: "pointer",
            }}
          />
        </div>
      )}
    </div>
  );
}
