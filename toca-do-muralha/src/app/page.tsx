import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.page}>
        <header className={styles.header}>
          <h1>Toca do Muralha</h1>
        </header>
      </main>
    </div>
  );
}
