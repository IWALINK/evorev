import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const saans = localFont({
  src: [
    {
      path: "../public/fonts/Saans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Saans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-saans",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/InterVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Évorev - Soutenir la jeunesse et l'entrepreneuriat Suisse",
  description:
    "Rejoignez Évorev une association dédiée au soutien de la jeunesse et à l'entrepreneuriat Suisse. Une opportunité unique d'allier du capital à un impact social direct et local",
  keywords: [
    "investissement",
    "Suisse",
    "jeunesse",
    "entrepreneuriat",
    "impact social",
    "obligations de participation",
  ],
  authors: [{ name: "Évorev Association" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-128.png", sizes: "128x128", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Évorev - Investir dans l'avenir de la Suisse",
    description:
      "Une opportunité unique d'allier un investissement à fort potentiel de rendement et un impact social direct et local.",
    type: "website",
    locale: "fr_CH",
    url: "https://evorevresearch.ch",
    siteName: "Évorev Association",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Évorev - Soutenir la jeunesse et l'entrepreneuriat Suisse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Évorev - Investir dans l'avenir de la Suisse",
    description:
      "Une opportunité unique d'allier un investissement à fort potentiel de rendement et un impact social direct et local.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${saans.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

