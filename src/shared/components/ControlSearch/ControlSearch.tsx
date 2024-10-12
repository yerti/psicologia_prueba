import React, { useState } from 'react';
import styles from './ControlSearch.module.css';
import IconSearch from '@/shared/Icons/IconSearch';


interface ControlSearchProps {
  value: string | number;
  labelName: string;
  handleSearch: React.ChangeEventHandler<HTMLInputElement>;
}
export default function ControlSearch({
  value,
  labelName,
  handleSearch,
}: ControlSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  return (
    <div className={styles.contentControlSearch}>
      <div className={styles.imgSearchControl}>
        <IconSearch />
      </div>
      <label className={styles.label} htmlFor='buscar'>
        {labelName}
      </label>
      <input
        type='text'
        id='buscar'
        onFocus={handleFocus}
        onChange={handleSearch}
      />
    </div>
  );
}
