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

  const grupoAtual = grupos.find((g) => g.id === grupoSelecionado);

  if (!grupoAtual) return null; // Evita erro se o grupo não existir

  // Separar produtos que pertencem diretamente ao grupo
  const produtosDiretos = produtos.filter(
    (produto) => produto.grupoId === grupoSelecionado && !produto.subgrupoId
  );

  // Criar um mapeamento de produtos por subgrupo
  const produtosPorSubgrupo = grupoAtual.subgrupos?.reduce((acc, subgrupo) => {
    acc[subgrupo.id] = produtos.filter(
      (produto) => produto.subgrupoId === subgrupo.id
    );
    return acc;
  }, {} as Record<string, typeof produtos>);

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

        {/* Seção de botões de grupos */}
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

        {/* Exibição do grupo e seus produtos */}
        <section>
          <header>
            <h2 className={styles.groupTitle}>{grupoAtual.name}</h2>
          </header>

          {/* Produtos diretos do grupo */}
          {produtosDiretos.length > 0 && (
            <div>
              {produtosDiretos.map((produto) => (
                <ItemCard
                  key={produto.id}
                  name={produto.name}
                  // image={produto.image}
                  description={produto.description}
                  price={produto.price}
                />
              ))}
            </div>
          )}

          {/* Produtos organizados por subgrupo */}
          {grupoAtual.subgrupos &&
            grupoAtual.subgrupos.length > 0 &&
            grupoAtual.subgrupos.map((subgrupo) => (
              <div key={subgrupo.id}>
                <h3 className={styles.subgroupTitle}>{subgrupo.name}</h3>
                {produtosPorSubgrupo?.[subgrupo.id]?.length > 0 ? (
                  produtosPorSubgrupo[subgrupo.id].map((produto: any) => (
                    <ItemCard
                      key={produto.id}
                      name={produto.name}
                      image={produto.image}
                      description={produto.description}
                      price={produto.price}
                    />
                  ))
                ) : (
                  <p className={styles.emptyMessage}>
                    Nenhum item disponível neste subgrupo.
                  </p>
                )}
              </div>
            ))}

          {/* Caso não haja produtos no grupo ou subgrupos */}
          {produtosDiretos.length === 0 &&
            (!grupoAtual.subgrupos ||
              grupoAtual.subgrupos.every(
                (sub) => !produtosPorSubgrupo?.[sub.id]?.length
              )) && (
              <p className={styles.emptyMessage}>Nenhum item disponível.</p>
            )}
        </section>
      </main>
    </div>
  );
}
