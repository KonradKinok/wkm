import React, { useState } from "react";
import DatePicker, {
  CalendarContainer,
  DatePickerProps,
} from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import { pl } from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import style from "./DateTimePicker.module.scss";
import calendar from "../../images/dateTimePicker/calendar.svg";

// Typowanie propsów dla MyContainer
interface MyContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const DatePickerMonthsYears: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleCalendarClose = () => {
    console.log("Calendar closed");
  };
  const handleCalendarOpen = () => console.log("Calendar opened");

  const MyContainer: React.FC<MyContainerProps> = ({ className, children }) => {
    return (
      <div style={{ padding: "8px", background: "#216ba5", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "#f0f0f0" }}>
            What is your favorite day?
          </div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      showIcon
      toggleCalendarOnIconClick
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      openToDate={new Date(`${new Date().getFullYear()}/01/01`)}
      minDate={new Date("2020/01/01")}
      todayButton="Dzisiaj"
      // onChangeRaw={(event) => handleChangeRaw(event.target.value)}
      locale={pl}
      icon={
        <svg className={style.iconContainer}>
          <use xlinkHref={`${calendar}#calendar`} />
        </svg>
      }
      // style
      className={style.inputDateTimePicker} //input style
      calendarClassName={style.inputWeek} //months style
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      calendarContainer={MyContainer}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}>
      <div style={{ color: "red" }}>Don't forget to check the weather!</div>
    </DatePicker>
  );
};
