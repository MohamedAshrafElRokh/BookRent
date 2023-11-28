"use client";
import React from "react";
import { Book } from "@/types";
import BookCategory from "@/components/BookCategory";
interface CategoreyProps {
  category: string;
  bookCat: Book[];
}
const Catergory: React.FC<CategoreyProps> = ({ category, bookCat }) => {
  return (
    <div className="ml-5 mb-5 font-semibold">
      <p className="text-2xl">{category}</p>
      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
      >
        {bookCat.map((book) => (
          <BookCategory key={book.id} Book={book} />
        ))}
      </div>
    </div>
  );
};

export default Catergory;
