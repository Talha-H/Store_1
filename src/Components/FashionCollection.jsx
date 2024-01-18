import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    offer: "60$",
    rs: "80$",
    name: "T-Shirt",
    category: "Clothing",
    img: "/shirt.jpg",
  },
  {
    offer: "90$",
    rs: "110$",
    name: "Long Jacket",
    category: "Clothing",
    img: "/jacket.jpg",
  },
  {
    offer: "110$",
    rs: "130$",
    name: "Casual Shoe",
    category: "Shoes",
    img: "/shoes.jpg",
  },
  {
    offer: "99$",
    rs: "110$",
    name: "Braa",
    category: "Accessories",
    img: "/braa.jpg",
  },
];

const FashionCollection = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-y-4">
      <div className="flex flex-col justify-center items-center gap-y-1 ">
        <span className="text-red-400 text-lg font-normal uppercase">
          Fashion Collection
        </span>
        <h1 className="text-4xl font-semibold uppercase tracking-wider">
          Featured Categories
        </h1>
        <span className="text-base font-light">
          Newest Trends From Top Brands
        </span>
      </div>
      <div className="flex justify-center">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className=" flex flex-col justify-center items-center  "
            >
              <div className="flex mx-4">
                <Image
                  src={item.img}
                  alt=""
                  width={300}
                  height={400}
                  className="w-[100%] h-60 object-contain"
                />
              </div>
              <span className="text-base">{item.category}</span>
              <h1 className="text-2xl font-semibold cursor-pointer">
                {item.name}
              </h1>
              <div className="flex gap-x-2">
                <span className="text-red-500 line-through text-xs ">
                  {item.rs}
                </span>
                <span className="text-xl font-medium">{item.offer}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FashionCollection;
