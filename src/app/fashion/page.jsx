import React from "react";
import Product from "@/Components/Product";

const Fashion = () => {
  return (
    <div>
      <div className="h-[30vh] bg-base-300  ">
        <h1 className="flex justify-center items-center capitalize text-5xl font-bold pt-14">
          Fashion Products For Women
        </h1>
      </div>
      <div className="flex mt-14 mb-14">
        <Product />
      </div>
    </div>
  );
};

export default Fashion;
