"use client";
import styles from "../cardapio.module.css";
import Chip from "@/components/chip/chip";
import ItemCard from "@/components/itemCard/itemCard";
import { grupos } from "@/mock/grupos";
import { produtos } from "@/mock/produtos";
import { useState } from "react";

const gruposBar = grupos.filter((grupo) =>
  grupo.categories.some((cat) => cat.id === "1412")
);

export default function Bar() {
  const [grupoSelecionado, setGrupoSelecionado] = useState(
    gruposBar[0]?.id || ""
  );

  const handleGrupoClick = (id: string) => {
    setGrupoSelecionado(id);
  };

  const grupoAtual = gruposBar.find((g) => g.id === grupoSelecionado);

  const produtosPorSubgrupo = grupoAtual?.subgrupos?.reduce((acc, subgrupo) => {
    acc[subgrupo.id] = produtos.filter(
      (produto) => produto.subgrupoId === subgrupo.id
    );
    return acc;
  }, {} as Record<string, typeof produtos>);

  if (!grupoAtual)
    return <p className={styles.emptyMessage}>Nenhum grupo disponível.</p>;

  const produtosDiretos = produtos.filter(
    (produto) => produto.grupoId === grupoSelecionado && !produto.subgrupoId
  );

  return (
    <div>
      <section className={styles.chipSlider}>
        {gruposBar.map((grupo) => (
          <Chip
            key={grupo.id}
            name={grupo.name}
            onClick={() => handleGrupoClick(grupo.id)}
            isActive={grupoSelecionado === grupo.id}
          />
        ))}
      </section>
      <section>
        <h2 className={styles.groupTitle}>{grupoAtual.name}</h2>
        {produtosDiretos.length > 0 &&
          produtosDiretos.map((produto) => (
            <ItemCard
              key={produto.id}
              name={produto.name}
              description={produto.description}
              price={produto.price}
            />
          ))}

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
      </section>
    </div>
  );
}
