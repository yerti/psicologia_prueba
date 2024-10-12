import React from "react";
import styles from './SubTitle.module.css'

interface SubTitleProps {
  nameSubTitle: string;
}
export default function SubTitle({ nameSubTitle }: SubTitleProps) {
  return <h3 className={styles.stylesSubTitle} >{nameSubTitle}</h3>;
}
