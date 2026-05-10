import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hemanttiwari.com"),
  title: {
    default: "Hemant Tiwari | Professional Photographer & Creator",
    template: "%s | Hemant Tiwari"
  },
  description: "Hemant Tiwari is a professional photographer and content creator specializing in cinematic photography, spiritual captures, and urban storytelling. Explore the portfolio of Hemant.",
  keywords: ["Hemant Tiwari", "Hemant", "Photographer in Nepal", "Cinematic Photography", "Spiritual Photographer", "Content Creator", "Photography Portfolio", "Hemant Photography"],
  authors: [{ name: "Hemant Tiwari" }],
  creator: "Hemant Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemanttiwari.com",
    title: "Hemant Tiwari | Professional Photographer & Creator",
    description: "Explore the professional photography portfolio of Hemant Tiwari. Cinematic, spiritual, and urban photography.",
    siteName: "Hemant Tiwari Photography",
    images: [
      {
        url: "/images/myself.jpeg",
        width: 1200,
        height: 630,
        alt: "Hemant Tiwari - Professional Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemant Tiwari | Photographer & Creator",
    description: "Professional photography portfolio of Hemant Tiwari.",
    images: ["/images/myself.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Hemant Tiwari",
  "url": "https://hemanttiwari.com",
  "image": "https://hemanttiwari.com/images/myself.jpeg",
  "jobTitle": "Professional Photographer",
  "description": "Hemant Tiwari is a professional photographer and content creator specializing in cinematic and spiritual photography.",
  "sameAs": [
    "https://www.instagram.com/storyby_hemantt/",
    "https://www.facebook.com/profile.php?id=61578154348886",
    "https://wa.me/9779768344799"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <Cursor />
          <Header />
          <main className="min-h-screen pt-24 pb-12">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
