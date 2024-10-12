import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelectNumber.module.css';
import CaretDownIcon from '@/shared/Icons/CaretDownIcon';
import CheckmarkOutline from '@/shared/Icons/CheckmarkOutline';


interface NumberOption {
  value: number;
  label: string;
}

interface CustomSelectNumberProps {
  options: NumberOption[];
  value: NumberOption;
  onChange: (selectedOption: NumberOption) => void;
  labelName: string;
}

const CustomSelectNumber: React.FC<CustomSelectNumberProps> = ({
  options,
  value,
  onChange,
  labelName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: NumberOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.contentCustomSelect} ref={selectRef}>
      <label htmlFor='custom-select-number'>{labelName}</label>
      <div
        className={styles.contentArrowSelectOption}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.contentImageArrow}>
          <CaretDownIcon color={isOpen ? '#3F51B5' : '#979797'} />
        </div>
        <span>{selectedOption.label}</span>
      </div>
      {isOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.optionItem} ${
                selectedOption.value === option.value
                  ? styles.selectedOption
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <p>{option.label}</p>
              {selectedOption.value === option.value && <CheckmarkOutline />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelectNumber;
