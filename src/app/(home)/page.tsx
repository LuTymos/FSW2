import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import { db } from "@/lib/prisma";
import ProductList from "./components/product-list";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const ofertas = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const teclados = await db.product.findMany({
    where:{
      category:{
        slug: "keyboards"
      }
    }
  })

  const mouses = await db.product.findMany({
    where:{
      category:{
        slug: "mouses"
      }
    }
  })

  return (
    <main className="flex flex-col gap-8 py-8">
      <PromoBanner alt="Até 55% de desconto esse mês" src="/banner-55off.png"/>
      
      {/* categorias */}
      <section className="px-5">
        <Categories />
      </section>
      {/* Lista de ofertas */}
      <section>
        <ProductList title="ofertas" products={ofertas} />
      </section>

      <PromoBanner alt="Até 55% de desconto em Mouses" src="/banner-mouses.png"/>

      {/* Lista de Teclados */}
      <section >
        <ProductList title="Teclados" products={teclados} />
      </section>

      <PromoBanner alt="Até 20% de desconto em fones" src="/banner-fones.png"/>

      {/* Lista de Mouses */}
      <section>
        <ProductList title="Mouses" products={mouses} />
      </section>
    </main>
  );
}
