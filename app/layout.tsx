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
  title: "Bingu Tech — Enterprise AI Consultancy & Automation Provider",
  description:
    "Pioneering Kenyan ICT since 1996. Bingu Tech designs and deploys sovereign, self-hosted AI Swarms, localized RAG pipelines, and edge compute systems for SACCOs, SMEs, and enterprise operations.",
  generator: 'v0.app',
  icons: {
    icon: '/bingu-tech-logo.png', // Explicit favicon fallback
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0c',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bingu Tech",
  "legalName": "Bingu Tech ICT Consultancy & Solution Providers",
  "foundingDate": "1996",
  "url": "https://bingutech.co.ke",
  "logo": "https://bingutech.co.ke/bingu-tech-logo.png",
  "description": "Established in 1996, Bingu Tech is Kenya's premier AI Consultancy delivering localized RAG pipelines, self-hosted multi-agent swarms, and sovereign edge compute deployments.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mombasa",
    "addressCountry": "KE"
  },
  "subOrganization": {
    "@type": "EducationalOrganization",
    "name": "Bingu AI Academy",
    "description": "Enterprise AI workforce upskilling and systems architecture training arm powered by Bingu Tech."
  },
  "sponsor": {
    "@type": "EducationalOrganization",
    "name": "254 AI Hub",
    "description": "Pro bono community platform architected by Bingu Tech for Kenyan youth AI education."
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${exo.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}