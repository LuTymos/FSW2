import Image from "next/image";

interface PromoBannerProps {
    src: string,
    alt: string
}

const PromoBanner = ({src, alt}:PromoBannerProps) => {
    return ( 
        <div className="my-8">
        <Image
          src={src}
          height={0}
          width={0}
          className="h-auto w-full px-5"
          sizes="100vw"
          alt={alt}
        />
      </div>
     );
}
 
interface PromoBannerProps {
    src: string
}export 

default PromoBanner;