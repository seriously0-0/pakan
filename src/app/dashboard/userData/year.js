import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./userData.module.css"

const Year = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        // selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy"
        // isClearable
        placeholderText="سال"
        // showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={10}
        className={style.date}

      />
    </div>
  );
};

export default Year;