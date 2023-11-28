import { Book } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getBooks = async (): Promise<Book[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("Books")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }
  return data as any;
};

export const getBooksByCategory = async (category: string): Promise<Book[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  // if (!category) {
  //   const allSongs = await getBooks();
  //   return allSongs;
  // }

  const { data, error } = await supabase
    .from("Books")
    .select("*")
    .ilike("category", `%${category}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};
