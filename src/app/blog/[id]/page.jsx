import React from "react";
import Image from "next/image";

const blog = [
  { id: "0", name: "Shopper's Spotlight", img: "/1.jpg", time: "5 min ago" },
  { id: "1", name: "Fashion Finds Journal", img: "/7.jpg", time: "4 min ago" },
  {
    id: "2",
    name: "Style Secrets Chronicle",
    img: "/3.jpg",
    time: "3 min ago",
  },
  { id: "3", name: "Beauty Buzz Blog", img: "/4.jpg", time: "2 min ago" },
  { id: "4", name: "Home Decor Hub", img: "/5.jpg", time: "7 min ago" },
  {
    id: "5",
    name: "Wellness Wonders Gazette",
    img: "/6.jpg",
    time: "6 min ago",
  },
];

const SingleFetch = async (id) => {
  const dat = blog.find((dat) => dat.id === id);
  return dat;
};

const SingleBlog = async ({ params }) => {
  const data = await SingleFetch(params.id);
  return (
    <>
      <div className="h-[30vh] bg-base-300   ">
        <h1 className="flex justify-center items-center uppercase text-4xl font-bold pt-14">
          {data.name}
        </h1>
      </div>
      <div className="flex flex-col gap-x-3 md:flex-row flex-wrap justify-center items-center px-14 py-8 ">
        <div className="flex flex-col flex-[1.5]  gap-y-2">
          <p className="text-lg font-light tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aperiam deleniti quisquam sint cumque, eum nam nobis provident
            numquam possimus veniam vel consequuntur eveniet odit nisi
            consequatur quam aliquam, tempore assumenda quia? Dignissimos quam
            corporis perferendis dolor. Praesentium error, quaerat quos quas
            culpa minus dolor aliquid quod, ipsa quidem sint. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Assumenda modi quas, minima
            nobis illum incidunt saepe laboriosam, dolor sunt facere nemo!
            Consequatur inventore ea dicta assumenda placeat culpa doloribus
            nam?
          </p>
          <span className="text-base font-light text-accent">{data.time}</span>
        </div>
        <div className="flex flex-1 w-[100%] h-[300px] justify-center items-center">
          <Image
            src={data.img}
            alt="img"
            width={500}
            height={500}
            className="w-[90%] h-[300px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
