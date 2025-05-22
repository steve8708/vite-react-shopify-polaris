import React from "react";
import { Sidebar } from "./Dashboard/components/Sidebar";
import "../styles/dashboard.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">{children}</div>
    </div>
  );
} 