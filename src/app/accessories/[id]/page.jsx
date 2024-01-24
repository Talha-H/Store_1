import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const url = `https://fakestoreapi.com/products/`;

const singleFetch = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Single Fetch Failed");
  }
  const data = await res.json();
  return data;
};

const getSingleProduct = async ({ params }) => {
  const data = await singleFetch(params.id);

  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-14 mb-14 gap-y-3 px-9">
      <div className="flex flex-1 justify-center items-center">
        <Image
          src={data.image}
          alt="img"
          className="w-[90%] h-[300px] md:h-[500px] object-contain "
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-3">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <p className="text-xl font-medium">Category: {data.category}</p>
        <p className="text-lg font-medium">Price: {data.price}$</p>
        <div className="flex gap-x-1 items-center text-lg font-medium">
          Rating: {data.rating.rate}
          <CiStar size={24} />
        </div>
        <span className="text-lg font-medium ">
          Available: {data.rating.count} Pieces
        </span>
        <Link href={"/cart"} className="btn bg-accent w-max">
          Add to Cart
        </Link>
        <p className="text-base font-normal">{data.description}</p>
      </div>
    </div>
  );
};

export default getSingleProduct;
