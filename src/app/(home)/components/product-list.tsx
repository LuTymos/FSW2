import ProductItem from "@/components/ui/productItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
  return (
    <div>
      <h3 className="mb-2 px-5 text-lg font-bold uppercase">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <div key={product.id} className=" w-[190px] max-w-[190px]">
            <ProductItem product={computeProductTotalPrice(product)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
