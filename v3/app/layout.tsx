import './globals.css'
import type { Metadata } from 'next'

const SITE_URL = 'https://reg-biur.com.pl'

export const metadata: Metadata = {
  title: 'Reg-Biur — Biuro Rachunkowe Wejherowo | Księgowość, Kadry, Zatrudnienie Cudzoziemców',
  description: 'Reg-Biur — księgowość, kadry, rozliczenia podatkowe firm i indywidualne, zatrudnienie cudzoziemców. Wejherowo, ul. Stefczyka 67. Tel. 508 189 717. Od 2018.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  openGraph: {
    title: 'Reg-Biur — Biuro Rachunkowe Wejherowo',
    description: 'Księgowość, kadry, rozliczenia podatkowe, zatrudnienie cudzoziemców. Wejherowo, od 2018.',
    type: 'website',
    locale: 'pl_PL',
    url: SITE_URL,
    siteName: 'Reg-Biur',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reg-Biur — Biuro Rachunkowe Wejherowo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reg-Biur — Biuro Rachunkowe Wejherowo',
    description: 'Księgowość, kadry, rozliczenia podatkowe, zatrudnienie cudzoziemców. Wejherowo, od 2018.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz',
  alternateName: 'Reg-Biur',
  description: 'Biuro rachunkowe w Wejherowie — KPiR, ryczałt, kadry i płace, rozliczenia podatkowe firm i indywidualne, zatrudnienie cudzoziemców.',
  url: SITE_URL,
  telephone: '+48 508 189 717',
  email: 'ubk@reg-biur.com.pl',
  taxID: '588-11-45-668',
  vatID: 'PL5881145668',
  foundingDate: '2018-01-01',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Stefczyka 67',
    addressLocality: 'Wejherowo',
    postalCode: '84-200',
    addressCountry: 'PL',
    addressRegion: 'pomorskie',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.6061,
    longitude: 18.2769,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Wejherowo' },
    { '@type': 'City', name: 'Reda' },
    { '@type': 'City', name: 'Rumia' },
    { '@type': 'City', name: 'Gdynia' },
    { '@type': 'City', name: 'Gdańsk' },
    { '@type': 'AdministrativeArea', name: 'powiat wejherowski' },
  ],
  knowsAbout: [
    'KPiR (Książka Przychodów i Rozchodów)',
    'Ryczałt od przychodów ewidencjonowanych',
    'Kadry i płace',
    'Rozliczenia podatkowe PIT',
    'VAT i JPK_V7',
    'ZUS',
    'Rejestracja działalności gospodarczej (CEIDG)',
    'Zatrudnianie cudzoziemców',
  ],
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
