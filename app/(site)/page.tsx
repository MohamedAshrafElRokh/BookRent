import React from "react";
import Header from "@/components/Header";
import { FaHeart } from "react-icons/fa6";
import ListItems from "@/components/ListItems";
import PageContent from "./components/PageContent";
import { getBooks } from "../../actions/GetData";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
            <div>
              <FaHeart size={26} />
            </div>
          </ListItems>
        </div>
      </Header>
      <div className=" text-white m-5 text-lg font-semibold flex justify-between">
        <p>Books Categores</p>
        <Link href={"/book"}>
          <div className="flex  items-center group mr-5">
            <p className="">All Books</p>
            <p className="hidden group-hover:block">
              <MdKeyboardDoubleArrowRight size={20} />
            </p>
          </div>
        </Link>
      </div>
      <div className="w-full h-full">
        <PageContent books={books} />
      </div>
    </div>
  );
}
