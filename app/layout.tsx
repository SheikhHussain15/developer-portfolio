import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Starfield } from '@/components/ui/Starfield'
import { CursorGlow } from '@/components/ui/CursorGlow'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hussain Raza | Agentic AI Developer',
  description: 'Hussain Raza is an Agentic AI and LLM application developer and Computer Science student based in Karachi, Pakistan.',
  generator: 'v0.app',
  keywords: ['Agentic AI Developer', 'LLM Application Developer', 'Python', 'FastAPI', 'RAG', 'Karachi'],
  authors: [{ name: 'Hussain Raza' }],
  openGraph: {
    title: 'Hussain Raza | Agentic AI Developer',
    description: 'Agentic AI, LLM application development, and full-stack projects by Hussain Raza in Karachi, Pakistan.',
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
    { media: '(prefers-color-scheme: dark)', color: '#17130f' },
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
