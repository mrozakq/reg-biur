import './globals.css'
import type { Metadata } from 'next'

const SITE_URL = 'https://reg-biur.com.pl'

export const metadata: Metadata = {
  title: 'Reg-Biur — Nowoczesne Biuro Rachunkowe Wejherowo | Księgowość Online',
  description: 'Reg-Biur — księgowość, kadry i płace, doradztwo podatkowe dla JDG i firm. Nowoczesne narzędzia, terminowość, indywidualne podejście. Wejherowo, od 2018. Tel. 508 189 717.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reg-Biur — Nowoczesne Biuro Rachunkowe Wejherowo',
    description: 'Księgowość nowej generacji — e-faktury, JPK, doradztwo. Wejherowo, od 2018.',
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
