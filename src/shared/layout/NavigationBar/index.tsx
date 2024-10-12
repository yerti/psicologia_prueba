"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import TestGym from "@/components/commons/TestGym";
import { MenuItem } from "@/types/entities/MenuItem";

interface Props {
  menu: MenuItem[];
}

const NavigationBar: React.FC<Props> = ({ menu }) => {
  const pathname = usePathname();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const handleSubmenuToggle = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div className={styles.navigationContainer}>
      {/* <TestGym /> */}
      <h1 className={styles.titlePsicologia}>Psicologia</h1>
      <div className={styles.navigationList}>
        <ul>
          {menu.map((item, index) => {
            const isSubmenuOpen = activeSubmenu === index;
            const Icon = item.icon;
            const hasSubmodules = item.submodulos && item.submodulos.length > 0;
            const isItemActive = pathname === item.path;

            return (
              <li key={index}>
                <div
                  className={`${styles.navItem} ${
                    isItemActive ? styles.active : styles.notActive
                  }`}
                  onClick={() => hasSubmodules && handleSubmenuToggle(index)}
                >
                  <Link
                    href={hasSubmodules ? "#" : item.path}
                    className={styles.contentAnclaMenuItem}
                  >
                    <div className={styles.navItemIcon}>
                      <Icon color={isItemActive ? "#000" : "black"} />
                    </div>
                    <div className={styles.contetTextArrow}>
                      <p className={styles.titleNavigationBar}>{item.title}</p>
                      <img src="/images/arrow.svg" alt="" className={`${styles.arrow} ${isSubmenuOpen ? styles.arrowActive : ""}`} />
                    </div>
                  </Link>
                </div>
                {isSubmenuOpen && (
                  <ul className={styles.submenuList}>
                    {item.submodulos.map((subItem, subIndex) => {
                      const isSubItemActive = pathname === subItem.path;
                      return (
                        <li key={subIndex}>
                          <Link
                            href={subItem.path}
                            className={`${styles.submenuItem} ${
                              isSubItemActive ? styles.submenuActive : ""
                            }`}
                          >
                            <div className={styles.contentTexSubItem}>
                              <p>{subItem.title}</p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
