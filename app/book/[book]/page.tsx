import React, { useEffect, useState } from "react";
import { getBooksByTitle } from "@/actions/GetData";

interface bookTitleProps {
  params: {
    book: string;
  };
}
const CategoryPage: React.FC<bookTitleProps> = async ({ params }) => {
  const book = await getBooksByTitle(decodeURIComponent(params.book));
  console.log(book);

  return (
    <div className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto"></div>
  );
};

export default CategoryPage;
