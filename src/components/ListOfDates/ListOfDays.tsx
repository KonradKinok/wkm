import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { langDictionary } from "../redux/language/constans";
import { ListEntry } from "../../globalFunctions/calculator";
import { FormValues } from "../../pages/PenaltiesPage/PenaltiesPage";
import scss from "./ListOfDays.module.scss";

export interface CalculatedData {
  listOfDates: ListEntry[];
  startDate: string | Date;
}

interface ListOfDaysProps {
  calculatedData: CalculatedData | null;
  formValues: FormValues;
}

export default function ListOfDays({
  calculatedData,
  formValues,
}: ListOfDaysProps) {
  const currentLanguage = useSelector(selectLanguage);
  const [currentList, setCurrentList] = useState<ListEntry[]>([]);

  useEffect(() => {
    if (formValues.detailedData) {
      setCurrentList(calculatedData?.listOfDates || []);
    } else {
      const filteredItems = calculatedData?.listOfDates.filter((item) => {
        const description = item.description.toLowerCase(); // Konwersja na małe litery dla porównania
        return (
          description.includes(
            langDictionary.calculationNumberOfDays_DateOfContract[
              currentLanguage
            ],
          ) ||
          description.includes(
            langDictionary.calculationNumberOfDays_Penalty[currentLanguage],
          ) ||
          description.includes(
            langDictionary.calculationNumberOfDays_LastDeadline[
              currentLanguage
            ],
          )
        );
      });
      setCurrentList(filteredItems || []);
    }
  }, [formValues.detailedData, calculatedData?.listOfDates]);

  useEffect(() => {
    window.scrollTo({
      top: 685,
      left: 0,
      behavior: "smooth",
    });
  }, [currentList]);

  return (
    <ul className={scss["container-list-of-days"]}>
      {calculatedData && (
        <li className={scss["item-list-of-days"]} key={"column-title"}>
          <div>{langDictionary.listOfDaysNextDay[currentLanguage]}</div>
          <div>{langDictionary.listOfDaysDate[currentLanguage]}</div>
          <div className={scss["container-icon"]}>
            {langDictionary.listOfDaysDeadlineDay[currentLanguage]}
          </div>
          <div>{langDictionary.listOfDaysDescription[currentLanguage]}</div>
        </li>
      )}

      {currentList.map((listOfDates: ListEntry, index: number) => {
        const IconComponent = listOfDates.iconName;

        return (
          <li className={scss["item-list-of-days"]} key={index}>
            <div>{listOfDates.nextDay}.</div>
            <div>
              {listOfDates.nextData} {listOfDates.nameDayOfWeek}
            </div>
            <div className={scss["container-icon"]}>
              <IconComponent
                className={`${scss["icon"]} ${scss[listOfDates.iconClass]}`}
              />
              <span className={scss["text-overlay"]}>
                {listOfDates.nextDayOfTheDeadline}
              </span>
            </div>
            <div>{listOfDates.description}</div>
          </li>
        );
      })}
    </ul>
  );
}
