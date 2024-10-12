"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ProfileView from "@/components/commons/ProfileView";
import MenuIcon from "@/components/Icons/MenuIcon";
import menuService from "@/services/menu.service";

const Topbar = () => {
  const [isVisibleNavegationHeader, setIsVisibleNavegationHeader] =
    useState(false);
  const [menu, setMenu] = useState<any[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuData = await menuService.list();
      setMenu(menuData);
    };

    fetchMenu();
  }, []);

  const handleOpenNavegationHeader = () => {
    setIsVisibleNavegationHeader(true);
  };

  const handleCloseNavegationHeader = () => {
    setIsVisibleNavegationHeader(false);
  };

  return (
    <div className={styles.topbarContainer}>
      <div
        className={styles.contentImgMenu}
        onClick={handleOpenNavegationHeader}
      >
        <MenuIcon />
      </div>

      <ProfileView />
    </div>
  );
};

export default Topbar;
