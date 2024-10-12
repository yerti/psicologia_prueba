import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'
import Topbar from '../Topbar';

const MainSection: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.mainSectionContainer}>
      {/* <Topbar /> */}
      {children}
    </main>
  )
};

export default MainSection;
