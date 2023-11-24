"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

interface ListItemsProps {
  icon: IconType;
  name: string;
  href: string;
}
const ListItems: React.FC<ListItemsProps> = ({ icon: Icon, name, href }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <button className=" flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className=" min-h-[64px] min-w-[64px] flex items-center justify-center text-red-600 bg-black">
        <Icon size={26} />
      </div>
      <p className="text-lg font-semibold text-white pl-">{name}</p>
    </button>
  );
};

export default ListItems;
