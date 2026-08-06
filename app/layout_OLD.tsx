import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Exo } from 'next/font/google'
import './globals.css'

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bingu Tech — Kenya\'s Premier AI Consultancy & Automation Provider',
  description:
    'Since 1996, Bingu Tech designs and deploys sovereign, self-hosted AI swarms, localized RAG pipelines, and enterprise automation networks for SACCOs, SMEs, and corporates across Kenya.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${exo.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
