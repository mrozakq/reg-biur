const services = [
  {
    title: 'Pełna księgowość',
    desc: 'Prowadzenie ksiąg handlowych dla spółek z o.o., s.c. i większych firm. Bilans, rachunek zysków i strat, sprawozdania finansowe.',
    no: '01',
  },
  {
    title: 'KPiR i ryczałt',
    desc: 'Książka przychodów i rozchodów oraz ewidencja ryczałtowa dla jednoosobowych działalności i mniejszych firm.',
    no: '02',
  },
  {
    title: 'Kadry i płace',
    desc: 'Umowy o pracę, zlecenia, listy płac, ewidencja czasu pracy, świadectwa pracy, ZUS pracowników.',
    no: '03',
  },
  {
    title: 'ZUS, JPK, VAT',
    desc: 'Deklaracje VAT i VAT-UE, JPK_V7, rozliczenia ZUS, e-deklaracje, przelewy podatkowe.',
    no: '04',
  },
  {
    title: 'Doradztwo podatkowe',
    desc: 'Wybór formy opodatkowania, optymalizacja podatkowa, konsultacje przed istotnymi decyzjami biznesowymi.',
    no: '05',
  },
  {
    title: 'Rejestracja działalności',
    desc: 'Pomoc przy zakładaniu działalności — CEIDG, KRS, wybór formy prawnej, pierwsze deklaracje.',
    no: '06',
  },
]

const reasons = [
  { title: '8 lat doświadczenia', desc: 'Pracujemy od 2018 roku — znamy specyfikę polskich przepisów i regularnie szkolimy się z każdej zmiany.' },
  { title: 'Indywidualne podejście', desc: 'Każdy klient ma bezpośredni kontakt z osobą prowadzącą jego sprawy. Bez przekierowań przez sekretariat.' },
  { title: 'Terminowość i odpowiedzialność', desc: 'Nigdy nie spóźniamy się z deklaracjami. Posiadamy ubezpieczenie OC z tytułu prowadzenia ksiąg.' },
  { title: 'Wsparcie od pierwszego dnia', desc: 'Prowadzimy Cię od rejestracji działalności, przez codzienne sprawy, po rozliczenia roczne.' },
  { title: 'Lokalnie, w Wejherowie', desc: 'Spotkanie osobiste, podpis dokumentów, krótka konsultacja — przyjdź na Stefczyka 67.' },
  { title: 'Nowoczesne narzędzia', desc: 'JPK_V7, e-faktury, e-deklaracje, bezpieczna wymiana dokumentów online.' },
]

const audiences = [
  {
    label: 'JDG',
    title: 'Jednoosobowa działalność',
    desc: 'Ryczałt, KPiR, skala podatkowa lub liniowy — pomożemy wybrać i poprowadzimy. Idealnie dla freelancerów, rzemieślników, usługodawców.',
  },
  {
    label: 'MŚP',
    title: 'Małe i średnie firmy',
    desc: 'Sp. z o.o., s.c., spółki cywilne. Pełna księgowość, kadry pracownicze, sprawozdania, deklaracje VAT i CIT.',
  },
  {
    label: 'Start',
    title: 'Startujący przedsiębiorcy',
    desc: 'Rejestracja działalności, wybór formy opodatkowania, pierwsze faktury, ZUS przez pierwsze 6 miesięcy — prowadzimy krok po kroku.',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-cream-50 text-navy-800">
      {/* Top bar */}
      <div className="hidden md:block bg-navy-900 text-cream-100 text-[12px]">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>ul. Stefczyka 67, Wejherowo</span>
            <span>pn–pt 8:00–16:00</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+48508189717" className="hover:text-gold-500 transition">tel. 508 189 717</a>
            <a href="mailto:ubk@reg-biur.com.pl" className="hover:text-gold-500 transition">ubk@reg-biur.com.pl</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-cream-50/95 backdrop-blur border-b border-cream-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-navy-800 text-cream-50 flex items-center justify-center font-serif text-2xl">R</div>
            <div>
              <div className="font-serif text-xl leading-tight text-navy-900">Reg-Biur</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-navy-500">biuro rachunkowe · od 2018</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#o-nas" className="text-navy-700 hover:text-gold-600 transition">O biurze</a>
            <a href="#uslugi" className="text-navy-700 hover:text-gold-600 transition">Usługi</a>
            <a href="#dla-kogo" className="text-navy-700 hover:text-gold-600 transition">Dla kogo</a>
            <a href="#dlaczego" className="text-navy-700 hover:text-gold-600 transition">Dlaczego my</a>
            <a href="#kontakt" className="text-navy-700 hover:text-gold-600 transition">Kontakt</a>
          </nav>
          <a href="tel:+48508189717" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-navy-800 hover:bg-navy-900 text-cream-50 text-sm font-medium transition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            508 189 717
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold-500/8 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-navy-800/8 blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-gold-600 font-semibold">
                <span className="w-8 h-px bg-gold-600" />
                Biuro Rachunkowe · Wejherowo
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-navy-900 mt-5 leading-[1.02] tracking-tight">
                Księgowość, której można <em className="italic text-gold-600">zaufać</em>.
              </h1>
              <p className="text-navy-700 text-lg mt-6 leading-relaxed max-w-xl">
                Usługi Biurowo-Księgowe Reg-Biur — pełna księgowość, kadry i płace, doradztwo podatkowe.
                Od 2018 roku prowadzimy sprawy jednoosobowych działalności i małych firm w Wejherowie i Trójmieście.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="tel:+48508189717" className="inline-flex items-center gap-3 px-6 py-3.5 bg-navy-800 hover:bg-navy-900 text-cream-50 font-medium transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Zadzwoń: 508 189 717
                </a>
                <a href="#kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-cream-50 font-medium transition">
                  Napisz do nas
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="font-serif text-3xl text-navy-900">8</div>
                  <div className="text-[11px] uppercase tracking-widest text-navy-500 mt-1">lat doświadczenia</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-navy-900">6</div>
                  <div className="text-[11px] uppercase tracking-widest text-navy-500 mt-1">obszarów usług</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-navy-900">100%</div>
                  <div className="text-[11px] uppercase tracking-widest text-navy-500 mt-1">terminowości</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-500" />
                <div className="relative bg-white border border-cream-200 p-8 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Szybki kontakt</div>
                  <div className="font-serif text-2xl text-navy-900 mt-3">Porozmawiajmy o Twojej firmie.</div>
                  <p className="text-sm text-navy-700 mt-3 leading-relaxed">
                    Krótka, niezobowiązująca rozmowa — przedstawimy zakres usług i oszacujemy koszt prowadzenia ksiąg dla Twojej działalności.
                  </p>

                  <div className="mt-6 space-y-3">
                    <a href="tel:+48508189717" className="flex items-center gap-3 p-3 bg-cream-50 hover:bg-cream-100 transition group">
                      <div className="w-9 h-9 bg-navy-800 text-cream-50 flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-navy-500">Telefon</div>
                        <div className="font-medium text-navy-900 group-hover:text-gold-600 transition">508 189 717</div>
                      </div>
                    </a>
                    <a href="mailto:ubk@reg-biur.com.pl" className="flex items-center gap-3 p-3 bg-cream-50 hover:bg-cream-100 transition group">
                      <div className="w-9 h-9 bg-navy-800 text-cream-50 flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-navy-500">E-mail</div>
                        <div className="font-medium text-navy-900 group-hover:text-gold-600 transition">ubk@reg-biur.com.pl</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 p-3 bg-cream-50">
                      <div className="w-9 h-9 bg-navy-800 text-cream-50 flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-navy-500">Adres</div>
                        <div className="font-medium text-navy-900">ul. Stefczyka 67, Wejherowo</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O biurze */}
      <section id="o-nas" className="border-t border-cream-200 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">O biurze</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05]">
                Małe biuro, <em className="italic">duża uwaga</em> dla każdego klienta.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-5 text-navy-700 leading-relaxed text-lg">
                <p>
                  Reg-Biur prowadzi <strong className="text-navy-900">Regina Kierznikiewicz</strong> —
                  od 2018 roku zajmuje się księgowością, kadrami i doradztwem podatkowym
                  dla jednoosobowych działalności oraz małych i średnich firm w Wejherowie i okolicach.
                </p>
                <p>
                  W biurze rachunkowym Reg-Biur każdy klient ma bezpośredni kontakt z osobą prowadzącą
                  jego sprawy. Bez przekierowań, bez ogólnej infolinii — pytania trafiają od razu do
                  tego, kto zna Twoją firmę.
                </p>
                <p>
                  Pracujemy <strong className="text-navy-900">terminowo, bezpiecznie i z odpowiedzialnością</strong> —
                  posiadamy ubezpieczenie OC z tytułu prowadzenia ksiąg, regularnie szkolimy się
                  z każdej zmiany przepisów i korzystamy z aktualnych narzędzi (JPK_V7, e-faktury, e-deklaracje).
                </p>
              </div>
              <div className="mt-10 grid sm:grid-cols-3 gap-4 pt-8 border-t border-cream-300">
                <div>
                  <div className="font-serif text-4xl text-gold-600">2018</div>
                  <div className="text-sm text-navy-700 mt-1">rok rozpoczęcia działalności</div>
                </div>
                <div>
                  <div className="font-serif text-4xl text-gold-600">JDG / Sp. z o.o.</div>
                  <div className="text-sm text-navy-700 mt-1">obsługujemy każdą formę prawną</div>
                </div>
                <div>
                  <div className="font-serif text-4xl text-gold-600">Wejherowo</div>
                  <div className="text-sm text-navy-700 mt-1">i Trójmiasto — możliwy kontakt osobisty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usługi */}
      <section id="uslugi" className="border-t border-cream-200">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Usługi</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05]">
                Sześć obszarów, w których <em className="italic">prowadzimy Twoją firmę</em>.
              </h2>
            </div>
            <p className="text-navy-700 max-w-sm leading-relaxed">
              Każda z tych usług jest świadczona indywidualnie — zakres ustalamy
              po krótkiej rozmowie i dopasowujemy do specyfiki Twojej działalności.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-200">
            {services.map((s) => (
              <div key={s.no} className="bg-cream-50 p-8 hover:bg-white transition group">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 border border-navy-800 flex items-center justify-center font-serif text-lg text-navy-800 group-hover:bg-navy-800 group-hover:text-cream-50 transition">
                    {s.no}
                  </div>
                  <div className="w-px h-12 bg-gold-500/40" />
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mt-6">{s.title}</h3>
                <p className="text-navy-700 mt-3 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-navy-900 text-cream-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-semibold">Indywidualna wycena</div>
              <div className="font-serif text-2xl mt-2 text-cream-50">
                Każda firma jest inna — koszt prowadzenia ustalamy po krótkiej rozmowie.
              </div>
            </div>
            <a href="tel:+48508189717" className="shrink-0 inline-flex items-center gap-3 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold transition">
              Zadzwoń po wycenę
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="border-t border-cream-200 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Dla kogo</div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05]">
              Z kim <em className="italic">najlepiej współpracujemy</em>.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div key={a.label} className="bg-white border border-cream-200 p-8 relative">
                <div className="absolute top-0 left-0 px-3 py-1 bg-navy-900 text-cream-50 text-[10px] uppercase tracking-widest font-semibold">
                  {String(i + 1).padStart(2, '0')} · {a.label}
                </div>
                <h3 className="font-serif text-2xl text-navy-900 mt-8">{a.title}</h3>
                <p className="text-navy-700 mt-3 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dlaczego my */}
      <section id="dlaczego" className="border-t border-cream-200">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Dlaczego my</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy-900 mt-4 leading-[1.05]">
                Sześć powodów, <em className="italic">dla których</em> warto.
              </h2>
              <div className="hidden lg:block mt-10 pt-10 border-t border-cream-300">
                <p className="text-navy-700 leading-relaxed">
                  Każdy z tych punktów to konsekwentna praktyka biura, a nie marketingowa deklaracja.
                  Jeśli któryś z nich brzmi dla Państwa istotnie — porozmawiajmy.
                </p>
                <a href="#kontakt" className="inline-flex items-center gap-2 mt-6 font-semibold text-navy-900 hover:text-gold-600 transition">
                  Przejdź do kontaktu <span>→</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-px bg-cream-200">
                {reasons.map((r, i) => (
                  <div key={r.title} className="bg-cream-50 p-7">
                    <div className="font-mono text-[11px] text-gold-600">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="font-serif text-xl text-navy-900 mt-2">{r.title}</h3>
                    <p className="text-navy-700 mt-2 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-cream-200 bg-navy-900 text-cream-50">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-semibold">Kontakt</div>
              <h2 className="font-serif text-4xl lg:text-5xl text-cream-50 mt-4 leading-[1.05]">
                Porozmawiajmy o <em className="italic text-gold-500">Państwa firmie</em>.
              </h2>
              <p className="text-cream-200 mt-6 leading-relaxed">
                Najprościej zadzwonić — odbieramy w godzinach pracy biura, a po godzinach
                oddzwaniamy następnego dnia roboczego. Można też napisać mailem lub
                przyjść osobiście.
              </p>

              <div className="mt-10 space-y-5">
                <a href="tel:+48508189717" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-gold-500 text-navy-900 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-cream-200">Telefon</div>
                    <div className="font-serif text-2xl text-cream-50 mt-1 group-hover:text-gold-500 transition">508 189 717</div>
                  </div>
                </a>
                <a href="mailto:ubk@reg-biur.com.pl" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-gold-500 text-navy-900 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-cream-200">E-mail</div>
                    <div className="font-serif text-2xl text-cream-50 mt-1 group-hover:text-gold-500 transition">ubk@reg-biur.com.pl</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gold-500 text-navy-900 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-cream-200">Adres</div>
                    <div className="font-serif text-xl text-cream-50 mt-1">ul. Stefczyka 67<br/>84-200 Wejherowo</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-gold-500 text-navy-900 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-cream-200">Godziny</div>
                    <div className="font-serif text-xl text-cream-50 mt-1">pn–pt: 8:00–16:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form action="mailto:ubk@reg-biur.com.pl" method="post" encType="text/plain" className="bg-cream-50 text-navy-900 p-8 border-l-4 border-gold-500">
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold-600 font-semibold">Formularz kontaktowy</div>
                <div className="font-serif text-2xl text-navy-900 mt-2">Napisz do nas</div>
                <p className="text-sm text-navy-700 mt-2">Odpowiadamy najczęściej tego samego dnia roboczego.</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-navy-500 font-semibold mb-2">Imię i nazwisko</label>
                    <input name="imie" required className="w-full px-4 py-3 bg-white border border-cream-300 focus:border-navy-800 outline-none transition" placeholder="Jan Kowalski" />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-navy-500 font-semibold mb-2">Telefon</label>
                    <input name="telefon" type="tel" className="w-full px-4 py-3 bg-white border border-cream-300 focus:border-navy-800 outline-none transition" placeholder="500 000 000" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-[11px] uppercase tracking-widest text-navy-500 font-semibold mb-2">E-mail</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 bg-white border border-cream-300 focus:border-navy-800 outline-none transition" placeholder="jan@firma.pl" />
                </div>
                <div className="mt-4">
                  <label className="block text-[11px] uppercase tracking-widest text-navy-500 font-semibold mb-2">Forma prowadzenia</label>
                  <select name="forma" className="w-full px-4 py-3 bg-white border border-cream-300 focus:border-navy-800 outline-none transition">
                    <option>JDG — ryczałt</option>
                    <option>JDG — KPiR</option>
                    <option>Spółka z o.o.</option>
                    <option>Spółka cywilna</option>
                    <option>Dopiero zakładam</option>
                    <option>Inna / nie wiem</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-[11px] uppercase tracking-widest text-navy-500 font-semibold mb-2">Wiadomość</label>
                  <textarea name="wiadomosc" rows={4} className="w-full px-4 py-3 bg-white border border-cream-300 focus:border-navy-800 outline-none transition" placeholder="Krótko opisz, czego potrzebujesz — księgowość, kadry, doradztwo, rejestracja firmy..."></textarea>
                </div>
                <button type="submit" className="mt-6 w-full px-6 py-4 bg-navy-900 hover:bg-navy-800 text-cream-50 font-medium transition flex items-center justify-center gap-3">
                  Wyślij wiadomość
                  <span>→</span>
                </button>
                <p className="text-[11px] text-navy-500 mt-3 leading-relaxed">
                  Wysyłając formularz wyrażasz zgodę na kontakt zwrotny. Twoje dane nie są przekazywane podmiotom trzecim.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="aspect-[16/6] overflow-hidden border border-navy-700">
            <iframe
              title="Mapa - Reg-Biur, ul. Stefczyka 67, Wejherowo"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.22%2C54.59%2C18.27%2C54.61&layer=mapnik&marker=54.6011%2C18.2390"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3)' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-navy-700 text-cream-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500 text-navy-900 flex items-center justify-center font-serif text-xl">R</div>
                <div>
                  <div className="font-serif text-xl text-cream-50">Reg-Biur</div>
                  <div className="text-[10px] tracking-widest uppercase text-cream-300">biuro rachunkowe</div>
                </div>
              </div>
              <p className="text-sm text-cream-200 mt-5 leading-relaxed">
                Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz —
                księgowość, kadry, doradztwo podatkowe. Wejherowo, od 2018.
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-semibold">Usługi</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#uslugi" className="hover:text-gold-500 transition">Pełna księgowość</a></li>
                <li><a href="#uslugi" className="hover:text-gold-500 transition">KPiR / ryczałt</a></li>
                <li><a href="#uslugi" className="hover:text-gold-500 transition">Kadry i płace</a></li>
                <li><a href="#uslugi" className="hover:text-gold-500 transition">ZUS, JPK, VAT</a></li>
                <li><a href="#uslugi" className="hover:text-gold-500 transition">Doradztwo podatkowe</a></li>
                <li><a href="#uslugi" className="hover:text-gold-500 transition">Rejestracja działalności</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-500 font-semibold">Kontakt</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>ul. Stefczyka 67, 84-200 Wejherowo</li>
                <li><a href="tel:+48508189717" className="hover:text-gold-500 transition">tel. 508 189 717</a></li>
                <li><a href="mailto:ubk@reg-biur.com.pl" className="hover:text-gold-500 transition">ubk@reg-biur.com.pl</a></li>
                <li>pn–pt 8:00–16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-700 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-cream-300">
            <div>© 2018–2026 Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gold-500 transition">Polityka prywatności</a>
              <span className="font-mono">reg-biur.com.pl</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
