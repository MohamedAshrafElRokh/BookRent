"use client";
import Image from "next/image";
import React from "react";
import { Book } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
interface BookCategoryProps {
  Book: Book;
}
const BookCategory: React.FC<BookCategoryProps> = ({ Book }) => {
  const imagePath = useLoadImage(Book);
  return (
    <div
      className="
    relative 
    group 
    flex 
    flex-col 
    items-center 
    justify-center 
    rounded-md 
    w-full
    overflow-hidden 
    bg-neutral-400/5 
    cursor-pointer 
    hover:bg-neutral-400/10 
    transition 
    p-3
  "
    >
      <div
        className="
      relative 
      aspect-square 
      w-full
      h-full 
      rounded-md 
      overflow-auto
    "
      >
        <Image
          className="object-bottom"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold text-center truncate w-full mb-1">
          {Book.title}
        </p>
        <p
          className="
        text-neutral-400 
        text-sm 
        pb-4 
        w-full 
        truncate
      "
        >
          By {Book.author}
        </p>
      </div>
    </div>
  );
};

export default BookCategory;
