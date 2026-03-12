export default function FixedBackgroundShell({ children }) {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.82)), url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2200&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
