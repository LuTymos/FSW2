import { useSession } from "next-auth/react";
import Image from "next/image";
import Categories from "./components/categories";
import { db } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {

  const ofertas = await db.product.findMany({
    where:{
      discountPercentage:{
        gt: 0
      }
    }
  })

  return (
    <main className="">
      <div>
        <Image
          src="/banner-55off.png"
          height={0}
          width={0}
          className="h-auto w-full px-5"
          sizes="100vw"
          alt="Até 55% de desconto esse mês"
        />
      </div>
      {/* categorias */}
      <section className="mt-8 px-5">
        <Categories />
      </section>

      <section className="mt-8">
        <ProductList title="ofertas" products={ofertas}/>
      </section>
    </main>
  );
}
