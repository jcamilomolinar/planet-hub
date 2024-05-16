import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"
import { Separator } from "@/components/ui/Separator"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BabySearch',
  description: 'Explore Birth Records',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Separator />
        <main className="w-3/4 mx-auto">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
