import styles from "./page.module.css";
import Header from "@/components/header/header";
import Chip from "@/components/chip/chip";
import { grupos } from "@/mock/grupos";
import ItemCard from "@/components/itemCard/itemCard";

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
        {/* TODO: Fazer o slider de grupos */}

        <section className={styles.chipSlider}>
          {grupos.map((grupo) => (
            <Chip name={grupo.name} key={grupo.id} />
          ))}
        </section>

        <section>
          <header>
            <h2 className={styles.groupTitle}>Cafeteria</h2>
            <p className={styles.groupSubtitle}>
              (Funcionamento das 6h até 15h)
            </p>
          </header>
          <ItemCard name="Pão na Chapa" image="../assets/img_item/image 2.png" description="paozinho quentinho" price="R$ 3.50" />
        </section>
      </main>
    </div>
  );
}
