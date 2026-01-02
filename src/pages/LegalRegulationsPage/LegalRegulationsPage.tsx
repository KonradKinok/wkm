import React from "react";
import { selectLanguage } from "../../components/redux/language/selectorsLanguage";
import { langDictionary } from "../../components/redux/language/constans";
import { useSelector } from "react-redux";
import scss from "./LegalRegulationsPage.module.scss";

export default function LegalRegulationsPage() {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <div className={scss["container-legalregulations-page"]}>
      <h1>{langDictionary.navLegalRegulations[currentLanguage]}:</h1>
      <section>
        <h2 className={scss["legalregulations-section-title"]}>
          <span className={scss["legalregulations-span-paragraph"]}>§</span>{" "}
          Kary
        </h2>

        <p>Ustawa z dnia 20 czerwca 1997r. Prawo o ruchu drogowym </p>
        <ul className={scss["legalregulations-list"]}>
          <li>
            Art. 73aa ust.1: Właściciel pojazdu jest obowiązany złożyć wniosek o
            jego rejestrację w terminie 30 dni od dnia:
            <ol className={scss["legalregulations-list-number"]}>
              <li>nabycia pojazdu na terytorium Rzeczypospolitej Polskiej;</li>
              <li>
                dopuszczenia do obrotu przez organ Krajowej Administracji
                Skarbowej pojazdu sprowadzonego z terytorium państwa niebędącego
                państwem członkowskim Unii Europejskiej;
              </li>
              <li>
                sprowadzenia pojazdu na terytorium Rzeczypospolitej Polskiej z
                terytorium państwa członkowskiego Unii Europejskiej.
              </li>
            </ol>
          </li>
          <li>
            Art.73aa ust.2: W przypadku nabycia pojazdu, o którym mowa w ust. 1
            pkt 1, w drodze spadku termin na złożenie wniosku o rejestrację
            pojazdu, o którym mowa w ust. 1, wynosi 60 dni od dnia prawomocnego
            orzeczenia sądu o stwierdzeniu nabycia spadku albo sporządzenia aktu
            poświadczenia dziedziczenia.
          </li>
          <li>
            Art.73aa ust.2a: W przypadku nabycia pojazdu, o którym mowa w ust. 1
            pkt 1, wycofanego czasowo z ruchu termin, o którym mowa w ust. 1,
            biegnie od dnia, w którym upłynął okres czasowego wycofania pojazdu
            z ruchu określony w decyzji o czasowym wycofaniu pojazdu z ruchu.
          </li>
          <li>
            Art. 73aa ust.3: W przypadku gdy właścicielem pojazdu, o którym mowa
            w ust. 1, jest przedsiębiorca prowadzący na terytorium
            Rzeczypospolitej Polskiej działalność gospodarczą w zakresie obrotu
            pojazdami, obowiązany jest do złożenia wniosku o rejestrację
            pojazdu, o którym mowa w ust. 1, w terminie 90 dni.
          </li>
          <li>
            Art. 73aa ust.4: Przepisu ust. 1 nie stosuje się do podmiotu
            uprawnionego, o którym mowa w art. 80s ust. 2, w odniesieniu do
            pojazdów, dla których ten podmiot uprawniony posiada ważną decyzję o
            profesjonalnej rejestracji pojazdów.
          </li>
          <li>
            Art.73aa ust.5: Przepisów ust. 1, 2 i 3 nie stosuje się w przypadku,
            gdy właścicielem nowego pojazdu jest przedsiębiorca prowadzący na
            terytorium Rzeczypospolitej Polskiej działalność gospodarczą w
            zakresie obrotu pojazdami lub produkcji pojazdów.
          </li>
          <li>
            Art.73aa ust.5a: Przepisów ust. 1 nie stosuje się, w przypadku gdy
            właścicielem pojazdu:
            <ol className={scss["legalregulations-list-number"]}>
              <li>
                przejętego na podstawie art. 50a ust. 2 zdanie drugie jest
                gmina;
              </li>
              <li>
                przejętego na podstawie orzeczenia sądu wydanego w związku z
                wnioskiem, o którym mowa w art. 130a ust. 10 zdanie pierwsze,
                jest powiat;
              </li>
              <li>nabytego w drodze spadku jest gmina albo Skarb Państwa;</li>
              <li>
                przejętego po likwidacji przedsiębiorstwa jest gmina albo Skarb
                Państwa;
              </li>
              <li>
                przejętego na podstawie art. 44b ustawy z dnia 6 czerwca 1997 r.
                - Kodeks karny (Dz. U. z 2025 r. poz. 383) jest Skarb Państwa
              </li>
            </ol>
          </li>
          <li>
            Art.73aa ust.6: Przepisu ust. 1 pkt 1 nie stosuje się, w przypadku
            gdy przed upływem terminów, o których mowa w ust. 1, 2 albo 3,
            właścicielowi pojazdu zostały wydane:
            <ol className={scss["legalregulations-list-number"]}>
              <li>zaświadczenie o demontażu pojazdu, o którym mowa w:</li>
              <ol className={scss["legalregulations-list-letter"]}>
                <li>art. 79 ust. 2,</li>
                <li>
                  art. 24 ust. 1 pkt 2 albo art. 33 ust. 3 ustawy z dnia 20
                  stycznia 2005 r. o recyklingu pojazdów wycofanych z
                  eksploatacji (Dz. U. z 2020 r. poz. 2056);
                </li>
              </ol>
              <li>
                zaświadczenie o przyjęciu niekompletnego pojazdu, o którym mowa
                w art. 25 ust. 1 albo art. 33 ust. 3 ustawy z dnia 20 stycznia
                2005 r. o recyklingu pojazdów wycofanych z eksploatacji;
              </li>
              <li>
                zaświadczenie potwierdzające zgłoszenie kradzieży pojazdu;
              </li>
              <li>
                postanowienie o umorzeniu postępowania przygotowawczego w
                sprawie kradzieży pojazdu.
              </li>
            </ol>
          </li>
          <li>
            Art.73aa ust.6a: Przepisu ust. 1 pkt 1 nie stosuje się, w przypadku
            gdy przed upływem terminów, o których mowa w ust. 1, 2 albo 3,
            nastąpiła udokumentowana trwała i zupełna utrata posiadania pojazdu
            bez zmiany w zakresie prawa własności, o której mowa w art. 79 ust.
            1 pkt 5.
          </li>
          <li>
            Art. 73aa ust.7: Przepisu ust. 1 nie stosuje się, w przypadku gdy
            właściciel pojazdu dokona zbycia tego pojazdu przed upływem
            terminów, o których mowa w ust. 1, 2 albo 3
          </li>
          <li>
            Art. 78 ust.2 pkt 1: Właściciel pojazdu zarejestrowanego na
            terytorium Rzeczypospolitej Polskiej jest obowiązany zawiadomić w
            terminie nieprzekraczającym 30 dni starostę o zbyciu pojazdu.
          </li>
          <li>
            Art. 78 ust.2a: Zawiadomienia, o którym mowa w ust. 2 pkt 1,
            właściciel pojazdu dokonuje u starosty właściwego ze względu na
            miejsce zamieszkania (siedzibę) lub czasowego zamieszkania, a jeżeli
            właścicielem jest przedsiębiorstwo wielozakładowe lub inny podmiot,
            w skład którego wchodzą wydzielone jednostki organizacyjne - u
            starosty właściwego ze względu na miejsce rejestracji pojazdu.
          </li>
          <li>
            Art. 78 ust.2b: W przypadku współwłasności pojazdu dla skuteczności
            zawiadomienia o zbyciu pojazdu wystarczającym jest zawiadomienie
            przez jednego ze współwłaścicieli pojazdu.
          </li>
          <li>
            Art. 140mb ust.1: Kto będąc właścicielem pojazdu obowiązanym do
            złożenia wniosku o rejestrację pojazdu w terminie, o którym mowa w
            art. 73aa ust. 1 albo 2, nie złoży tego wniosku w terminie, podlega
            karze pieniężnej w wysokości 500 zł.
          </li>
          <li>
            Art. 140mb ust.2: Kto będąc właścicielem pojazdu obowiązanym do
            złożenia wniosku o rejestrację pojazdu w terminie, o którym mowa w
            art. 73aa ust. 3, nie złoży tego wniosku w terminie, podlega karze
            pieniężnej w wysokości 1000 zł.
          </li>
          <li>
            Art. 140mb ust.3: Kto będąc właścicielem pojazdu obowiązanym do
            złożenia wniosku o rejestrację pojazdu pomimo wezwania nie uzupełnia
            braków złożonego wniosku w wyznaczonym terminie, podlega karze
            pieniężnej, o której mowa odpowiednio w ust. 1 albo 2.
          </li>
          <li>
            Art. 140mb ust.4: Kary pieniężnej, o której mowa w ust. 3, nie
            nakłada się, jeżeli termin na uzupełnienie braków złożonego wniosku
            o rejestrację pojazdu upływa odpowiednio przed upływem terminu, o
            którym mowa w art. 73aa ust. 1,2 albo 3.
          </li>
          <li>
            Art. 140mb ust.5: W przypadku niezłożenia wniosku o rejestrację
            pojazdu w terminie 180 dni od dnia, o którym mowa odpowiednio w art.
            73aa ust. 1,2 albo 2a, karę pieniężną, o której mowa:
            <ol className={scss["legalregulations-list-number"]}>
              <li>w ust. 1, nakłada się w wysokości 1000 zł;</li>
              <li>w ust. 2, nakłada się w wysokości 2000 zł.</li>
            </ol>
          </li>
          <li>
            Art. 140mb ust.6: Kto będąc właścicielem pojazdu zarejestrowanego na
            terytorium Rzeczypospolitej Polskiej wbrew przepisowi art. 78 ust. 2
            pkt 1 nie zawiadamia starosty o zbyciu pojazdu w terminie, podlega
            karze pieniężnej w wysokości 250 zł.
          </li>
          <li>
            Art. 140mb ust.7: Kary pieniężne współwłaściciele pojazdu ponoszą
            solidarnie.
          </li>
          <li>
            Art. 140n ust.1: Kary pieniężne, w sprawach określonych w art. 140ma
            i art. 140mb, są nakładane w drodze decyzji administracyjnej.
          </li>
          <li>
            Art. 140n ust.2: Kary pieniężne, o których mowa w art. 140ma i art.
            140mb, nakłada starosta.
          </li>
          <li>
            Art. 140n ust.3: Kary pieniężne, o których mowa w art. 140ma i art.
            140mb, stanowią dochód powiatu.
          </li>
          <li>
            Art. 140n ust.5: Kary pieniężne są wnoszone na odrębny rachunek
            bankowy starostwa, w terminie 14 dni od dnia, w którym decyzja o
            nałożeniu kary pieniężnej stała się ostateczna.
          </li>
          <li>
            Art. 140n ust.6: Do kar pieniężnych, o których mowa w art. 140ma i
            art. 140mb, przepisów art. 189d-189f ustawy z dnia 14 czerwca 1960
            r. - Kodeks postępowania administracyjnego nie stosuje się.
          </li>
          <li>
            Art. 140n ust.7: Jeżeli czyn będący naruszeniem, o którym mowa w
            art. 140mb, wyczerpuje jednocześnie znamiona wykroczenia, w stosunku
            do podmiotu będącego osobą fizyczną stosuje się wyłącznie przepisy o
            odpowiedzialności administracyjnej.
          </li>
        </ul>
        <p>
          Ustawa z dnia 14 czerwca 1960 r. Kodeks postępowania administracyjnego
        </p>
        <ul className={scss["legalregulations-list"]}>
          <li>
            Art. 57 § 1: Jeżeli początkiem terminu określonego w dniach jest
            pewne zdarzenie, przy obliczaniu tego terminu nie uwzględnia się
            dnia, w którym zdarzenie nastąpiło. Upływ ostatniego z wyznaczonej
            liczby dni uważa się za koniec terminu.
          </li>
          <li>
            Art. 57 § 4: Jeżeli koniec terminu do wykonania czynności przypada
            na dzień uznany ustawowo za wolny od pracy lub na sobotę, termin
            upływa następnego dnia, który nie jest dniem wolnym od pracy ani
            sobotą.
          </li>
          <li>
            Art. 57 § 5: Termin uważa się za zachowany, jeżeli przed jego
            upływem pismo zostało:
            <ol className={scss["legalregulations-list-number"]}>
              <li>
                wysłane na adres do doręczeń elektronicznych organu
                administracji publicznej, a nadawca otrzymał dowód otrzymania, o
                którym mowa w art. 41 ustawy z dnia 18 listopada 2020 r. o
                doręczeniach elektronicznych;
              </li>
              <li>
                nadane w polskiej placówce pocztowej operatora wyznaczonego w
                rozumieniu ustawy z dnia 23 listopada 2012 r. - Prawo pocztowe
                albo placówce pocztowej operatora świadczącego pocztowe usługi
                powszechne w innym państwie członkowskim Unii Europejskiej,
                Konfederacji Szwajcarskiej albo państwie członkowskim
                Europejskiego Porozumienia o Wolnym Handlu (EFTA) - stronie
                umowy o Europejskim Obszarze Gospodarczym;
              </li>
              <li>złożone w polskim urzędzie konsularnym;</li>
              <li>złożone przez żołnierza w dowództwie jednostki wojskowej;</li>
              <li>
                złożone przez członka załogi statku morskiego kapitanowi statku;
              </li>
              <li>
                złożone przez osobę pozbawioną wolności w administracji zakładu
                karnego.
              </li>
            </ol>
          </li>
        </ul>
      </section>
    </div>
  );
}
