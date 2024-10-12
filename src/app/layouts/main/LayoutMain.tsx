
import MainLayout from "@/shared/layout/MainLayout";
import React, { PropsWithChildren } from "react";


export default function LayoutMain({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}