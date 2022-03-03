/* eslint-disable react/jsx-key */
import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      {children}
    </div>
  );
};
