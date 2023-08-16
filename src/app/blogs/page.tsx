"use client";
import React from "react";
import UserTable from "../../components/Table";
import useSWR from "swr";

const Blogs = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return "Loading..";

  return (
    <div className="mt-3">
      <UserTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
};

export default Blogs;
