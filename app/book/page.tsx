// Books.tsx
import Header from "@/components/Header";
import React from "react";
import ListItems from "@/components/ListItems";
import { FaHeart } from "react-icons/fa6";
import { getBooks, getBooksByCategory } from "@/actions/GetData";
import PageContent from "./PageContent";
import SideBar from "@/components/SideBarBook";

interface Category {
  id: string;
  category: string;
}

const Books: React.FC = async () => {
  const categorys: Category[] = [
    { id: "1", category: "Fantasy" },
    { id: "2", category: "Crime" },
    { id: "3", category: "Comics" },
    { id: "4", category: "Horror" },
    { id: "5", category: "Fiction" },
    { id: "6", category: "Novel" },
  ];

  const books = await getBooks();
  const catBook = await getBooksByCategory("Fantasy");
  console.log(catBook);

  // let selected;
  // const onGetCategory = (cat: string) => {
  //   selected = cat;
  // };

  return (
    <div className="bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto">
      <div className="text-2xl text-white font-semibold">
        <div>
          <Header className="text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItems name={"Liked Books"} href={"liked"}>
                <FaHeart size={26} />
              </ListItems>
            </div>
          </Header>
        </div>
        <div className="flex">
          <div>
            <PageContent books={books} />
          </div>
          <div className="flex bg-neutral-100/10 shadow-2xl rounded-xl flex-col justify-around h-96 mt-20 mr-5">
            {categorys.map((category) => (
              <SideBar key={category.id} cat={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
