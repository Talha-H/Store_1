import React from "react";
import Image from "next/image";
import Link from "next/link";

const Product = ({ data }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap px-5 gap-x-5 gap-y-5">
        {data.map((item, id) => {
          return (
            <div
              key={id}
              className="flex justify-center items-center flex-col gap-y-2 "
            >
              <Link
                href={`/fashion/${id}`}
                className="w-[150px] h-[225px] md:w-[250px] md:h-[400px] overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt="img"
                  width={700}
                  height={1000}
                  className=" w-[150px] h-[225px] md:w-[250px] md:h-[400px]"
                />
              </Link>
              <h1 className="text-lg md:text-2xl font-semibold ">
                {item.name}
              </h1>
              <span className="text-sm md:text-xl font-medium">
                {item.Price}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
