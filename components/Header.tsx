"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        `
  bg-gradient-to-b 
  from-slate-50
  h-fit
  p-6`,
        className
      )}
    >
      <div className="flex justify-between items-center w-full mb-4">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black p-2 hover:opacity-75"
          >
            <RxCaretLeft className="text-white" size={26} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black p-2 hover:opacity-75"
          >
            <RxCaretRight className="text-white" size={26} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2">
          <button className="rounded-full bg-black p-2 items-center justify-center hover:opacity-75">
            <HiHome className="text-white" size={20} />
          </button>
          <button className="rounded-full bg-black p-2 items-center justify-center hover:opacity-75">
            <BiSearch className="text-white" size={20} />
          </button>
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="bg-transparent text-black text-lg font-semibold hover:opacity-60">
            Sign Up
          </Button>
          <Button className="text-white text-lg py-2 px-6">Login</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
