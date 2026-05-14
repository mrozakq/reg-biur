import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Polityka prywatności — Reg-Biur',
  description: 'Polityka prywatności i informacja o przetwarzaniu danych osobowych — Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz, Wejherowo.',
  robots: { index: true, follow: true },
}

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen bg-white text-bark-900 paper">
      <header className="border-b border-navy-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-navy-900 to-navy-700 text-white rounded-xl flex items-center justify-center serif text-xl font-semibold border border-cyan-500/20">R</div>
            <div>
              <div className="serif text-xl leading-tight text-navy-900 font-semibold">Reg-Biur</div>
              <div className="text-[11px] text-ink-500">biuro rachunkowe · od 2018</div>
            </div>
          </a>
          <a href="/" className="text-sm text-navy-700 hover:text-cyan-600 transition">← powrót na stronę główną</a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 lg:py-20">
        <div className="text-xs uppercase tracking-[0.2em] text-cyan-600 font-semibold">Dokument</div>
        <h1 className="serif text-4xl lg:text-5xl text-navy-900 mt-3 leading-[1.05] font-semibold">
          Polityka prywatności
        </h1>
        <p className="text-ink-700 mt-4 text-lg leading-relaxed">
          Informacja o przetwarzaniu danych osobowych — zgodnie z RODO (rozporządzenie Parlamentu Europejskiego
          i Rady (UE) 2016/679).
        </p>
        <div className="text-sm text-ink-500 mt-3">Obowiązuje od: maj 2026</div>

        <div className="mt-12 space-y-10 text-ink-700 leading-relaxed">
          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">1. Administrator danych</h2>
            <p className="mt-3">
              Administratorem Twoich danych osobowych jest <strong className="text-navy-900">Usługi Biurowo-Księgowe Reg-Biur Regina Kierznikiewicz</strong>,
              ul. Stefczyka 67, 84-200 Wejherowo, NIP: 588-11-45-668, REGON: 192604826.
            </p>
            <p className="mt-2">
              Kontakt z administratorem: e-mail <a className="text-cyan-600 hover:underline" href="mailto:ubk@reg-biur.com.pl">ubk@reg-biur.com.pl</a>,
              tel. <a className="text-cyan-600 hover:underline" href="tel:+48508189717">508 189 717</a>.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">2. Cele i podstawy przetwarzania</h2>
            <p className="mt-3">Przetwarzamy Twoje dane osobowe w następujących celach:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-navy-900">Świadczenie usług księgowo-kadrowych</strong> — na podstawie zawartej umowy (art. 6 ust. 1 lit. b RODO).</li>
              <li><strong className="text-navy-900">Wypełnianie obowiązków prawnych</strong> wynikających m.in. z ustawy o rachunkowości, ustaw podatkowych, ustawy o ubezpieczeniach społecznych, kodeksu pracy (art. 6 ust. 1 lit. c RODO).</li>
              <li><strong className="text-navy-900">Kontakt zwrotny w odpowiedzi na zapytanie</strong> (telefon, e-mail) — na podstawie naszego prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).</li>
              <li><strong className="text-navy-900">Dochodzenie lub obrona przed roszczeniami</strong> — na podstawie naszego prawnie uzasadnionego interesu (art. 6 ust. 1 lit. f RODO).</li>
            </ul>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">3. Zakres przetwarzanych danych</h2>
            <p className="mt-3">
              W zależności od celu, przetwarzamy: dane identyfikacyjne (imię, nazwisko, NIP, PESEL, REGON),
              dane kontaktowe (adres, telefon, e-mail), dane finansowe (rachunki bankowe, faktury, deklaracje),
              dane kadrowe pracowników klienta (umowy, listy płac, ewidencja czasu pracy), oraz inne dane
              przekazane w toku świadczenia usług księgowych.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">4. Odbiorcy danych</h2>
            <p className="mt-3">Twoje dane mogą być przekazywane:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Organom państwowym uprawnionym na podstawie przepisów prawa: Urzędom Skarbowym, ZUS, GUS, sądom, organom kontroli skarbowej.</li>
              <li>Podmiotom obsługującym nasze systemy informatyczne (hosting, oprogramowanie księgowe) — na podstawie umów powierzenia przetwarzania.</li>
              <li>Biuru pocztowemu i firmom kurierskim — w zakresie niezbędnym do dostarczenia korespondencji.</li>
            </ul>
            <p className="mt-3">
              Nie przekazujemy Twoich danych do państw trzecich (poza Europejski Obszar Gospodarczy) ani organizacji międzynarodowych.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">5. Okres przechowywania</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Dokumenty księgowe i podatkowe — przez 5 lat od końca roku, w którym wygasł obowiązek podatkowy (zgodnie z ustawą Ordynacja podatkowa i ustawą o rachunkowości).</li>
              <li>Dokumenty kadrowo-płacowe — przez 10 lub 50 lat (zgodnie z kodeksem pracy i ustawą o ubezpieczeniach społecznych).</li>
              <li>Dane z zapytań kontaktowych — do 12 miesięcy od ostatniego kontaktu, jeśli nie doszło do zawarcia umowy.</li>
              <li>Dane do dochodzenia roszczeń — do upływu okresu przedawnienia roszczeń.</li>
            </ul>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">6. Twoje prawa</h2>
            <p className="mt-3">Masz prawo do:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Dostępu do swoich danych i otrzymania ich kopii.</li>
              <li>Sprostowania (poprawienia) danych.</li>
              <li>Usunięcia danych (z zastrzeżeniem obowiązków wynikających z przepisów prawa).</li>
              <li>Ograniczenia przetwarzania.</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
              <li>Przenoszenia danych.</li>
              <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO),
                ul. Stawki 2, 00-193 Warszawa, jeśli uznasz, że przetwarzanie narusza Twoje prawa.</li>
            </ul>
            <p className="mt-3">
              W sprawach związanych z przetwarzaniem danych można się z nami skontaktować pisząc na
              <a className="text-cyan-600 hover:underline" href="mailto:ubk@reg-biur.com.pl"> ubk@reg-biur.com.pl</a>.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">7. Dobrowolność podania danych</h2>
            <p className="mt-3">
              Podanie danych jest dobrowolne, ale w niektórych przypadkach niezbędne do zawarcia umowy
              lub świadczenia usług księgowych (np. dane identyfikacyjne klienta, NIP, dane pracowników objętych
              obsługą kadrową). Konsekwencją niepodania danych może być brak możliwości zawarcia umowy
              lub wykonania określonych czynności.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">8. Pliki cookies i dane techniczne</h2>
            <p className="mt-3">
              Strona <strong className="text-navy-900">reg-biur.com.pl</strong> nie używa plików cookies
              w celach analitycznych ani marketingowych. Nie korzystamy z narzędzi typu Google Analytics
              ani Pixel Facebook. Serwer udostępniający stronę (AWS Amplify) może rejestrować podstawowe
              dane techniczne (adres IP, typ przeglądarki, datę i godzinę żądania) — wyłącznie do celów
              technicznych związanych z udostępnianiem strony.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">9. Zautomatyzowane podejmowanie decyzji</h2>
            <p className="mt-3">
              Nie podejmujemy decyzji w sposób zautomatyzowany, w tym profilowania, które wywoływałyby
              skutki prawne lub w podobny sposób istotnie wpływały na osoby, których dane dotyczą.
            </p>
          </section>

          <section>
            <h2 className="serif text-2xl text-navy-900 font-semibold">10. Zmiany polityki prywatności</h2>
            <p className="mt-3">
              Zastrzegamy sobie prawo do zmiany niniejszej polityki w przypadku zmiany przepisów prawa,
              zmiany zakresu naszej działalności lub uzasadnionych potrzeb organizacyjnych. Aktualna wersja
              będzie dostępna pod adresem <a className="text-cyan-600 hover:underline" href="/polityka-prywatnosci/">reg-biur.com.pl/polityka-prywatnosci</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-navy-900 text-navy-100 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
          <div>
            <div className="serif text-lg text-white font-semibold">Reg-Biur</div>
            <div className="text-xs text-navy-200 mt-1">ul. Stefczyka 67, 84-200 Wejherowo · tel. 508 189 717</div>
          </div>
          <a href="/" className="text-cyan-400 hover:text-cyan-300 transition">← powrót na stronę główną</a>
        </div>
      </footer>
    </div>
  )
}
