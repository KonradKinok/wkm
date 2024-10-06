import React from "react";
import scss from "./ListOfDays.module.scss";
import { FormValues } from "../FormPenalties/FormPenalties";
interface FormPenaltiesProps {
  dateTimePickerDate: Date | null; // Typ Date lub null
  setDateTimePickerDate: React.Dispatch<React.SetStateAction<Date | null>>; // Funkcja do ustawiania daty
  formValues: FormValues; // Typ formValues (interfejs już zdefiniowany)
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>; // Funkcja do ustawiania wartości formularza
}
export default function ListOfDays() {
  return <ul className={scss["container-list-of-days"]}></ul>;
}
