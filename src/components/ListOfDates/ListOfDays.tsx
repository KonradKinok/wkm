import React from "react";
import scss from "./ListOfDays.module.scss";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { langDictionary } from "../redux/language/constans";
import { ListEntry } from "../../globalFunctions/calculator";
import { useSelector } from "react-redux";
interface CalculatedData {
  listOfDates: ListEntry[];
  startDate: string | Date;
}
interface ListOfDaysProps {
  calculatedData: CalculatedData | null; // Use null to handle cases when no data is available
}
export default function ListOfDays({ calculatedData }: ListOfDaysProps) {
  const currentLanguage = useSelector(selectLanguage);

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

      {calculatedData?.listOfDates.map(
        (listOfDates: ListEntry, index: number) => {
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
        },
      )}
    </ul>
  );
}
