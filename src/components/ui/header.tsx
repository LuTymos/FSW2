import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentCircleIcon,
  PercentIcon,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
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

            <div className="mt-2 flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-left"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-left"
              >
                <HomeIcon size={16} />
                Início
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-left"
              >
                <PercentIcon size={16} />
                Ofertas
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-left"
              >
                <ListOrderedIcon size={16} />
                Catálogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold ">
          <span className="text-primary">Tymos</span> Store
        </h1>

        <Button size="icon" variant="outline">
          <ShoppingCart />
        </Button>
      </Card>
    </header>
  );
};

export default Header;
