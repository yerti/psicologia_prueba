import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelectTest.module.css';
import { Test } from '@/shared/types/entities/Test';
import CaretDownIcon from '@/shared/Icons/CaretDownIcon';
import CheckmarkOutline from '@/shared/Icons/CheckmarkOutline';



interface CustomSelectProps {
  options: Test[];
  value: Test | null; // Permite que el valor inicial sea null
  onChange: (value: Test) => void;
  labelName: string;
}

export default function CustomSelectTest({
  options,
  value,
  onChange,
  labelName,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Test | null>(null); // Inicialmente null
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: Test) => {
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
    <div>
      <label className={styles.label} htmlFor='custom-select'>
        {labelName}
      </label>
      <div
        className={styles.contentCustomSelect}
        onClick={() => setIsOpen(!isOpen)}
        ref={selectRef}
      >
        <div className={styles.contentArrorwSelectOption}>
          <div
            className={styles.contentArrowSelectOption}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={styles.contentImageArrow}>
              <CaretDownIcon color={isOpen ? '#3F51B5' : '#979797'} />
            </div>
          </div>
          <span>
            {selectedOption ? selectedOption.title : 'Seleccione un test'}{' '}
            {/* Mensaje inicial */}
          </span>
        </div>
        {isOpen && (
          <div className={styles.optionsList}>
            {options.map((option, index) => (
              <div
                key={index}
                className={styles.optionItem}
                onClick={() => handleOptionClick(option)}
              >
                <p
                  className={
                    selectedOption?.testId === option.testId
                      ? styles.selectedOption
                      : ''
                  }
                >
                  {option.title}
                </p>
                {selectedOption?.testId === option.testId && (
                  <CheckmarkOutline />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
