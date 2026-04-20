import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inspire Dental Gulshan Branch | Dentist",
  description: "Inspire Dental Gulshan Branch is a highly acclaimed dental clinic known for its exceptional patient care and comprehensive services. Despite a strong ",
  keywords: ["Gulshan dentist","dental clinic Gulshan","family dentistry Gulshan"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
