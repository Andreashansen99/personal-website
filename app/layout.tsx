import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000",
  ),
  title: "Andreas Hansen — IT & Business Student",
  description:
    "Andreas Hansen is an IT & Business student with a growing focus on BI and data science — dashboards and analysis that actually explain what's going on.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="relative flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded focus-visible:bg-indigo-600 focus-visible:px-4 focus-visible:py-2 focus-visible:text-white"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/10" />
          <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-500/5" />
        </div>
        {children}
      </body>
    </html>
  );
}
