const services = [
  { icon: '📒', title: 'Pełna księgowość', desc: 'Prowadzimy księgi handlowe dla spółek z o.o. i większych firm. Bilans, rachunek zysków i strat, sprawozdania finansowe i wszystkie deklaracje na czas.' },
  { icon: '📔', title: 'KPiR i ryczałt', desc: 'Książka przychodów i rozchodów oraz ewidencja ryczałtowa dla jednoosobowych działalności i mniejszych firm — bez zbędnych formalności.' },
  { icon: '👥', title: 'Kadry i płace', desc: 'Umowy o pracę, zlecenia, listy płac, ewidencja czasu pracy, świadectwa pracy, ZUS pracowników — wszystko prowadzone z troską o pracowników.' },
  { icon: '📊', title: 'ZUS, JPK, VAT', desc: 'Deklaracje VAT i VAT-UE, JPK_V7, rozliczenia ZUS, e-deklaracje. Pilnujemy terminów za Ciebie.' },
  { icon: '💡', title: 'Doradztwo podatkowe', desc: 'Pomagamy wybrać najlepszą formę opodatkowania, konsultujemy istotne decyzje biznesowe, sygnalizujemy zmiany w przepisach.' },
  { icon: '🌱', title: 'Rejestracja działalności', desc: 'Zakładamy firmę z Tobą — od CEIDG czy KRS, przez wybór formy prawnej, po pierwsze faktury i deklaracje. Prowadzimy krok po kroku.' },
]

const reasons = [
  { icon: '🤝', t: 'Bezpośredni kontakt', d: 'Rozmawiasz z osobą prowadzącą Twoje sprawy — nigdy z infolinią ani sekretariatem.' },
  { icon: '⏰', t: 'Terminowo i pewnie', d: 'Każda deklaracja w terminie. Posiadamy ubezpieczenie OC z tytułu prowadzenia ksiąg.' },
  { icon: '🏡', t: 'Lokalnie, w Wejherowie', d: 'Małe biuro, w którym można przyjść osobiście — porozmawiać, podpisać dokumenty, dopytać.' },
  { icon: '📚', t: '8 lat doświadczenia', d: 'Od 2018 prowadzimy księgi firm z Wejherowa i okolic. Stale śledzimy zmiany w przepisach.' },
  { icon: '🌿', t: 'Wsparcie od początku', d: 'Pomagamy zarówno startującym przedsiębiorcom, jak i firmom z wieloletnim stażem.' },
  { icon: '💻', t: 'Nowoczesne narzędzia', d: 'E-faktury KSeF, JPK_V7, bezpieczna wymiana dokumentów online — bez nadmiaru papieru.' },
]

const audiences = [
  { label: 'Dla freelancera', title: 'Jednoosobowa działalność', desc: 'Prowadzimy ryczałt, KPiR, rozliczenia skalą lub liniowym. Pomagamy wybrać najkorzystniejszą formę dla Twojej branży.' },
  { label: 'Dla małej firmy', title: 'Spółki z o.o. i s.c.', desc: 'Pełna księgowość, sprawozdania finansowe, kadry pracownicze, deklaracje CIT i VAT — bierzemy na siebie całą papierologię.' },
  { label: 'Dla startującego', title: 'Pierwsza działalność', desc: 'Pomagamy zarejestrować firmę, wybrać formę prawną, skorzystać z ulgi ZUS na start. Prowadzimy za rękę przez pierwsze miesiące.' },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-clay-50 text-bark-900 paper">
      {/* Top bar */}
      <div className="hidden md:block bg-bark-900 text-clay-100 text-[12px]">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>📍 ul. Stefczyka 67, Wejherowo</span>
            <span>🕒 pn–pt 8:00–16:00</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+48508189717" className="hover:text-clay-300 transition">tel. 508 189 717</a>
            <a href="mailto:ubk@reg-biur.com.pl" className="hover:text-clay-300 transition">ubk@reg-biur.com.pl</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-clay-50/95 backdrop-blur border-b border-clay-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-clay-500 text-clay-50 rounded-full flex items-center justify-center serif text-xl font-semibold">R</div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-olive-500 rounded-full border-2 border-clay-50" />
            </div>
            <div>
              <div className="serif text-xl leading-tight text-bark-900 font-semibold">Reg-Biur</div>
              <div className="text-[11px] text-bark-500">biuro rachunkowe · od 2018</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#o-nas" className="text-bark-700 hover:text-clay-500 transition">O nas</a>
            <a href="#uslugi" className="text-bark-700 hover:text-clay-500 transition">Usługi</a>
            <a href="#dla-kogo" className="text-bark-700 hover:text-clay-500 transition">Dla kogo</a>
            <a href="#dlaczego" className="text-bark-700 hover:text-clay-500 transition">Dlaczego my</a>
            <a href="#kontakt" className="text-bark-700 hover:text-clay-500 transition">Kontakt</a>
          </nav>
          <a href="tel:+48508189717" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-olive-500 hover:bg-olive-600 text-clay-50 text-sm font-medium transition rounded-full">
            508 189 717
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-clay-200/50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-olive-400/15 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-clay-100 border border-clay-200 rounded-full">
                <span className="w-2 h-2 bg-olive-500 rounded-full" />
                <span className="text-xs text-bark-700 font-medium">Biuro rachunkowe w Wejherowie</span>
              </div>
              <h1 className="serif text-5xl sm:text-6xl lg:text-7xl text-bark-900 mt-6 leading-[1.02] font-semibold">
                Księgowość<br />
                <span className="text-clay-500 italic">prowadzona z troską</span>.
              </h1>
              <p className="text-bark-700 text-lg mt-7 leading-relaxed max-w-xl">
                Lokalne biuro rachunkowe w Wejherowie. Od 2018 prowadzimy księgi
                jednoosobowych działalności, małych spółek i firm rodzinnych —
                z indywidualną uwagą dla każdej z nich.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="tel:+48508189717" className="inline-flex items-center gap-3 px-7 py-4 bg-clay-500 hover:bg-clay-600 text-clay-50 font-medium transition rounded-full shadow-lg shadow-clay-500/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Zadzwoń: 508 189 717
                </a>
                <a href="#kontakt" className="inline-flex items-center gap-2 px-7 py-4 bg-clay-50 border-2 border-bark-900 text-bark-900 hover:bg-bark-900 hover:text-clay-50 font-medium transition rounded-full">
                  Napisz do nas
                </a>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="serif text-4xl text-clay-500 font-semibold">8</div>
                  <div className="text-xs text-bark-700 mt-1 max-w-[8rem]">lat prowadzenia ksiąg</div>
                </div>
                <div className="w-px h-14 bg-clay-300" />
                <div>
                  <div className="serif text-4xl text-olive-500 font-semibold">6</div>
                  <div className="text-xs text-bark-700 mt-1 max-w-[8rem]">obszarów usług</div>
                </div>
                <div className="w-px h-14 bg-clay-300" />
                <div>
                  <div className="serif text-4xl text-bark-900 font-semibold">100%</div>
                  <div className="text-xs text-bark-700 mt-1 max-w-[8rem]">terminowości deklaracji</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-clay-200 to-olive-400/30 rounded-3xl rotate-2" />
                <div className="relative bg-clay-50 border border-clay-200 rounded-2xl p-7 shadow-xl">
                  <div className="flex items-center gap-3 pb-5 border-b border-clay-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-clay-300 to-clay-500 flex items-center justify-center serif text-xl text-clay-50 font-semibold">R</div>
                    <div>
                      <div className="serif text-lg text-bark-900 font-semibold">Regina Kierznikiewicz</div>
                      <div className="text-xs text-bark-700">właścicielka · księgowa</div>
                    </div>
                  </div>
                  <blockquote className="serif text-xl text-bark-900 italic mt-5 leading-relaxed">
                    „Każdy klient ma u nas <span className="text-clay-500 not-italic font-medium">imię i nazwisko</span> — nie numer sprawy. Prowadzę firmę tak, jak chciałabym, żeby ktoś prowadził moją."
                  </blockquote>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="bg-clay-100 rounded-xl p-4">
                      <div className="text-[10px] uppercase tracking-widest text-bark-500">od</div>
                      <div className="serif text-2xl text-clay-500 font-semibold mt-1">2018</div>
                    </div>
                    <div className="bg-clay-100 rounded-xl p-4">
                      <div className="text-[10px] uppercase tracking-widest text-bark-500">miejsce</div>
                      <div className="serif text-2xl text-olive-500 font-semibold mt-1">Wejherowo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O nas */}
      <section id="o-nas" className="border-t border-clay-200 bg-clay-100">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">O biurze</div>
              <h2 className="serif text-4xl lg:text-5xl text-bark-900 mt-4 leading-[1.05] font-semibold">
                Małe biuro,<br />
                <span className="italic text-clay-500">duża uwaga</span> dla<br />
                każdego klienta.
              </h2>
              <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-clay-50 border border-clay-200 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-olive-500 text-clay-50 flex items-center justify-center text-xl">🌿</div>
                <div className="text-sm text-bark-700">Lokalna firma — Wejherowo i Trójmiasto</div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-5 text-bark-700 leading-relaxed text-lg">
                <p>
                  Usługi Biurowo-Księgowe <strong className="text-bark-900">Reg-Biur</strong> prowadzi
                  <strong className="text-bark-900"> Regina Kierznikiewicz</strong> — od stycznia 2018 roku.
                  Specjalizujemy się w księgowości, kadrach i doradztwie podatkowym dla
                  jednoosobowych działalności oraz małych i średnich firm z Wejherowa i okolic.
                </p>
                <p>
                  Pracujemy <strong className="text-bark-900">indywidualnie</strong>. Każdy klient ma bezpośredni
                  kontakt z osobą prowadzącą jego sprawy. Bez ogólnej infolinii. Bez przekierowań.
                  Pytania trafiają od razu do tego, kto zna Twoją firmę i Twoją branżę.
                </p>
                <p>
                  Stawiamy na <strong className="text-bark-900">terminowość i bezpieczeństwo</strong> —
                  posiadamy ubezpieczenie OC z tytułu prowadzenia ksiąg, regularnie szkolimy się
                  z każdej zmiany przepisów i korzystamy z aktualnych narzędzi (JPK_V7, e-faktury KSeF, e-deklaracje).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="uslugi" className="border-t border-clay-200">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Usługi</div>
            <h2 className="serif text-4xl lg:text-5xl text-bark-900 mt-4 leading-[1.05] font-semibold">
              Sześć obszarów, w których<br />
              <span className="italic text-clay-500">prowadzimy Twoją firmę</span>.
            </h2>
            <p className="text-bark-700 mt-6 leading-relaxed">
              Każda usługa jest świadczona indywidualnie — zakres ustalamy
              po krótkiej rozmowie i dopasowujemy do specyfiki Twojej działalności.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={s.title} className={`group relative rounded-3xl p-7 transition-all hover:-translate-y-1 ${
                i % 3 === 0 ? 'bg-clay-100 border border-clay-200' :
                i % 3 === 1 ? 'bg-olive-500/8 border border-olive-400/30' :
                'bg-clay-50 border border-clay-200'
              }`}>
                <div className="w-14 h-14 rounded-2xl bg-clay-50 border border-clay-200 flex items-center justify-center text-3xl">
                  {s.icon}
                </div>
                <h3 className="serif text-2xl text-bark-900 mt-5 font-semibold">{s.title}</h3>
                <p className="text-bark-700 mt-3 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 relative bg-bark-900 text-clay-50 rounded-3xl p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-clay-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-clay-300 font-semibold">Indywidualna wycena</div>
                <div className="serif text-3xl mt-2 max-w-xl font-semibold leading-tight">
                  Każda firma jest inna — koszt prowadzenia ustalamy po krótkiej rozmowie.
                </div>
              </div>
              <a href="tel:+48508189717" className="shrink-0 inline-flex items-center gap-3 px-7 py-4 bg-clay-500 hover:bg-clay-600 text-clay-50 font-medium transition rounded-full">
                Zadzwoń po wycenę →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="border-t border-clay-200 bg-clay-100">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Dla kogo</div>
            <h2 className="serif text-4xl lg:text-5xl text-bark-900 mt-4 leading-[1.05] font-semibold">
              Z kim najlepiej <span className="italic text-clay-500">współpracujemy</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div key={a.label} className={`relative bg-clay-50 rounded-3xl p-8 border ${
                i === 0 ? 'border-clay-200' : i === 1 ? 'border-olive-400/30' : 'border-bark-700/20'
              }`}>
                <div className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-semibold ${
                  i === 0 ? 'bg-clay-500 text-clay-50' : i === 1 ? 'bg-olive-500 text-clay-50' : 'bg-bark-900 text-clay-50'
                }`}>
                  {a.label}
                </div>
                <h3 className="serif text-2xl text-bark-900 mt-5 font-semibold">{a.title}</h3>
                <p className="text-bark-700 mt-3 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section id="dlaczego" className="border-t border-clay-200">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Dlaczego my</div>
              <h2 className="serif text-4xl lg:text-5xl text-bark-900 mt-4 leading-[1.05] font-semibold">
                Sześć powodów,<br />
                <span className="italic text-clay-500">dla których</span><br />
                warto.
              </h2>
              <p className="text-bark-700 mt-8 leading-relaxed">
                Każdy z tych punktów to konsekwentna praktyka biura, a nie marketingowa deklaracja.
                Jeśli któryś z nich brzmi dla Państwa istotnie — porozmawiajmy.
              </p>
              <a href="#kontakt" className="inline-flex items-center gap-2 mt-6 font-medium text-clay-500 hover:text-clay-700 transition">
                Przejdź do kontaktu →
              </a>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((r) => (
                  <div key={r.t} className="bg-clay-50 border border-clay-200 rounded-2xl p-6 hover:shadow-md hover:border-clay-300 transition">
                    <div className="text-3xl">{r.icon}</div>
                    <div className="serif text-xl text-bark-900 mt-3 font-semibold">{r.t}</div>
                    <p className="text-bark-700 mt-2 text-sm leading-relaxed">{r.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-clay-200 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-clay-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-olive-400/20 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Kontakt</div>
            <h2 className="serif text-4xl lg:text-5xl text-bark-900 mt-4 leading-[1.05] font-semibold">
              Porozmawiajmy o <span className="italic text-clay-500">Państwa firmie</span>.
            </h2>
            <p className="text-bark-700 mt-6 leading-relaxed">
              Najprościej zadzwonić — odbieramy w godzinach pracy biura. Można też napisać
              mailem lub przyjść osobiście na Stefczyka 67.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="space-y-4">
                <a href="tel:+48508189717" className="flex items-center gap-4 p-5 bg-clay-50 border border-clay-200 hover:border-clay-500 rounded-2xl transition group">
                  <div className="w-14 h-14 rounded-2xl bg-clay-500 text-clay-50 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-bark-500">Telefon</div>
                    <div className="serif text-2xl text-bark-900 mt-1 font-semibold group-hover:text-clay-500 transition">508 189 717</div>
                  </div>
                </a>
                <a href="mailto:ubk@reg-biur.com.pl" className="flex items-center gap-4 p-5 bg-clay-50 border border-clay-200 hover:border-olive-500 rounded-2xl transition group">
                  <div className="w-14 h-14 rounded-2xl bg-olive-500 text-clay-50 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-bark-500">E-mail</div>
                    <div className="serif text-xl text-bark-900 mt-1 font-semibold group-hover:text-olive-500 transition">ubk@reg-biur.com.pl</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-clay-50 border border-clay-200 rounded-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-bark-900 text-clay-50 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-bark-500">Adres</div>
                    <div className="serif text-lg text-bark-900 mt-1 font-semibold">ul. Stefczyka 67<br/>84-200 Wejherowo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-clay-50 border border-clay-200 rounded-2xl">
                  <div className="w-14 h-14 rounded-2xl bg-bark-500 text-clay-50 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-bark-500">Godziny otwarcia</div>
                    <div className="serif text-lg text-bark-900 mt-1 font-semibold">pn–pt: 8:00–16:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form action="mailto:ubk@reg-biur.com.pl" method="post" encType="text/plain" className="bg-clay-50 border border-clay-200 rounded-3xl p-8 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Formularz kontaktowy</div>
                <h3 className="serif text-3xl text-bark-900 mt-2 font-semibold">Napisz do nas</h3>
                <p className="text-sm text-bark-700 mt-2">Odpowiadamy najczęściej tego samego dnia roboczego.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-bark-500 font-semibold mb-2">Imię i nazwisko</label>
                    <input name="imie" required className="w-full px-4 py-3 bg-white border border-clay-200 focus:border-clay-500 rounded-xl outline-none transition" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-bark-500 font-semibold mb-2">Telefon</label>
                    <input name="telefon" type="tel" className="w-full px-4 py-3 bg-white border border-clay-200 focus:border-clay-500 rounded-xl outline-none transition" placeholder="500 000 000" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-widest text-bark-500 font-semibold mb-2">E-mail</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 bg-white border border-clay-200 focus:border-clay-500 rounded-xl outline-none transition" placeholder="jan@firma.pl" />
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-widest text-bark-500 font-semibold mb-2">Forma prowadzenia</label>
                  <select name="forma" className="w-full px-4 py-3 bg-white border border-clay-200 focus:border-clay-500 rounded-xl outline-none transition">
                    <option>JDG — ryczałt</option>
                    <option>JDG — KPiR</option>
                    <option>Spółka z o.o.</option>
                    <option>Spółka cywilna</option>
                    <option>Dopiero zakładam</option>
                    <option>Inna / nie wiem</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-xs uppercase tracking-widest text-bark-500 font-semibold mb-2">Wiadomość</label>
                  <textarea name="wiadomosc" rows={4} className="w-full px-4 py-3 bg-white border border-clay-200 focus:border-clay-500 rounded-xl outline-none transition" placeholder="Krótko opisz, czego potrzebujesz — księgowość, kadry, doradztwo, rejestracja firmy..."></textarea>
                </div>
                <button type="submit" className="mt-6 w-full px-6 py-4 bg-clay-500 hover:bg-clay-600 text-clay-50 font-medium transition rounded-full flex items-center justify-center gap-3 shadow-lg shadow-clay-500/20">
                  Wyślij wiadomość →
                </button>
                <p className="text-xs text-bark-500 mt-3 leading-relaxed">
                  Wysyłając formularz wyrażasz zgodę na kontakt zwrotny. Twoje dane nie są przekazywane podmiotom trzecim.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-clay-100 border-t border-clay-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="aspect-[16/6] overflow-hidden rounded-3xl border border-clay-200">
            <iframe
              title="Mapa - Reg-Biur, ul. Stefczyka 67, Wejherowo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.22%2C54.59%2C18.27%2C54.61&layer=mapnik&marker=54.6011%2C18.2390"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(0.2) saturate(1.1)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bark-900 text-clay-200">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-clay-500 text-clay-50 rounded-full flex items-center justify-center serif text-xl font-semibold">R</div>
                <div>
                  <div className="serif text-xl text-clay-50 font-semibold">Reg-Biur</div>
                  <div className="text-[11px] text-clay-300">biuro rachunkowe · Wejherowo</div>
                </div>
              </div>
              <p className="text-sm text-clay-200 mt-5 leading-relaxed">
                Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz —
                księgowość, kadry, doradztwo podatkowe. Wejherowo, od 2018.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Usługi</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#uslugi" className="hover:text-clay-300 transition">Pełna księgowość</a></li>
                <li><a href="#uslugi" className="hover:text-clay-300 transition">KPiR / ryczałt</a></li>
                <li><a href="#uslugi" className="hover:text-clay-300 transition">Kadry i płace</a></li>
                <li><a href="#uslugi" className="hover:text-clay-300 transition">ZUS, JPK, VAT</a></li>
                <li><a href="#uslugi" className="hover:text-clay-300 transition">Doradztwo podatkowe</a></li>
                <li><a href="#uslugi" className="hover:text-clay-300 transition">Rejestracja działalności</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-clay-500 font-semibold">Kontakt</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>ul. Stefczyka 67, 84-200 Wejherowo</li>
                <li><a href="tel:+48508189717" className="hover:text-clay-300 transition">tel. 508 189 717</a></li>
                <li><a href="mailto:ubk@reg-biur.com.pl" className="hover:text-clay-300 transition">ubk@reg-biur.com.pl</a></li>
                <li>pn–pt 8:00–16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bark-700 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-clay-300">
            <div>© 2018–2026 Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-clay-50 transition">Polityka prywatności</a>
              <span>reg-biur.com.pl</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
