const variants = [
  {
    id: 'v1',
    name: 'Klasyczny',
    subtitle: 'granat · cream · złoto · serif na nagłówkach',
    description:
      'Stonowany, profesjonalny układ z dużą ilością białej przestrzeni. Kojarzy się z kancelarią, długoletnią praktyką, zaufaniem. Serifowe nagłówki, neutralna typografia w treści.',
    palette: ['#0F1E3D', '#FAF7F2', '#B68A3E', '#1E293B'],
    fonts: 'Playfair Display + Inter',
    keywords: ['Klasyczna kancelaria', 'Granatowo-złoty', 'Dużo powietrza'],
  },
  {
    id: 'v2',
    name: 'Nowoczesny',
    subtitle: 'czerń · zielony akcent · bold display sans',
    description:
      'Kontrastowy, energiczny układ inspirowany nowoczesnymi narzędziami SaaS. Mocne akcenty, bold display sans, „księgowość nowej generacji". Dobry dla klientów z branż technologicznych.',
    palette: ['#0A0A0A', '#0FBA81', '#FFFFFF', '#171717'],
    fonts: 'Space Grotesk + Inter',
    keywords: ['Bold sans', 'Czarno-zielony', 'Dynamiczny'],
  },
  {
    id: 'v3',
    name: 'Wybrany — produkcja',
    subtitle: 'granat + cyjan · logo z wizytówki · finalna wersja',
    description:
      'Wariant wybrany przez klientkę. Dostosowany do firmowej wizytówki — paleta granat + cyjan, logo z bar-chart w ramce, NIP i REGON w stopce, dodatkowa usługa „Zatrudnienie cudzoziemców" jako specjalność biura.',
    palette: ['#15265E', '#1E3A6E', '#29A5DD', '#FFFFFF'],
    fonts: 'Fraunces + DM Sans',
    keywords: ['Wersja produkcyjna', 'Granat + cyjan', 'Logo z wizytówki'],
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-ink-50">
      <header className="border-b border-ink-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ink-900 text-white rounded flex items-center justify-center font-display text-lg">
              R
            </div>
            <div>
              <div className="font-semibold text-sm text-ink-900">Reg-Biur · Wejherowo</div>
              <div className="text-[11px] text-ink-500">prototyp strony WWW — wybór wariantu</div>
            </div>
          </div>
          <div className="text-[11px] text-ink-500 font-medium hidden md:block font-mono">maj 2026</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-ink-200 rounded-full text-[11px] font-medium text-ink-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Materiał dla klienta — wybór wariantu strony
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-900 mt-5 leading-[1.05] tracking-tight">
            Trzy kierunki dla strony <em className="italic font-normal text-ink-700">Reg-Biur</em>.
          </h1>
          <p className="text-ink-700 text-base sm:text-lg mt-5 leading-relaxed max-w-2xl">
            Każdy z trzech wariantów pokazuje tę samą ofertę — księgowość, kadry i płace,
            doradztwo podatkowe — w innym języku wizualnym. Otwórz każdy i zdecyduj,
            który styl najlepiej pasuje do biura w Wejherowie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
          {variants.map((v) => (
            <a
              key={v.id}
              href={`./${v.id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border border-ink-200 hover:border-ink-900 hover:-translate-y-0.5 transition-all flex flex-col overflow-hidden"
            >
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{
                  background:
                    v.id === 'v1'
                      ? 'linear-gradient(135deg, #FAF7F2 0%, #FAF7F2 100%)'
                      : v.id === 'v2'
                      ? 'linear-gradient(135deg, #0A0A0A 0%, #171717 100%)'
                      : 'linear-gradient(135deg, #15265E 0%, #1E3A6E 100%)',
                }}
              >
                <div className="absolute inset-5">
                  {v.id === 'v1' && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="text-[8px] tracking-widest text-[#0F1E3D] font-semibold">REG-BIUR</div>
                        <div className="flex gap-1.5">
                          <div className="h-1 w-5 bg-[#0F1E3D]/40 rounded-full" />
                          <div className="h-1 w-5 bg-[#0F1E3D]/40 rounded-full" />
                          <div className="h-1 w-5 bg-[#0F1E3D]/40 rounded-full" />
                          <div className="h-1 w-5 bg-[#B68A3E] rounded-full" />
                        </div>
                      </div>
                      <div className="mt-5 space-y-1.5">
                        <div className="h-2.5 bg-[#0F1E3D] rounded-sm w-3/4" style={{ fontFamily: 'serif' }} />
                        <div className="h-2.5 bg-[#0F1E3D] rounded-sm w-1/2" />
                      </div>
                      <div className="mt-2 h-1 bg-[#0F1E3D]/30 rounded-full w-2/3" />
                      <div className="mt-1 h-1 bg-[#0F1E3D]/30 rounded-full w-3/5" />
                      <div className="mt-4 inline-block px-2 py-1 bg-[#B68A3E] text-white text-[7px] font-semibold rounded-sm w-fit">SKONTAKTUJ SIĘ</div>
                      <div className="mt-auto grid grid-cols-3 gap-1.5">
                        <div className="h-8 bg-white border border-[#0F1E3D]/15 rounded-sm" />
                        <div className="h-8 bg-white border border-[#0F1E3D]/15 rounded-sm" />
                        <div className="h-8 bg-white border border-[#0F1E3D]/15 rounded-sm" />
                      </div>
                    </div>
                  )}
                  {v.id === 'v2' && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="text-[8px] tracking-widest text-white font-bold">REG-BIUR</div>
                        <div className="text-[7px] text-[#0FBA81] font-mono">// 2018</div>
                      </div>
                      <div className="mt-4 space-y-1.5">
                        <div className="h-3 bg-white rounded-sm w-5/6" />
                        <div className="h-3 bg-[#0FBA81] rounded-sm w-2/3" />
                      </div>
                      <div className="mt-3 h-1 bg-white/40 rounded-full w-3/4" />
                      <div className="mt-1 h-1 bg-white/40 rounded-full w-2/3" />
                      <div className="mt-3 flex gap-1.5">
                        <div className="px-2 py-1 bg-[#0FBA81] text-black text-[7px] font-bold rounded">ZADZWOŃ →</div>
                        <div className="px-2 py-1 border border-white/30 text-white text-[7px] font-bold rounded">USŁUGI</div>
                      </div>
                      <div className="mt-auto grid grid-cols-3 gap-1.5">
                        <div className="h-9 bg-white/10 border border-white/15 rounded relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0FBA81]" />
                        </div>
                        <div className="h-9 bg-white/10 border border-white/15 rounded relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0FBA81]" />
                        </div>
                        <div className="h-9 bg-white/10 border border-white/15 rounded relative overflow-hidden">
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0FBA81]" />
                        </div>
                      </div>
                    </div>
                  )}
                  {v.id === 'v3' && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <svg viewBox="0 0 48 48" className="w-3.5 h-3.5">
                            <rect x="3" y="3" width="42" height="42" rx="3" stroke="#FFFFFF" strokeWidth="3.5" fill="none" />
                            <rect x="11" y="28" width="6" height="10" fill="#29A5DD" />
                            <rect x="21" y="22" width="6" height="16" fill="#29A5DD" />
                            <rect x="31" y="16" width="6" height="22" fill="#29A5DD" />
                          </svg>
                          <div className="text-[8px] tracking-widest text-white font-bold">REG-BIUR</div>
                        </div>
                        <div className="text-[7px] text-[#29A5DD] font-medium">od 2018</div>
                      </div>
                      <div className="mt-4 space-y-1.5">
                        <div className="h-2.5 bg-white rounded-sm w-4/5" />
                        <div className="h-2.5 bg-[#29A5DD] rounded-sm w-3/5" />
                      </div>
                      <div className="mt-3 h-1 bg-white/40 rounded-full w-3/4" />
                      <div className="mt-1 h-1 bg-white/40 rounded-full w-2/3" />
                      <div className="mt-3 inline-block px-2.5 py-1 bg-[#29A5DD] text-white text-[7px] font-semibold rounded-full w-fit">zadzwoń →</div>
                      <div className="mt-auto grid grid-cols-3 gap-1.5">
                        <div className="h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#29A5DD]" />
                        </div>
                        <div className="h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                        </div>
                        <div className="h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#29A5DD]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-display text-2xl text-ink-900">{v.name}</div>
                  <span className="font-mono text-[10px] text-ink-500 uppercase tracking-widest">{v.id}</span>
                </div>
                <div className="text-[11px] text-ink-500 mt-1 font-medium">{v.subtitle}</div>
                <p className="text-sm text-ink-700 mt-4 leading-relaxed flex-1">{v.description}</p>

                <div className="mt-5 pt-5 border-t border-ink-100">
                  <div className="flex items-center justify-between text-[11px] text-ink-500">
                    <span>Paleta</span>
                    <span className="font-mono">{v.fonts}</span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    {v.palette.map((c) => (
                      <div
                        key={c}
                        className="w-7 h-7 rounded-md border border-ink-200"
                        style={{ background: c }}
                        title={c}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {v.keywords.map((f) => (
                      <span key={f} className="text-[10px] px-2 py-0.5 bg-ink-100 text-ink-700 rounded-full font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink-900 group-hover:text-emerald-600 transition-colors">
                    Otwórz wariant
                  </span>
                  <span className="w-9 h-9 rounded-full border border-ink-200 group-hover:bg-ink-900 group-hover:border-ink-900 group-hover:text-white text-ink-700 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-ink-200 rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-widest text-ink-500 font-semibold">
              Co znajdzie się w każdym wariancie
            </div>
            <ul className="text-sm text-ink-700 mt-3 space-y-1.5">
              <li>· Hero z hasłem i CTA (telefon)</li>
              <li>· O biurze (od 2018, Wejherowo)</li>
              <li>· Usługi (6 obszarów)</li>
              <li>· Dla kogo / Dlaczego my</li>
              <li>· Kontakt + adres + godziny</li>
              <li>· Stopka z danymi firmy</li>
            </ul>
          </div>
          <div className="bg-white border border-ink-200 rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-widest text-ink-500 font-semibold">Dane do podmiany</div>
            <p className="text-sm text-ink-700 mt-3 leading-relaxed">
              Wszystkie treści ofertowe są realistyczne, ale można je dowolnie zmienić.
              Telefon, e-mail i adres są prawdziwe (508 189 717, ubk@reg-biur.com.pl,
              ul. Stefczyka 67 Wejherowo).
            </p>
          </div>
          <div className="bg-white border border-ink-200 rounded-2xl p-6">
            <div className="text-[11px] uppercase tracking-widest text-ink-500 font-semibold">Dalej</div>
            <p className="text-sm text-ink-700 mt-3 leading-relaxed">
              Po wyborze wariantu — podłączamy domenę <span className="font-mono text-ink-900">reg-biur.com.pl</span>,
              dodajemy realne dane (NIP, REGON, godziny otwarcia, ewentualne zdjęcia)
              i publikujemy na produkcję.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-ink-500">
          <div>© 2018–2026 Reg-Biur — prototyp prezentowany dla klienta</div>
          <div className="font-mono text-[11px]">reg-biur.com.pl · maj 2026</div>
        </div>
      </footer>
    </div>
  )
}
