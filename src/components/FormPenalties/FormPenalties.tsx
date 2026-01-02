import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as calculator from "../../globalFunctions/calculator";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { langDictionary } from "../redux/language/constans";
import { FormValues } from "../../pages/PenaltiesPage/PenaltiesPage";
import { CalculatedData } from "../ListOfDates/ListOfDays";
import { CheckboxRegular } from "../CheckboxRegular/CheckboxRegular";
import scss from "./FormPenalties.module.scss";

export interface FormPenaltiesProps {
  setCalculatedData: (data: any) => void; // Zdefiniuj typ dla setCalculatedData
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  calculatedData: CalculatedData | null;
}

export default function FormPenalties({
  setCalculatedData,
  calculatedData,
  formValues,
  setFormValues,
}: FormPenaltiesProps) {
  const currentLanguage = useSelector(selectLanguage);
  const [dateTimePickerDate, setDateTimePickerDate] = useState<Date | null>(
    new Date(),
  );

  useEffect(() => {
    setFormValues((prevData) => ({
      ...prevData,
      selectedDate: dateTimePickerDate,
    }));
    setCalculatedData(null);
  }, [dateTimePickerDate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValues((prevData) => ({
      ...prevData,
      selectedDate: dateTimePickerDate,
    }));
    const {
      selectedDate,
      sold,
      bought,
      inheritance,
      isNaturalPerson,
      isLegalPerson,
      detailedData,
    } = formValues;

    const calculatedDataFunction = calculator.calculationNumberOfDays(
      selectedDate,
      sold,
      bought,
      inheritance,
      isNaturalPerson,
      isLegalPerson,
      detailedData,
      currentLanguage,
    );

    setCalculatedData(calculatedDataFunction);
  };

  useEffect(() => {
    setCalculatedData(null);
  }, [currentLanguage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, id } = e.target;
    setFormValues((prev) => {
      switch (id) {
        case "radio-sold":
          return { ...prev, sold: true, bought: false, inheritance: false };
        case "radio-bought":
          return { ...prev, sold: false, bought: true, inheritance: false };
        case "radio-inheritance":
          return {
            ...prev,
            sold: false,
            bought: false,
            inheritance: true,
            isNaturalPerson: true,
            isLegalPerson: false,
          };
        case "natural-person":
          return { ...prev, isNaturalPerson: true, isLegalPerson: false };
        case "legal-person":
          if (formValues.inheritance) {
            return {
              ...prev,
              sold: true,
              inheritance: false,
              isNaturalPerson: false,
              isLegalPerson: true,
            };
          }
          return {
            ...prev,
            isNaturalPerson: false,
            isLegalPerson: true,
          };
        case "detailed-data":
          return { ...prev, detailedData: checked };
        default:
          return { ...prev, [name]: checked };
      }
    });
    if (name !== "detailed-data") {
      setCalculatedData(null);
    }
  };

  return (
    <div className={scss["container-form"]}>
      <form className={scss["form"]} onSubmit={handleSubmit}>
        <div className={scss["container-dateTimePicker"]}>
          <label htmlFor="dateTimePicker">
            {langDictionary.formPenaltiesStartDate[currentLanguage]}
          </label>
          <DateTimePicker
            dateTimePickerDate={dateTimePickerDate}
            setDateTimePickerDate={setDateTimePickerDate}
          />
        </div>
        <div className={scss["container-radio"]}>
          <label htmlFor="radio-sold">
            <p className={scss["custom-title"]}>
              {langDictionary.formPenaltiesSoldVehicle[currentLanguage]}
            </p>
          </label>
          <input
            type="radio"
            name="amount_of_penalty"
            id="radio-sold"
            className={scss["toggle-switch"]}
            checked={formValues.sold} // Ustawienie, czy input jest zaznaczony
            onChange={handleChange}
          />
          <label htmlFor="radio-bought">
            <p className={scss["custom-title"]}>
              {langDictionary.formPenaltiesBuyVehicle[currentLanguage]}
            </p>
          </label>
          <input
            type="radio"
            name="amount_of_penalty"
            id="radio-bought"
            checked={formValues.bought}
            onChange={handleChange}
            className={scss["toggle-switch"]}
          />
          <label htmlFor="radio-inheritance">
            <p className={scss["custom-title"]}>
              {langDictionary.formPenaltiesInheritance[currentLanguage]}
            </p>
          </label>
          <input
            type="radio"
            name="amount_of_penalty"
            id="radio-inheritance"
            checked={formValues.inheritance}
            onChange={handleChange}
            className={scss["toggle-switch"]}
          />
        </div>
        <div className={scss["container-radio"]}>
          <label htmlFor="natural-person">
            <p className={scss["custom-title"]}>
              {langDictionary.formPenaltiesNaturalPerson[currentLanguage]}
            </p>
          </label>
          <input
            type="radio"
            name="type_of_entity"
            id="natural-person"
            checked={formValues.isNaturalPerson}
            onChange={handleChange}
            className={scss["toggle-switch"]}
          />
          <label htmlFor="legal-person">
            <p className={scss["custom-title"]}>
              {langDictionary.formPenaltiesLegalPerson[currentLanguage]}
            </p>
          </label>
          <input
            type="radio"
            name="type_of_entity"
            id="legal-person"
            checked={formValues.isLegalPerson}
            onChange={handleChange}
            className={scss["toggle-switch"]}
          />
        </div>
        <div
          className={`${scss["container-radio"]} ${scss["container-button"]}`}>
          <label htmlFor="detailed-data">
            <p className={scss["custom-title"]}>
              {langDictionary.formPenaltiesDetailedData[currentLanguage]}
            </p>
          </label>
          <input
            type="checkbox"
            name="detailed-data"
            id="detailed-data"
            className={scss["toggle-switch"]}
            checked={formValues.detailedData}
            onChange={handleChange}
          />
          <button type="submit">
            {langDictionary.formPenaltiesButtonShow[currentLanguage]}
          </button>
        </div>
      </form>
    </div>
  );
}
