import { FaRegCalendar } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa";

interface CalculationNumberOfDays {
  selectedDate: Date;
  sold: boolean;
  bought: boolean;
  isNaturalPerson: boolean;
  isLegalPerson: boolean;
  detailedData: boolean;
}
export interface ListEntry {
  nextDayOfTheDeadline: string; // Możesz dostosować typ w zależności od oczekiwanego formatu
  nextDay: string;
  nextData: string; // Możesz dostosować typ w zależności od oczekiwanego formatu
  nameDayOfWeek: string;
  description: string;
  iconName: React.ElementType;
  iconClass: string;
}
export function calculationNumberOfDays(
  selectedDate: Date | null,
  sold: boolean,
  bought: boolean,
  isNaturalPerson: boolean,
  isLegalPerson: boolean,
  detailedData: boolean,
): { listOfDates: ListEntry[]; startDate: Date } | null {
  if (selectedDate) {
    const data_14_03_2020 = new Date(2020, 2, 14); // Miesiące są zero-indexowane w JavaScript
    const data_23_05_2020 = new Date(2020, 4, 23);
    let listOfDates: ListEntry[] = [];
    let currentDay: Date = new Date(selectedDate);
    const startDate = new Date(selectedDate);
    const firstPenaltyTerm = isNaturalPerson ? 30 : 90;
    const secondPenaltyTerm = 180;
    const formattedFirstPenaltyNaturalPersonRegistrationAmount =
      new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
      }).format(500);
    const formattedFirstPenaltyLegalPersonRegistrationAmount =
      new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
      }).format(1000);
    const formattedSecondPenaltyNaturalPersonRegistrationAmount =
      new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
      }).format(1000);
    const formattedSecondPenaltyLegalPersonRegistrationAmount =
      new Intl.NumberFormat("pl-PL", {
        style: "currency",
        currency: "PLN",
      }).format(2000);
    const firstPenaltyRegistrationAmount = isNaturalPerson
      ? formattedFirstPenaltyNaturalPersonRegistrationAmount
      : formattedFirstPenaltyLegalPersonRegistrationAmount;
    const secondPenaltyRegistrationAmount = isNaturalPerson
      ? formattedSecondPenaltyNaturalPersonRegistrationAmount
      : formattedSecondPenaltyLegalPersonRegistrationAmount;
    const notificationOfSaleAmount = new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
    }).format(250);
    let nextDayOfTheDeadline = 0;
    let nextDay = 0;
    do {
      const newDate = new Date(startDate); // Kopiujemy datę początkową
      newDate.setDate(startDate.getDate() + nextDayOfTheDeadline); // Dodajemy odpowiednią liczbę dni

      const currentDay = new Date(newDate); // Tworzymy nowy obiekt daty (skopiowany)
      const dayOfWeekNumber = currentDay.getDay();
      // const dayOfWeekString = daysOfTheWeek[dayOfWeekNumber];
      const dayOfWeekString = currentDay.toLocaleString("pl-PL", {
        weekday: "short",
      });
      if (nextDayOfTheDeadline == 0) {
        const description = sold ? "data umowy" : "data umowy/sprowadzenia";

        listOfDates.push({
          nextDay: `${nextDay.toString().padStart(3, '0')}`,
          nextDayOfTheDeadline: `${nextDayOfTheDeadline}`, // Numerowanie dni
           nextData: currentDay.toLocaleDateString("pl-PL", {
          day: "2-digit", 
          month: "2-digit", 
          year: "numeric", 
        }),
          nameDayOfWeek: dayOfWeekString,
          description: `${description}`,
          iconName: FaRegCalendar,
          iconClass: "icon-FaRegCalendar",
        });
        nextDayOfTheDeadline++;
        nextDay++;
        continue;
      }
      if (nextDayOfTheDeadline == 30) {
        const description = "ostatni termin";

        listOfDates.push({
          nextDay: `${nextDay.toString().padStart(3, '0')}`,
          nextDayOfTheDeadline: `${nextDayOfTheDeadline}`, // Numerowanie dni
           nextData: currentDay.toLocaleDateString("pl-PL", {
          day: "2-digit", 
          month: "2-digit", 
          year: "numeric", 
        }),
          nameDayOfWeek: dayOfWeekString,
          description: `${description}`,
          iconName: FaRegCalendar,
          iconClass: "",
        });
        nextDayOfTheDeadline++;
        nextDay++;
        continue;
      }
      if (nextDayOfTheDeadline == 31) {
        const description = sold
          ? `Kwota kary: ${notificationOfSaleAmount}`
          : `Kwota I kary: ${firstPenaltyRegistrationAmount}`;

        listOfDates.push({
          nextDay: `${nextDay.toString().padStart(3, '0')}`,
          nextDayOfTheDeadline: `${nextDayOfTheDeadline}`, // Numerowanie dni
           nextData: currentDay.toLocaleDateString("pl-PL", {
          day: "2-digit", // Dwucyfrowy dzień
          month: "2-digit", // Dwucyfrowy miesiąc
          year: "numeric", // Pełny rok
        }), // Formatowanie daty
          nameDayOfWeek: dayOfWeekString,
          description: `${description}`,
          iconName: FaRegCalendarPlus,
          iconClass: "icon-FaRegCalendarPlus",
        });
        nextDayOfTheDeadline++;
        nextDay++;
        continue;
      }
      listOfDates.push({
        nextDay: `${nextDay.toString().padStart(3, '0')}`,
        nextDayOfTheDeadline: `${nextDayOfTheDeadline}`, // Numerowanie dni
        nextData: currentDay.toLocaleDateString("pl-PL", {
          day: "2-digit", // Dwucyfrowy dzień
          month: "2-digit", // Dwucyfrowy miesiąc
          year: "numeric", // Pełny rok
        }),
        nameDayOfWeek: dayOfWeekString,
        description: `${nextDayOfTheDeadline} dzień terminu`,
        iconName: FaRegCalendar,
        iconClass: "",
      });
      nextDayOfTheDeadline++;
      nextDay++;
    } while (nextDayOfTheDeadline < 35);
    return { listOfDates, startDate }; // Zwracamy obiekt z listą dat i datą początkową
  }

  return null; // Jeśli selectedDate jest null, zwróć null
}

function obliczanieLiczbyDniPoTerminieLiczba(
  selectedDate,
  karaKlasa,
  czyPrzedsiebiorca,
) {
  if (
    karaKlasa.DataUmowySprowadzeniaPojazdu &&
    (karaKlasa.DataSpelnieniaObowiazku ||
      karaKlasa.DataWszczeciaPostepowaniaNalozenieKary)
  ) {
    const data_14_03_2020 = new Date(2020, 2, 14); // Miesiące są zero-indexowane w JavaScript
    const data_23_05_2020 = new Date(2020, 4, 23);
    const listaDat = [];
    const dataPoczatkowa = new Date(karaKlasa.DataUmowySprowadzeniaPojazdu);
    let ustawowaLiczbaDni = 0;

    // Ustalanie ustawowej liczby dni
    if (dataPoczatkowa.getFullYear() >= 2024) {
      ustawowaLiczbaDni = czyPrzedsiebiorca ? 90 : 30;
    } else {
      ustawowaLiczbaDni = parseInt(wczytajLiczbeDni(karaKlasa), 10);
    }

    const dataWszczeciaPostepowania = new Date(
      karaKlasa.DataWszczeciaPostepowaniaNalozenieKary,
    );
    let dataKoncowa;

    if (
      (karaKlasa.DataSpelnieniaObowiazku &&
        new Date(karaKlasa.DataSpelnieniaObowiazku) <
          dataWszczeciaPostepowania) ||
      !karaKlasa.DataWszczeciaPostepowaniaNalozenieKary
    ) {
      dataKoncowa = new Date(karaKlasa.DataSpelnieniaObowiazku);
    } else {
      dataKoncowa = dataWszczeciaPostepowania;
    }

    let zaliczonaLiczbaDniTerminuDoZgloszeniaObowiazku = 0;
    let liczbaDniZawieszonegoTerminu = 0;
    let liczbaDniNaliczaniaKary = 0;
    let pozycjaListy = 0;

    let koncowyTerminZgloszenia;
    let dataUmowy = dataPoczatkowa;
    let dataUmowyPoKorekcie = dataPoczatkowa;

    while (dataUmowyPoKorekcie <= dataKoncowa) {
      let listaWiersz = `${pozycjaListy.toString().padStart(4, "0")}\t${dataUmowyPoKorekcie.toLocaleDateString("pl-PL")}\t${dataUmowyPoKorekcie.toLocaleString("pl-PL", { weekday: "short" })}\t`;

      if (pozycjaListy === 0) {
        listaWiersz += "\tData umowy/sprowadzenia pojazdu";
      }

      listaDat.push(listaWiersz);

      dataUmowyPoKorekcie.setDate(dataUmowyPoKorekcie.getDate() + 1);

      if (
        dataUmowyPoKorekcie < data_14_03_2020 ||
        dataUmowyPoKorekcie > data_23_05_2020
      ) {
        if (
          zaliczonaLiczbaDniTerminuDoZgloszeniaObowiazku < ustawowaLiczbaDni
        ) {
          zaliczonaLiczbaDniTerminuDoZgloszeniaObowiazku++;
          let listaZaliczonaLiczbaDniTerminuDoZgloszeniaObowiazku = `Dzień terminu do zgłoszenia:\t${zaliczonaLiczbaDniTerminuDoZgloszeniaObowiazku.toString().padStart(3, "0")}`;
          koncowyTerminZgloszenia = new Date(dataUmowyPoKorekcie);

          if (
            zaliczonaLiczbaDniTerminuDoZgloszeniaObowiazku === ustawowaLiczbaDni
          ) {
            while (swieto(dataUmowyPoKorekcie)) {
              pozycjaListy++;
              let listaWiersz = `${pozycjaListy.toString().padStart(4, "0")}\t${dataUmowyPoKorekcie.toLocaleDateString("pl-PL")}\t${dataUmowyPoKorekcie.toLocaleString("pl-PL", { weekday: "short" })}\t\tZawieszenie terminu - dzień wolny`;
              listaDat.push(listaWiersz);
              dataUmowyPoKorekcie.setDate(dataUmowyPoKorekcie.getDate() + 1);
            }
            koncowyTerminZgloszenia = new Date(dataUmowyPoKorekcie);
          }
        } else {
          if (dataUmowyPoKorekcie <= dataKoncowa) {
            liczbaDniNaliczaniaKary++;
          }
        }
      } else if (
        dataUmowyPoKorekcie >= data_14_03_2020 &&
        dataUmowyPoKorekcie <= data_23_05_2020
      ) {
        liczbaDniZawieszonegoTerminu++;
      }
      pozycjaListy++;
    }

    return liczbaDniNaliczaniaKary <= 0 ? 0 : liczbaDniNaliczaniaKary;
  }
  return 0; // Domyślny zwrot, jeśli warunki na początku metody nie są spełnione
}

function isHoliday(dayOff) {
  // Sprawdza dni wolne w tygodniu
  if (dayOff.getDay() === 6) return true; // Sobota
  if (dayOff.getDay() === 0) return true; // Niedziela

  // Sprawdza stałe daty świąt
  if (dayOff.getMonth() === 0 && dayOff.getDate() === 1) return true; // Nowy Rok
  if (dayOff.getMonth() === 0 && dayOff.getDate() === 6) return true; // Trzech Króli
  if (dayOff.getMonth() === 4 && dayOff.getDate() === 1) return true; // 1 maja
  if (dayOff.getMonth() === 4 && dayOff.getDate() === 3) return true; // 3 maja
  if (dayOff.getMonth() === 7 && dayOff.getDate() === 15) return true; // Wniebowzięcie Najświętszej Marii Panny, Święto Wojska Polskiego
  if (dayOff.getMonth() === 10 && dayOff.getDate() === 1) return true; // Dzień Wszystkich Świętych
  if (dayOff.getMonth() === 10 && dayOff.getDate() === 11) return true; // Dzień Niepodległości
  if (dayOff.getMonth() === 11 && dayOff.getDate() === 25) return true; // Boże Narodzenie
  if (dayOff.getMonth() === 11 && dayOff.getDate() === 26) return true; // Boże Narodzenie

  // Oblicza datę Wielkanocy
  const year = dayOff.getFullYear();
  const a = year % 19;
  const b = year % 4;
  const c = year % 7;
  let d = (a * 19 + 24) % 30;
  let e = (2 * b + 4 * c + 6 * d + 5) % 7;

  // Korekcje
  if (d === 29 && e === 6) d -= 7;
  if (d === 28 && e === 6 && a > 10) d -= 7;

  // Oblicza datę Wielkanocy
  const easter = new Date(year, 2, 22); // 22 marca
  easter.setDate(easter.getDate() + d + e); // Dodaje dni

  // Sprawdza święta związane z Wielkanocą
  const dayBeforeEaster = new Date(easter);
  dayBeforeEaster.setDate(dayBeforeEaster.getDate() - 1); // Dzień przed Wielkanocą
  const corpusChristi = new Date(easter);
  corpusChristi.setDate(corpusChristi.getDate() - 60); // Boże Ciało

  if (dayOff.toDateString() === dayBeforeEaster.toDateString()) return true; // Wielkanoc (poniedziałek)
  if (dayOff.toDateString() === corpusChristi.toDateString()) return true; // Boże Ciało

  return false; // Nie jest dniem wolnym
}
