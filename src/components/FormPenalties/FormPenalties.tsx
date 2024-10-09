import React, { useEffect, useState } from "react";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import scss from "./FormPenalties.module.scss";
import * as calculator from "../../globalFunctions/calculator";
import { link } from "fs";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { langDictionary } from "../redux/language/constans";
import { useSelector } from "react-redux";

interface FormValues {
  selectedDate: Date | null;
  sold: boolean;
  bought: boolean;
  isNaturalPerson: boolean;
  isLegalPerson: boolean;
  detailedData: boolean;
}

export interface FormPenaltiesProps {
  setCalculatedData: (data: any) => void; // Zdefiniuj typ dla setCalculatedData
}

export default function FormPenalties({
  setCalculatedData,
}: FormPenaltiesProps) {
  const currentLanguage = useSelector(selectLanguage);
  const [dateTimePickerDate, setDateTimePickerDate] = useState<Date | null>(
    new Date(),
  );

  const [formValues, setFormValues] = useState<FormValues>({
    selectedDate: null, // Zmieniamy typ na Date | null
    sold: true,
    bought: false,
    isNaturalPerson: true,
    isLegalPerson: false,
    detailedData: false,
  });

  useEffect(() => {
    setFormValues((prevData) => ({
      ...prevData,
      selectedDate: dateTimePickerDate,
    }));
    setCalculatedData(null);
  }, [dateTimePickerDate]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Zapobiega domyślnej akcji wysłania formularza
    setFormValues((prevData) => ({
      ...prevData,
      selectedDate: dateTimePickerDate,
      // ponieważ zaznaczenie "Sprzedałem pojazd" automatycznie oznacza, że "Kupiłem pojazd" jest false
    }));
    const {
      selectedDate,
      sold,
      bought,
      isNaturalPerson,
      isLegalPerson,
      detailedData,
    } = formValues;

    // Możesz wyświetlić wartości w konsoli lub przetworzyć je według potrzeby
    console.log("handleSubmit Selected Date:", selectedDate);
    console.log("Sold:", sold);
    console.log("Bought:", bought);
    console.log("Natural Person:", isNaturalPerson);
    console.log("Legal Person:", isLegalPerson);
    console.log("Detailed Data:", detailedData);

    const calculatedDataFunction = calculator.calculationNumberOfDays(
      selectedDate,
      sold,
      bought,
      isNaturalPerson,
      isLegalPerson,
      detailedData,
      currentLanguage,
    );
    console.log(
      "calculator.calculationNumberOfDays",
      calculatedDataFunction?.startDate,
    );
    setCalculatedData(calculatedDataFunction);
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
    }
    setCalculatedData(null);
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
            checked={formValues.bought} // Gdy "sold" jest false, zaznaczone jest "bought"
            onChange={handleChange} // Ten sam handler
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
            checked={formValues.isNaturalPerson} // Gdy "sold" jest false, zaznaczone jest "bought"
            onChange={handleChange} // Ten sam handler
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
            checked={formValues.isLegalPerson} // Gdy "sold" jest false, zaznaczone jest "bought"
            onChange={handleChange} // Ten sam handler
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
            checked={formValues.detailedData} // Gdy "sold" jest false, zaznaczone jest "bought"
            onChange={handleChange} // Ten sam handler
          />
          <button type="submit">
            {langDictionary.formPenaltiesButtonShow[currentLanguage]}
          </button>
        </div>
      </form>
    </div>
  );
}
