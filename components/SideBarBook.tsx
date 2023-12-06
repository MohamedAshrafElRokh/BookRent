"use client";
import React, { useState } from "react";

interface SideBarProps {
  cat: {
    id: string;
    category: string;
  };
  params: string | string[] | undefined;
}

const SideBar: React.FC<SideBarProps> = ({ cat, params }) => {
  return (
    <div
      className={`p-5   ${
        params === cat.category ? "text-white" : "text-white opacity-70"
      } `}
    >
      <p className="border-b">{cat.category}</p>
    </div>
  );
};

export default SideBar;
