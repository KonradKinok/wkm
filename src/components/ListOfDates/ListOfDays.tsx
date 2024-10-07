import React from "react";
import scss from "./ListOfDays.module.scss";
import { ListEntry } from "../../globalFunctions/calculator";
interface CalculatedData {
  listOfDates: ListEntry[];
  startDate: string | Date;
}
interface ListOfDaysProps {
  calculatedData: CalculatedData | null; // Use null to handle cases when no data is available
}
export default function ListOfDays({ calculatedData }: ListOfDaysProps) {
  return (
    <ul className={scss["container-list-of-days"]}>
      {calculatedData?.listOfDates.map(
        (listOfDates: ListEntry, index: number) => {
          const IconComponent = listOfDates.iconName;

          return (
            <li className={scss["item-list-of-days"]} key={index}>
              <div>{listOfDates.nextDay}.</div>
              <div>{listOfDates.nextData}</div>
              <div>{listOfDates.nameDayOfWeek}</div>
              <div>
                {listOfDates.nextDayOfTheDeadline}
                <IconComponent
                  className={`${scss["icon"]} ${scss[listOfDates.iconClass]}`}
                />
              </div>
              <div>{listOfDates.description}</div>
            </li>
          );
        },
      )}
    </ul>
  );
}
