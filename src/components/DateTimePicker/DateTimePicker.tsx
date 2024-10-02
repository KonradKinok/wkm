import React, { forwardRef, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import { pl } from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import scss from "./DateTimePicer.module.scss";
import "./DateTimePicer.module.scss";
import calendar from "../../images/dateTimePicker/calendar.svg";
import { FaRegCalendarAlt } from "react-icons/fa";
// Typowanie propsów dla MyContainer
interface MyContainerProps {
  className?: string;
  children: React.ReactNode;
}
interface DateTimePickerProps {
  dateTimePickerDate: Date | null;
  setDateTimePickerDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  className?: string;
}
export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  dateTimePickerDate,
  setDateTimePickerDate,
}) => {
  // Usunięcie fokusu z pola po zamknięciu kalendarza
  const handleCalendarClose = () => {
    console.log("Calendar closed");

    // Usunięcie fokusu z pola po zamknięciu kalendarza
    const inputElement = document.querySelector('input[name="dateTimePicker"]');
    if (inputElement) {
      setTimeout(() => {
        (inputElement as HTMLElement).blur();
      }, 100); // small delay to allow the picker to close properly
    }
  };
  const handleCalendarOpen = () => console.log("Calendar opened");

  const MyContainer: React.FC<MyContainerProps> = ({ className, children }) => {
    return (
      <div style={{ padding: "8px", background: "red", color: "#fff" }}>
        <CalendarContainer className={className}>
          <div style={{ background: "yellow" }}>What is your favorite day?</div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };
  const ExampleCustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
    ({ value, onClick, className }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    ),
  );
  return (
    <DatePicker
      // customInput={<ExampleCustomInput className={scss.customInput} />}
      dateFormat="dd.MM.yyyy"
      showIcon
      toggleCalendarOnIconClick
      selected={dateTimePickerDate}
      onChange={(date) => setDateTimePickerDate(date)}
      openToDate={new Date(`${new Date().getFullYear()}/01/01`)}
      minDate={new Date("2020/01/01")}
      todayButton="Dzisiaj"
      name="dateTimePicker"
      // onChangeRaw={(event) => handleChangeRaw(event.target.value)}
      locale={pl}
      // icon={
      //   <svg className={scss.iconContainer}>
      //     <use xlinkHref={`${calendar}#calendar`} />
      //   </svg>
      // }
      icon={<FaRegCalendarAlt />}
      // style
      className={scss.inputDateTimePicker} //input style
      calendarClassName={scss.inputWeek} //months style
      weekDayClassName={() => scss.weekDayClassName} // works
      // dayClassName={() => scss.dayClass}
      dayClassName={(date) => {
        // Sprawdzenie, czy dany dzień jest wybrany
        const isSelected =
          dateTimePickerDate &&
          date.toDateString() === dateTimePickerDate.toDateString();
        return isSelected ? scss.selectedDay : scss.dayClass;
      }}
      popperClassName={scss.poperClass}
      wrapperClassName={scss.wrapperClass}
      monthClassName={() => scss.customMonthDropdown} // Styl dla dropdown wyboru miesiąca
      yearClassName={() => scss.customYearDropdown} // Styl dla dropdown wyboru roku
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      placeholderText="Wpisz datę"
      dropdownMode="select"
      // onFocus={(e) => e.target.blur()}
      // calendarContainer={MyContainer}
      readonly="readonly"
      // onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}>
      <div style={{ color: "red" }}>Don't forget to check the weather!</div>
    </DatePicker>
  );
};
