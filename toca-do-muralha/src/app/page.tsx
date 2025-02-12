import Image from "next/image";
import styles from "./page.module.css";
import logo from "../assets/logo.svg";
import Header from "@/components/header/header";
import Chip from "@/components/chip/chip";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.page}>
        <h1 className={styles.title}>Cardápio</h1>

        <p className={styles.description}>Olá!</p>
        <p className={styles.description}>
          Fique à vontade para explorar nosso cardápio e escolher o que te faz
          feliz. Quando bater a vontade, é só chamar um garçom e a gente prepara
          tudo com carinho. Aproveite! 🍻✨
        </p>

        <Chip name="Refrigerantes" />
      </main>
    </div>
  );
}
