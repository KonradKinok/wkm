import { langDictionary } from "../components/redux/language/constans";
import { FaRegCalendar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export interface ListEntry {
  nextDayOfTheDeadline: string | null; // Możesz dostosować typ w zależności od oczekiwanego formatu
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
  currentLanguage: "en" | "pl" | "ua",
): { listOfDates: ListEntry[]; startDate: Date } | null {

  if (selectedDate) {
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const data_14_03_2020 = new Date(2020, 2, 14); // Miesiące są zero-indexowane w JavaScript
    const data_23_05_2020 = new Date(2020, 4, 23);
    let listOfDates: ListEntry[] = [];
    const startDate = new Date(selectedDate);

    //penalty term
    let firstPenaltyTerm, secondPenaltyTerm;
    if (sold) {
      firstPenaltyTerm = 30;
      secondPenaltyTerm = 30;
    } else {
      firstPenaltyTerm = isNaturalPerson ? 30 : 90;
      secondPenaltyTerm = 180;
    }
    let secondPunishment = false;

    const formattedFirstPenaltyNaturalPersonRegistrationAmount: string =
      formatCurrency(500);
    const formattedFirstPenaltyLegalPersonRegistrationAmount: string =
      formatCurrency(1000);
    const formattedSecondPenaltyNaturalPersonRegistrationAmount: string =
      formatCurrency(1000);
    const formattedSecondPenaltyLegalPersonRegistrationAmount: string =
      formatCurrency(2000);

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
      newDate.setDate(startDate.getDate() + nextDay); // Dodajemy odpowiednią liczbę dni

      const currentDay = new Date(newDate); // Tworzymy nowy obiekt daty (skopiowany)
      const currentDayString = currentDay.toLocaleDateString(
        "pl-PL",
        dateOptions,
      );
      const dayOfWeekString = currentDay.toLocaleString("pl-PL", {
        weekday: "short",
      });

      //date of an agreement
      if (nextDayOfTheDeadline == 0) {
        const description = sold
          ? langDictionary.calculationNumberOfDays_DateOfContract[currentLanguage]
          : `${langDictionary.calculationNumberOfDays_DateOfContract[currentLanguage]} / 
          ${langDictionary.calculationNumberOfDays_ImportingVehicle[currentLanguage]}`;

        listOfDates.push({
          nextDay: `${nextDay.toString().padStart(3, "0")}`,
          nextDayOfTheDeadline: `${nextDayOfTheDeadline.toString().padStart(3, "0")}`, // Numerowanie dni
          nextData: currentDayString,
          nameDayOfWeek: dayOfWeekString,
          description: `${description}`,
          iconName: FaRegCalendar,
          iconClass: "icon-day-of-agreement",
        });
        nextDayOfTheDeadline++;
        nextDay++;
        continue;
      }
      if (nextDayOfTheDeadline == firstPenaltyTerm) {
        if (isHoliday(currentDay)) {
          const description = langDictionary.calculationNumberOfDays_DayOff[currentLanguage];
          listOfDates.push({
            nextDay: `${nextDay.toString().padStart(3, "0")}`,
            nextDayOfTheDeadline: `---`, // Numerowanie dni
            nextData: currentDayString,
            nameDayOfWeek: dayOfWeekString,
            description: `${description}`,
            iconName: FaRegCalendar,
            iconClass: "",
          });
          nextDay++;
          continue;
        }
        const description = langDictionary.calculationNumberOfDays_LastDeadline[currentLanguage];
        listOfDates.push({
          nextDay: `${nextDay.toString().padStart(3, "0")}`,
          nextDayOfTheDeadline: `${nextDayOfTheDeadline.toString().padStart(3, "0")}`, // Numerowanie dni
          nextData: currentDay.toLocaleDateString("pl-PL", dateOptions),
          nameDayOfWeek: dayOfWeekString,
          description: `${description}`,
          iconName: FaRegCalendar,
          iconClass: "icon-day-before-punish",
        });
        nextDayOfTheDeadline++;
        nextDay++;
        continue;
      }
      if (nextDayOfTheDeadline == firstPenaltyTerm + 1) {
        let description = "";
        if (secondPunishment) {
          description = sold
            ? `${langDictionary.calculationNumberOfDays_Penalty[currentLanguage]}: ${notificationOfSaleAmount}`
            : `II ${langDictionary.calculationNumberOfDays_Penalty[currentLanguage]}: ${secondPenaltyRegistrationAmount}`;
        } else {
          description = sold
            ? `${langDictionary.calculationNumberOfDays_Penalty[currentLanguage]}: ${notificationOfSaleAmount}`
            : `I ${langDictionary.calculationNumberOfDays_Penalty[currentLanguage]}: ${firstPenaltyRegistrationAmount}`;
        }

        listOfDates.push({
          nextDay: `${nextDay.toString().padStart(3, "0")}`,
          nextDayOfTheDeadline: null, // Numerowanie dni
          nextData: currentDay.toLocaleDateString("pl-PL", dateOptions), // Formatowanie daty
          nameDayOfWeek: dayOfWeekString,
          description: `${description}`,
          iconName: GiMoneyStack,
          iconClass: "icon-day-of-punish",
        });

        nextDay++;
        nextDayOfTheDeadline = nextDay;
        if (firstPenaltyTerm < secondPenaltyTerm) {
          firstPenaltyTerm = secondPenaltyTerm;
          secondPunishment = true;
        }

        continue;
      }

      let description = "";
      if (secondPunishment) {
        description = sold
          ? langDictionary.calculationNumberOfDays_DeadlineDay[currentLanguage]
          : `${langDictionary.calculationNumberOfDays_DeadlineDay[currentLanguage]} II`;
      } else {
        description = sold
          ? langDictionary.calculationNumberOfDays_DeadlineDay[currentLanguage]
          : `${langDictionary.calculationNumberOfDays_DeadlineDay[currentLanguage]} I`;
      }
      listOfDates.push({
        nextDay: `${nextDay.toString().padStart(3, "0")}`,
        nextDayOfTheDeadline: `${nextDayOfTheDeadline.toString().padStart(3, "0")}`, // Numerowanie dni
        nextData: currentDay.toLocaleDateString("pl-PL", dateOptions),
        nameDayOfWeek: dayOfWeekString,
        description: `${nextDayOfTheDeadline.toString().padStart(2, "0")} ${description}`,
        iconName: FaRegCalendar,
        iconClass: "",
      });
      nextDayOfTheDeadline++;
      nextDay++;
    } while (nextDayOfTheDeadline < secondPenaltyTerm + 2);

    return { listOfDates, startDate }; // Zwracamy obiekt z listą dat i datą początkową
  }

  return null; // Jeśli selectedDate jest null, zwróć null
}



// function isHoliday1(dayOff: Date): boolean {
//   // Sprawdza dni wolne w tygodniu
//   if (dayOff.getDay() === 6) return true; // Sobota
//   if (dayOff.getDay() === 0) return true; // Niedziela

//   // Sprawdza stałe daty świąt
//   if (dayOff.getMonth() === 0 && dayOff.getDate() === 1) return true; // Nowy Rok
//   if (dayOff.getMonth() === 0 && dayOff.getDate() === 6) return true; // Trzech Króli
//   if (dayOff.getMonth() === 4 && dayOff.getDate() === 1) return true; // 1 maja
//   if (dayOff.getMonth() === 4 && dayOff.getDate() === 3) return true; // 3 maja
//   if (dayOff.getMonth() === 7 && dayOff.getDate() === 15) return true; // Wniebowzięcie Najświętszej Marii Panny, Święto Wojska Polskiego
//   if (dayOff.getMonth() === 10 && dayOff.getDate() === 1) return true; // Dzień Wszystkich Świętych
//   if (dayOff.getMonth() === 10 && dayOff.getDate() === 11) return true; // Dzień Niepodległości
//   if (dayOff.getMonth() === 11 && dayOff.getDate() === 24) return true; // Boże Narodzenie
//   if (dayOff.getMonth() === 11 && dayOff.getDate() === 25) return true; // Boże Narodzenie
//   if (dayOff.getMonth() === 11 && dayOff.getDate() === 26) return true; // Boże Narodzenie

//   // Oblicza datę Wielkanocy
//   const year = dayOff.getFullYear();
//   const a = year % 19;
//   const b = year % 4;
//   const c = year % 7;
//   let d = (a * 19 + 24) % 30;
//   let e = (2 * b + 4 * c + 6 * d + 5) % 7;

//   // Korekcje
//   if (d === 29 && e === 6) d -= 7;
//   if (d === 28 && e === 6 && a > 10) d -= 7;

//   // Oblicza datę Wielkanocy
//   const easter = new Date(year, 2, 22); // 22 marca
//   easter.setDate(easter.getDate() + d + e); // Dodaje dni

//   // Sprawdza święta związane z Wielkanocą
//   const dayBeforeEaster = new Date(easter);
//   dayBeforeEaster.setDate(dayBeforeEaster.getDate() - 1); // Dzień przed Wielkanocą
//   const corpusChristi = new Date(easter);
//   corpusChristi.setDate(corpusChristi.getDate() - 60); // Boże Ciało

//   if (dayOff.toDateString() === dayBeforeEaster.toDateString()) return true; // Wielkanoc (poniedziałek)
//   if (dayOff.toDateString() === corpusChristi.toDateString()) return true; // Boże Ciało

//   return false; // Nie jest dniem wolnym
// }
function isHoliday(dayOff: Date): boolean {
  // Sprawdza dni wolne w tygodniu
  if (dayOff.getDay() === 6) return true; // Sobota
  if (dayOff.getDay() === 0) return true; // Niedziela

  // Sprawdza stałe daty świąt
  if (dayOff.getMonth() === 0 && dayOff.getDate() === 1) return true; // Nowy Rok
  if (dayOff.getMonth() === 0 && dayOff.getDate() === 6) return true; // Trzech Króli
  if (dayOff.getMonth() === 4 && dayOff.getDate() === 1) return true; // 1 maja
  if (dayOff.getMonth() === 4 && dayOff.getDate() === 3) return true; // 3 maja
  if (dayOff.getMonth() === 7 && dayOff.getDate() === 15) return true; // Wniebowzięcie NMP / Święto Wojska Polskiego
  if (dayOff.getMonth() === 10 && dayOff.getDate() === 1) return true; // Wszystkich Świętych
  if (dayOff.getMonth() === 10 && dayOff.getDate() === 11) return true; // Święto Niepodległości
  if (dayOff.getMonth() === 11 && dayOff.getDate() === 24) return true; // Boże Narodzenie (pierwszy dzień)
  if (dayOff.getMonth() === 11 && dayOff.getDate() === 25) return true; // Boże Narodzenie (drugi dzień)

  // Oblicza datę Wielkanocy (algorytm Gaussa)
  const year = dayOff.getFullYear();
  const a = year % 19;
  const b = year % 4;
  const c = year % 7;
  let d = (a * 19 + 24) % 30;
  let e = (2 * b + 4 * c + 6 * d + 5) % 7;

  // Korekcje
  if (d === 29 && e === 6) d -= 7;
  if (d === 28 && e === 6 && a > 10) d -= 7;

  // Wyznacza datę Wielkanocy (niedziela)
  const easter = new Date(year, 2, 22); // 22 marca
  easter.setDate(easter.getDate() + d + e);

  // Święta ruchome
  const easterMonday = new Date(easter);
  easterMonday.setDate(easterMonday.getDate() + 1); // Poniedziałek Wielkanocny

  const corpusChristi = new Date(easter);
  corpusChristi.setDate(corpusChristi.getDate() + 60); // Boże Ciało (60 dni po Wielkanocy)

  if (dayOff.toDateString() === easter.toDateString()) return true; // Wielkanoc (niedziela)
  if (dayOff.toDateString() === easterMonday.toDateString()) return true; // Poniedziałek Wielkanocny
  if (dayOff.toDateString() === corpusChristi.toDateString()) return true; // Boże Ciało

  return false; // Nie jest dniem wolnym
}

console.log("Boże Ciało", isHoliday(new Date(2025, 5, 19))); // 19.06.2025 → Boże Ciało 2025 → true
console.log("Poniedziałek Wielkanocny", isHoliday(new Date(2025, 3, 21))); // Poniedziałek Wielkanocny 2025 → true
console.log("Boże Ciało 2024", isHoliday(new Date(2024, 5, 30))); // Boże Ciało 2024 → true
console.log("Boże Ciało 2023", isHoliday(new Date(2023, 5, 8)));  // Boże Ciało 2023 → true
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(amount);
}
