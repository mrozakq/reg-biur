import './globals.css'
import type { Metadata } from 'next'

const SITE_URL = 'https://reg-biur.com.pl'

export const metadata: Metadata = {
  title: 'Reg-Biur — Biuro Rachunkowe w Wejherowie | Reg-Biur Regina Kierznikiewicz',
  description: 'Reg-Biur — księgowość, kadry i płace, doradztwo podatkowe. Lokalne biuro w Wejherowie prowadzone z indywidualną uwagą. Od 2018, ul. Stefczyka 67. Tel. 508 189 717.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reg-Biur — Biuro Rachunkowe w Wejherowie',
    description: 'Księgowość z indywidualnym podejściem. Wejherowo, od 2018.',
    type: 'website',
    locale: 'pl_PL',
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
