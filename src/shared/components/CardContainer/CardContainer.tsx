import React, { PropsWithChildren } from "react";
import styles from './CardContainer.module.css'

interface CardsContainerProps extends PropsWithChildren {}
const CardContainer = ({ children }: CardsContainerProps) => {
  return <div className={styles.contentCardContainer}>{children}</div>;
};

export default CardContainer;