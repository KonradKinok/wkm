import React, { useState } from "react";
import FormPenalties from "../../components/FormPenalties/FormPenalties";
import ListOfDays from "../../components/ListOfDates/ListOfDays";
import { ButtonUp } from "../../components/ButtonUp/ButtonUp";
import scss from "./PenaltiesPage.module.scss";

export interface FormValues {
  selectedDate: Date | null;
  sold: boolean;
  bought: boolean;
  inheritance: boolean;
  isNaturalPerson: boolean;
  isLegalPerson: boolean;
  detailedData: boolean;
}

export default function PenaltiesPage() {
  const [calculatedData, setCalculatedData] = useState(null);
  const [formValues, setFormValues] = useState<FormValues>({
    selectedDate: null,
    sold: true,
    bought: false,
    isNaturalPerson: true,
    isLegalPerson: false,
    detailedData: false,
    inheritance: false,
  });

  return (
    <div className={scss["container-penalties-page"]}>
      <FormPenalties
        calculatedData={calculatedData}
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
