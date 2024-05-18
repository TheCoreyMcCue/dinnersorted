import Link from "@/node_modules/next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

import appIcon from "../../app/icon.png";
import Image from "@/node_modules/next/image";
// import NavItems from "./NavItems";

const Header = () => {
  return (
    <section className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <Image src={appIcon} width={35} height={10} alt="" />
        </Link>
        <div className="flex w-32 justify-end gap-3 ">
          {/* <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn> */}

          <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              {/* <MobileNav /> */}
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
