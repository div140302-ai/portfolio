import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divesh Kissoon | Software Developer & AI",
  description:
    "Portfolio of Divesh Kissoon — software developer and Master of Artificial Intelligence student working across automation, AI, robotics, web and mobile development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
