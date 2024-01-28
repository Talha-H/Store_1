import React from "react";

const blog = [
  { id: "0", name: "Shopper's Spotlight", img: "/1.jpg", time: "5 min" },
  { id: "1", name: "Fashion Finds Journal", img: "/7.jpg", time: "4 min" },
  { id: "2", name: "Style Secrets Chronicle", img: "/3.jpg", time: "3 min" },
  { id: "3", name: "Beauty Buzz Blog", img: "/4.jpg", time: "2 min" },
  { id: "4", name: "Home Decor Hub", img: "/5.jpg", time: "7 min" },
  { id: "5", name: "Wellness Wonders Gazette", img: "/6.jpg", time: "6 min" },
];

const SingleFetch = async (id) => {
  const dat = blog.find((dat) => dat.id === id);
  console.log(dat);
  return dat;
};

const SingleBlog = async ({ params }) => {
  const data = await SingleFetch(params.id);
  return (
    <div className="h-[30vh] bg-base-300 pt-7  ">
      <h1 className="flex justify-center  items-center uppercase text-5xl font-bold pt-14">
        {data.name}
      </h1>
    </div>
  );
};

export default SingleBlog;
