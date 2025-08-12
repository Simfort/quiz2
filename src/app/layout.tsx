import type { Metadata } from "next";

import "./globals.css";
import ProviderWrapper from "./ui/ProviderWrapper";

export const metadata: Metadata = {
  title: "CREATING PERSONAL KEGEL PLAN",
  description:
    "Kegel Men helps to you improve your pelvic floor muscles with scientifically proven Kegel exercises.",
  applicationName: "CREATING PERSONAL KEGEL PLAN",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "./favicon-32x32.png", type: "image/png" },
    ],
    apple: [{ url: "./apple-icon.png" }],
  },
  openGraph: {
    siteName: "CREATING PERSONAL KEGEL PLAN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
