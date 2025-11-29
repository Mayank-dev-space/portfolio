import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { resumeData } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.role}`,
  description: resumeData.personalInfo.summary,
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Software Engineer",
    "UI/UX Developer",
    "Mayank Vishwakarma",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Portfolio",
    "Web Development",
    "Responsive Design",
    "Frontend Engineering",
  ],
  authors: [{ name: resumeData.personalInfo.name }],
  creator: resumeData.personalInfo.name,
  publisher: resumeData.personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.role}`,
    description: resumeData.personalInfo.summary,
    type: "profile",
    locale: "en_US",
    url: "https://mayankvishwakarma.dev",
    siteName: `${resumeData.personalInfo.name} - Portfolio`,
    images: [
      {
        url: "/og-image.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: `${resumeData.personalInfo.name} - Frontend Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.role}`,
    description: resumeData.personalInfo.summary,
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://mayankvishwakarma.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: resumeData.personalInfo.name,
    jobTitle: resumeData.personalInfo.role,
    url: "https://mayankvishwakarma.dev",
    email: resumeData.personalInfo.email,
    telephone: resumeData.personalInfo.phone,
    sameAs: [
      resumeData.personalInfo.links.linkedin,
      resumeData.personalInfo.links.github,
      resumeData.personalInfo.links.medium,
      resumeData.personalInfo.links.devCommunity,
    ],
    description: resumeData.personalInfo.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vidisha",
      addressRegion: "Madhya Pradesh",
      postalCode: "464001",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: resumeData.education[0].institution,
    },
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Node.js",
      "Express.js",
    ],
    worksFor: {
      "@type": "Organization",
      name: resumeData.experience[0].company,
    },
  };

  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-[#e5e7eb]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
