import React from "react";
import Header from "../elements/Header";
import Sidebar from "../elements/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  extraHeader?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, extraHeader }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="bg-slate-300 p-4 rounded-b-2xl">
          <Header />
          {extraHeader}
        </div>
        <div className="p-4">
        {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
