import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Book } from "@/types";

const useLoadImage = (book: Book) => {
  const supabaseClient = useSupabaseClient();

  if (!book) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(book.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
