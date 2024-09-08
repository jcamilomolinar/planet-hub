import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlanetHub | Explore new planets!",
  description: "Find accommodation and flights in our intergalactic terminal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavBar />
            <main className="w-6/7 m-10">
              {children}
            </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
