import React from "react";
import { DashboardScene } from "@/scenes";
import * as classes from "./dashboard.styles";

export const DashboardLayout: React.FC = () => {
  return (
    <classes.Main>
        <DashboardScene />
    </classes.Main>
  );
};
