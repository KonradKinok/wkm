import React, { useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import { pl } from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import scss from "./DateTimePicer.module.scss";
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
export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  dateTimePickerDate,
  setDateTimePickerDate,
}) => {
  // const [startDate, setStartDate] = useState<Date | null>(new Date());
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
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      placeholderText="Wpisz datę"
      dropdownMode="select"
      onFocus={(e) => e.target.blur()}
      calendarContainer={MyContainer}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}>
      <div style={{ color: "red" }}>Don't forget to check the weather!</div>
    </DatePicker>
  );
};
