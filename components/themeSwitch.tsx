"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-105 active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme == "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
