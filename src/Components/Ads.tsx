import React from "react";
import Image from "next/image";
const Ads = () => {
  return (
    <div className="flex justify-center items-center gap-x-3   overflow-hidden my-6">
      <div className="w-72 h-80">
        <Image
          src={"/wo-1.jpg"}
          alt=""
          width={400}
          height={500}
          className="cursor-pointer object-cover "
        />
      </div>
      <div className="flex flex-col w-72 h-80 gap-y-2 ">
        <Image
          src={"/wo-2.jpg"}
          alt=""
          width={400}
          height={300}
          className="cursor-pointer object-cover "
        />
        <Image
          src={"/wo-4.jpg"}
          alt=""
          width={400}
          height={300}
          className="cursor-pointer object-cover "
        />
      </div>
      <div className="w-72 h-80">
        <Image
          src={"/wo-3.jpg"}
          alt=""
          width={400}
          height={500}
          className="cursor-pointer object-cover "
        />
      </div>
    </div>
  );
};

export default Ads;
