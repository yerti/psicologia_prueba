import React from 'react';
import styles from './Title.module.css';

interface PropsTitle {
  title: string;
}

export default function Title(props: PropsTitle): React.JSX.Element {
  return (
    <div className={styles.conten_title}>
      <h1 className={styles.title_text}>{props.title}</h1>
    </div>
  );
}
