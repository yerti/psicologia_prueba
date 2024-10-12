import React, { useState } from 'react';
import styles from './Control.module.css';

interface ControlProps {
  id: string;
  type: 'number' | 'text' | 'email' | 'tel' | 'date' | 'password';
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  titleLabel: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  icon?: boolean;
}

export default function Control({
  id,
  type,
  value,
  onChange,
  name,
  titleLabel,
  error,
  onBlur,
  icon = false,
}: ControlProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={styles.contentInputLabel}>
        <label htmlFor={id}>
          {titleLabel}
          <input
            id={id}
            type={type === 'password' && showPassword ? 'text' : type}
            value={value}
            name={name}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {icon && (
            <img
              className={styles.iconInput}
              src={
                showPassword ? '/images/eyeOpen.svg' : '/images/eyeClose.svg'
              }
              alt='Toggle Password Visibility'
              onClick={togglePasswordVisibility}
              style={{ cursor: 'pointer' }}
            />
          )}
        </label>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}
