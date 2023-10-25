"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleClickImg = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className=" mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex cursor-pointer items-center justify-center rounded-lg bg-accent
            ${
              imageUrl === currentImage
                ? "border-2 border-solid border-primary"
                : ""
            }
            `}
            onClick={() => {
              handleClickImg(imageUrl);
            }}
          >
            <Image
              src={imageUrl}
              alt={name}
              sizes="100vw"
              height={0}
              width={0}
              className="h-[100px] max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
