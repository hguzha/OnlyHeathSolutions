import "./globals.css";

export const metadata = {
  title: "Only Health Solutions | Private Home Care Provider",
  description: "Private home care services including nursing, personal care, and companion/sitter support.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
