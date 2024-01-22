import React from "react";
import Product from "@/Components/Product";

const data = [
  { img: "/Lace.jpg", name: "Elegance Lace Midi Dress", Price: "$140-$180" },
  { img: "/Coat.jpg", name: "Timeless Trench Coat ", Price: "$120-$150" },
  { img: "/Maxi.jpg", name: "Floral Fantasy Maxi Skirt", Price: "$85-$110" },
  { img: "/Polka.jpg", name: "Playful Polka Dot Jumpsuit", Price: "$90-$120" },
  { img: "/Blouse.jpg", name: "Svelte Satin Wrap Blouse", Price: "$50-$90" },
  { img: "/Knit.jpg", name: "Cozy Chic Knit Cardigan", Price: "$180-$200" },
  { img: "/Pajama.jpg", name: "Serenity Silk Pajama Set", Price: "$70-$100" },
];

const Fashion = ({ id}) => {
  return (
    <div>
      <div className="h-[30vh] bg-base-300  ">
        <h1 className="flex justify-center items-center capitalize text-5xl font-bold pt-14">
          Fashion Products For Women
        </h1>
      </div>
      <div className="flex mt-14 mb-14">
        <Product id={id} data={data} />
      </div>
    </div>
  );
};

export default Fashion;
