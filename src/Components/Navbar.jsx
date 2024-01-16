import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";

const data = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Fashion", link: "/fashion" },
  { name: "Collection", link: "/collection" },
  { name: "Accessories", link: "/accessories" },
];

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-300 justify-between items-center ">
        <div className="md:hidden btn btn-circle">
          <IoMdMenu size={24} />
        </div>
        <div className="flex items-center ">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="hidden md:flex gap-x-3 items-center ">
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <Link
                  href={item.link}
                  className="text-xl gap-6 font-medium hover:text-red-400 transition ease-in-out duration-150 delay-150"
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex-none gap-x-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FaCartShopping size={24} />
                <span className="badge badge-sm indicator-item top-0 left-2">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image src={"/fiv.png"} alt="" width={200} height={200} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
