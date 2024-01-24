import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
const data = [
  {
    id: "0",
    img: "/Lace.jpg",
    name: "Elegance Lace Midi Dress",
    Price: "$140-$180",
  },
  {
    id: "1",
    img: "/Coat.jpg",
    name: "Timeless Trench Coat ",
    Price: "$120-$150",
  },
  {
    id: "2",
    img: "/Maxi.jpg",
    name: "Floral Fantasy Maxi Skirt",
    Price: "$85-$110",
  },
  {
    id: "3",
    img: "/Polka.jpg",
    name: "Playful Polka Dot Jumpsuit",
    Price: "$90-$120",
  },
  {
    id: "4",
    img: "/Blouse.jpg",
    name: "Svelte Satin Wrap Blouse",
    Price: "$50-$90",
  },
  {
    id: "5",
    img: "/Knit.jpg",
    name: "Cozy Chic Knit Cardigan",
    Price: "$180-$200",
  },
  {
    id: "6",
    img: "/Pajama.jpg",
    name: "Serenity Silk Pajama Set",
    Price: "$70-$100",
  },
];

const singleFetch = async (id) => {
  const dat = data.find((dat) => dat.id === id);
  return dat;
};
const SingleProduct = async ({ params }) => {
  const data = await singleFetch(params.id);
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-14 mb-14 gap-y-3 px-9">
      <div className="flex flex-1 justify-center items-center">
        <Image
          src={data.img}
          alt="img"
          className="w-[100%] h-[300px] md:h-[500px] object-contain "
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-3">
        <h1 className="text-3xl font-semibold">{data.name}</h1>
        <p className="text-lg font-medium">Price: {data.Price}$</p>
        <div className="rating rating-md">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked

          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <Link href={"/cart"} className="btn bg-accent w-max">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
