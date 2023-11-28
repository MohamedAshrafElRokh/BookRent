"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface ListItemsProps {
  children: React.ReactNode;
  name: string;
  href: string;
}
const ListItems: React.FC<ListItemsProps> = ({ children, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <button className=" flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className=" min-h-[64px] min-w-[64px] flex items-center justify-center text-red-600 bg-black">
        {children}
      </div>
      <p className="text-lg font-semibold text-white pl-">{name}</p>
    </button>
  );
};

export default ListItems;
