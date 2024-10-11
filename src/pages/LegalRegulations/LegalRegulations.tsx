import React, { useState } from "react";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import scss from "./LegalRegulations.module.scss";
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

export default function LegalRegulations() {
  return (
    <div className={scss["container-legalregulations-page"]}>
      <h1>Legalregulations</h1>
    </div>
  );
}
