import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountDownTimer from "@/Components/CountDownTimer";

const SaleTime = () => {
  const targetDate = "2050-12-31T23:59:59";
  return (
    <div className="bg-[#f6f6f6] mt-6 mb-6  relative">
      <div className="flex flex-col gap-y-5 justify-center items-center h-[80vh]">
        <div className="flex flex-col gap-y-1 justify-center items-center">
          <p className="text-red-400 text-lg font-normal uppercase">
            Fashion Collection
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-wider">
            Deal of the day
          </h1>
          <span className="text-base font-light">Hot the Summer</span>
        </div>
        <p className="px-28 text-base font-light text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          perferendis ipsa quibusdam similique incidunt natus a, minus
          necessitatibus cum laborum Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut, ea!.
        </p>
        <CountDownTimer targetDate={targetDate} />
        <Link href={"/collection"}>
          <button className="btn hover:bg-accent bg-accent">Shop Now</button>
        </Link>
      </div>
      <div className="flex items-start absolute top-0 left-3">
        <Image src={"/h-1.jpg"} alt="img" width={300} height={800} />
      </div>
      <div className="flex items-end absolute top-0 right-3">
        <Image src={"/h-1.jpg"} alt="img" width={300} height={800} />
      </div>
    </div>
  );
};

export default SaleTime;
