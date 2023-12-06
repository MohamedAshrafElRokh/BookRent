import { Book } from "../types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getBooks = async (category: string): Promise<Book[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (category) {
    const { data, error } = await supabase
      .from("Books")
      .select("*")
      .ilike("category", `%${category}%`)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    }

    return (data as any) || [];
  } else {
    const { data, error } = await supabase
      .from("Books")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    }
    return data as any;
  }
};

export const getBooksByCategory = async (category: string): Promise<Book[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!category) {
    const allBooks = await getBooks(category);
    return allBooks;
  }

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

export const getBooksByTitle = async (title: string): Promise<Book[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("Books")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};
