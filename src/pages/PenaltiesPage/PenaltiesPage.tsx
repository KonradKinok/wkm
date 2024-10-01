import React, { useState } from "react";
import { DateTimePicker } from "../../components/DateTimePicker/DateTimePicker";
import scss from "./PenaltiesPage.module.scss";

export default function PenaltiesPage() {
  // const [dateTimePickerDate, setDateTimePickerDate] = useState<Date | null>(
  //   new Date(),
  // );
  const [dateTimePickerDate, setDateTimePickerDate] = useState<Date | null>(
    null,
  );
  return (
    <div className={scss["container-penalties-page"]}>
      <div className={scss["container-form"]}>
        <form className={scss["form"]} action="">
          <div className={scss["container-dateTimePicker"]}>
            <label htmlFor="dateTimePicker">
              Wybierz datę sporządzenia umowy, datę sprowadzenia pojazdu do
              Polski:
            </label>
            <DateTimePicker
              dateTimePickerDate={dateTimePickerDate}
              setDateTimePickerDate={setDateTimePickerDate}
            />
          </div>
          <div className={scss["container-radio"]}>
            <label htmlFor="radio-sold">
              <p className={scss["custom-title"]}>Sprzedałem pojazd:</p>
            </label>
            <input
              type="radio"
              name="amount_of_penalty"
              id="radio-sold"
              className={scss["toggle-switch"]}
              defaultChecked={true}
            />
            <label htmlFor="radio-bought">
              <p className={scss["custom-title"]}>
                Kupiłem/sprowadziłem pojazd:
              </p>
            </label>
            <input
              type="radio"
              name="amount_of_penalty"
              id="radio-bought"
              className={scss["toggle-switch"]}
            />
          </div>
          <div className={scss["container-radio"]}>
            <label htmlFor="natural-person">
              <p className={scss["custom-title"]}>Jestem osobą fizyczną:</p>
            </label>
            <input
              type="radio"
              name="type_of_entity"
              id="natural-person"
              className={scss["toggle-switch"]}
              defaultChecked={true}
            />
            <label htmlFor="legal-person">
              <p className={scss["custom-title"]}>
                Jestem przedsiębiorcą prowadzącym obrót pojazdami:
              </p>
            </label>
            <input
              type="radio"
              name="type_of_entity"
              id="legal-person"
              className={scss["toggle-switch"]}
            />
          </div>
        </form>
        <p>
          {dateTimePickerDate ? dateTimePickerDate.toLocaleDateString() : ""}
        </p>
        {/* Konwersja Date do stringa */}
      </div>
    </div>
  );
}
