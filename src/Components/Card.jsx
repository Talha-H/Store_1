/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" border rounded-b-2xl w-max shadow-xl cursor-pointer hover:shadow-2xl transition ease-in-out duration-150 delay-150 ">
        <div className="flex  flex-col w-60 h-60 ">
          <Link href={"/"}>
            <Image
              src={"/glass.jpg"}
              className="w-60 h-60 object-cover "
              alt=""
              width={400}
              height={400}
            />
          </Link>
          <div className="flex justify-center items-center">
            <FaStar size={20} fill="#ff4545"/>
            <FaStar size={20} fill="#ff4545"/>
            <FaStar size={20} fill="#ff4545"/>
            <FaStar size={20} fill="#ff4545"/>
            <FaStar size={20} />
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center gap-y-2">
          <h1 className="text-2xl font-semibold">Men's Glasses</h1>
          <div className="gap-x-3 mb-3">
            <span className="text-xl ">$199</span>
            <span className="text-sm  line-through text-red-500">$299</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
