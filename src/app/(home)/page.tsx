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
    <main className="">
      <PromoBanner src="/banner-55off.png"/>
      {/* categorias */}
      <section className="mt-8 px-5">
        <Categories />
      </section>
      {/* Lista de ofertas */}
      <section className="mt-8">
        <ProductList title="ofertas" products={ofertas} />
      </section>

      <PromoBanner src="/banner-mouses.png"/>

      {/* Lista de Teclados */}
      <section className="mt-8">
        <ProductList title="Teclados" products={teclados} />
      </section>

      <PromoBanner src="/banner-fones.png"/>

      {/* Lista de Mouses */}
      <section className="mt-8">
        <ProductList title="Mouses" products={mouses} />
      </section>
    </main>
  );
}
