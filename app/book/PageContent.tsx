import { Book } from "@/types";
import qs from "query-string";
import React, { useEffect, useState } from "react";
import BookModal from "@/components/BookModal";
import SideBar from "../../components/SideBarBook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { log } from "console";
interface PageContentProps {
  books: Book[];
}

export const revalidate = 0;

const PageContent: React.FC<PageContentProps> = ({ books }) => {
  return (
    <div className="w-full flex flex-col justify-around">
      <div className="text-2xl text-white font-semibold m-5">
        <p>All Books</p>
      </div>

      <div className="flex ml-5 mr-5">
        {books.length === 0 ? (
          <div className="text-white">No Books Available</div>
        ) : (
          <div className="flex flex-wrap gap-x-4 gap-y-4">
            {books?.map((book) => (
              <div key={book.id} className="flex-none w-48">
                <Link href={`/book/${book.title}`}>
                  <BookModal Book={book} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageContent;
