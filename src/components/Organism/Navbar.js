import { navLinks } from "@/constant";
import Image from "next/image";
// import { close, menu } from "/icons";
import React, { useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <div className="flex flex-row justify-between items-center gap-2">
        <Image
          width={35}
          height={35}
          src={"/icons/hoobank.svg"}
          alt={"HooBank Logo"}
        />
        <h3 className="text-white text-xl font-semibold">Nine<span className="text-[#00F6FF]">Course</span></h3>
      </div>
      <ul className="sm:flex hidden justify-end items-center flex-1 gap-9">
        {navLinks.map((nav, index) => (

          <li className="text-white text-md font-semibold" key={nav.id}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))
        }
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          width={20}
          height={20}
          src={toggle ? "/icons/close.svg" : "/icons/menu.svg"}
          alt={"HooBank Logo"}
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-semibold text-[16px] cursor-pointer  ${active == nav.title ? "text-white" : "text-gray-300 hover:text-gray-400"}`} onClick={() => { setActive(nav.id) }}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  );
}
