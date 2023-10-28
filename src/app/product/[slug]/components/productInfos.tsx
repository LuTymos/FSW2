"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { Product } from "@prisma/client";
import {
  ArrowDown01Icon,
  ArrowDownIcon,
  ArrowLeft,
  ArrowLeftIcon,
  ArrowRightIcon,
  Dice1,
  TruckIcon,
} from "lucide-react";
import { useContext, useState } from "react";

interface productInfosProps {
  product: ProductWithTotalPrice;
}

const ProductInfos = ({ product }: productInfosProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductsToCart } = useContext(CartContext);

  const handleClickDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleClickIncreaseQuantity = () => {
    setQuantity((prev) => (prev >= 10 ? prev : prev + 1));
  };

  const handleAddProductToCart = () => {
    addProductsToCart({ ...product, quantity });
  };

  return (
    <div className="mt-8 flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <h3 className=" text-2xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h3>
        {product.discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2)}
        </p>
      )}
      <div className="mt-6 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleClickDecreaseQuantity()}
        >
          <ArrowLeftIcon />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleClickIncreaseQuantity()}
        >
          <ArrowRightIcon />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="opacity-55 text-justify text-sm">{product.description}</p>
      </div>

      <Button
        className="mt-8 font-bold uppercase"
        onClick={() => handleAddProductToCart()}
      >
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-semibold">TYPacket®</span>
            </p>
            <p className="text-xs text-[#8162ff]">
              Envio para <span className="font-semibold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="text-xs font-semibold">Frete Gratis</p>
      </div>
    </div>
  );
};

export default ProductInfos;
