import Header from "@/components/Header";
import React from "react";
import ListItems from "@/components/ListItems";
import { FaHeart } from "react-icons/fa6";
import { getBooks } from "@/actions/GetData";
import PageContent from "./PageContent";
const Books = async () => {
  const books = await getBooks();
  return (
    <div
      className="   bg-neutral-900 
  h-full
  w-full
  rounded-lg
  overflow-hidden
  overflow-y-auto"
    >
      <div className="text-2xl text-white font-semibold ">
        <div>
          <Header className="text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItems name={"Liked Books"} href={"liked"}>
                <FaHeart size={26} />
              </ListItems>
            </div>
          </Header>
        </div>
        <div>
          <PageContent books={books} />
        </div>
      </div>
    </div>
  );
};

export default Books;
