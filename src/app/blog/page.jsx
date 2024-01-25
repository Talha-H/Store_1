import React from "react";
import Image from "next/image";

const blogNames = [
  { name: "Shopper's Spotlight", img: "/1.jpg", time: "5 min" },
  { name: "Fashion Finds Journal", img: "/2.jpg", time: "4 min" },
  { name: "Style Secrets Chronicle", img: "/3.jpg", time: "3 min" },
  { name: "Beauty Buzz Blog", img: "/4.jpg", time: "2 min" },
  { name: "Home Decor Hub", img: "/5.jpg", time: "7 min" },
  { name: "Wellness Wonders Gazette", img: "/6.jpg", time: "6 min" },
  // { name: "Tech Talk Tribune" },
  // { name: "Culinary Corner Chronicles" },
  // { name: "Fitness Focus Forum" },
  // { name: "Travel Tales Tribune" },
  // { name: "DIY Delights Digest" },
  // { name: "Pet Paradise Post" },
  // { name: "Bookworm's Blogosphere" },
  // { name: "Green Living Guide" },
];

const Blog = () => {
  return (
    <div>
      <div className="h-[30vh] bg-base-300  ">
        <h1 className="flex justify-center  items-center uppercase text-5xl font-bold pt-14">
          Blogs
        </h1>
      </div>
      <section className="flex  px-6 py-8 mx-auto">
        <div className="flex flex-[1.5] justify-center items-center">
          <Image
            src={"/wo-4.jpg"}
            alt="img"
            width={600}
            height={700}
            className="w-[90%] h-[400px] object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col gap-y-2">
          <span>Trending Posts</span>
          <div className=" flex flex-col gap-x-2 gap-y-2">
            {blogNames.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex gap-x-2 items-start  "
                >
                  <div className="w-[50px] h-[50px]">
                    <Image
                      src={item.img}
                      alt="img"
                      width={100}
                      height={100}
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span>{item.name}</span>
                    <p>{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
