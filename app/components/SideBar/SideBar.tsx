"use client";
import React, { ReactNode, createContext, useContext } from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import {
  DarkModeContext,
  DarkModeContextType,
} from "../../context/DarkModeContext"; // Import the DarkModeContext and its type
import Link from "next/link";

interface IconMetric {
  icon: JSX.Element; // Or React.ReactNode if you want to allow any React element type
  metric: string;
}

interface Props {
  iconsAndMetrics: IconMetric[];
}

const Sidebar = ({ iconsAndMetrics }: Props) => {
  const { darkMode, toggleDarkMode } = useContext<DarkModeContextType>(DarkModeContext);
  const pages = ["/Temperature", "/Pressure", "/Alignment"]

  return (
    <div
      className={` ${darkMode ? "bg-gray-800" : "bg-gray-300"} ${
        styles.sidebar
      }  p-4 rounded-lg`}
    >
      {iconsAndMetrics.map(({ icon, metric }, index) => (
        <div className="flex items-center mb-4" key={index}>
          <Link className="btn btn-ghost text-xl" href={pages[index]}>
            {metric}
          </Link>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
