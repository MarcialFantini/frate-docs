import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"} className=" font-bold text-[1.6rem] ">
          Frate
        </Link>
      </NavbarBrand>
      <NavbarContent className=" hidden lg:flex  justify-around">
        <NavbarItem>
          <Link className=" " href={"/docs"}>
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="" href={"/docs"}>
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="" href={"/docs"}>
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" " href={"/docs"}>
            Docs
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className=" hidden lg:flex ">
        <Input placeholder="Type to search..." size="sm" type="search" />
      </NavbarContent>
    </Navbar>
  );
}
