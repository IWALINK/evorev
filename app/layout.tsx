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
  openGraph: {
    title: "Évorev - Investir dans l'avenir de la Suisse",
    description:
      "Une opportunité unique d'allier un investissement à fort potentiel de rendement et un impact social direct et local.",
    type: "website",
    locale: "fr_CH",
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

