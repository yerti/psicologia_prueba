'use client';
import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

interface ButoonProps {
  title: string | undefined;
  img?: string;
  variant: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
export default function Button({
  title,
  img,
  variant,
  type = 'button',
  onClick,
}: ButoonProps) {
  const [variantButton, setVariantButton] = useState(styles.button_red);
  const [variantIcon, setVariantIcon] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    switch (variant) {
      case 'primary':
        setVariantButton(styles.primary);
        break;
      case 'secondary':
        setVariantButton(styles.secondary);
        break;
      case 'third':
        setVariantButton(styles.third);
        break;
      default:
        setVariantButton(styles.primary);
        break;
    }

    switch (img) {
      case 'icon_person':
        setVariantIcon('/images/person-add-outline.svg');
        break;

      case 'icon_add_blue':
        setVariantIcon('/images/add-circle.svg');
        break;

      case 'icon_add_white':
        setVariantIcon('/images/add-circle-white.svg');
        break;

      case 'icon_search':
        setVariantIcon('/images/search.svg');
        break;

      default:
        setVariantIcon('');
        break;
    }
  }, [variant, img]);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={onClick} className={variantButton} type={type}>
        {variantIcon && (
          <img
            className={styles.icon_button_component}
            src={variantIcon}
            alt=''
          />
        )}
        {title}
      </button>
    </div>
  );
}
