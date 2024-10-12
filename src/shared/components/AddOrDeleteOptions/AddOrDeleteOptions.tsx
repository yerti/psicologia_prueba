"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./AddOrDeleteOptions.module.css";
import Image from "next/image";

interface EditProps {
  onClickEdit: () => void;
  onClickDelet: () => void;
  imgOption1: string;
  textOption1: string;
}

export default function AddOrDeleteOption({
  onClickEdit,
  onClickDelet,
  imgOption1,
  textOption1,
}: EditProps) {
  const [showOptions, setShowOptions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleShowOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  return (
    <div className={styles.contentAddOrDeleteOption} ref={containerRef}>
      <div
        className={styles.contentImgMenuAddOrDeleteOption}
        onClick={toggleShowOptions}
      >
        <div className={styles.imgMenuAddOrDeleteOption}>
          <Image
            src="/images/ellipsisVertical.svg"
            alt="icon menu"
            layout="fill"
          />
        </div>
      </div>
      {showOptions && (
        <div className={styles.contentOptions}>
          <div className={styles.contentImgEdit} onClick={onClickEdit}>
            <img src={imgOption1} alt="" />
            <p>{textOption1}</p>
          </div>

          <div className={styles.contentImgDelete} onClick={onClickDelet}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="32px"
              height="32px"
              className={styles.icon}
            >
              <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z" />
            </svg>
            <p>Eliminar</p>
          </div>
        </div>
      )}
    </div>
  );
}