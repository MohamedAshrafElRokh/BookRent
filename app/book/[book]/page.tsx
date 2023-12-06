import React from "react";
import { getBooks, getBooksByTitle } from "@/actions/GetData";
import { Book } from "@/types";
import BookPageModal from "@/components/BookPageModal";

interface bookTitleProps {
  params: { [key: string]: string | string[] | undefined };
}

const BookPage: React.FC<bookTitleProps> = async ({ params }) => {
  const bookData: Book[] = await getBooksByTitle(
    decodeURIComponent(params.book)
  );
  const categoryBooks: Book[] = await getBooks(bookData[0]?.category);

  // const image = useLoadImage(bookData);
  return (
    <div className="bg-neutral-900 h-full flex w-full rounded-lg overflow-hidden overflow-y-auto text-white">
      <div className=" m-5 w-full">
        <BookPageModal Book={bookData[0]} Books={categoryBooks} />
      </div>
    </div>
  );
};

export default BookPage;
