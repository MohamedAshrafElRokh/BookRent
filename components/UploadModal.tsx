import React, { useRef, useState } from "react";
import uniqid from "uniqid";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

export const revalidate = 0;
const UploadModal = () => {
  const categories = [
    "Fantasy",
    "Crime",
    "Comics",
    "Horror",
    "Fiction",
    "Novel",
  ];
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState<boolean>();
  const { user } = useUser() as any;
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { reset } = useForm();
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setImage] = useState() as unknown as any;

  const onChange = (open: boolean) => {
    console.log("change");

    if (!open) {
      uploadModal.onClose();
    }
  };

  const onHandelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = titleRef.current?.value || "";
    const author = authorRef.current?.value || "";
    const category = categoryRef.current?.value || "";

    try {
      if (
        !fileInputRef.current ||
        !fileInputRef.current.files ||
        !fileInputRef.current.files[0]
      ) {
        toast.error("Please select an image");
        return;
      }

      const image = fileInputRef.current.files[0];

      setIsLoading(true);

      const uniqID = uniqid();

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${title}-${uniqID}`, image, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Image Upload Failed");
      }

      const { error: supabaseError } = await supabaseClient
        .from("Books")
        .insert({
          user_id: user.id,
          title: title,
          author: author,
          category: category,
          image_path: imageData?.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      setIsLoading(false);
      router.refresh();
      reset();
      setImage(""); // Clear the image state after successful upload
      uploadModal.onClose();
      toast.success("Book Uploaded Successfully");
    } catch (err) {
      toast.error("Failed to Upload");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={uploadModal.isOpen}
      title="Upload Book"
      desciption=""
      onChange={onChange}
    >
      <form
        className="flex flex-col gap-y-4"
        onSubmit={(e) => onHandelSubmit(e)}
      >
        <Input
          className="text-white"
          id="title"
          ref={titleRef}
          placeholder="Book title"
          disabled={isLoading}
          // {...register("title", { required: true })}
        ></Input>
        <Input
          className="text-white"
          id="author"
          ref={authorRef}
          placeholder="Author Name"
          disabled={isLoading}
          // {...register("author", { required: true })}
        ></Input>
        <select
          defaultValue={"Select Category"}
          className=" flex 
          w-full 
          rounded-md 
          bg-neutral-700
          border
          border-transparent
          px-3 
          py-3 
          text-white
          text-sm 
          file:border-0 
          file:bg-transparent 
          file:text-sm 
          file:font-medium 
          placeholder:text-neutral-400 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          focus:outline-none"
          id="bookCategory"
          ref={categoryRef}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div>
          <p className="text-white pb-1">Upload Image</p>
          <Input
            ref={fileInputRef}
            className="text-white"
            id="image"
            type="file"
            accept="image/*"
            disabled={false}
            // {...register("image", { required: true })}
          />
        </div>
        <Button className="text-white py-2" disabled={isLoading} type="submit">
          Upload
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
