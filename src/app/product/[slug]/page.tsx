import { db } from "@/lib/prisma";

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

  return <div>{product?.name}</div>;
};

export default ProductPage;
