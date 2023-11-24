"use client";
import React from "react";
import { IoLibrary } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
const Library = () => {
  const onClick = () => {
    //upload
  };
  return (
    <div className="flex flex-col">
      <div
        className="flex
     items-center 
     justify-between 
     px-5
     pt-4
    "
      >
        <div
          className="
        inline-flex
        items-center
        gap-x-2"
        >
          <IoLibrary size={26} className="text-neutral-400" />
          <p
            className="
          text-neutral-400
          font-medium
          text-md"
          >
            Your Library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
        text-neutral-400 
        hover:text-white 
        transition
        cursor-pointer"
        />
      </div>
      <div
        className="
      flex 
      flex-col 
      gap-y-2 
      mt-4 
      px-3"
      >
        Your books
      </div>
    </div>
  );
};

export default Library;
