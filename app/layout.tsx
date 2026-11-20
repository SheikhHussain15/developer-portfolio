import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://developer-portfolio-black-iota.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hussain Raza — Agentic AI & Full-Stack Developer',
  description: 'Hussain Raza is a Computer Science student in Karachi building agentic AI applications, LLM workflows, and modern full-stack experiences.',
  keywords: ['Hussain Raza', 'Agentic AI Developer', 'LLM Applications', 'Full-Stack Developer', 'Karachi'],
  authors: [{ name: 'Hussain Raza' }],
  openGraph: {
    title: 'Hussain Raza — Agentic AI & Full-Stack Developer',
    description: 'Building intelligent applications, agentic workflows, and thoughtful full-stack experiences.',
    url: siteUrl,
    siteName: 'Hussain Raza Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussain Raza — Agentic AI & Full-Stack Developer',
    description: 'Building intelligent applications, agentic workflows, and thoughtful full-stack experiences.',
  },
  icons: {
    icon: [{ url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' }, { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' }, { url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/apple-icon.png',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080a12',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark bg-background">
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
