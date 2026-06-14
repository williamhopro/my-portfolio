import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { profile } from "@/lib/data";
import { HydrationBeacon } from "@/components/motion/hydration-beacon";
import "./globals.css";

/**
 * Pure-CSS failsafe so the page is never left blank. Framer-motion renders
 * hidden content as inline `opacity:0`; if the app never hydrates (JS blocked,
 * bundle failed, slow/stale tab) this animation reveals it after a short delay.
 * Needs no JavaScript, so it survives a fully blocked bundle. On a healthy load
 * the HydrationBeacon adds `hydrated` within ~1s, which cancels the animation
 * before it fires — leaving framer-motion's own animations untouched.
 */
const failsafeReveal = `@keyframes fm-failsafe{to{opacity:1;transform:none}}[style*="opacity"]{animation:fm-failsafe .01s linear 3.5s forwards}.hydrated [style*="opacity"]{animation:none}`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://williamho.dev";
const description =
  "William Ho — AI-Powered Full Stack Engineer with 7+ years building scalable web applications across React, Next.js, Node.js, AI/LLM, and Web3. Available for senior and freelance roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "William Ho",
    "Full Stack Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "AI Engineer",
    "Web3 Developer",
    "Hong Kong Software Engineer",
    "Freelance Full Stack Developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: `${profile.name} · Portfolio`,
    images: [
      {
        url: profile.photo,
        width: 1312,
        height: 1199,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description,
    images: [profile.photo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  image: `${siteUrl}${profile.photo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  url: siteUrl,
  sameAs: [profile.socials.github, profile.socials.telegram],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI / LLM",
    "Web3",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Inlined so the failsafe works even if the external CSS/JS never loads. */}
        <style dangerouslySetInnerHTML={{ __html: failsafeReveal }} />
        <noscript>
          {/* JS disabled: reveal all animation-hidden content immediately. */}
          <style
            dangerouslySetInnerHTML={{
              __html: `[style*="opacity"]{opacity:1!important;transform:none!important;}`,
            }}
          />
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <HydrationBeacon />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
