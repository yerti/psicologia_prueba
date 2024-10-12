import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css';
import CaretDownIcon from '@/shared/Icons/CaretDownIcon';
import CheckmarkOutline from '@/shared/Icons/CheckmarkOutline';
import { DocumentType } from '@/shared/types/entities/DocumentType';


interface CustomSelectProps {
  options: DocumentType[];
  value: DocumentType;
  onChange: (value: DocumentType) => void;
  labelName: string;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  labelName,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: DocumentType) => {
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
          <span>{selectedOption.shortName}</span>
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
                    selectedOption.documentTypeId === option.documentTypeId
                      ? styles.selectedOption
                      : ''
                  }
                >
                  {option.name}
                </p>
                {selectedOption.documentTypeId === option.documentTypeId && (
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
