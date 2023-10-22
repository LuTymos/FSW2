"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5">
      <div>
        <Image
          src="/banner-55off.png"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
          alt="Até 55% de desconto esse mês"
        />
      </div>
    </main>
  );
}
