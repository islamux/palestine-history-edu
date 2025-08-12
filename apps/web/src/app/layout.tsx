import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'غصن الزيتون - Olive Branch',
  description: 'منصة تعليمية مقاومة للرقابة للتاريخ والثقافة الفلسطينية',
  keywords: 'فلسطين, التاريخ, الثقافة, التعليم, التراث, Palestine, History, Culture, Education',
  authors: [{ name: 'Olive Branch Team' }],
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#22c55e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
