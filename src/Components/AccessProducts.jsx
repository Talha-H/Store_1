import React from "react";
import Image from "next/image";
import Link from "next/link";

const BabyProduct = ({ data }) => {
  return (
    <div className="flex justify-center items-center flex-wrap  px-5 gap-x-7 gap-y-7">
      {data.map((item, id) => {
        return (
          <Link
            href={`/accessories/${id}`}
            key={id}
            className="flex flex-col justify-center items-center gap-y-3 shadow-lg hover:shadow-2xl transition ease-in-out delay-150 duration-150"
          >
            <div className=" w-[180px] h-[210px]  overflow-hidden">
              <Image
                src={item.image}
                alt="img"
                width={300}
                height={300}
                className="w-[180px] h-[210px] object-contain"
              />
            </div>
            <h1 className="text-xl font-semibold capitalize">{item.title}</h1>
            <span className="text-base font-medium mb-3">{item.price}$</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BabyProduct;
