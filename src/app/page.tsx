"use client"; //useEffect chay o client
import styles from "@/styles/app.module.css";
import Link from "next/link";
import UserTable from "../components/Table";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

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
      <UserTable />
    </>
  );
}
