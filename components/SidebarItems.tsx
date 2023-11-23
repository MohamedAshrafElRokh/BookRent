import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}
const SidebarItems: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
    flex
    flex-row
    h-auto
    w-full
    gap-x-4
    text-md
    font-medium
    cursor-pointer
    hover:text-white
    text-neutral-400`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p>{label}</p>
    </Link>
  );
};

export default SidebarItems;
