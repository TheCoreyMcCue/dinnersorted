import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

type Props = {
  SignOutButton: React.ComponentType;
};

const MobileNav: React.FC<Props> = ({ SignOutButton }) => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/burger-menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className="flex justify-between w-[95%]">
            <Image src="/assets/icon.png" alt="logo" width={25} height={10} />
          </div>
          <Separator className="border border-gray-50" />
          <NavItems />
          <div className="flex flex-col justify-end">
            <Button asChild className="rounded-full">
              <SignOutButton />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
