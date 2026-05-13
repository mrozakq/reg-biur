import './globals.css'
import type { Metadata } from 'next'

const SITE_URL = 'https://reg-biur.com.pl'

export const metadata: Metadata = {
  title: 'Reg-Biur — Biuro Rachunkowe Wejherowo | Księgowość, Kadry, Zatrudnienie Cudzoziemców',
  description: 'Reg-Biur — księgowość, kadry, rozliczenia podatkowe firm i indywidualne, zatrudnienie cudzoziemców. Wejherowo, ul. Stefczyka 67. Tel. 508 189 717. Od 2018.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Reg-Biur — Biuro Rachunkowe Wejherowo',
    description: 'Księgowość, kadry, rozliczenia podatkowe, zatrudnienie cudzoziemców. Wejherowo, od 2018.',
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
