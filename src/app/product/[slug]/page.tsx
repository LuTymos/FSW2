import { db } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import ProductInfos from "./components/productInfos";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/product-list";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const product = await db.product.findFirst({
    where: {
      slug: slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfos product={computeProductTotalPrice(product)} />
      <ProductList
        title="Produtos relacioandos"
        products={product.category.products}
      />
    </div>
  );
};

export default ProductPage;
