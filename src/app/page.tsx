import styles from "@/styles/app.module.css";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "home page",
};

export default function Home() {
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
    </>
  );
}
