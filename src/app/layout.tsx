import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novahole AI — Intelligent Automation, Reimagined",
  description:
    "Novahole AI delivers next-generation artificial intelligence solutions that transform how businesses operate. Harness the power of intelligent automation, predictive analytics, and adaptive learning.",
  keywords: [
    "AI",
    "artificial intelligence",
    "machine learning",
    "automation",
    "predictive analytics",
    "Novahole",
  ],
  openGraph: {
    title: "Novahole AI — Intelligent Automation, Reimagined",
    description:
      "Next-generation AI solutions that transform how businesses operate.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novahole AI — Intelligent Automation, Reimagined",
    description:
      "Next-generation AI solutions that transform how businesses operate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
