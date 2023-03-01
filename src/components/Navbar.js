import { navLinks } from "@/constant";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <div className="flex flex-row justify-between items-center gap-2">
        <Image
          width={35}
          height={35}
          src={"/icons/hoobank.svg"}
          alt={"HooBank Logo"}
        />
        <h3 className="text-white text-xl font-semibold">Hoo<span className="text-[#00F6FF]">Bank</span></h3>
      </div>
      <ul className="sm:flex hidden justify-end items-center flex-1 gap-9">
        {navLinks.map((nav, index) => (

          <li className="text-white text-md font-semibold" key={nav.id}>{nav.title}</li>
        ))
        }
      </ul>
    </nav>
  );
}
