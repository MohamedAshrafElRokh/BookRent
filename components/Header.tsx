"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { toast } from "react-hot-toast";
import { UserDetails } from "@/types";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const AuthModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handelLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

  return (
    <div
      className={twMerge(
        `
  bg-gradient-to-b from-10%
  from-slate-200 to-100%
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
        {user ? (
          <div className="flex gap-x-4 items-center">
            <Button
              onClick={handelLogout}
              className="bg-white text-xl px-6 py-2 font-bold"
            >
              Logout
            </Button>
            <Button
              onClick={() => router.push("/account")}
              className="bg-white py-4 px-4"
            >
              <FaUserAlt />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            <Button
              onClick={AuthModal.onOpen}
              className="bg-transparent text-black text-lg font-semibold hover:opacity-60"
            >
              Sign Up
            </Button>
            <Button
              onClick={AuthModal.onOpen}
              className="text-white text-lg py-2 px-6"
            >
              Login
            </Button>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Header;
