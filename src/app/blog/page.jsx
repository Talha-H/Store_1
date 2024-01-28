import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogNames = [
  { id: "1", name: "Shopper's Spotlight", img: "/1.jpg", time: "5 min" },
  { id: "2", name: "Fashion Finds Journal", img: "/7.jpg", time: "4 min" },
  { id: "3", name: "Style Secrets Chronicle", img: "/3.jpg", time: "3 min" },
  { id: "4", name: "Beauty Buzz Blog", img: "/4.jpg", time: "2 min" },
  { id: "5", name: "Home Decor Hub", img: "/5.jpg", time: "7 min" },
  { id: "6", name: "Wellness Wonders Gazette", img: "/6.jpg", time: "6 min" },
];

const Blog = () => {
  return (
    <div>
      <div className="h-[30vh] bg-base-300 ">
        <h1 className="flex justify-center  items-center uppercase text-5xl font-bold pt-14">
          Blogs
        </h1>
      </div>
      <section className="flex flex-col md:flex-row flex-wrap  px-6 py-8 mx-auto ">
        <Link href={`/blog`} className="flex flex-[1.5] mt-16">
          <Image
            src={"/wo-4.jpg"}
            alt="img"
            width={600}
            height={700}
            className="w-[90%] h-[400px] object-contain "
          />
        </Link>
        <div className="flex flex-1 flex-col gap-y-2">
          <span className="text-4xl font-semibold tracking-wider">
            Trending Posts
          </span>
          <div className=" flex flex-col gap-x-2 justify-center  ">
            {blogNames.map((item, id) => {
              return (
                <Link
                  href={`/blog/${id}`}
                  key={id}
                  className="flex gap-x-2    "
                >
                  <div className="w-[100px] h-[100px] flex justify-center items-center">
                    <Image
                      src={item.img}
                      alt="img"
                      width={200}
                      height={200}
                      className="w-[100%] h-[100px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xl font-medium capitalize">
                      {item.name}
                    </span>
                    <p className="text-lg font-normal lowercase">{item.time}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
