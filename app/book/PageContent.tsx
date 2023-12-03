import { Book } from "@/types";
import React, { useState } from "react";
import BookModal from "@/components/BookModal";
import { getBooksByCategory } from "../../actions/GetData";
interface PageContentProps {
  books: Book[];
}

interface Category {
  id: string;
  category: string;
}

export const revalidate = 0;

const PageContent: React.FC<PageContentProps> = async ({ books }) => {
  const categorys: Category[] = [
    { id: "1", category: "Fantasy" },
    { id: "2", category: "Crime" },
    { id: "3", category: "Comics" },
    { id: "4", category: "Horror" },
    { id: "5", category: "Fiction" },
    { id: "6", category: "Novel" },
  ];
  const [selected, setSelected] = useState<Book[]>();
  const handelCategory = async (category: Category) => {
    const res = await getBooksByCategory(category.category);
    setSelected(res);
  };

  return (
    <div className="w-full flex flex-col justify-around">
      <div className="text-2xl text-white font-semibold m-5">
        <p>All Books</p>
      </div>

      <div className="flex ml-5 mr-5 ">
        <div
          className="flex flex-wrap  gap-x-4 gap-y-4
      "
        >
          {books?.map((book) => (
            <div key={book.id} className="flex-none w-48">
              <BookModal Book={book} />
            </div>
          ))}
        </div>

        <div className=" flex bg-neutral-100/10 shadow-2xl rounded-xl flex-col  justify-around h-96">
          {categorys.map((category) => (
            <div
              onClick={() => handelCategory(category)}
              className=" p-3 border"
              key={category.id}
            >
              {category.category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
