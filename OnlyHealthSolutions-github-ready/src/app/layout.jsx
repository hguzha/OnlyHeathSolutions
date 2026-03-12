import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ChatButtons from "@/components/chat-buttons";

export const metadata = {
  title: "Only Health Solutions | Private Home Care Provider",
  description: "Compassionate private home care including nursing, personal care, and companionship in Vinings, GA.",
  icons: { icon: "/favicon.ico" },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
          {children}
        <ChatButtons />
        <SiteFooter />
      </body>
    </html>
  );
}
