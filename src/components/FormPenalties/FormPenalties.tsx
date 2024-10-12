import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as calculator from "../../globalFunctions/calculator";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { langDictionary } from "../redux/language/constans";
import { FormValues } from "../../pages/PenaltiesPage/PenaltiesPage";
import scss from "./FormPenalties.module.scss";

export interface FormPenaltiesProps {
  setCalculatedData: (data: any) => void; // Zdefiniuj typ dla setCalculatedData
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

export default function FormPenalties({
  setCalculatedData,
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
      isNaturalPerson,
      isLegalPerson,
      detailedData,
    } = formValues;

    const calculatedDataFunction = calculator.calculationNumberOfDays(
      selectedDate,
      sold,
      bought,
      isNaturalPerson,
      isLegalPerson,
      detailedData,
      currentLanguage,
    );

    setCalculatedData(calculatedDataFunction);
    window.scrollTo({
      top: 700, // Liczba pikseli, o którą przewija się strona w pionie
      left: 0, // Liczba pikseli, o którą przewija się strona w poziomie
      behavior: "smooth", // Ustawienie płynnego przewijania
    });
  };

  useEffect(() => {
    setCalculatedData(null);
  }, [currentLanguage]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, id } = e.target;

    if (id === "radio-sold") {
      setFormValues((prevData) => ({
        ...prevData,
        sold: true,
        bought: false, // ponieważ zaznaczenie "Sprzedałem pojazd" automatycznie oznacza, że "Kupiłem pojazd" jest false
      }));
    } else if (id === "radio-bought") {
      setFormValues((prevData) => ({
        ...prevData,
        sold: false,
        bought: true, // ponieważ zaznaczenie "Kupiłem pojazd" automatycznie oznacza, że "Sprzedałem pojazd" jest false
      }));
    } else if (id === "natural-person") {
      setFormValues((prevData) => ({
        ...prevData,
        isNaturalPerson: true,
        isLegalPerson: false, // ponieważ zaznaczenie "Kupiłem pojazd" automatycznie oznacza, że "Sprzedałem pojazd" jest false
      }));
    } else if (id === "legal-person") {
      setFormValues((prevData) => ({
        ...prevData,
        isNaturalPerson: false,
        isLegalPerson: true, // ponieważ zaznaczenie "Kupiłem pojazd" automatycznie oznacza, że "Sprzedałem pojazd" jest false
      }));
    } else if (name === "detailed-data") {
      // Obsługa checkboxa
      setFormValues((prevData) => ({
        ...prevData,
        detailedData: checked, // Aktualizowanie wartości checkboxa
      }));
      window.scrollBy(0, 120);
    }
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
