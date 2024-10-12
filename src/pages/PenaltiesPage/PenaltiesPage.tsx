import React, { useRef, useState } from "react";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import scss from "./PenaltiesPage.module.scss";
import * as calculator from "../../globalFunctions/calculator";
import FormPenalties from "../../components/FormPenalties/FormPenalties";
import ListOfDays from "../../components/ListOfDates/ListOfDays";
import { ButtonUp } from "../../components/ButtonUp/ButtonUp";
import { useSelector } from "react-redux";
interface ListEntry {
  day: string; // Możesz dostosować typ w zależności od oczekiwanego formatu
  displayedData: string; // Możesz dostosować typ w zależności od oczekiwanego formatu
}
export interface FormValues {
  selectedDate: Date | null;
  sold: boolean;
  bought: boolean;
  isNaturalPerson: boolean;
  isLegalPerson: boolean;
  detailedData: boolean;
}

export default function PenaltiesPage() {
  const ulRef = useRef<HTMLUListElement | null>(null);
  const [calculatedData, setCalculatedData] = useState(null);
  const [formValues, setFormValues] = useState<FormValues>({
    selectedDate: null, // Zmieniamy typ na Date | null
    sold: true,
    bought: false,
    isNaturalPerson: true,
    isLegalPerson: false,
    detailedData: false,
  });
  return (
    <div className={scss["container-penalties-page"]}>
      <FormPenalties
        setCalculatedData={setCalculatedData}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      {calculatedData && (
        <ListOfDays calculatedData={calculatedData} formValues={formValues} />
      )}
      <ButtonUp />
    </div>
  );
}
