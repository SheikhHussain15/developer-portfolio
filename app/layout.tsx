import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Starfield } from '@/components/ui/Starfield'
import { CursorGlow } from '@/components/ui/CursorGlow'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sheikh Hussain - Full Stack Developer & AI Engineer',
  description: 'Premium portfolio showcasing Full Stack Development, AI Engineering, and Prompt Engineering expertise',
  generator: 'v0.app',
  keywords: ['Full Stack Developer', 'AI Engineer', 'React', 'Next.js', 'Python', 'FastAPI'],
  authors: [{ name: 'Sheikh Hussain' }],
  openGraph: {
    title: 'Sheikh Hussain - Full Stack Developer & AI Engineer',
    description: 'Premium portfolio showcasing Full Stack Development, AI Engineering expertise',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e27' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="antialiased relative">
        <Starfield />
        <CursorGlow />
        <div className="relative z-10">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
