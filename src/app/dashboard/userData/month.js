import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./userData.module.css"


const Month = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM"
        // isClearable
        placeholderText="ماه"
        // showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={10}
        className={style.date}

      />
    </div>
  );
};

export default Month;