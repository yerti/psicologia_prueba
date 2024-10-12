import React from 'react';
import styles from './Dates.module.css';

export interface DateType {
  key: string;
  value: string;
}

interface DatesProps {
  dates: DateType[];
}

function Dates({ dates }: DatesProps) {
  return (
    <div className={styles.contentDates}>
      {dates.map((date, item) => (
        <div key={item} className={styles.date}>
          <h3>{date.key}</h3>
          <p>{date.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Dates;
