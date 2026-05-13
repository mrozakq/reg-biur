function Logo({ frame = '#15265E', bars = '#29A5DD', className = '' }: { frame?: string; bars?: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="42" height="42" rx="3" stroke={frame} strokeWidth="3.5" />
      <rect x="11" y="28" width="6" height="10" fill={bars} />
      <rect x="21" y="22" width="6" height="16" fill={bars} />
      <rect x="31" y="16" width="6" height="22" fill={bars} />
    </svg>
  )
}

const services = [
  {
    icon: '📒',
    title: 'Prowadzenie księgowości',
    desc: 'KPiR i ewidencja ryczałtowa dla jednoosobowych działalności i mniejszych firm. Codzienne księgowanie, ewidencje, rejestry VAT, kontrola dokumentów.',
    bullets: ['Książka przychodów i rozchodów (KPiR)', 'Ryczałt od przychodów ewidencjonowanych', 'Rejestry VAT i kontrola dokumentów'],
  },
  {
    icon: '👥',
    title: 'Kadry i płace',
    desc: 'Umowy o pracę, zlecenia, listy płac, ewidencja czasu pracy, świadectwa pracy, deklaracje ZUS pracowników — wszystko zgodnie z aktualnymi przepisami.',
    bullets: ['Umowy o pracę, zlecenia, o dzieło', 'Listy płac i ewidencja czasu pracy', 'ZUS pracowników i pracodawcy'],
  },
  {
    icon: '🧾',
    title: 'Rozliczenia podatkowe',
    desc: 'Rozliczenia podatkowe firm oraz osób indywidualnych. PIT, VAT, JPK_V7, deklaracje roczne, zaliczki w trakcie roku, e-deklaracje.',
    bullets: ['PIT roczny i zaliczki miesięczne', 'VAT, VAT-UE, JPK_V7', 'Rozliczenia indywidualne i rodzinne'],
  },
  {
    icon: '🌱',
    title: 'Rejestracja działalności',
    desc: 'Pomoc przy zakładaniu firmy — CEIDG, wybór formy opodatkowania, pierwsze deklaracje. Prowadzimy krok po kroku przez pierwsze miesiące.',
    bullets: ['Rejestracja w CEIDG', 'Wybór formy opodatkowania', 'Ulga ZUS na start, pierwsze faktury'],
  },
]

const reasons = [
  { icon: '🤝', t: 'Bezpośredni kontakt', d: 'Rozmawiasz z osobą prowadzącą Twoje sprawy — nigdy z infolinią ani sekretariatem.' },
  { icon: '⏰', t: 'Terminowo i pewnie', d: 'Każda deklaracja w terminie. Posiadamy ubezpieczenie OC z tytułu prowadzenia ksiąg.' },
  { icon: '🏡', t: 'Lokalnie, w Wejherowie', d: 'Małe biuro, w którym można przyjść osobiście — porozmawiać, podpisać dokumenty, dopytać.' },
  { icon: '📚', t: '8 lat doświadczenia', d: 'Od 2018 prowadzimy księgi firm z Wejherowa i okolic. Stale śledzimy zmiany w przepisach.' },
  { icon: '🌍', t: 'Cudzoziemcy w firmie', d: 'Specjalizujemy się w obsłudze pracowników z zagranicy — formalności, ZUS, podatki, dokumenty.' },
  { icon: '💻', t: 'Nowoczesne narzędzia', d: 'E-faktury KSeF, JPK_V7, bezpieczna wymiana dokumentów online — bez nadmiaru papieru.' },
]

const audiences = [
  { label: 'Dla freelancera', title: 'Jednoosobowa działalność', desc: 'Prowadzimy ryczałt, KPiR, rozliczenia skalą lub liniowym. Pomagamy wybrać najkorzystniejszą formę dla Twojej branży.' },
  { label: 'Dla startującego', title: 'Pierwsza działalność', desc: 'Pomożemy zarejestrować firmę, wybrać formę opodatkowania, skorzystać z ulgi ZUS na start. Prowadzimy za rękę przez pierwsze miesiące.' },
  { label: 'Dla zatrudniających', title: 'Firmy z pracownikami zza granicy', desc: 'Specjalizujemy się w zatrudnianiu cudzoziemców — formalności, oświadczenia, zezwolenia, ZUS i podatki pracowników.' },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-ink-900 paper">
      {/* Top bar */}
      <div className="hidden md:block bg-navy-900 text-navy-100 text-[12px]">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>📍 ul. Stefczyka 67, Wejherowo</span>
            <span>🕒 pn–pt 8:00–16:00</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+48508189717" className="hover:text-cyan-400 transition">tel. 508 189 717</a>
            <a href="mailto:ubk@reg-biur.com.pl" className="hover:text-cyan-400 transition">ubk@reg-biur.com.pl</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-navy-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Logo className="w-12 h-12" frame="#15265E" bars="#29A5DD" />
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-ink-500 font-semibold">Usługi Biurowo-Księgowe</div>
              <div className="serif text-2xl leading-none text-navy-900 font-semibold mt-0.5">REG-BIUR</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#o-nas" className="text-ink-700 hover:text-cyan-600 transition">O nas</a>
            <a href="#uslugi" className="text-ink-700 hover:text-cyan-600 transition">Usługi</a>
            <a href="#dla-kogo" className="text-ink-700 hover:text-cyan-600 transition">Dla kogo</a>
            <a href="#dlaczego" className="text-ink-700 hover:text-cyan-600 transition">Dlaczego my</a>
            <a href="#kontakt" className="text-ink-700 hover:text-cyan-600 transition">Kontakt</a>
          </nav>
          <a href="tel:+48508189717" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium transition rounded-full">
            508 189 717
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-100/60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-navy-100/60 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full">
                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                <span className="text-xs text-navy-800 font-medium">Biuro rachunkowe w Wejherowie</span>
              </div>
              <h1 className="serif text-5xl sm:text-6xl lg:text-7xl text-navy-900 mt-6 leading-[1.02] font-semibold">
                Księgowość<br />
                <span className="text-cyan-500 italic">prowadzona z troską</span>.
              </h1>
              <p className="text-ink-700 text-lg mt-7 leading-relaxed max-w-xl">
                Lokalne biuro rachunkowe w Wejherowie. Od 2018 prowadzimy KPiR,
                ryczałt, kadry i rozliczenia podatkowe dla jednoosobowych
                działalności i firm rodzinnych — z indywidualną uwagą dla każdego klienta.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="tel:+48508189717" className="inline-flex items-center gap-3 px-7 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition rounded-full shadow-lg shadow-cyan-500/25">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Zadzwoń: 508 189 717
                </a>
                <a href="#kontakt" className="inline-flex items-center gap-2 px-7 py-4 bg-white border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-medium transition rounded-full">
                  Napisz do nas
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="serif text-4xl text-cyan-500 font-semibold">8</div>
                  <div className="text-xs text-ink-700 mt-1 max-w-[8rem]">lat prowadzenia ksiąg</div>
                </div>
                <div className="w-px h-14 bg-navy-200" />
                <div>
                  <div className="serif text-4xl text-navy-800 font-semibold">5</div>
                  <div className="text-xs text-ink-700 mt-1 max-w-[8rem]">obszarów usług</div>
                </div>
                <div className="w-px h-14 bg-navy-200" />
                <div>
                  <div className="serif text-4xl text-navy-900 font-semibold">100%</div>
                  <div className="text-xs text-ink-700 mt-1 max-w-[8rem]">terminowości deklaracji</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-200 to-navy-100 rounded-3xl rotate-2" />
                <div className="relative bg-white border border-navy-100 rounded-2xl p-7 shadow-xl">
                  <div className="flex items-center gap-3 pb-5 border-b border-navy-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center serif text-xl text-white font-semibold">R</div>
                    <div>
                      <div className="serif text-lg text-navy-900 font-semibold">Regina Kierznikiewicz</div>
                      <div className="text-xs text-ink-700">właścicielka · księgowa</div>
                    </div>
                  </div>
                  <blockquote className="serif text-xl text-navy-900 italic mt-5 leading-relaxed">
                    „Każdy klient ma u nas <span className="text-cyan-500 not-italic font-medium">imię i nazwisko</span> — nie numer sprawy. Prowadzę firmę tak, jak chciałabym, żeby ktoś prowadził moją."
                  </blockquote>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-cyan-50 rounded-xl p-4">
                      <div className="text-[10px] uppercase tracking-widest text-ink-500">od</div>
                      <div className="serif text-2xl text-cyan-600 font-semibold mt-1">2018</div>
                    </div>
                    <div className="bg-navy-50 rounded-xl p-4">
                      <div className="text-[10px] uppercase tracking-widest text-ink-500">miejsce</div>
                      <div className="serif text-2xl text-navy-800 font-semibold mt-1">Wejherowo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O nas */}
      <section id="o-nas" className="border-t border-navy-100 bg-navy-50">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">O biurze</div>
              <h2 className="serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05] font-semibold">
                Małe biuro,<br />
                <span className="italic text-cyan-500">duża uwaga</span> dla<br />
                każdego klienta.
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-white border border-navy-100 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-navy-800 text-white flex items-center justify-center text-xl">🏢</div>
                <div className="text-sm text-ink-700">Lokalna firma — Wejherowo i Trójmiasto</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-5 text-ink-700 leading-relaxed text-lg">
                <p>
                  Usługi Biurowo-Księgowe <strong className="text-navy-900">Reg-Biur</strong> prowadzi
                  <strong className="text-navy-900"> Regina Kierznikiewicz</strong> — od stycznia 2018 roku.
                  Specjalizujemy się w KPiR, ryczałcie, kadrach i rozliczeniach podatkowych dla
                  jednoosobowych działalności i firm rodzinnych z Wejherowa i okolic.
                </p>
                <p>
                  Pracujemy <strong className="text-navy-900">indywidualnie</strong>. Każdy klient ma bezpośredni
                  kontakt z osobą prowadzącą jego sprawy. Bez ogólnej infolinii. Bez przekierowań.
                  Pytania trafiają od razu do tego, kto zna Twoją firmę i Twoją branżę.
                </p>
                <p>
                  Specjalizujemy się również w <strong className="text-navy-900">obsłudze firm zatrudniających cudzoziemców</strong> —
                  oświadczenia, zezwolenia, rozliczenia ZUS i podatków pracowników z zagranicy.
                  Posiadamy ubezpieczenie OC z tytułu prowadzenia ksiąg i regularnie szkolimy się z każdej zmiany przepisów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="uslugi" className="border-t border-navy-100">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Usługi</div>
            <h2 className="serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05] font-semibold">
              Co znajdzie się w naszej<br />
              <span className="italic text-cyan-500">ofercie</span>.
            </h2>
            <p className="text-ink-700 mt-6 leading-relaxed">
              Każda usługa jest świadczona indywidualnie — zakres ustalamy
              po krótkiej rozmowie i dopasowujemy do specyfiki Twojej działalności.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div key={s.title} className={`group relative rounded-3xl p-8 transition-all hover:-translate-y-1 ${
                i % 2 === 0 ? 'bg-cyan-50 border border-cyan-200' : 'bg-navy-50 border border-navy-100'
              }`}>
                <div className="w-14 h-14 rounded-2xl bg-white border border-navy-100 flex items-center justify-center text-3xl">
                  {s.icon}
                </div>
                <h3 className="serif text-2xl lg:text-3xl text-navy-900 mt-5 font-semibold">{s.title}</h3>
                <p className="text-ink-700 mt-3 leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#29A5DD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured service: Zatrudnienie cudzoziemców */}
          <div className="mt-6 relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white rounded-3xl p-8 lg:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2 flex md:justify-center">
                <div className="w-20 h-20 rounded-3xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-5xl">
                  🌍
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">Nasza specjalność</div>
                <h3 className="serif text-3xl lg:text-4xl mt-2 font-semibold leading-tight">
                  Zatrudnienie <span className="text-cyan-400 italic">cudzoziemców</span>.
                </h3>
                <p className="text-navy-100 mt-4 leading-relaxed">
                  Kompleksowa obsługa firm zatrudniających pracowników z zagranicy —
                  oświadczenia o powierzeniu pracy, zezwolenia, rozliczenia ZUS i podatków,
                  formalności pobytowe. Prowadzimy całość od strony księgowo-kadrowej.
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <a href="tel:+48508189717" className="inline-flex items-center gap-3 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition rounded-full whitespace-nowrap">
                  Zapytaj o szczegóły →
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 relative bg-white border-2 border-navy-100 rounded-3xl p-10 overflow-hidden">
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Indywidualna wycena</div>
                <div className="serif text-3xl mt-2 max-w-xl font-semibold leading-tight text-navy-900">
                  Każda firma jest inna — koszt prowadzenia ustalamy po krótkiej rozmowie.
                </div>
              </div>
              <a href="tel:+48508189717" className="shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-navy-900 hover:bg-navy-800 text-white font-medium transition rounded-full">
                Zadzwoń po wycenę →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="border-t border-navy-100 bg-navy-50">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Dla kogo</div>
            <h2 className="serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05] font-semibold">
              Z kim najlepiej <span className="italic text-cyan-500">współpracujemy</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div key={a.label} className={`relative bg-white rounded-3xl p-8 border ${
                i === 0 ? 'border-cyan-200' : i === 1 ? 'border-navy-100' : 'border-navy-200'
              }`}>
                <div className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold ${
                  i === 0 ? 'bg-cyan-500 text-white' : i === 1 ? 'bg-navy-700 text-white' : 'bg-navy-900 text-white'
                }`}>
                  {a.label}
                </div>
                <h3 className="serif text-2xl text-navy-900 mt-5 font-semibold">{a.title}</h3>
                <p className="text-ink-700 mt-3 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section id="dlaczego" className="border-t border-navy-100">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Dlaczego my</div>
              <h2 className="serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05] font-semibold">
                Sześć powodów,<br />
                <span className="italic text-cyan-500">dla których</span><br />
                warto.
              </h2>
              <p className="text-ink-700 mt-8 leading-relaxed">
                Każdy z tych punktów to konsekwentna praktyka biura, a nie marketingowa deklaracja.
                Jeśli któryś z nich brzmi dla Państwa istotnie — porozmawiajmy.
              </p>
              <a href="#kontakt" className="inline-flex items-center gap-2 mt-6 font-medium text-cyan-600 hover:text-cyan-700 transition">
                Przejdź do kontaktu →
              </a>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((r) => (
                  <div key={r.t} className="bg-white border border-navy-100 rounded-2xl p-6 hover:shadow-md hover:border-cyan-200 transition">
                    <div className="text-3xl">{r.icon}</div>
                    <div className="serif text-xl text-navy-900 mt-3 font-semibold">{r.t}</div>
                    <p className="text-ink-700 mt-2 text-sm leading-relaxed">{r.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-navy-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-navy-100/60 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Kontakt</div>
            <h2 className="serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05] font-semibold">
              Porozmawiajmy o <span className="italic text-cyan-500">Państwa firmie</span>.
            </h2>
            <p className="text-ink-700 mt-6 leading-relaxed">
              Najprościej zadzwonić — odbieramy w godzinach pracy biura. Można też napisać
              mailem lub przyjść osobiście na Stefczyka 67.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="space-y-4">
                <a href="tel:+48508189717" className="flex items-center gap-4 p-5 bg-white border border-navy-100 hover:border-cyan-500 rounded-2xl transition group">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">Telefon</div>
                    <div className="serif text-2xl text-navy-900 mt-1 font-semibold group-hover:text-cyan-500 transition">508 189 717</div>
                  </div>
                </a>
                <a href="mailto:ubk@reg-biur.com.pl" className="flex items-center gap-4 p-5 bg-white border border-navy-100 hover:border-navy-800 rounded-2xl transition group">
                  <div className="w-14 h-14 rounded-2xl bg-navy-800 text-white flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">E-mail</div>
                    <div className="serif text-xl text-navy-900 mt-1 font-semibold group-hover:text-navy-700 transition">ubk@reg-biur.com.pl</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-white border border-navy-100 rounded-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">Adres</div>
                    <div className="serif text-lg text-navy-900 mt-1 font-semibold">ul. Stefczyka 67<br/>84-200 Wejherowo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white border border-navy-100 rounded-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">Godziny otwarcia</div>
                    <div className="serif text-lg text-navy-900 mt-1 font-semibold">pn–pt: 8:00–16:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form action="mailto:ubk@reg-biur.com.pl" method="post" encType="text/plain" className="bg-white border border-navy-100 rounded-3xl p-8 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Formularz kontaktowy</div>
                <h3 className="serif text-3xl text-navy-900 mt-2 font-semibold">Napisz do nas</h3>
                <p className="text-sm text-ink-700 mt-2">Odpowiadamy najczęściej tego samego dnia roboczego.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">Imię i nazwisko</label>
                    <input name="imie" required className="w-full px-4 py-3 bg-navy-50 border border-navy-100 focus:border-cyan-500 rounded-xl outline-none transition" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">Telefon</label>
                    <input name="telefon" type="tel" className="w-full px-4 py-3 bg-navy-50 border border-navy-100 focus:border-cyan-500 rounded-xl outline-none transition" placeholder="500 000 000" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">E-mail</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 bg-navy-50 border border-navy-100 focus:border-cyan-500 rounded-xl outline-none transition" placeholder="jan@firma.pl" />
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">Forma prowadzenia</label>
                  <select name="forma" className="w-full px-4 py-3 bg-navy-50 border border-navy-100 focus:border-cyan-500 rounded-xl outline-none transition">
                    <option>JDG — ryczałt</option>
                    <option>JDG — KPiR</option>
                    <option>JDG — skala / liniowy</option>
                    <option>Zatrudniam cudzoziemców</option>
                    <option>Dopiero zakładam</option>
                    <option>Inna / nie wiem</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-widest text-ink-500 font-semibold mb-2">Wiadomość</label>
                  <textarea name="wiadomosc" rows={4} className="w-full px-4 py-3 bg-navy-50 border border-navy-100 focus:border-cyan-500 rounded-xl outline-none transition" placeholder="Krótko opisz, czego potrzebujesz — księgowość, kadry, rozliczenia, zatrudnianie cudzoziemców..."></textarea>
                </div>
                <button type="submit" className="mt-6 w-full px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition rounded-full flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25">
                  Wyślij wiadomość →
                </button>
                <p className="text-xs text-ink-500 mt-3 leading-relaxed">
                  Wysyłając formularz wyrażasz zgodę na kontakt zwrotny. Twoje dane nie są przekazywane podmiotom trzecim.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-navy-50 border-t border-navy-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="aspect-[16/6] overflow-hidden rounded-3xl border border-navy-100">
            <iframe
              title="Mapa - Reg-Biur, ul. Stefczyka 67, Wejherowo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.22%2C54.59%2C18.27%2C54.61&layer=mapnik&marker=54.6011%2C18.2390"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-navy-100">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <Logo className="w-12 h-12" frame="#FFFFFF" bars="#29A5DD" />
                <div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-navy-200 font-semibold">Usługi Biurowo-Księgowe</div>
                  <div className="serif text-xl text-white font-semibold leading-none mt-0.5">REG-BIUR</div>
                </div>
              </div>
              <p className="text-sm text-navy-100 mt-5 leading-relaxed">
                Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz —
                KPiR, ryczałt, kadry, rozliczenia podatkowe, zatrudnienie cudzoziemców.
                Wejherowo, od 2018.
              </p>
              <div className="mt-5 space-y-1 text-xs text-navy-200 font-mono">
                <div>NIP: 588-11-45-668</div>
                <div>REGON: 192604826</div>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">Usługi</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#uslugi" className="hover:text-cyan-400 transition">Prowadzenie księgowości (KPiR, ryczałt)</a></li>
                <li><a href="#uslugi" className="hover:text-cyan-400 transition">Kadry i płace</a></li>
                <li><a href="#uslugi" className="hover:text-cyan-400 transition">Rozliczenia podatkowe firm i indywidualne</a></li>
                <li><a href="#uslugi" className="hover:text-cyan-400 transition">Rejestracja działalności</a></li>
                <li><a href="#uslugi" className="hover:text-cyan-400 transition font-semibold">Zatrudnienie cudzoziemców</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">Kontakt</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>ul. Stefczyka 67, 84-200 Wejherowo</li>
                <li><a href="tel:+48508189717" className="hover:text-cyan-400 transition">tel. 508 189 717</a></li>
                <li><a href="mailto:ubk@reg-biur.com.pl" className="hover:text-cyan-400 transition">ubk@reg-biur.com.pl</a></li>
                <li>pn–pt 8:00–16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-800 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-navy-200">
            <div>© 2018–2026 Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition">Polityka prywatności</a>
              <span>reg-biur.com.pl</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
