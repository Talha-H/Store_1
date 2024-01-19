"use client";
import React, { useState } from "react";
import Card from "../Components/Card";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const TrendingProducts = () => {
  const [color, setColor] = useState(null);
  const changeColor = (colorId) => {
    setColor(colorId);
  };

  return (
    <div className="flex flex-col my-12 ">
      <h1 className="text-center text-4xl font-bold fill-success-content">
        Trending Products
      </h1>
      <div className="flex justify-center items-center my-4   gap-x-4">
        <button
          onClick={() => changeColor(1)}
          className={`${
            color === 1
              ? "bg-accent btn hover:bg-accent"
              : "btn  hover:bg-accent"
          }`}
        >
          Featured Products
        </button>
        <button
          onClick={() => changeColor(2)}
          className={`${
            color === 2
              ? "bg-accent btn hover:bg-accent "
              : "btn  hover:bg-accent"
          }`}
        >
          Boost Products
        </button>
        <button
          className={`${
            color === 3
              ? "bg-accent btn hover:bg-accent"
              : "btn  hover:bg-accent"
          }`}
          onClick={() => changeColor(3)}
        >
          New Arrivals
        </button>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row gap-y-3 gap-x-3 justify-center items-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex gap-x-4 mt-6 justify-center items-center">
        <FaArrowCircleLeft size={30} className="btn btn-circle" />
        <FaArrowCircleRight size={30} className="btn btn-circle" />
      </div>
    </div>
  );
};

export default TrendingProducts;
