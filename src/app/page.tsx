import styles from "@/styles/app.module.css";
import UserTable from "../components/Table";

export default function Home() {
  return (
    <>
      <div className="my-3">
        <ul>
          <li className={styles["red"]}>
            <a href="/facebook">facebook</a>
          </li>
          <li>
            <a href="/youtube">youtube</a>
          </li>
          <li>
            <a href="/tiktok">tiktok</a>
          </li>
        </ul>
      </div>
      <UserTable />
    </>
  );
}
