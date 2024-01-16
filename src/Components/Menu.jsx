"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

const data = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Fashion", link: "/fashion" },
  { name: "Collection", link: "/collection" },
  { name: "Accessories", link: "/accessories" },
];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative">
      <IoMdMenu size={24} onClick={toggleMenu} />
      {menuOpen && (
        <div className="absolute top-8 left-0 w-max p-3 bg-base-300 menu flex items-start gap-y-3">
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <Link
                  href={item.link}
                  className="text-xl gap-y-4 font-medium hover:text-accent transition ease-in-out duration-150 delay-150"
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
