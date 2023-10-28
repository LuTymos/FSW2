"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();

  const handleLogOut = async () => {
    await signOut();
  };

  const handleLoginClick = async () => {
    await signIn();
  };

  return (
    <header>
      <Card className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side={"left"}>
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            {status === "authenticated" && data?.user && (
              <div className="flex flex-col">
                <div className="flex items-center gap-2 py-4">
                  <Avatar>
                    <AvatarFallback>
                      {data?.user.name?.[0].toUpperCase()}
                    </AvatarFallback>

                    {data.user.image && <AvatarImage src={data.user.image} />}
                  </Avatar>
                  <p className="font-medium">{data.user.name}</p>
                </div>
                <Separator />
              </div>
            )}

            <div className="mt-2 flex flex-col gap-3">
              {status === "unauthenticated" && (
                <Button
                  onClick={handleLoginClick}
                  variant="outline"
                  className="w-full justify-start gap-2 text-left"
                >
                  <LogInIcon size={16} />
                  Fazer Login
                </Button>
              )}

              <SheetClose>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 text-left"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-left"
              >
                <PercentIcon size={16} />
                Ofertas
              </Button>

              <SheetClose>
                <Link href="/catalog">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 text-left"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>

              {status === "authenticated" && (
                <Button
                  onClick={handleLogOut}
                  variant="outline"
                  className="w-full justify-start gap-2 text-left"
                >
                  <LogOutIcon size={16} />
                  Sair
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <h1 className="text-lg font-semibold ">
            <span className="text-primary">Tymos</span> Store
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <ShoppingCart />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
      </Card>
    </header>
  );
};

export default Header;
