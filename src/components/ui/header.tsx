import { MenuIcon, ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent } from "./card";

const Header = () => {
  return (
    <header>
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

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
