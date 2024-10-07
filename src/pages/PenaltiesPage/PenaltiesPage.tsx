import React, { useState } from "react";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import scss from "./PenaltiesPage.module.scss";
import * as calculator from "../../globalFunctions/calculator";
import FormPenalties from "../../components/FormPenalties/FormPenalties";
import ListOfDays from "../../components/ListOfDates/ListOfDays";
import { useSelector } from "react-redux";
interface ListEntry {
  day: string; // Możesz dostosować typ w zależności od oczekiwanego formatu
  displayedData: string; // Możesz dostosować typ w zależności od oczekiwanego formatu
}
interface FormValues {
  selectedDate: Date | null;
  sold: boolean;
  bought: boolean;
  isNaturalPerson: boolean;
  isLegalPerson: boolean;
  detailedData: boolean;
}

export default function PenaltiesPage() {
  const [calculatedData, setCalculatedData] = useState(null);
  return (
    <div className={scss["container-penalties-page"]}>
      <FormPenalties setCalculatedData={setCalculatedData} />
      <ListOfDays calculatedData={calculatedData} />
    </div>
  );
}
