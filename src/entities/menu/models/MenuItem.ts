interface MenuSubItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  icon: React.FC<{ color?: string }>;
  path: string;
  submodulos: MenuSubItem[],
}
