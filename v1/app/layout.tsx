import './globals.css'
import type { Metadata } from 'next'

const SITE_URL = 'https://reg-biur.com.pl'

export const metadata: Metadata = {
  title: 'Reg-Biur — Biuro Rachunkowe Wejherowo | Księgowość, Kadry, Doradztwo',
  description: 'Usługi Biurowo-Księgowe Reg-Biur — pełna księgowość, KPiR, kadry i płace, ZUS, JPK, VAT, doradztwo podatkowe. Wejherowo, ul. Stefczyka 67. Tel. 508 189 717.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reg-Biur — Biuro Rachunkowe Wejherowo',
    description: 'Księgowość, kadry i płace, doradztwo podatkowe. Wejherowo, od 2018. Indywidualne podejście do każdego klienta.',
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
