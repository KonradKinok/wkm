import React, { forwardRef, useEffect, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { pl } from "date-fns/locale/pl";
import { enGB } from "date-fns/locale/en-GB";
import { uk } from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { selectLanguage } from "../redux/language/selectorsLanguage";
import { langDictionary } from "../redux/language/constans";
import { Languages } from "../redux/language/constans";
import { useSelector } from "react-redux";
import scss from "./DateTimePicer.module.scss";

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
  const currentLanguage = useSelector(selectLanguage);
  const [calendarLanguage, setCalendarLanguage] = useState(pl);

  useEffect(() => {
    if (currentLanguage === Languages.PL) {
      setCalendarLanguage(pl);
    } else if (currentLanguage === Languages.EN) {
      setCalendarLanguage(enGB);
    } else if (currentLanguage === Languages.UA) {
      setCalendarLanguage(uk);
    }
  }, [currentLanguage]);

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
      <button type="button" className={className} onClick={onClick} ref={ref}>
        {value ? value : "Wybierz datę"}
      </button>
    ),
  );
  return (
    <DatePicker
      customInput={<ExampleCustomInput className={scss["input-button"]} />}
      dateFormat="dd.MM.yyyy"
      showIcon
      toggleCalendarOnIconClick
      selected={dateTimePickerDate}
      onChange={(date) => setDateTimePickerDate(date)}
      openToDate={new Date()}
      minDate={new Date("2024/01/01")}
      todayButton={langDictionary.dateTimePickerButtonToday[currentLanguage]}
      name="dateTimePicker"
      locale={calendarLanguage}
      icon={<FaRegCalendarAlt className={scss.icon} />}
      calendarClassName={scss["month-container"]} //months style
      weekDayClassName={() => scss["week-day"]}
      dayClassName={(date) => {
        // Sprawdzenie, czy dany dzień jest wybrany
        const isSelected =
          dateTimePickerDate &&
          date.toDateString() === dateTimePickerDate.toDateString();
        return isSelected ? scss["selected-day"] : scss["day-class"];
      }}
      popperClassName={scss["drop-down-control"]}
      wrapperClassName={scss.wrapperClass}
      monthClassName={() => scss.customMonthDropdown} // Styl dla dropdown wyboru miesiąca
      yearClassName={() => scss.customYearDropdown} // Styl dla dropdown wyboru roku
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      placeholderText="Wpisz datę"
      dropdownMode="select"
      // calendarContainer={MyContainer}
      readonly="readonly"
      // onCalendarClose={handleCalendarClose}
    >
      {/* <div style={{ color: "red" }}>Don't forget to check the weather!</div> */}
    </DatePicker>
  );
};
