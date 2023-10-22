import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="to-[rgba(80, 51, 195, 0.20)] flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-tr from-[#5033C3]">
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
        <div className="rounded-bl-lg rounded-br-lg bg-accent py-2 text-center">
          <p className="text sm font-seminbold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
