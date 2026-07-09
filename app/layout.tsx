import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Xbit Innovations | IT Consulting & Custom Software Development',
    template: '%s | Xbit Innovations',
  },
  description:
    'Xbit Innovations delivers custom software development, IT consulting, cloud solutions, and blockchain technology from Arkansas, USA.',
  openGraph: {
    type: 'website',
    siteName: 'Xbit Innovations',
    title: 'Xbit Innovations | IT Consulting & Custom Software Development',
    description:
      'Custom software development, IT consulting, cloud solutions, and blockchain technology from Arkansas, USA.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-brand-dark focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
