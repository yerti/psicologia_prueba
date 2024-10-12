import IconStudent from "@/shared/Icons/IconStudent";
import { MenuItem } from "../models/MenuItem";
import IconEvaluation from "@/shared/Icons/IconEvaluation";


export const menuItemList: MenuItem[] = [
  {
    title: "Gestión de Pacientes",
    icon: IconStudent ,
    path: "/pacientes",
    submodulos: [{
      title: 'Base',
      
      path: "/pacientes"
    }],
  },
  {
    title: "Gestión de evaluación",
    icon: IconEvaluation,
    path: "/evaluaciones",
    submodulos: [],
  },
 
  
];
