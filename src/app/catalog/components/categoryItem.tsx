import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="to-[rgba(80, 51, 195, 0.20)] rounded-tl-lg rounded-tr-lg flex h-[150px] w-full items-center justify-center bg-gradient-to-tr from-[#5033C3]">
        <Image
          src={category.imageUrl}
          sizes="100vw"
          height={0}
          width={0}
          alt={category.slug}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="bg-accent py-2 rounded-br-lg rounded-bl-lg text-center">
        <p className="text sm font-seminbold">{category.name}</p>
      </div>
    </div>
  );
};

interface CatalogItemProps {
  category: Category;
}

export default CategoryItem;
