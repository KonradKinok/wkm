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
            <label htmlFor="dateTimePicker">Wybierz datę:</label>
            <DateTimePicker
              dateTimePickerDate={dateTimePickerDate}
              setDateTimePickerDate={setDateTimePickerDate}
            />
          </div>
          <label htmlFor="toggle-switch">
            <p className={scss["custom-title"]}>Free cancellation</p>
          </label>
          <input
            type="checkbox"
            name="toggle-switch"
            id="toggle-switch"
            className={scss["toggle-switch"]}
          />
        </form>
        <p>
          {dateTimePickerDate ? dateTimePickerDate.toLocaleDateString() : ""}
        </p>
        {/* Konwersja Date do stringa */}
      </div>
    </div>
  );
}
