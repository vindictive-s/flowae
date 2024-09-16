import "./globals.css";
import { roboto } from "./fonts";
import { keywords } from "./(shared)/Keywords";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";
import Background from "app/(shared)/Background";
import GoogleAnalytics from "app/(shared)/GoogleAnalytics";
import CookieBanner from "app/(shared)/CookieBanner";

export const metadata = {
  metadataBase: new URL("https://flowae.io"),
  title: { default: "Flowae", template: "%s | Flowae" },
  description:
    "Discover our dynamic brand design agency, where creativity converges with the best of code and no-code development.",
  languages: {
    "en-US": "en-US",
  },
  keywords: keywords,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  referrer: "origin",
  authors: [{ name: "Flowae", url: "https://flowae.io" }],
  creator: "aeoyu & 8 of tentacles",
  generator: "Next.js",
  category: [
    "Marketing",
    "Branding",
    "Advertising",
    "Web Development",
    "Graphic Design",
    "App Development",
    "Web3",
  ],
  alternates: {
    canonical: "https://flowae.io",
  },
  publisher: "Netlify",
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-DFF3F3CTH4" />
      <body className={roboto.className}>
        <Navbar />
        <Background />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
