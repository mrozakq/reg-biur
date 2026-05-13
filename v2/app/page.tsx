const services = [
  { code: 'BOOK', title: 'Pełna księgowość', desc: 'Księgi handlowe dla sp. z o.o. i większych firm. Bilans, RZiS, sprawozdania finansowe, CIT.', tags: ['KH', 'CIT', 'BILANS'] },
  { code: 'KPIR', title: 'KPiR / Ryczałt', desc: 'Książka przychodów i rozchodów oraz ewidencja ryczałtowa dla JDG i małych firm.', tags: ['JDG', 'PIT', 'KPiR'] },
  { code: 'HR', title: 'Kadry i płace', desc: 'Umowy, listy płac, ewidencja czasu pracy, ZUS pracowników, świadectwa pracy.', tags: ['KADRY', 'PŁACE', 'ZUS'] },
  { code: 'TAX', title: 'ZUS · JPK · VAT', desc: 'Deklaracje VAT i VAT-UE, JPK_V7, rozliczenia ZUS, e-deklaracje, przelewy podatkowe.', tags: ['JPK_V7', 'VAT', 'e-decl'] },
  { code: 'ADV', title: 'Doradztwo podatkowe', desc: 'Wybór formy opodatkowania, optymalizacja, konsultacje przy istotnych decyzjach.', tags: ['STRATEGIA', 'OPTY'] },
  { code: 'REG', title: 'Rejestracja działalności', desc: 'CEIDG, KRS, wybór formy prawnej, pierwsze deklaracje — prowadzimy od pierwszego dnia.', tags: ['CEIDG', 'KRS', 'START'] },
]

const reasons = [
  { n: '01', t: 'Indywidualnie', d: 'Bezpośredni kontakt z osobą prowadzącą sprawy — bez infolinii, bez przekierowań.' },
  { n: '02', t: 'Terminowo', d: '100% deklaracji wysyłanych w terminie. OC z tytułu prowadzenia ksiąg.' },
  { n: '03', t: 'Nowocześnie', d: 'JPK_V7, e-faktury KSeF, e-deklaracje, bezpieczna wymiana dokumentów online.' },
  { n: '04', t: 'Doświadczenie', d: '8 lat na rynku, ciągłe szkolenia z każdej zmiany przepisów.' },
  { n: '05', t: 'Lokalnie', d: 'Wejherowo — możliwy kontakt osobisty, krótka konsultacja, podpis dokumentów.' },
  { n: '06', t: 'Pełne wsparcie', d: 'Od rejestracji firmy przez codzienne sprawy po rozliczenia roczne.' },
]

const audiences = [
  { tag: 'JDG', title: 'Jednoosobowa działalność', desc: 'Ryczałt, KPiR, skala, liniowy — dobierzemy formę i poprowadzimy księgi.' },
  { tag: 'SP. Z O.O.', title: 'Małe i średnie firmy', desc: 'Pełna księgowość, kadry, sprawozdania, CIT, VAT, deklaracje, e-faktury.' },
  { tag: 'START', title: 'Startujący przedsiębiorcy', desc: 'Rejestracja działalności, ulga ZUS na start, pierwsze faktury — krok po kroku.' },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-ink-900 text-ink-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-ink-900/85 backdrop-blur border-b border-ink-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-accent-500 text-ink-900 flex items-center justify-center display font-bold text-xl">R</div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="display text-lg font-bold leading-none">Reg-Biur<span className="text-accent-500">.</span></div>
              <div className="font-mono text-[10px] text-ink-500 mt-1">SINCE_2018 // WEJHEROWO</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#o-nas" className="text-ink-200 hover:text-accent-500 transition">O nas</a>
            <a href="#uslugi" className="text-ink-200 hover:text-accent-500 transition">Usługi</a>
            <a href="#dla-kogo" className="text-ink-200 hover:text-accent-500 transition">Dla kogo</a>
            <a href="#dlaczego" className="text-ink-200 hover:text-accent-500 transition">Dlaczego my</a>
            <a href="#kontakt" className="text-ink-200 hover:text-accent-500 transition">Kontakt</a>
          </nav>
          <a href="tel:+48508189717" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-ink-900 text-sm font-bold transition rounded-md">
            <span className="font-mono text-[11px]">→</span>
            508 189 717
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-accent-500/40 bg-accent-500/10 rounded-full">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-accent-500">// Księgowość nowej generacji</span>
              </div>
              <h1 className="display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mt-6 leading-[0.95]">
                Księgowość<br />
                bez <span className="text-accent-500">stresu</span>.<br />
                <span className="text-ink-500">Dla nowoczesnych firm.</span>
              </h1>
              <p className="text-ink-200 text-lg mt-8 leading-relaxed max-w-xl">
                Pełna księgowość, kadry i płace, doradztwo podatkowe — prowadzone
                z indywidualną uwagą i nowoczesnymi narzędziami. Wejherowo, od 2018.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="tel:+48508189717" className="inline-flex items-center gap-3 px-7 py-4 bg-accent-500 hover:bg-accent-600 text-ink-900 font-bold transition rounded-md group">
                  <span>Zadzwoń teraz</span>
                  <span className="font-mono">→</span>
                </a>
                <a href="#uslugi" className="inline-flex items-center gap-3 px-7 py-4 border border-ink-700 hover:border-accent-500 hover:text-accent-500 text-ink-100 font-bold transition rounded-md">
                  Zobacz usługi
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8 text-sm">
                <div>
                  <div className="display text-3xl font-bold text-accent-500">8+</div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-ink-500 mt-1">LAT_PRAKTYKI</div>
                </div>
                <div className="w-px h-12 bg-ink-700" />
                <div>
                  <div className="display text-3xl font-bold text-accent-500">100%</div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-ink-500 mt-1">TERMINOWO</div>
                </div>
                <div className="w-px h-12 bg-ink-700" />
                <div>
                  <div className="display text-3xl font-bold text-accent-500">6</div>
                  <div className="text-[11px] font-mono uppercase tracking-widest text-ink-500 mt-1">OBSZARÓW</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/20 to-transparent blur-2xl rounded-3xl" />
                <div className="relative bg-ink-800 border border-ink-700 rounded-2xl p-7 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-ink-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-ink-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />
                    </div>
                    <div className="font-mono text-[10px] text-ink-500">REG_BIUR.app</div>
                  </div>
                  <div className="font-mono text-[10px] text-accent-500 mb-3">// status panel</div>
                  <div className="space-y-2.5">
                    {[
                      { l: 'VAT 03/2026', s: 'wysłane', ok: true },
                      { l: 'JPK_V7', s: 'wysłane', ok: true },
                      { l: 'ZUS 03/2026', s: 'opłacone', ok: true },
                      { l: 'PIT-11 pracownik', s: 'w toku', ok: false },
                      { l: 'CIT-8 rok 2025', s: 'gotowy', ok: true },
                    ].map((r) => (
                      <div key={r.l} className="flex items-center justify-between p-3 bg-ink-900 border border-ink-700 rounded-md">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${r.ok ? 'bg-accent-500' : 'bg-amber-500 animate-pulse'}`} />
                          <span className="text-sm text-ink-100">{r.l}</span>
                        </div>
                        <span className={`font-mono text-[10px] uppercase tracking-widest ${r.ok ? 'text-accent-500' : 'text-amber-500'}`}>{r.s}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-5 border-t border-ink-700 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-ink-500">// twoja firma</div>
                      <div className="text-sm font-medium mt-1">u nas wszystko ogarnięte</div>
                    </div>
                    <div className="w-8 h-8 bg-accent-500/20 text-accent-500 rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O nas */}
      <section id="o-nas" className="border-t border-ink-800 relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">// 01_O_NAS</div>
              <h2 className="display text-4xl lg:text-5xl font-bold mt-4 leading-[1.05]">
                Małe biuro.<br />
                <span className="text-accent-500">Duża uwaga.</span>
              </h2>
              <p className="text-ink-200 mt-6 leading-relaxed">
                <strong className="text-ink-50">Regina Kierznikiewicz</strong> prowadzi Reg-Biur od 2018 roku.
                Specjalizujemy się w księgowości dla jednoosobowych działalności i małych firm,
                które chcą mieć ogarnięte sprawy podatkowe — bez stresu i bez niespodzianek.
              </p>
              <p className="text-ink-300 mt-4 leading-relaxed text-sm">
                Każdy klient ma bezpośredni kontakt z osobą prowadzącą jego sprawy. Bez
                ogólnej infolinii, bez przekierowań przez sekretariat — pytania trafiają
                od razu do tego, kto zna Twoją firmę.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ink-800 border border-ink-700 rounded-xl p-6 hover:border-accent-500 transition group">
                  <div className="font-mono text-[10px] text-ink-500">2018 →</div>
                  <div className="display text-4xl font-bold text-accent-500 mt-2">8 lat</div>
                  <div className="text-sm text-ink-200 mt-3">prowadzenia ksiąg dla firm w Wejherowie i okolicach.</div>
                </div>
                <div className="bg-ink-800 border border-ink-700 rounded-xl p-6 hover:border-accent-500 transition group">
                  <div className="font-mono text-[10px] text-ink-500">SCOPE</div>
                  <div className="display text-4xl font-bold text-accent-500 mt-2">6</div>
                  <div className="text-sm text-ink-200 mt-3">obszarów usług — od rejestracji po doradztwo strategiczne.</div>
                </div>
                <div className="bg-ink-800 border border-ink-700 rounded-xl p-6 hover:border-accent-500 transition group">
                  <div className="font-mono text-[10px] text-ink-500">DELIVERY</div>
                  <div className="display text-4xl font-bold text-accent-500 mt-2">100%</div>
                  <div className="text-sm text-ink-200 mt-3">deklaracji wysyłanych w terminie. OC ksiąg.</div>
                </div>
                <div className="bg-ink-800 border border-ink-700 rounded-xl p-6 hover:border-accent-500 transition group">
                  <div className="font-mono text-[10px] text-ink-500">LOCATION</div>
                  <div className="display text-2xl font-bold text-accent-500 mt-2">Wejherowo</div>
                  <div className="text-sm text-ink-200 mt-3">i całe Trójmiasto — kontakt osobisty mile widziany.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="uslugi" className="border-t border-ink-800 relative bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">// 02_USLUGI</div>
              <h2 className="display text-4xl lg:text-5xl font-bold mt-4 leading-[1.05]">
                Wszystko, czego potrzebuje<br />
                <span className="text-accent-500">Twoja firma</span>.
              </h2>
            </div>
            <p className="text-ink-300 max-w-sm leading-relaxed">
              Sześć obszarów, w których prowadzimy klientów — od jednoosobowych
              działalności po spółki z o.o.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={s.code} className="group bg-ink-800 border border-ink-700 hover:border-accent-500 transition rounded-xl p-7 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-500/0 group-hover:bg-accent-500/10 transition rounded-full blur-2xl" />
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] text-ink-500">[{String(i + 1).padStart(2, '0')}]</div>
                  <div className="font-mono text-[10px] text-accent-500 font-bold">{s.code}</div>
                </div>
                <h3 className="display text-2xl font-bold mt-6 group-hover:text-accent-500 transition">{s.title}</h3>
                <p className="text-ink-300 mt-3 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-ink-900 border border-ink-700 rounded font-mono text-[10px] text-ink-300">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-accent-500 to-accent-700 text-ink-900 rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest opacity-70">// PRICING</div>
              <div className="display text-3xl font-bold mt-2 max-w-xl">
                Wycena? Indywidualnie, po krótkiej rozmowie o Twojej firmie.
              </div>
            </div>
            <a href="tel:+48508189717" className="shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-ink-900 hover:bg-ink-800 text-accent-500 font-bold transition rounded-md">
              <span>Zadzwoń</span>
              <span className="font-mono">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">// 03_DLA_KOGO</div>
            <h2 className="display text-4xl lg:text-5xl font-bold mt-4 leading-[1.05]">
              Z kim <span className="text-accent-500">pracujemy</span> najlepiej.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-ink-700">
            {audiences.map((a) => (
              <div key={a.tag} className="bg-ink-900 p-8 hover:bg-ink-800 transition group relative">
                <span className="absolute top-6 right-6 px-2 py-0.5 bg-accent-500 text-ink-900 font-mono text-[10px] font-bold tracking-widest">{a.tag}</span>
                <div className="display text-3xl font-bold mt-12 group-hover:text-accent-500 transition">{a.title}</div>
                <p className="text-ink-300 mt-3 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section id="dlaczego" className="border-t border-ink-800 bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">// 04_DLACZEGO_MY</div>
              <h2 className="display text-4xl lg:text-5xl font-bold mt-4 leading-[1.05]">
                Co nas <span className="text-accent-500">wyróżnia</span>.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r) => (
              <div key={r.n} className="bg-ink-800 border border-ink-700 rounded-xl p-7 hover:bg-ink-900 hover:border-accent-500 transition group">
                <div className="flex items-baseline justify-between">
                  <div className="display text-5xl font-bold text-ink-700 group-hover:text-accent-500 transition">{r.n}</div>
                  <div className="w-8 h-8 rounded-full border border-ink-700 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-ink-900 flex items-center justify-center transition">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </div>
                </div>
                <div className="display text-xl font-bold mt-5">{r.t}</div>
                <p className="text-ink-300 mt-2 text-sm leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-ink-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-500/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">// 05_KONTAKT</div>
              <h2 className="display text-4xl lg:text-5xl font-bold mt-4 leading-[1.05]">
                Porozmawiajmy o<br />
                <span className="text-accent-500">Twojej firmie</span>.
              </h2>
              <p className="text-ink-300 mt-6 leading-relaxed">
                Krótka rozmowa wystarczy, żebyśmy oszacowali zakres pracy
                i podali wstępną wycenę.
              </p>

              <div className="mt-10 space-y-3">
                <a href="tel:+48508189717" className="flex items-center gap-4 p-4 bg-ink-800 border border-ink-700 hover:border-accent-500 rounded-xl transition group">
                  <div className="w-12 h-12 bg-accent-500 text-ink-900 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500">TELEFON</div>
                    <div className="display text-xl font-bold mt-0.5 group-hover:text-accent-500 transition">508 189 717</div>
                  </div>
                </a>
                <a href="mailto:ubk@reg-biur.com.pl" className="flex items-center gap-4 p-4 bg-ink-800 border border-ink-700 hover:border-accent-500 rounded-xl transition group">
                  <div className="w-12 h-12 bg-accent-500 text-ink-900 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500">E-MAIL</div>
                    <div className="display text-xl font-bold mt-0.5 group-hover:text-accent-500 transition">ubk@reg-biur.com.pl</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-ink-800 border border-ink-700 rounded-xl">
                  <div className="w-12 h-12 bg-accent-500 text-ink-900 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500">ADRES</div>
                    <div className="text-base font-semibold mt-0.5">ul. Stefczyka 67, 84-200 Wejherowo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-ink-800 border border-ink-700 rounded-xl">
                  <div className="w-12 h-12 bg-accent-500 text-ink-900 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-500">GODZINY</div>
                    <div className="text-base font-semibold mt-0.5">pn–pt: 8:00–16:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form action="mailto:ubk@reg-biur.com.pl" method="post" encType="text/plain" className="bg-ink-800 border border-ink-700 rounded-2xl p-8">
                <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">{'// FORMULARZ_KONTAKTOWY'}</div>
                <div className="display text-3xl font-bold mt-2">Wyślij wiadomość</div>
                <p className="text-sm text-ink-300 mt-2">Odpowiadamy tego samego dnia roboczego.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">IMIĘ_I_NAZWISKO</label>
                    <input name="imie" required className="w-full px-4 py-3 bg-ink-900 border border-ink-700 focus:border-accent-500 rounded-lg outline-none transition text-ink-50" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">TELEFON</label>
                    <input name="telefon" type="tel" className="w-full px-4 py-3 bg-ink-900 border border-ink-700 focus:border-accent-500 rounded-lg outline-none transition text-ink-50" placeholder="500 000 000" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">E-MAIL</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 bg-ink-900 border border-ink-700 focus:border-accent-500 rounded-lg outline-none transition text-ink-50" placeholder="jan@firma.pl" />
                </div>
                <div className="mt-4">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">FORMA_PROWADZENIA</label>
                  <select name="forma" className="w-full px-4 py-3 bg-ink-900 border border-ink-700 focus:border-accent-500 rounded-lg outline-none transition text-ink-50">
                    <option>JDG — ryczałt</option>
                    <option>JDG — KPiR</option>
                    <option>Spółka z o.o.</option>
                    <option>Spółka cywilna</option>
                    <option>Dopiero zakładam</option>
                    <option>Inna / nie wiem</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ink-500 mb-2">WIADOMOŚĆ</label>
                  <textarea name="wiadomosc" rows={4} className="w-full px-4 py-3 bg-ink-900 border border-ink-700 focus:border-accent-500 rounded-lg outline-none transition text-ink-50" placeholder="Krótko opisz, czego potrzebujesz..."></textarea>
                </div>
                <button type="submit" className="mt-6 w-full px-6 py-4 bg-accent-500 hover:bg-accent-600 text-ink-900 font-bold transition rounded-lg flex items-center justify-center gap-3">
                  Wyślij
                  <span className="font-mono">→</span>
                </button>
                <p className="font-mono text-[10px] text-ink-500 mt-3 leading-relaxed">
                  Twoje dane nie są przekazywane podmiotom trzecim. // GDPR_OK
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-ink-950 border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="aspect-[16/6] overflow-hidden rounded-2xl border border-ink-700">
            <iframe
              title="Mapa - Reg-Biur, ul. Stefczyka 67, Wejherowo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.22%2C54.59%2C18.27%2C54.61&layer=mapnik&marker=54.6011%2C18.2390"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.6)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-950 border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent-500 text-ink-900 flex items-center justify-center display font-bold text-xl rounded">R</div>
                <div className="display text-xl font-bold">Reg-Biur<span className="text-accent-500">.</span></div>
              </div>
              <p className="text-sm text-ink-300 mt-4 leading-relaxed max-w-md">
                Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz —
                księgowość, kadry, doradztwo podatkowe. Wejherowo, od 2018.
              </p>
              <div className="font-mono text-[10px] text-ink-500 mt-4">// REG-BIUR.COM.PL // 2018–2026</div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">USŁUGI</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-300">
                <li><a href="#uslugi" className="hover:text-accent-500 transition">Pełna księgowość</a></li>
                <li><a href="#uslugi" className="hover:text-accent-500 transition">KPiR / ryczałt</a></li>
                <li><a href="#uslugi" className="hover:text-accent-500 transition">Kadry i płace</a></li>
                <li><a href="#uslugi" className="hover:text-accent-500 transition">ZUS · JPK · VAT</a></li>
                <li><a href="#uslugi" className="hover:text-accent-500 transition">Doradztwo</a></li>
                <li><a href="#uslugi" className="hover:text-accent-500 transition">Rejestracja</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-500">KONTAKT</div>
              <ul className="mt-4 space-y-2 text-sm text-ink-300">
                <li>ul. Stefczyka 67</li>
                <li>84-200 Wejherowo</li>
                <li><a href="tel:+48508189717" className="hover:text-accent-500 transition">508 189 717</a></li>
                <li><a href="mailto:ubk@reg-biur.com.pl" className="hover:text-accent-500 transition">ubk@reg-biur.com.pl</a></li>
                <li>pn–pt 8:00–16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-ink-800 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-500">
            <div>© 2018–2026 Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz</div>
            <a href="#" className="hover:text-accent-500 transition">Polityka prywatności</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
