import { db } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import ProductInfos from "./components/productInfos";
import { computeProductTotalPrice } from "@/helpers/product";

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
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfos product={computeProductTotalPrice(product)}/>
    </div>
  );
};

export default ProductPage;
