import type { Metadata } from '@/node_modules/next'
//import { Inter } from '@/node_modules/next/font/google'
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ryan Teo's Website",
  description: 'Welcome to my website!',
  script: 'three.min.js',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
