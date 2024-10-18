"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import React from "react";

export interface IPropsSidebarMenuItem {
  path: string;
  title: string;
}

export const NavBarItem = ({ path, title }: IPropsSidebarMenuItem) => {
  // const currentPath = usePathname();

  return (
    <Link href={path} className={`text-dark hover:text-darkRose`}>
      {title}
    </Link>
  );
};
