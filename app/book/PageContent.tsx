import { Book } from "@/types";
import React, { useEffect, useState } from "react";
import BookModal from "@/components/BookModal";
import SideBar from "../../components/SideBarBook";
interface PageContentProps {
  books: Book[];
}

interface Category {
  id: string;
  category: string;
}

export const revalidate = 0;

const PageContent: React.FC<PageContentProps> = ({ books }) => {
  const categorys: Category[] = [
    { id: "1", category: "Fantasy" },
    { id: "2", category: "Crime" },
    { id: "3", category: "Comics" },
    { id: "4", category: "Horror" },
    { id: "5", category: "Fiction" },
    { id: "6", category: "Novel" },
  ];

  // const [selected, setSelected] = useState<Category>();
  // const getCategory = (cat: any) => {
  //   console.log(cat, "grom page");
  //   setSelected(cat);
  // };
  // console.log("selected", selected);

  // const handelCategory = async (selected: string) => {
  //   const result = await getBooksByCategory(selected);
  //   // setCategory(result);
  //   console.log(res);
  // };
  // handelCategory;

  return (
    <div className="w-full flex flex-col justify-around">
      <div className="text-2xl text-white font-semibold m-5">
        <p>All Books</p>
      </div>

      <div className="flex ml-5 mr-5">
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {books?.map((book) => (
            <div key={book.id} className="flex-none w-48">
              <BookModal Book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
