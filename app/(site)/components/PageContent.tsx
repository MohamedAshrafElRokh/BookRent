"use client";
import React from "react";
import { Book } from "@/types";
import Catergory from "./Catergory";

interface PageContentProps {
  books: Book[];
}

interface Category {
  category: string;
}

const PageContent: React.FC<PageContentProps> = ({ books }) => {
  const categorys: Category[] = [
    { category: "Fantasy" },
    { category: "Crime" },
    { category: "Comics" },
  ];

  if (books.length === 0) {
    return <div>No Books Available</div>;
  }

  return (
    <div className=" grid-cols-2 sm:grid-cols-3 md:grid-cols-3 flex flex-col text-white">
      {categorys.map(({ category }) => {
        const bookCategory = books.filter((book) => book.category === category);
        return (
          <div key={category}>
            <Catergory category={category} bookCat={bookCategory} />
          </div>
        );
      })}
    </div>
  );
};

export default PageContent;
