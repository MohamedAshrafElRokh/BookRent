import React from "react";
import Header from "@/components/Header";
import { FaHeart } from "react-icons/fa6";
import ListItems from "@/components/ListItems";
import PageContent from "./components/PageContent";
import { getBooks } from "../../actions/GetData";

export const revalidate = 0;

export default async function Home() {
  const books = await getBooks();

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
          <ListItems name={"Liked Books"} href={"liked"}>
            <FaHeart size={26} />
          </ListItems>
        </div>
      </Header>
      <div className=" text-white m-5 text-lg font-semibold">
        <p>Books Categores</p>
      </div>
      <div>
        <PageContent books={books} />
      </div>
    </div>
  );
}
