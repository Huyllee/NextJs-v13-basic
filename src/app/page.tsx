"use client"; //useEffect chay o client
import styles from "@/styles/app.module.css";
import Link from "next/link";
import UserTable from "../components/Table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
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
    <>
      <div className="my-3">
        <ul>
          <li>
            <Link href="/facebook">facebook</Link>
          </li>
          <li>
            <Link href="/youtube">youtube</Link>
          </li>
          <li>
            <Link href="/tiktok">tiktok</Link>
          </li>
        </ul>
      </div>
      <UserTable blogs={data} />
    </>
  );
}
