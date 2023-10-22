import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/productItem";
import { categoryIcon } from "@/constances/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { db } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";

const CategoryProducts = async ({ params }: any) => {
  const products = await db.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase w-fit"
        variant={"outline"}
      >
        {categoryIcon[params.slug as keyof typeof categoryIcon]}
        {params.slug}
      </Badge>

      <div className="my-5 grid grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
