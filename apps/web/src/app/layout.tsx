import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

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
  // Register service worker
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic antialiased">{children}</body>
    </html>
  )
}
