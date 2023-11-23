import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const font = Mukta({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "BookRent",
  description: "Application for Book Renting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
