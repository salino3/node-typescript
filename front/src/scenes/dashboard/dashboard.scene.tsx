import React from "react";
import { Dashboard } from "@/pods";
import * as classes from "./dashboard.styles";

export const DashboardScene: React.FC = () => {
  return (
    <classes.Div>
        <Dashboard />
    </classes.Div>
  );
};
