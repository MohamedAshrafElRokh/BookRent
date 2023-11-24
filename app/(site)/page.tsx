"use client";
import React from "react";
import Header from "@/components/Header";
import { FaHeart } from "react-icons/fa6";
import ListItems from "@/components/ListItems";
export default function Home() {
  return (
    <div
      className="
        bg-neutral-900 
        h-full
        rounded-lg
        overflow-hidden
        overflow-y-auto
      "
    >
      <Header>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
          <ListItems icon={FaHeart} name={"Liked Books"} href={"liked"} />
        </div>
      </Header>
      <div className=" text-white m-5 text-lg font-semibold">
        <p>Books Categores</p>
      </div>
    </div>
  );
}
