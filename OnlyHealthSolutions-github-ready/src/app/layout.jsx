import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ChatButtons from "@/components/chat-buttons";

export const metadata = {
  title: "Only Health Solutions | Private Home Care Provider",
  description: "Compassionate private home care including nursing, personal care, and companionship in Vinings, GA.",
  icons: { icon: "/favicon.ico" },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  charset: "utf-8",
  themeColor: "#1fa6a0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Only Health Solutions" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <ChatButtons />
        <SiteFooter />
      </body>
    </html>
  );
}
