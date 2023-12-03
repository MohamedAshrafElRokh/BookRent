// Category.js

import React, { useEffect, useRef, useState } from "react";
import { Book } from "@/types";
import BookModal from "@/components/BookModal";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

interface CategoryProps {
  category: string;
  bookCat: Book[];
}

const Category: React.FC<CategoryProps> = ({ category, bookCat }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const handleLeft = () => {
      setScrollPosition((prevPosition) => prevPosition - 600); // Adjust the scroll amount as needed
    };

    const handleRight = () => {
      setScrollPosition((prevPosition) => prevPosition + 600); // Adjust the scroll amount as needed
    };

    // Attach event handlers
    if (leftButtonRef.current) {
      leftButtonRef.current.addEventListener("click", handleLeft);
    }

    if (rightButtonRef.current) {
      rightButtonRef.current.addEventListener("click", handleRight);
    }

    // Detach event handlers on component unmount
    return () => {
      if (leftButtonRef.current) {
        leftButtonRef.current.removeEventListener("click", handleLeft);
      }

      if (rightButtonRef.current) {
        rightButtonRef.current.removeEventListener("click", handleRight);
      }
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  return (
    <div className="mb-5 font-semibold">
      <div>
        <Link
          href="/book/[category]"
          as={`/book/${category}`}
          className="text-2xl mb-5 ml-5 flex items-center group cursor-pointer w-8"
        >
          <p>{category}</p>
          <div className="ml-2  hidden group-hover:block">
            <MdKeyboardDoubleArrowRight />
          </div>
        </Link>
      </div>

      <div className="flex">
        <div className="z-10 bg-neutral-900 w-32 flex justify-center items-center">
          <button
            ref={leftButtonRef}
            className={`text-white px-4 py-4 mt-2  rounded-full bg-black`}
          >
            <RxCaretLeft className="text-white" size={26} />
          </button>
        </div>

        <div
          ref={containerRef}
          className={`
            ${category}
            flex 
            w-full
            gap-x-4
            overflow-x-hidden
          `}
          style={{
            width: `${bookCat.length * 200}px`, // Adjust the width as needed
          }}
        >
          {bookCat.map((book) => (
            <div key={book.id} className="flex-none w-48">
              <BookModal Book={book} />
            </div>
          ))}
        </div>
        <div className="z-10  bg-neutral-900 w-32 flex justify-center items-center">
          <button
            ref={rightButtonRef}
            className={`text-white px-4 py-4 mt-2  rounded-full bg-black`}
          >
            <RxCaretRight className="text-white" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
