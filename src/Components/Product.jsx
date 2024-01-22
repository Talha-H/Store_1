import React from "react";
import Image from "next/image";

const data = [
  { img: "/Lace.jpg", name: "Elegance Lace Midi Dress", Price: "$140-$180" },
  { img: "/Coat.jpg", name: "Timeless Trench Coat ", Price: "$120-$150" },
  { img: "/Maxi.jpg", name: "Floral Fantasy Maxi Skirt", Price: "$85-$110" },
  { img: "/Polka.jpg", name: "Playful Polka Dot Jumpsuit", Price: "$90-$120" },
  { img: "/Blouse.jpg", name: "Svelte Satin Wrap Blouse", Price: "$50-$90" },
  { img: "/Knit.jpg", name: "Cozy Chic Knit Cardigan", Price: "$180-$200" },
  { img: "/Pajama.jpg", name: "Serenity Silk Pajama Set", Price: "$70-$100" },
];

const Product = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap px-5 gap-x-5 gap-y-5">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center flex-col gap-y-2 "
            >
              <div className="w-[150px] h-[225px] md:w-[250px] md:h-[400px] overflow-hidden">
                <Image
                  src={item.img}
                  alt="img"
                  width={700}
                  height={1000}
                  className=" w-[150px] h-[225px] md:w-[250px] md:h-[400px]"
                />
              </div>
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
