"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Chip from "@/components/chip/chip";
import { grupos } from "@/mock/grupos";
import { produtos } from "@/mock/produtos";
import ItemCard from "@/components/itemCard/itemCard";

export default function Home() {
  const [grupoSelecionado, setGrupoSelecionado] = useState(grupos[0].id);

  const handleGrupoClick = (id: string) => {
    setGrupoSelecionado(id);
  };

  const produtosFiltrados = produtos.filter(
    (produto) => produto.grupoId === grupoSelecionado
  );

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

        <section className={styles.chipSlider}>
          {grupos.map((grupo) => (
            <Chip
              key={grupo.id}
              name={grupo.name}
              onClick={() => handleGrupoClick(grupo.id)}
              isActive={grupoSelecionado === grupo.id}
            />
          ))}
        </section>

        <section>
          <header>
            <h2 className={styles.groupTitle}>
              {grupos.find((g) => g.id === grupoSelecionado)?.name}
            </h2>
          </header>

          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => (
              <ItemCard
                key={produto.id}
                name={produto.name}
                image={produto.image}
                description={produto.description}
                price={produto.price}
              />
            ))
          ) : (
            <p className={styles.emptyMessage}>Nenhum item disponível.</p>
          )}
        </section>
      </main>
    </div>
  );
}
