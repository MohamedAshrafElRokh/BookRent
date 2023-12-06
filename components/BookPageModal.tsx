"use client";
import Image from "next/image";
import React from "react";
import { Book } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import { FaHeart } from "react-icons/fa6";
import ListItems from "./ListItems";
import Category from "./CategoryBookPage";
interface BookModalProps {
  Book: Book;
  Books: Book[];
}
const BookPageModal: React.FC<BookModalProps> = ({ Book, Books }) => {
  const imagePath = useLoadImage(Book);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex w-full h-full ">
        <div
          className="
    relative 
    group 
    flex 
    items-center 
    justify-center 
    rounded-md 
    md:w-full
    md:h-[50%]
    lg:w-[50%]
    xl:w-[60%]
    2xl:w-[25%]
    2xl:h-[50%]
    w-[80%]
    h-[40%]
    overflow-hidden 
    bg-neutral-400/5 
    cursor-pointer 
    hover:bg-neutral-400/10 
    transition 
    p-3
    
  "
        >
          <div
            className="
      relative 
      aspect-square 
      w-full
      h-full 
      rounded-md 
      overflow-auto
    "
          >
            <Image
              className="object-bottom"
              src={imagePath || "/images/music-placeholder.png"}
              fill
              alt="Image"
            />
          </div>
        </div>
        <div className=" bg-neutral-400/5 ml-5 w-full rounded-md">
          <div className="">
            <p className="text-xl md:text-xl text-center font-semibold mt-5 lg:text-3xl ml-5  mb-5">
              {Book.title}
            </p>
            <p className="text-l md:text-l lg:text-3xl ml-5  mb-5">
              <span className=" text-neutral-400 md:text-2xl text-xl">
                Author:{" "}
              </span>
              {Book.author}
            </p>
            <p className="text-l md:text-l lg:text-3xl ml-5  mb-5">
              <span className=" text-neutral-400 md:text-2xl text-xl">
                Category:{" "}
              </span>
              {Book.category}
            </p>
            <p className="text-l md:text-l lg:text-3xl ml-5  mb-5">
              <span className="text-neutral-400  ">Description: </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              doloribus odit. Ab temporibus tempore aut, sunt doloremque omnis,
              itaque sint quaerat, ad quidem earum molestiae ratione dignissimos
              rerum asperiores unde. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ratione voluptatum optio culpa odio reiciendis
              molestiae odit amet sunt aut! Repellat debitis nobis quidem sit
              in, tempora suscipit consequuntur fugiat fugit?
            </p>
            <p className="text-l md:text-l lg:text-3xl ml-5  mb-5">
              <span className=" text-neutral-400 md:text-2xl text-xl">
                Language:{" "}
              </span>
              {Book.language}
            </p>
            <p className="text-l md:text-l lg:text-3xl ml-5  mb-5">
              <span className=" text-neutral-400 md:text-2xl text-xl">
                Pages:{" "}
              </span>
              260
            </p>
            <p className="text-l md:text-l lg:text-3xl ml-5  mb-5">
              <span className=" text-neutral-400 md:text-2xl text-xl">
                Published:{" "}
              </span>
              1/11/2001
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 ml-5">
              <ListItems name={"Like"} href={"liked"}>
                <div>
                  <FaHeart size={26} />
                </div>
              </ListItems>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Category bookCat={Books} category={Book.category} />
      </div>
    </div>
  );
};

export default BookPageModal;
