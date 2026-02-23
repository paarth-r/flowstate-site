import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalyticsPlaceholder } from "@/components/AnalyticsPlaceholder";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowstate.app"),
  title: {
    default: "Flowstate — 2-minute attention test",
    template: "%s | Flowstate",
  },
  description:
    "A minimal, fast 2-minute attention test. Understand and improve your ability to stay focused. Quick, repeatable, private by design.",
  keywords: ["attention test", "focus", "productivity", "reaction time", "flow state"],
  authors: [{ name: "Flowstate" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowstate.app",
    siteName: "Flowstate",
    title: "Flowstate — 2-minute attention test",
    description:
      "A minimal, fast 2-minute attention test. Understand and improve your ability to stay focused.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Flowstate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowstate — 2-minute attention test",
    description:
      "A minimal, fast 2-minute attention test. Understand and improve your ability to stay focused.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AnalyticsPlaceholder />
      </body>
    </html>
  );
}
