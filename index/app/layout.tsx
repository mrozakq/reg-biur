import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Reg-Biur — Trzy warianty strony biura rachunkowego",
  description: "Materiał wewnętrzny do wyboru wariantu strony WWW dla Usług Biurowo-Księgowych Reg-Biur Regina Kierznikiewicz, Wejherowo.",
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
