import "./globals.css";

export const metadata = {
  title: "Only Health Solutions | Private Home Care Provider",
  description: "Compassionate private home care including nursing, personal care, and companionship in Vinings, GA.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
