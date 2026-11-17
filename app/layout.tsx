import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Starfield } from '@/components/ui/Starfield'
import { CursorGlow } from '@/components/ui/CursorGlow'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hussain Raza | 3D Agentic AI Developer Portfolio',
  description: 'Explore Hussain Raza’s interactive 3D portfolio, AI projects, LLM applications, RAG systems, and full-stack work from Karachi, Pakistan.',
  generator: 'v0.app',
  keywords: ['Agentic AI Developer', 'LLM Application Developer', 'Python', 'FastAPI', 'RAG', 'Karachi'],
  authors: [{ name: 'Hussain Raza' }],
  openGraph: {
    title: 'Hussain Raza | 3D Agentic AI Developer Portfolio',
    description: 'An interactive 3D portfolio featuring Hussain Raza’s AI projects, LLM applications, RAG systems, and full-stack work.',
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
    { media: '(prefers-color-scheme: dark)', color: '#100e0c' },
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
