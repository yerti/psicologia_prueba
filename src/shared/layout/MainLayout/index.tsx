import React, { PropsWithChildren } from 'react';
import MainSection from '../MainSection';
import styles from './styles.module.css';
import NavigationBar from '../NavigationBar';
import menuService from '@/entities/menu/services/menu.service';


export default async function MainLayout({ children }: PropsWithChildren) {
  const menu = await menuService.list();
  return (
    <div className={styles.layoutContainer}>
      <NavigationBar menu={menu} />
      <MainSection>
        <div>
          {children}
        </div>
      </MainSection>
    </div>
  )
}
