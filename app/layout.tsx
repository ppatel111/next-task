import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App by Parth',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("children",children);
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}