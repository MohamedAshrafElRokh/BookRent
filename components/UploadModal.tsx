"use client";
import React, { useState } from "react";
import uniqid from "uniqid";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Button from "./Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
const UploadModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState<boolean>();
  const { user } = useUser() as any;
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { register, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      image: "",
    },
  });

  const onHandelSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      console.log(isLoading);
      setIsLoading(false);
      const imageFile = values.image?.[0];

      if (!imageFile || !user) {
        toast.error("Missing fields");
        return;
      }
      const uniqID = uniqid();

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Image Upload Failed");
      }
      console.log(values.title);
      const { error: supabaseError } = await supabaseClient
        .from("Books")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          category: values.category,
          image_path: imageData?.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      setIsLoading(false);
      router.refresh();
      reset();
      uploadModal.onClose();
      toast.success("Book Uploaded Successfully");
    } catch (err) {
      toast.error("Failed to Upload");
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
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
        onSubmit={handleSubmit(onHandelSubmit)}
      >
        <Input
          id="title"
          placeholder="Book title"
          disabled={isLoading}
          {...register("title", { required: true })}
        ></Input>
        <Input
          id="author"
          placeholder="Author Name"
          disabled={isLoading}
          {...register("author", { required: true })}
        ></Input>
        <Input
          id="category"
          placeholder="category"
          disabled={isLoading}
          {...register("category", { required: true })}
        ></Input>
        <div>
          <p className="text-white pb-1">Upload Image</p>
          <Input
            className="text-white"
            id="image"
            type="file"
            accept="image/*"
            disabled={isLoading}
            {...register("image", { required: true })}
          ></Input>
        </div>
        <Button className="text-white py-2" disabled={isLoading} type="submit">
          Upload
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
