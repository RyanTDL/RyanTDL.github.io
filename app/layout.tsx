import type { Metadata } from '@/node_modules/next'
//import { Inter } from '@/node_modules/next/font/google'
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ryan Teo's Website",
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
