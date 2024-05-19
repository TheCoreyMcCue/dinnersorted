"use client";

// import { headerLinks } from "@/constants";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  //   const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      <li className="">
        <Link href="/hello">hello</Link>
        <Link href="/hello">hello</Link>
        <Link href="/hello">hello</Link>
        <Link href="/hello">hello</Link>
      </li>
    </ul>
  );
};

export default NavItems;
