import type { Metadata } from "next";
import localFont from "next/font/local";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/Sidebar";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "./assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
    },
    {
      path: "./assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
    },
    {
      path: "./assets/fonts/NeueMontreal-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neue-montreal",
});

const proximaNova = localFont({
  src: [
    {
      path: "./assets/fonts/ProximaNova_Regular.ttf",
      weight: "400",
    },
    {
      path: "./assets/fonts/ProximaNova_Bold.otf",
      weight: "700",
    },
    {
      path: "./assets/fonts/ProximaNova_ExtraBold.otf",
      weight: "800",
    },
  ],
  variable: "--font-proxima-nova",
});

export const metadata: Metadata = {
  title: "Cinesercla | Painel Administrativo",
  description:
    "CINESERCLA é um dos mais tradicionais grupos de cinemas do Brasil e mantém uma política de crescimento, com qualidade e eficiência em todos os seus complexos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} ${proximaNova.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main>{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
