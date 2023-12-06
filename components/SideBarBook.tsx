"use client";
import React, { useState } from "react";

interface SideBarProps {
  cat: {
    id: string;
    category: string;
  };
}

const SideBar: React.FC<SideBarProps> = ({ cat }) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const onGetCategory = (category: string) => {
    setSelected(category);
  };

  console.log(selected);

  return <div onClick={() => onGetCategory(cat.category)}>{cat.category}</div>;
};

export default SideBar;
