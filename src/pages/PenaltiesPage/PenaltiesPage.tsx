import React, { useState } from "react";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import scss from "./PenaltiesPage.module.scss";
import * as calculator from "../../globalFunctions/calculator";
import FormPenalties from "../../components/FormPenalties/FormPenalties";
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
let temp: { listOfDates: ListEntry[]; startDate: Date } | null = null;
export default function PenaltiesPage() {
  const [dateTimePickerDate, setDateTimePickerDate] = useState<Date | null>(
    new Date(),
  );

  const [formValues, setFormValues] = useState<FormValues>({
    selectedDate: null as Date | null, // Zmieniamy typ na Date | null
    sold: true,
    bought: false,
    isNaturalPerson: true,
    isLegalPerson: false,
    detailedData: false,
  });

  return (
    <div className={scss["container-penalties-page"]}>
      <FormPenalties
        dateTimePickerDate={dateTimePickerDate}
        setDateTimePickerDate={setDateTimePickerDate}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </div>
  );
}
