import React, { useState } from "react";
import styles from "./Calendar.module.css";

interface CalendarProps {
  labelName: string;
  onChange?: (date: string) => void ;
}

export default function Calendar({ labelName, onChange }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  return (
    <div className={styles.contentCalendar}>
      <label htmlFor="calendar" >
        {labelName}
      </label>
      <input
        type="date"
        id="calendar"
        value={selectedDate}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Seleccionar"
      />
    </div>
  );
}
